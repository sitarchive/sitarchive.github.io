# SIT Archive

SIT Archive is a free, student-run question paper repository for SIT Hyderabad. It collects End-Sem, Mid-Sem (Unit Test), and Backlog papers across institutes, branches, and batches, and makes them searchable and downloadable from one place.

Live site: https://sitarchive.github.io

## What it does

- Browse question papers by institute, branch, batch year, and semester.
- Download a single paper or an entire semester's papers at once (via linked Google Drive folders).
- Track a "Missing Papers" list showing which categories still need papers, with a form to request or submit them.
- View a changelog of what has been added or fixed on the site.
- Accept paper submissions from students through a form, with contributors credited on a dedicated page.

## How it works

The site is a static frontend hosted on GitHub Pages. There is no backend or database — all paper metadata lives in plain JavaScript data files, and the actual paper files are hosted on Google Drive.

```
sitarchive.github.io/
├── index.html            Homepage
├── browse.html           Browse/search papers by institute -> branch -> batch -> semester
├── missing.html          List of papers still needed
├── submit.html           Submission form for new papers
├── changelog.html        What's new on the site
├── contributors.html     Students who submitted papers
├── about.html, faq.html, docs.html, collaborate.html, feedback.html, privacy.html, terms.html
├── js/
│   ├── data.js               Paper catalogue (all institutes/branches/batches/semesters/subjects)
│   ├── changelog-data.js     Changelog entries
│   ├── missing-data.js       Hand-curated list of missing paper categories
│   ├── contributors-data.js  Contributor roll numbers, branch, batch
│   ├── theme.js               Light/dark theme handling
│   └── animations.js          Scroll and UI animations
├── css/
│   └── animations.css
├── scripts/
│   ├── check-duplicates.js   Detects duplicate paper entries in data.js
│   └── check-links.js        Verifies every paper's Drive link resolves
└── .github/workflows/
    └── check-links.yml       CI: runs the two scripts above
```

### Data model

Papers are organized in `js/data.js` as a nested structure:

```
Institute -> Branch -> Batch (year) -> Semester -> Exam Type -> Subjects
```

Each subject entry has a name, code, exam type, a link to the file on Google Drive, and (for recently added papers) a date so the homepage can show a "Recently Added" widget.

### Google Drive integration

Papers themselves are stored in a Google Drive folder tree that mirrors the site's structure (institute > branch > batch > semester > exam type). Each semester folder is linked from `data.js`, and the "Download Entire Semester" button on the browse page links straight to that Drive folder so visitors can use Drive's own zip download — no custom file hosting or zip generation on the site itself.

### Continuous integration

A GitHub Actions workflow (`.github/workflows/check-links.yml`) runs on every push or pull request that touches `js/data.js` or the scripts folder:

- **check-duplicates** — flags duplicate paper entries before they're merged.
- **check-links** — verifies every paper's Drive link is still reachable. This also runs weekly on a schedule and automatically opens a GitHub issue if any links are broken.

## Contributing papers

Students can submit papers directly through the [submission form](https://sitarchive.github.io/submit.html) on the site. Submitted papers are reviewed and added to `js/data.js`, and the contributor is credited on the [contributors page](https://sitarchive.github.io/contributors.html).

## Tech stack

- Plain HTML, CSS, and JavaScript — no framework, no build step.
- Google Drive for file storage.
- GitHub Pages for hosting.
- GitHub Actions for automated link and duplicate checks.

## License

This project is maintained by and for SIT Hyderabad students, for educational, non-commercial use.
