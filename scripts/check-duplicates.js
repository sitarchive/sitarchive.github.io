#!/usr/bin/env node
/**
 * Flags duplicate paper entries in js/data.js before they get committed.
 * Two kinds of duplicates are checked:
 *   1. Same subject code listed twice under the same
 *      institute/branch/batch/semester/type (the "16 vs 19" class of mistake).
 *   2. The same Google Drive file ID reused across two different entries
 *      anywhere in the data (usually a copy-paste slip while adding papers).
 *
 * Usage: node scripts/check-duplicates.js
 * Exit code 0 = no duplicates found, 1 = one or more found.
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

const DATA_FILE = path.join(__dirname, '..', 'js', 'data.js');

function loadPapers() {
    const code = fs.readFileSync(DATA_FILE, 'utf8');
    const sandboxCode = code.slice(0, code.indexOf('function updateStatsDisplay')) +
        'module.exports = SIT_ARCHIVE_DATA;';
    const tmpFile = path.join(os.tmpdir(), `sit-archive-data-${Date.now()}.js`);
    fs.writeFileSync(tmpFile, sandboxCode);
    const data = require(tmpFile);
    fs.unlinkSync(tmpFile);

    const papers = [];
    function traverse(node, pathNames) {
        if (!node || typeof node !== 'object') return;
        if (Array.isArray(node.subjects)) {
            node.subjects.forEach((subject) => {
                papers.push({ ...subject, path: pathNames.join(' > ') });
            });
            return;
        }
        for (const key of Object.keys(node)) {
            const child = node[key];
            if (typeof child !== 'object' || child === null) continue;
            if (['branches', 'years', 'sems', 'types'].includes(key)) {
                traverse(child, pathNames);
            } else {
                traverse(child, [...pathNames, child.name || key]);
            }
        }
    }
    traverse(data.institutes, []);
    return papers;
}

function extractFileId(url) {
    const match = url.match(/\/d\/([^/]+)/);
    return match ? match[1] : url;
}

function main() {
    const papers = loadPapers();
    let problems = 0;

    // 1. Duplicate code within the same category
    const byCategory = new Map();
    for (const p of papers) {
        const key = `${p.path}::${p.code}`;
        if (!byCategory.has(key)) byCategory.set(key, []);
        byCategory.get(key).push(p);
    }
    for (const [key, group] of byCategory) {
        if (group.length > 1) {
            problems++;
            console.log(`DUPLICATE CODE: "${group[0].code}" appears ${group.length}x under ${group[0].path}`);
            group.forEach((p) => console.log(`  - ${p.name} (${p.file})`));
        }
    }

    // 2. Duplicate Drive file ID anywhere in the data
    const byFileId = new Map();
    for (const p of papers) {
        const id = extractFileId(p.file);
        if (!byFileId.has(id)) byFileId.set(id, []);
        byFileId.get(id).push(p);
    }
    for (const [id, group] of byFileId) {
        if (group.length > 1) {
            problems++;
            console.log(`DUPLICATE FILE LINK: same Drive file used ${group.length}x`);
            group.forEach((p) => console.log(`  - ${p.name} (${p.code}) under ${p.path}`));
        }
    }

    if (problems === 0) {
        console.log(`No duplicates found across ${papers.length} papers.`);
        process.exit(0);
    }

    console.log(`\n${problems} duplicate issue(s) found.`);
    process.exit(1);
}

main();
