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
                                    types: {
                                        "End-Sem": { name: "End-Sem", icon: "description", subjects: [] },
                                        "Mid-Sem (Unit Tests)": { name: "Mid-Sem (Unit Tests)", icon: "quiz", subjects: [] }
                                    }
                                },
                                "Sem 2": {
                                    name: "Semester 2",
                                    icon: "looks_two",
                                    types: {
                                        "End-Sem": { name: "End-Sem", icon: "description", subjects: [] },
                                        "Mid-Sem (Unit Tests)": { name: "Mid-Sem (Unit Tests)", icon: "quiz", subjects: [] }
                                    }
                                },
                                "Sem 3": {
                                    name: "Semester 3",
                                    icon: "looks_3",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: [
                                                { name: "Sensors and Microcontrollers", code: "0707240307", file: "https://drive.google.com/file/d/1g8Zt3YJUCRBy8pw8WiTCJi-Y_SxqpMQG/view?usp=share_link", type: "End-Sem" },
                                                { name: "Programming Paradigms", code: "070740305", file: "https://drive.google.com/file/d/1alFtcLUqvOd0XFizlDUfrtk6ILwbcSGN/view?usp=share_link", type: "End-Sem" },
                                                { name: "Discrete Mathematics and Graph Theory", code: "0707240301", file: "https://drive.google.com/file/d/14IpKGhRKPIR2o54soY7Cu6Njudzrw5eI/view?usp=share_link", type: "End-Sem" },
                                                { name: "Data Structures", code: "0707240303", file: "https://drive.google.com/file/d/1pYZcC1XWo7DL5PrWoox3VcKlMNF7nQjf/view?usp=share_link", type: "End-Sem" },
                                                { name: "Computer Organization", code: "0707240302", file: "https://drive.google.com/file/d/1fFKap6AcQGfyDWtAC2n1wYkzP_8NqsJ_/view?usp=share_link", type: "End-Sem" }
                                            ]
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: [
                                                { name: "Sensors and Microcontrollers", code: "TE7745", file: "https://drive.google.com/file/d/1wxKEY6eLarg54A5SYnjVP5t_1PDaU5w5/view?usp=share_link", type: "Mid-Sem (Unit Tests)" },
                                                { name: "Programming Paradigms", code: "T7512", file: "https://drive.google.com/file/d/1LUE4gNr2W_n96N1J-ClMXaYnCtRevqp-/view?usp=share_link", type: "Mid-Sem (Unit Tests)" },
                                                { name: "Data Structures", code: "TE7960", file: "https://drive.google.com/file/d/1MmC4Hpal7u4riT70bGDNxmFp7ZwRtR8o/view?usp=share_link", type: "Mid-Sem (Unit Tests)" },
                                                { name: "Java", code: "T7499", file: "https://drive.google.com/file/d/10yBqDmCJTzzOhU1Cg_weOJELGRibiOqg/view?usp=share_link", type: "Mid-Sem (Unit Tests)" },
                                                { name: "Computer Organization", code: "0707210302", file: "https://drive.google.com/file/d/1I_WQQeBi4LcVbsDs7Fd4vcOHmTSYOUMT/view?usp=share_link", type: "Mid-Sem (Unit Tests)" }
                                            ]
                                        }
                                    }
                                }
                            }
                        },
                        "2025-29": {
                            name: "2025-29",
                            sems: {
                                "Sem 1": {
                                    name: "Semester 1",
                                    icon: "looks_one",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: [
                                                { name: "Calculus", code: "0707210101", file: "https://drive.google.com/file/d/1KTCr6FiEb9dRS1TXTABQ2ZPsaKW7ruWG/view?usp=drivesdk", type: "End-Sem" },
                                                { name: "Fundamentals of Quantum Physics", code: "0707210102", file: "https://drive.google.com/file/d/1wDyinerXX9Gde1wCEDMzbmzECV9mGI5z/view?usp=drivesdk", type: "End-Sem" },
                                                { name: "Digital Electronics and Logic Design", code: "0707210103", file: "https://drive.google.com/file/d/1zvP_9geylagngKPFlXuq-mVoBTzrxwb3/view?usp=drivesdk", type: "End-Sem" },
                                                { name: "Programming Paradigm and Problem Solving", code: "0707210104", file: "https://drive.google.com/file/d/1zT8592X_5asszEfS9DSidk0hqKMnEqNu/view?usp=drivesdk", type: "End-Sem" }
                                            ]
                                        },
                                        "Mid-Sem (Unit Tests)": { name: "Mid-Sem (Unit Tests)", icon: "quiz", subjects: [] }
                                    }
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
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: [
                                                { name: "Linear Algebra", code: "0707250101", file: "https://drive.google.com/file/d/14Xlj25fZOpzIssRnW4Q1JdP_a5UQPE2n/view?usp=drivesdk", type: "End-Sem" },
                                                { name: "Chemistry", code: "0707250102", file: "https://drive.google.com/file/d/1MQa-oLlpZQ0Arq0SwLvAYRkb-msvrGFD/view?usp=drivesdk", type: "End-Sem" },
                                                { name: "Digital Electronics and Logic Design", code: "0707250104", file: "https://drive.google.com/file/d/1btqFGBYKVWPxwMVJbO3GHQXC8GD3QZFj/view?usp=drivesdk", type: "End-Sem" },
                                                { name: "Programming in C", code: "0707250105", file: "https://drive.google.com/file/d/1S_E3Ka6OThSFdz7n7_9S75LhyTeaJ7Xc/view?usp=drivesdk", type: "End-Sem" }
                                            ]
                                        },
                                        "Mid-Sem (Unit Tests)": { name: "Mid-Sem (Unit Tests)", icon: "quiz", subjects: [] }
                                    }
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
                                    types: {
                                        "End-Sem": { name: "End-Sem", icon: "description", subjects: [] },
                                        "Mid-Sem (Unit Tests)": { name: "Mid-Sem (Unit Tests)", icon: "quiz", subjects: [] }
                                    }
                                },
                                "Sem 2": {
                                    name: "Semester 2",
                                    icon: "looks_two",
                                    types: {
                                        "End-Sem": { name: "End-Sem", icon: "description", subjects: [] },
                                        "Mid-Sem (Unit Tests)": { name: "Mid-Sem (Unit Tests)", icon: "quiz", subjects: [] }
                                    }
                                },
                                "Sem 3": {
                                    name: "Semester 3",
                                    icon: "looks_3",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: [
                                                { name: "Sensors and Microcontrollers", code: "0707240307", file: "https://drive.google.com/file/d/1taK5JO0jEkgLWpMseLmfibGeTjfSwHjm/view?usp=share_link", type: "End-Sem" },
                                                { name: "Programming Paradigms", code: "070740305", file: "https://drive.google.com/file/d/1ZOvUDMMHjGGc3LQbrkxIbnkYlWtEcZRQ/view?usp=share_link", type: "End-Sem" },
                                                { name: "Discrete Mathematics and Graph Theory", code: "0707240301", file: "https://drive.google.com/file/d/1J3xEm67-3D-BtbxlAlyf7blVhh1xIWM7/view?usp=share_link", type: "End-Sem" },
                                                { name: "Data Structures", code: "0707240303", file: "https://drive.google.com/file/d/1viMaflzKwZLXbSwyEHXJPHqhaRoQ0h9f/view?usp=share_link", type: "End-Sem" },
                                                { name: "Computer Organization", code: "0707240302", file: "https://drive.google.com/file/d/1VZWOxe5JyjQXImHHxTWnlDTU9sdbpcvV/view?usp=share_link", type: "End-Sem" }
                                            ]
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: [
                                                { name: "Sensors and Microcontrollers", code: "TE7745", file: "https://drive.google.com/file/d/1VktdgxsBNLNvTFuThGHQw63ZO_LeXiv0/view?usp=share_link", type: "Mid-Sem (Unit Tests)" },
                                                { name: "Programming Paradigms", code: "T7512", file: "https://drive.google.com/file/d/1a1wx06JIV2jcVswXP1hPfqPqN8fVBTfA/view?usp=share_link", type: "Mid-Sem (Unit Tests)" },
                                                { name: "Data Structures", code: "TE7960", file: "https://drive.google.com/file/d/1ont46SH2yAuSlXlKhGqQmpIGKr0OsKho/view?usp=share_link", type: "Mid-Sem (Unit Tests)" },
                                                { name: "Java", code: "T7499", file: "https://drive.google.com/file/d/1xI--wSFS6YIfJW4OjrNVfz_qq50P85jd/view?usp=share_link", type: "Mid-Sem (Unit Tests)" },
                                                { name: "Computer Organization", code: "0707210302", file: "https://drive.google.com/file/d/1X3hNj7sa8Sb7FQo6cq7dnS18g5f7Q5So/view?usp=share_link", type: "Mid-Sem (Unit Tests)" }
                                            ]
                                        }
                                    }
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
                    if (sem.types) {
                        for (const typeKey in sem.types) {
                            totalPapers += (sem.types[typeKey].subjects || []).length;
                        }
                    } else {
                        totalPapers += (sem.subjects || []).length;
                    }
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
