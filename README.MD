# SIT Archive

SIT Archive is a centralized, student-maintained repository of examination resources for Symbiosis Institute of Technology (SIT) Hyderabad. The platform aggregates End-Semester, Mid-Semester (Unit Test), and Backlog question papers across various disciplines and academic years into a highly accessible, searchable digital library.

Live site: https://sitarchive.github.io

## Core Capabilities

- **Hierarchical Browsing:** Navigate seamlessly through a structured hierarchy of Institute > Branch > Academic Year > Semester > Exam Type.
- **Global Search:** Find specific papers instantly via course codes or subject names using a client-side fuzzy search engine.
- **Offline Accessibility (PWA):** The platform operates as a Progressive Web App (PWA). It can be installed natively on mobile and desktop devices, caching resources for offline access and rapid loading.
- **Frictionless Sharing:** Direct integration with WhatsApp and Telegram allows for one-tap sharing of specific paper links to study groups.
- **Batch Downloads:** Download individual papers or fetch entire semesters simultaneously via integrated Google Drive folder links.
- **Community Contributions:** A streamlined submission pipeline allows students to submit missing papers, with a dedicated dashboard recognizing top contributors.
- **Real-Time Analytics:** Tracks paper downloads, helpfulness votes, and site visitor metrics using a lightweight Supabase backend.

## Architecture & Technical Implementation

The platform is designed for high availability, zero hosting costs, and minimal maintenance overhead. It utilizes a static architecture served via GitHub Pages, paired with serverless edge functions for analytics.

```text
sitarchive.github.io/
├── index.html            Homepage & Search Entrypoint
├── browse.html           Hierarchical Paper Navigation
├── missing.html          Dynamic list of required resources
├── submit.html           Resource submission interface
├── changelog.html        Platform release notes
├── contributors.html     Community recognition dashboard
├── manifest.json         PWA Configuration
├── sw.js                 Service Worker for caching & offline support
├── js/
│   ├── data.js               Primary dataset (JSON-like structure of all papers)
│   ├── paper-stats.js        Supabase integration for tracking downloads & votes
│   ├── theme.js              Light/Dark mode & visitor analytics
│   └── global-search.js      Fuzzy search implementation
├── css/
│   ├── tailwind.css          Utility-first styling
│   └── animations.css        UI transition definitions
└── scripts/
    ├── check-duplicates.js   Node script to ensure data integrity
    └── check-links.js        Node script to validate HTTP status of Drive links
```

### Data Schema

All metadata is stored statically in `js/data.js`, allowing for instantaneous querying without database latency. 

The schema follows a strict nested structure:
`Institutes -> Branches -> Batches (Years) -> Semesters -> Exam Types -> Subjects`

### Storage Integration

To avoid bandwidth costs and leverage robust infrastructure, raw PDF files are stored in a meticulously organized Google Drive environment. The frontend interfaces directly with these public Drive URLs, allowing the site to utilize Google's native document preview and ZIP-compression capabilities.

### Automated Infrastructure (CI/CD)

A robust GitHub Actions workflow pipeline is implemented to maintain data integrity over time. Upon any modification to the main branch, the CI pipeline triggers automated testing scripts:

1. **Duplicate Detection:** Scans the entire JSON object to prevent redundant entries.
2. **Link Validation:** Automatically verifies the HTTP resolution of every external Google Drive link to ensure 100% file availability.

The link validation script also executes on a weekly CRON schedule, automatically generating GitHub Issues if any external file is restricted or deleted.

## Development & Contribution

Students and developers are encouraged to contribute to the repository. The project enforces strict adherence to its data schema and requires all new papers to be high-definition, officially scanned documents. 

## Tech Stack Summary

- **Frontend:** HTML5, CSS3 (Tailwind CSS patterns), Vanilla JavaScript (ES6+)
- **Storage:** Google Drive API
- **Analytics:** Supabase (PostgreSQL / Edge API)
- **Deployment & Hosting:** GitHub Pages
- **Automation:** GitHub Actions, Node.js Scripts

## License

This project is maintained exclusively by and for the students of SIT Hyderabad for educational, non-commercial utilization. All documents remain the property of their respective academic authorities.
