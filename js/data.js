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
                                    folderLink: "https://drive.google.com/drive/folders/1z9zSehMgu_dgC9X0FEuRhFN0GyipWrGB",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: [
                                                { name: "Basic Electrical and Electronics Engineering", code: "0707210104", file: "https://drive.google.com/file/d/1lxjKlep_3pB-A5_QCkyma2EJy_qEfPzI/view?usp=share_link", type: "End-Sem" },
                                                { name: "Programming and Problem Solving", code: "0707240106", file: "https://drive.google.com/file/d/1DggNdn3kwTYQO9Wbl9APVQBiSZxAWO97/view?usp=share_link", type: "End-Sem" }
                                            ]
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: [
                                                { name: "Mathematics-I", code: "ET7680", file: "https://drive.google.com/file/d/1cnIq81yGl7QOgLL8YdkhU1Vn_WHW64_8/view?usp=share_link", type: "Mid-Sem (Unit Tests)" },
                                                { name: "Programming and Problem Solving", code: "TE7286", file: "https://drive.google.com/file/d/1SrcfUadFuNcRKut0CcXhKk0rVB2HDmim/view?usp=share_link", type: "Mid-Sem (Unit Tests)" },
                                                { name: "Critical Thinking", code: "T6732", file: "https://drive.google.com/file/d/1SQgLtBR1c7sHZZnMeUyMHPhtpenQkL8j/view?usp=share_link", type: "Mid-Sem (Unit Tests)" },
                                                { name: "Basic Electrical and Electronics Engineering", code: "T7540", file: "https://drive.google.com/file/d/1IW9KItlvEAWYT6n0FKHwOibwBDZZggBD/view?usp=share_link", type: "Mid-Sem (Unit Tests)" }
                                            ]
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 2": {
                                    name: "Semester 2",
                                    icon: "looks_two",
                                    folderLink: "https://drive.google.com/drive/folders/1jxRwyBvuheoqE2s07poE0CI94SYNt0-H",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: [
                                                { name: "Programming in C", code: "0707220204", file: "https://drive.google.com/file/d/1A--GGnGsy7NzqAvmJYAL7O0pdtsjFQhz/view?usp=share_link", type: "End-Sem" }
                                            ]
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 3": {
                                    name: "Semester 3",
                                    icon: "looks_3",
                                    folderLink: "https://drive.google.com/drive/folders/1l3x5cDK1pg7A9GIEx49kNBUq9g7zEftH",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: [
                                                { name: "Sensors and Microcontrollers", code: "0707240307", file: "https://drive.google.com/file/d/1g8Zt3YJUCRBy8pw8WiTCJi-Y_SxqpMQG/view?usp=share_link", type: "End-Sem" },
                                                { name: "Programming Paradigms", code: "070740305", file: "https://drive.google.com/file/d/1alFtcLUqvOd0XFizlDUfrtk6ILwbcSGN/view?usp=share_link", type: "End-Sem" },
                                                { name: "Discrete Mathematics and Graph Theory", code: "0707240301", file: "https://drive.google.com/file/d/1TQ4XrnxF8-6ZqPDu2_kFPQHEof_I-tkY/view?usp=share_link", type: "End-Sem" },
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
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 4": {
                                    name: "Semester 4",
                                    icon: "looks_4",
                                    folderLink: "https://drive.google.com/drive/folders/1YdLUcGYTujcV9xmy4yG_4i7T9GhMz2GU",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: [
                                                { name: "Operating Systems", code: "0707240405", file: "https://drive.google.com/file/d/1DK6OLFhXt_5Co2uFnYtut6dqw9wzLcBo/view?usp=drivesdk", type: "End-Sem", dateAdded: "2026-07-20" },
                                                { name: "Engineering Mathematics-III", code: "0707240401", file: "https://drive.google.com/file/d/1bb-FV0xbbGLNq1gNgjkNhWg7AFMqQkIj/view?usp=drivesdk", type: "End-Sem", dateAdded: "2026-07-20" },
                                                { name: "Database Management Systems", code: "0707240403", file: "https://drive.google.com/file/d/14kJLLuiUIZNvcTyg8iU7uXgouz50yRqH/view?usp=drivesdk", type: "End-Sem", dateAdded: "2026-07-20" }
                                            ]
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 5": {
                                    name: "Semester 5",
                                    icon: "looks_5",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: []
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 6": {
                                    name: "Semester 6",
                                    icon: "looks_6",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: []
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 7": {
                                    name: "Semester 7",
                                    icon: "filter_7",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: []
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 8": {
                                    name: "Semester 8",
                                    icon: "filter_8",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: []
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
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
                                    folderLink: "https://drive.google.com/drive/folders/1OjUMoJ4sLpwb6bjLmGuAr1b4bTRgBVs_",
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
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: [
                                                { name: "Fundamentals of Quantum Physics", code: "0707210102", file: "https://drive.google.com/file/d/1t0UqXe633825WzgiLrS4ObbNRcUeT1pZ/view?usp=drivesdk", type: "Backlog", dateAdded: "2026-07-20" },
                                                { name: "Digital Electronics and Logic Design", code: "0707210103", file: "https://drive.google.com/file/d/1eSxb6l_mHsuvSKN6YngCE2Mt6lRKdZtP/view?usp=drivesdk", type: "Backlog", dateAdded: "2026-07-20" },
                                                { name: "Calculus", code: "0707210101", file: "https://drive.google.com/file/d/1b-bkllJochQMHVzz8N3-Y2VX4--OnjLu/view?usp=drivesdk", type: "Backlog", dateAdded: "2026-07-20" }
                                            ]
                                        }
                                    }
                                },
                                "Sem 2": {
                                    name: "Semester 2",
                                    icon: "looks_two",
                                    folderLink: "https://drive.google.com/drive/folders/1cwPJVHBgO-Q7xcvnFhPYEE_LePEU2WEc",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: [
                                                { name: "Computer Architecture and Organisation", code: "0707210205", file: "https://drive.google.com/file/d/1k5KrPDxAUHFA6stjX5X4TF0FTzZSehWB/view?usp=drivesdk", type: "End-Sem", dateAdded: "2026-07-20" },
                                                { name: "Linear Algebra", code: "0707210201", file: "https://drive.google.com/file/d/1NvDaiTBiws4kl-ZU7FSlp-J1BNGoO9l-/view?usp=drivesdk", type: "End-Sem", dateAdded: "2026-07-20" },
                                                { name: "Microcontrollers and Sensors", code: "0707210202", file: "https://drive.google.com/file/d/154gIBFJzzK6LfokI_zGeI18jk7QtTS6z/view?usp=drivesdk", type: "End-Sem", dateAdded: "2026-07-20" },
                                                { name: "Python Programming", code: "0707210207", file: "https://drive.google.com/file/d/1j1xI40_LAEtQyxOhAJNOCrC6iy_Af8uB/view?usp=drivesdk", type: "End-Sem", dateAdded: "2026-07-20" },
                                                { name: "Software Engineering", code: "0707210206", file: "https://drive.google.com/file/d/1szpNAMW70xPUtxCwmjW0nf_qEWn9FAge/view?usp=drivesdk", type: "End-Sem", dateAdded: "2026-07-20" }
                                            ]
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 3": {
                                    name: "Semester 3",
                                    icon: "looks_3",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: []
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 4": {
                                    name: "Semester 4",
                                    icon: "looks_4",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: []
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 5": {
                                    name: "Semester 5",
                                    icon: "looks_5",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: []
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 6": {
                                    name: "Semester 6",
                                    icon: "looks_6",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: []
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 7": {
                                    name: "Semester 7",
                                    icon: "filter_7",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: []
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 8": {
                                    name: "Semester 8",
                                    icon: "filter_8",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: []
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
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
                                    folderLink: "https://drive.google.com/drive/folders/1uXas-Uhc3xog3qW1U9qElXib6tCeHWxY",
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
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: [
                                                { name: "Digital Electronics and Logic Design", code: "0707210103", file: "https://drive.google.com/file/d/13TVDGM3G5BwcsNutUkbREQ00eKkB6qqP/view?usp=drivesdk", type: "Backlog", dateAdded: "2026-07-20" },
                                                { name: "Chemistry", code: "0707250102", file: "https://drive.google.com/file/d/1UtuxEd_L48B0w7-d_sH062UsBEUZhqci/view?usp=drivesdk", type: "Backlog", dateAdded: "2026-07-20" }
                                            ]
                                        }
                                    }
                                },
                                "Sem 2": {
                                    name: "Semester 2",
                                    icon: "looks_two",
                                    folderLink: "https://drive.google.com/drive/folders/16paVGKMUa2uqaHKxQEUSXMP3ByQHspeM",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: [
                                                { name: "Statistics for Data Science", code: "0707250202", file: "https://drive.google.com/file/d/1Gvk-ICL7xDjLDxWETPQ-eMl0L2qNB0Y-/view?usp=drivesdk", type: "End-Sem", dateAdded: "2026-07-20" },
                                                { name: "Introduction to Artificial Intelligence and Python Programming", code: "0707250205", file: "https://drive.google.com/file/d/1IalTw0Da4MP_bUDp_VTxyQ6NLEy91dlK/view?usp=drivesdk", type: "End-Sem", dateAdded: "2026-07-20" },
                                                { name: "Calculus", code: "0707250201", file: "https://drive.google.com/file/d/16oJvSShwdRMibYXrtFmvTKjlBieMIPAz/view?usp=drivesdk", type: "End-Sem", dateAdded: "2026-07-20" }
                                            ]
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 3": {
                                    name: "Semester 3",
                                    icon: "looks_3",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: []
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 4": {
                                    name: "Semester 4",
                                    icon: "looks_4",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: []
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 5": {
                                    name: "Semester 5",
                                    icon: "looks_5",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: []
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 6": {
                                    name: "Semester 6",
                                    icon: "looks_6",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: []
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 7": {
                                    name: "Semester 7",
                                    icon: "filter_7",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: []
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 8": {
                                    name: "Semester 8",
                                    icon: "filter_8",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: []
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "AIML": {
                    name: "AIML",
                    icon: "smart_toy",
                    years: {
                        "2024-28": {
                            name: "2024-28",
                            sems: {
                                "Sem 1": {
                                    name: "Semester 1",
                                    icon: "looks_one",
                                    folderLink: "https://drive.google.com/drive/folders/15Xltt5ATnWCU2Ar6JkAclAeX5hELtsVC",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: []
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: [
                                                { name: "Critical Thinking", code: "T6732", file: "https://drive.google.com/file/d/1Th09FNg5qMEkviCztZffgRMvY1qfRQXv/view?usp=share_link", type: "Mid-Sem (Unit Tests)" },
                                                { name: "Basic Electrical and Electronics Engineering", code: "T7540", file: "https://drive.google.com/file/d/1BmVPpkm_jejYDJuSb1FFs9q95-JDI58K/view?usp=share_link", type: "Mid-Sem (Unit Tests)" }
                                            ]
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 2": {
                                    name: "Semester 2",
                                    icon: "looks_two",
                                    folderLink: "https://drive.google.com/drive/folders/1GIQVEj-Dhcf7fY09gsdKNSxFLYIfrp1m",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: [
                                                { name: "Programming in C", code: "0707210206", file: "https://drive.google.com/file/d/1UhyRAdGq5xkznNS97YW45NmMbZbq-tDc/view?usp=share_link", type: "End-Sem" }
                                            ]
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 3": {
                                    name: "Semester 3",
                                    icon: "looks_3",
                                    folderLink: "https://drive.google.com/drive/folders/1NeRBQsga-ZlzWtEhRIOzZAhO6EMGKbsd",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: []
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 4": {
                                    name: "Semester 4",
                                    icon: "looks_4",
                                    folderLink: "https://drive.google.com/drive/folders/1pvLgHZ5cyCTFajFDkmN-AgZZQpRPgrOH",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: []
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 5": {
                                    name: "Semester 5",
                                    icon: "looks_5",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: []
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 6": {
                                    name: "Semester 6",
                                    icon: "looks_6",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: []
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 7": {
                                    name: "Semester 7",
                                    icon: "filter_7",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: []
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 8": {
                                    name: "Semester 8",
                                    icon: "filter_8",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: []
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
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
                                    folderLink: "https://drive.google.com/drive/folders/1n3F48VQhZ3raSF1d_wQkDs1_dBZ5EQ17",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: [
                                                { name: "Mathematics-I", code: "0707240101", file: "https://drive.google.com/file/d/13snOFzVyb8dLURQQtLKjo5kAQynLjmxE/view?usp=share_link", type: "End-Sem" }
                                            ]
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: [
                                                { name: "Critical Thinking", code: "T6732", file: "https://drive.google.com/file/d/1VL6_fFt6mR-yPTU0mmtGsEpQwObgO5Du/view?usp=share_link", type: "Mid-Sem (Unit Tests)" },
                                                { name: "Programming and Problem Solving", code: "TE7286", file: "https://drive.google.com/file/d/1OWdBUHqmQZ21hHRdQnHve6vTzrYQqK7F/view?usp=share_link", type: "Mid-Sem (Unit Tests)" },
                                                { name: "Mathematics-I", code: "ET7680", file: "https://drive.google.com/file/d/1n_YcGbSWFEvy_6ocP6lHFX36u4DVdbaT/view?usp=share_link", type: "Mid-Sem (Unit Tests)" }
                                            ]
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 2": {
                                    name: "Semester 2",
                                    icon: "looks_two",
                                    folderLink: "https://drive.google.com/drive/folders/1auozTzMPF112V2MnJ2nGdK2ruAYb0yuM",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: [
                                                { name: "Programming in C", code: "0707240206", file: "https://drive.google.com/file/d/1XH7mBCDHkMlVea4yvugWiKY4Ny3DWtgF/view?usp=share_link", type: "End-Sem" }
                                            ]
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: [
                                                { name: "Basic Electrical and Electronics Engineering", code: "0707240204", file: "https://drive.google.com/file/d/1BNgN2E9bQw8T4ySeGHXEh64ewhLHDU5M/view?usp=share_link", type: "Mid-Sem (Unit Tests)" }
                                            ]
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 3": {
                                    name: "Semester 3",
                                    icon: "looks_3",
                                    folderLink: "https://drive.google.com/drive/folders/1Cz9jLdNn8KW9QYVv2FUA1H0OQqZNMOSb",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: [
                                                { name: "Sensors and Microcontrollers", code: "0707240307", file: "https://drive.google.com/file/d/1taK5JO0jEkgLWpMseLmfibGeTjfSwHjm/view?usp=share_link", type: "End-Sem" },
                                                { name: "Programming Paradigms", code: "070740305", file: "https://drive.google.com/file/d/1ZOvUDMMHjGGc3LQbrkxIbnkYlWtEcZRQ/view?usp=share_link", type: "End-Sem" },
                                                { name: "Discrete Mathematics and Graph Theory", code: "0707240301", file: "https://drive.google.com/file/d/1A45ooSJw4_oYyiJP4xK_wYMTO_6Y-c_P/view?usp=share_link", type: "End-Sem" },
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
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 4": {
                                    name: "Semester 4",
                                    icon: "looks_4",
                                    folderLink: "https://drive.google.com/drive/folders/11zJWiPQUxENmGcWLZ6KvdlNUkVAtNdpP",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: [
                                                { name: "Operating Systems", code: "0707240405", file: "https://drive.google.com/file/d/1lbvUrSqpI7pB2ypiFP9LGL9wOW842VSO/view?usp=drivesdk", type: "End-Sem", dateAdded: "2026-07-20" },
                                                { name: "Engineering Mathematics-III", code: "0707240401", file: "https://drive.google.com/file/d/1vgjXf_H_ACQ1GjLFxjUqZ62KAruicX6K/view?usp=drivesdk", type: "End-Sem", dateAdded: "2026-07-20" },
                                                { name: "Database Management Systems", code: "0707240403", file: "https://drive.google.com/file/d/1a9M6_XMyDMjbDWDj5LySycKWnPg8AmFV/view?usp=drivesdk", type: "End-Sem", dateAdded: "2026-07-20" }
                                            ]
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 5": {
                                    name: "Semester 5",
                                    icon: "looks_5",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: []
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 6": {
                                    name: "Semester 6",
                                    icon: "looks_6",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: []
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 7": {
                                    name: "Semester 7",
                                    icon: "filter_7",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: []
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
                                        }
                                    }
                                },
                                "Sem 8": {
                                    name: "Semester 8",
                                    icon: "filter_8",
                                    types: {
                                        "End-Sem": {
                                            name: "End-Sem",
                                            icon: "description",
                                            subjects: []
                                        },
                                        "Mid-Sem (Unit Tests)": {
                                            name: "Mid-Sem (Unit Tests)",
                                            icon: "quiz",
                                            subjects: []
                                        },
                                        "Backlog": {
                                            name: "Backlog",
                                            icon: "history",
                                            subjects: []
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
};;

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
