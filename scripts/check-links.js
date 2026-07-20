#!/usr/bin/env node
/**
 * Checks every paper's Google Drive `file` link in js/data.js.
 * A link is considered broken if the request fails, doesn't return 200,
 * or the page title indicates Drive couldn't find/serve the file.
 *
 * Usage: node scripts/check-links.js
 * Exit code 0 = all links OK, 1 = one or more broken links found.
 */

const fs = require('fs');
const https = require('https');
const path = require('path');

const DATA_FILE = path.join(__dirname, '..', 'js', 'data.js');
const BROKEN_TITLE_PATTERNS = [
    /Sorry, we can.?t find that/i,
    /Google Drive - File Not Found/i,
    /does not exist/i,
    /Access denied/i,
];

function loadPapers() {
    const code = fs.readFileSync(DATA_FILE, 'utf8');
    const sandboxCode = code.slice(0, code.indexOf('function updateStatsDisplay')) +
        'module.exports = SIT_ARCHIVE_DATA;';
    const tmpFile = path.join(require('os').tmpdir(), `sit-archive-data-${Date.now()}.js`);
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

function fetchHtml(url) {
    return new Promise((resolve) => {
        const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 10000 }, (res) => {
            let body = '';
            res.on('data', (chunk) => { if (body.length < 20000) body += chunk; });
            res.on('end', () => resolve({ status: res.statusCode, body }));
        });
        req.on('error', () => resolve({ status: 0, body: '' }));
        req.on('timeout', () => { req.destroy(); resolve({ status: 0, body: '' }); });
    });
}

async function main() {
    const papers = loadPapers();
    const broken = [];

    for (const paper of papers) {
        const { status, body } = await fetchHtml(paper.file);
        const titleMatch = body.match(/<title>([^<]*)<\/title>/i);
        const title = titleMatch ? titleMatch[1] : '';
        const looksBroken = status !== 200 || BROKEN_TITLE_PATTERNS.some((re) => re.test(title)) || !title;

        if (looksBroken) {
            broken.push({ ...paper, status, title });
        }
        // Small delay to avoid hammering Drive
        await new Promise((r) => setTimeout(r, 150));
    }

    if (broken.length === 0) {
        console.log(`All ${papers.length} paper links are OK.`);
        process.exit(0);
    }

    console.log(`${broken.length} of ${papers.length} paper link(s) look broken:\n`);
    broken.forEach((p) => {
        console.log(`- [${p.path}] ${p.name} (${p.code})`);
        console.log(`  ${p.file}`);
        console.log(`  status=${p.status} title="${p.title}"\n`);
    });
    process.exit(1);
}

main();
