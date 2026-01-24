/* =====================================================
   SIT ARCHIVE - DATA STORE
   Centralized data for the entire website
   ===================================================== */

const SIT_ARCHIVE_DATA = {
    institutes: {
        "SITHYD": {
            name: "SIT Hyderabad",
            icon: "domain",
            branches: {
                "CSE": {
                    name: "CSE",
                    icon: "computer",
                    years: {
                        "2024-28": {
                            name: "2024-28",
                            sems: {
                                "Sem 1": {
                                    name: "Semester 1",
                                    icon: "looks_one",
                                    subjects: []
                                }
                            }
                        },
                        "2025-29": {
                            name: "2025-29",
                            sems: {
                                "Sem 1": {
                                    name: "Semester 1",
                                    icon: "looks_one",
                                    subjects: [
                                        { name: "Calculus", code: "0707210101", file: "https://drive.google.com/file/d/1KTCr6FiEb9dRS1TXTABQ2ZPsaKW7ruWG/view?usp=drivesdk", type: "End-Sem" },
                                        { name: "Fundamentals of Quantum Physics", code: "0707210102", file: "https://drive.google.com/file/d/1wDyinerXX9Gde1wCEDMzbmzECV9mGI5z/view?usp=drivesdk", type: "End-Sem" },
                                        { name: "Digital Electronics and Logic Design", code: "0707210103", file: "https://drive.google.com/file/d/1zvP_9geylagngKPFlXuq-mVoBTzrxwb3/view?usp=drivesdk", type: "End-Sem" },
                                        { name: "Programming Paradigm and Problem Solving", code: "0707210104", file: "https://drive.google.com/file/d/1zT8592X_5asszEfS9DSidk0hqKMnEqNu/view?usp=drivesdk", type: "End-Sem" }
                                    ]
                                }
                            }
                        }
                    }
                },
                "CSE-AIML": {
                    name: "CSE AIML",
                    icon: "psychology",
                    years: {
                        "2025-29": {
                            name: "2025-29",
                            sems: {
                                "Sem 1": {
                                    name: "Semester 1",
                                    icon: "looks_one",
                                    subjects: [
                                        { name: "Linear Algebra", code: "0707250101", file: "https://drive.google.com/file/d/14Xlj25fZOpzIssRnW4Q1JdP_a5UQPE2n/view?usp=drivesdk", type: "End-Sem" },
                                        { name: "Chemistry", code: "0707250102", file: "https://drive.google.com/file/d/1MQa-oLlpZQ0Arq0SwLvAYRkb-msvrGFD/view?usp=drivesdk", type: "End-Sem" },
                                        { name: "Digital Electronics and Logic Design", code: "0707250104", file: "https://drive.google.com/file/d/1btqFGBYKVWPxwMVJbO3GHQXC8GD3QZFj/view?usp=drivesdk", type: "End-Sem" },
                                        { name: "Programming in C", code: "0707250105", file: "https://drive.google.com/file/d/1S_E3Ka6OThSFdz7n7_9S75LhyTeaJ7Xc/view?usp=drivesdk", type: "End-Sem" }
                                    ]
                                }
                            }
                        }
                    }
                },
                "CST": {
                    name: "CST",
                    icon: "memory",
                    years: {
                        "2024-28": {
                            name: "2024-28",
                            sems: {
                                "Sem 1": {
                                    name: "Semester 1",
                                    icon: "looks_one",
                                    subjects: []
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

// ===== DYNAMIC STATS CALCULATOR =====
function calculateStats() {
    let totalPapers = 0;
    let totalBranches = 0;
    let totalYears = new Set();
    let totalInstitutes = 0;

    const institutes = SIT_ARCHIVE_DATA.institutes;
    totalInstitutes = Object.keys(institutes).length;

    for (const instKey in institutes) {
        const institute = institutes[instKey];
        const branches = institute.branches;
        totalBranches += Object.keys(branches).length;

        for (const branchKey in branches) {
            const branch = branches[branchKey];
            const years = branch.years;

            for (const yearKey in years) {
                totalYears.add(yearKey);
                const year = years[yearKey];
                const sems = year.sems;

                for (const semKey in sems) {
                    const sem = sems[semKey];
                    totalPapers += (sem.subjects || []).length;
                }
            }
        }
    }

    return {
        papers: totalPapers,
        branches: totalBranches,
        years: totalYears.size,
        institutes: totalInstitutes
    };
}

// ===== UPDATE STATS ON PAGE =====
function updateStatsDisplay() {
    const stats = calculateStats();

    // Update papers count
    const papersEl = document.getElementById('stat-papers');
    if (papersEl) {
        papersEl.textContent = stats.papers;
        papersEl.setAttribute('data-target', stats.papers);
    }

    // Update branches count
    const branchesEl = document.getElementById('stat-branches');
    if (branchesEl) {
        branchesEl.textContent = stats.branches;
        branchesEl.setAttribute('data-target', stats.branches);
    }

    // Update years count
    const yearsEl = document.getElementById('stat-years');
    if (yearsEl) {
        yearsEl.textContent = stats.years;
        yearsEl.setAttribute('data-target', stats.years);
    }

    // Update institutes count
    const institutesEl = document.getElementById('stat-institutes');
    if (institutesEl) {
        institutesEl.textContent = stats.institutes;
        institutesEl.setAttribute('data-target', stats.institutes);
    }
}

// Run on page load
document.addEventListener('DOMContentLoaded', updateStatsDisplay);

// Export for use in browse.html
window.SIT_ARCHIVE_DATA = SIT_ARCHIVE_DATA;
window.calculateStats = calculateStats;
window.updateStatsDisplay = updateStatsDisplay;
