const data = {
    "loginBanner": ">>> SCO-AE SECURE LOGIN <<<",
    "users": {
        "guest": {
            "password": "Null",
            "clearance": 1,
            "intro": [
                "Welcome, Guest.",
                "Security Clearance: EU Confidential / SCO-AE Access",
                " ",
                "== SCO-AE SUPERVISED ACCESS ONLY, UNAUTHORISED USE IS A BREACH OF PROTOCOL ==",
            ]

        },
        "halvorune": {
            "password": "kattunge623",
            "clearance": 2,
            "intro": [
                "Welcome, Erik Halvorsen.",
                "Security Clearance: EU Secret / JANUS / SCO-AE Access",
            ]
        },
        "radardev": {
            "password": "J4MT1M3",
            "clearance": 2,
            "intro": [
                "Welcome, Radim Kozar.",
                "Security Clearance: EU Secret / JANUS / SCO-AE Access",
            ]
        },
        "kingpin": {
            "password": "ALTERM3M0",
            "clearance": 4,
            "intro": [
                "Welcome, Jean-Michel Lemoine.",
                "Security Clearance: EU Top Secret / JANUS-AURELIS / SCO-AE Access",
            ]
        },
        "solvanix": {
            "password": "c@rk3ys",
            "clearance": 3,
            "intro": [
                "Welcome, Carlos Navarro.",
                "Security Clearance: EU Secret / JANUS-AURELIS / SCO-AE Access",
            ]
        },
        "rozdaci": {
            "password": "mun7igrae",
            "clearance": 3,
            "intro": [
                "Welcome, Mihaela Vasilescu.",
                "Security Clearance: EU Secret / JANUS-AURELIS / SCO-AE Access",
            ]
        }
    },
    "commands": [
        {
            "keyword": "staff",
            "error": "[ERROR] Provide subcommand: \"all\", \"info\"",
            "clearance": 1,
            "subcommands": [
                {
                    "clearance": 1,
                    "keyword": "all",
                    "response": ["> ########: Analysis Division Director, Project JANUS", "> > radardev: Analysis Division, Project JANUS", "> > halvorune: Project JANUS", "> > ########: Containment Division, Project JANUS", "> > ########: Analysis Division, Project JANUS", " ", "Redaction active. Use \"all_override\" if clearance permits."],
                },
                {
                    "clearance": 2,
                    "keyword": "all_override",
                    "response": ["> kingpin: Analysis Division Director, Project JANUS", "> > radardev: Analysis Division, Project JANUS", "> > halvorune: Project JANUS", "> > rozdaci: Containment Division, Project JANUS", "> > solvanix: Analysis Division, Project JANUS", " ", "Redaction disabled."],
                },
                {
                    "clearance": 1,
                    "keyword": "info",
                    "error": "[ERROR] Provide codename to access staff details.",
                    "subcommands": [
                        {
                            "clearance": 2,
                            "keyword": "radardev",
                            "response": [
                                "Full Name: Radim Kozar",
                                "Division: Analysis Division - Project JANUS",
                                "Clearance Level: EU Secret / JANUS / SCO-AE Access",
                                "Position: Senior Pattern Intelligence Officer",
                                " ",
                                "Responsibilities:",
                                "> Development and maintenance of long-range AE pattern prediction models",
                                "> Oversight of minor anomaly flagging algorithms and AE probability clusters",
                                "> Integration of memetic exposure analytics into incident analysis framework",
                                " ",
                                "Performance Notes:",
                                "Subject exhibits strong performance in independent analysis under pressure and high-volume data load. Shows consistent initiative in high-ambiguity conditions.",
                                "Repeated deviation from standard interdepartmental reporting timelines noted from Q1 to Q2. Field contact outside protocol recorded.",
                                " ",
                                "Assessment: Operationally competent. Requires enhanced supervisory review on cross-division communications."
                            ],
                        },
                        {
                            "clearance": 2,
                            "keyword": "halvorune",
                            "response": [
                                "Full Name: Erik Halvorsen",
                                "Division: Project JANUS",
                                "Clearance Level: EU Secret / JANUS / SCO-AE Access",
                                "Position: Liaison Officer, Operational Integration (Non-Centralized AE Zones)",
                                " ",
                                "Responsibilities:",
                                "> Maintains live contact with field analysts and containment teams during AE incidents",
                                "> Reports procedural irregularities and risk indicators to the Analysis Division",
                                "> Facilitates secure communication between field operators and central SCO-AE",
                                " ",
                                "Performance Notes:",
                                "Demonstrated above-average situational adaptability. Reliable in cross-border logistics under provisional clearance conditions.",
                                "Minor protocol lapse in AE-13-2025 reporting chain noted. Subject has exhibited minor friction with Analysis Division directives.",
                                " ",
                                "Assessment: Maintains functional reliability. Continued access contingent on stricter procedural adherence."
                            ],
                        },
                        {
                            "clearance": 2,
                            "keyword": "rozdaci",
                            "response": [
                                "Full Name: Mihaela Vasilescu",
                                "Division: Containment Division - Project JANUS",
                                "Clearance Level: EU Secret / JANUS-AURELIS / SCO-AE Access",
                                "Position: Director of Rapid Containment Logistics",
                                " ",
                                "Responsibilities:",
                                "> Creator and manager of the AURELIS System",
                                "> Management of post-AE sanitisation protocols (physical, digital, and cognitive domains)",
                                "> Liaison with national-level law enforcement for rapid suppression of exposure events",
                                " ",
                                "Performance Notes:",
                                "Demonstrated high-efficiency strategic coordination in AE-04 through AE-12 containment cycles.",
                                "Operational secrecy thresholds routinely met or exceeded. Received official praise by Director Jean-Michel Lemoine.",
                                " ",
                                "Assessment: Asset remains highly effective. Recommend limited audit access to classified logs pending internal review."
                            ],
                        },
                        {
                            "clearance": 2,
                            "keyword": "solvanix",
                            "response": [
                                "Full Name: Carlos Navarro",
                                "Division: Analysis Division - Project JANUS",
                                "Clearance Level: EU Secret / JANUS-AURELIS / SCO-AE Access",
                                "Position: Intelligence Integrity Auditor",
                                " ",
                                "Responsibilities:",
                                "> Oversight of data validation across JANUS-affiliated AE reports",
                                "> Administration of AURELIS anomaly detection metrics",
                                "> Review and classification of suspected procedural compromise or false-positive indicators",
                                " ",
                                "Performance Notes:",
                                "Exhibits strong attention to data fidelity and incident cross-checking. Identified multiple timestamp mismatches in AE-17 and AE-18 cycles.",
                                "Maintains consistent reporting cadence and policy alignment with project leadership. Subject operates within elevated scrutiny parameters due to prior administrative clearance elevation.",
                                " ",
                                "Assessment: Continued access approved. No outstanding anomalies pending."
                            ]
                        },
                        {
                            "clearance": 2,
                            "keyword": "kingpin",
                            "response": [
                                "Full Name: Jean-Michel Lemoine",
                                "Division: Analysis Division (Director) - Project JANUS (Executive Authority)",
                                "Clearance Level: EU Top Secret / JANUS-AURELIS / SCO-AE Access",
                                "Position: Program Director, JANUS",
                                " ",
                                "Responsibilities:",
                                "> Strategic oversight of Project JANUS operations and Directorship over SCO-AE Analysis Department",
                                "> Direction of AE classification frameworks and memetic filtration policy",
                                "> Direct reporting to SCO-AE Executive Directorate and COREPER II security liaisons",
                                " ",
                                "Performance Notes:",
                                "Has initiated procedural reforms to streamline incident triage and memetic hazard assessment.",
                                "Operational parameters frequently modified via emergency override authority. High-level interinstitutional cooperation maintained, including Europol and EEAS coordination channels.",
                                " ",
                                "Assessment: Authority currently unrestricted. Subject to annual clearance renewal via CORESEC-EX."
                            ],
                        },
                    ]
                }
            ]
        },
        {
            "keyword": "help",
            "clearance": 0,
            "response": [
                "\"janus\" - Project JANUS",
                "\"aurelis\" - System AURELIS",
                "\"aemon\" - AE Monitoring",
                "\"logs\" - Incident Logs",
                "\"memo\" - Memetic Safety Protocols",
                "\"staff\" - Our Staff",
            ]
        },
        {
            "keyword": "?",
            "clearance": 0,
            "response": [
                "\"janus\" - Project JANUS",
                "\"aurelis\" - System AURELIS",
                "\"aemon\" - AE Monitoring",
                "\"logs\" - Incident Logs",
                "\"memo\" - Memetic Safety Protocols",
                "\"staff\" - Our Staff",
            ]
        },
        {
            "keyword": "memo",
            "clearance": 1,
            "error": "[ERROR] Provide valid Memetic Safety Protocol ID in pattern with \"memo msp-XX/20XX\", write \"all\" for all IDs",
            "subcommands": [
                {
                    "keyword": "all",
                    "clearance": 1,
                    "response": [
                        "Fetching data from MSP Database...",
                        4000,
                        " ",
                        "> MSP-01/2019 - Public Transit Anomaly Observation Procedure",
                        "> MSP-02/2020 - Post-Exposure Cognitive Drift Self-Check",
                        "> MSP-03/2019 - Safe Disposal of Marked Printed Media",
                        "> MSP-04/2021 - Domestic Containment Code \"Nightingale\"",
                        "> MSP-05/2020 - Encounter with Repeating Individual",
                        "> MSP-06/2018 - Media Leak Suppression (Civilian Involvement)",
                        "> MSP-07/2017 - ######### #### ##### ###### #####",
                        "> MSP-08/2023 - Elevator or Escalator Spatial Loop Recognition",
                        "> MSP-09/2022 - ##### ##### ############# #########",
                        "> MSP-10/2023 - Temporary Language Disruption (Field)",
                        "> MSP-11/2021 - ###### ##### ########### (##### #########)",
                        "> MSP-12/2024 - ############ ###### ########### ## ########## ########",
                        " ",
                        "Redaction active. Use \"all_override\" if clearance permits."
                    ]
                },
                {
                    "keyword": "all_override",
                    "clearance": 2,
                    "response": [
                        "Fetching data from MSP Database...",
                        4000,
                        " ",
                        "> MSP-01/2019 - Public Transit Anomaly Observation Procedure",
                        "> MSP-02/2020 - Post-Exposure Cognitive Drift Self-Check",
                        "> MSP-03/2019 - Safe Disposal of Marked Printed Media",
                        "> MSP-04/2021 - Domestic Containment Code \"Nightingale\"",
                        "> MSP-05/2020 - Encounter with Repeating Individual",
                        "> MSP-06/2018 - Media Leak Suppression (Civilian Involvement)",
                        "> MSP-07/2017 - Emergency Room False Memory Event",
                        "> MSP-08/2023 - Elevator or Escalator Spatial Loop Recognition",
                        "> MSP-09/2022 - Email Chain Contamination Procedure",
                        "> MSP-10/2023 - Temporary Language Disruption (Field)",
                        "> MSP-11/2021 - Shared Dream Convergence (Group Exposure)",
                        "> MSP-12/2024 - Unauthorised Symbol Recognition in Government Material",
                        " ",
                        "Redaction disabled."
                    ]
                },
                {
                    "keyword": "msp-01/2019",
                    "clearance": 1,
                    "response": [
                        "Fetching data from MSP Database...",
                        3000,
                        " ",
                        "Protocol Title: MSP-01/2019 - Public Transit Anomaly Observation Procedure",
                        "Scenario: Field operative witnesses possible memetic event while using public transportation.",
                        " ",
                        "Instructions:",
                        "> Disembark at next scheduled stop.",
                        "> Do not engage or photograph subject.",
                        "> Report coordinates via standard field check-in with tag \"C10\".",
                        "> Avoid using keywords in public conversation for 24 hours.",
                        " ",
                        "Notes: The \"C10\" tag flags the entry for quiet review by the memetics experts of the Analysis Division. Using plain coordinates avoids metadata tripping auto-scans."
                    ]
                },
                {
                    "keyword": "msp-02/2020",
                    "clearance": 1,
                    "response": [
                        "Fetching data from MSP Database...",
                        3000,
                        " ",
                        "Protocol Title: MSP-02/2020 - Post-Exposure Cognitive Drift Self-Check",
                        "Scenario: Operative suspects mild memetic exposure due to sudden irrational thought, pattern fixation, or emotional dissonance.",
                        " ",
                        "Instructions:",
                        "> Suspend current task for 10 minutes.",
                        "> Recite neutral recall list provided in quarterly training.",
                        "> If irregular recall occurs, request Form FR-7 from handler.",
                        " ",
                        "Notes: FR-7 is a standard request form for off-record cognitive testing. Early drift recognition is vital for reversible treatment."
                    ]
                },
                {
                    "keyword": "msp-03/2019",
                    "clearance": 1,
                    "response": [
                        "Fetching data from MSP Database...",
                        3000,
                        " ",
                        "Protocol Title: MSP-03/2019 - Safe Disposal of Marked Printed Media",
                        "Scenario: Operative receives physical media suspected of low-grade memetic encoding (symbols, headlines, marginalia).",
                        " ",
                        "Instructions:",
                        "> Fold material in half, place in opaque envelope.",
                        "> Deposit in blue archive bin at SCO-AE depot.",
                        "> Do not shred or burn.",
                        " ",
                        "Notes: Burning can trigger latent glyph activation. Opaque disposal ensures minimal secondary exposure."
                    ]
                },
                {
                    "keyword": "msp-04/2021",
                    "clearance": 2,
                    "response": [
                        "Fetching data from MSP Database...",
                        3000,
                        " ",
                        "Protocol Title: MSP-04/2021 - Domestic Containment Code \"Nightingale\"",
                        "Scenario: Operative receives exposure during off-duty hours at home.",
                        " ",
                        "Instructions:",
                        "> Lock all exterior doors.",
                        "> Turn on ambient radio at medium volume.",
                        "> Use encoded text message \"Night falling. Will call tomorrow.\" to handler.",
                        " ",
                        "Notes: Phrase notifies handlers to initiate silent background check. Ambient radio detunes subtle audio-based triggers."
                    ]
                },
                {
                    "keyword": "msp-05/2020",
                    "clearance": 2,
                    "response": [
                        "Fetching data from MSP Database...",
                        3000,
                        " ",
                        "Protocol Title: MSP-05/2020 - Encounter with Repeating Individual",
                        "Scenario: Operative notices identical individual (face, clothing) in three or more locations within 12 hours.",
                        " ",
                        "Instructions:",
                        "> Do not approach.",
                        "> Initiate voice memo log with timestamp and route notes.",
                        "> Avoid mirrors or reflective surfaces for 6 hours.",
                        " ",
                        "Notes: Memetic duplicity often hides in environmental reflections. Memo logs help determine if event is an exposure or perceptual bleed."
                    ]
                },
                {
                    "keyword": "msp-06/2018",
                    "clearance": 1,
                    "response": [
                        "Fetching data from MSP Database...",
                        3000,
                        " ",
                        "Protocol Title: MSP-06/2018 - Media Leak Suppression (Civilian Involvement)",
                        "Scenario: Civilian publishes image, article, or recording possibly carrying memetic payload.",
                        " ",
                        "Instructions:",
                        "> Use reporting portal to flag content as \"graphic violence\" or \"misinformation\".",
                        "> Do not comment or share the post.",
                        "> Notify Local Containment Liaison (LCL) with link.",
                        " ",
                        "Notes: Civilian platforms are vulnerable. Flagging begins algorithmic suppression without triggering legal alerts."
                    ]
                },
                {
                    "keyword": "msp-07/2017",
                    "clearance": 2,
                    "response": [
                        "Fetching data from MSP Database...",
                        3000,
                        " ",
                        "Protocol Title: MSP-07/2017 - Emergency Room False Memory Event",
                        "Scenario: Operative wakes in medical facility with inconsistent short-term memory.",
                        " ",
                        "Instructions:",
                        "> Request a paper and pen, write the name \"ALENA\" in block letters.",
                        "> Say nothing further until response team arrives.",
                        " ",
                        "Notes: \"ALENA\" is an internal tag for suspected memory-loop AE. Writing it signals containment without alerting local staff."
                    ]
                },
                {
                    "keyword": "msp-08/2023",
                    "clearance": 1,
                    "response": [
                        "Fetching data from MSP Database...",
                        3000,
                        " ",
                        "Protocol Title: MSP-08/2023 - Elevator or Escalator Spatial Loop Recognition",
                        "Scenario: Operative suspects spatial repetition inside building transport systems.",
                        " ",
                        "Instructions:",
                        "> Remain inside until next available exit.",
                        "> Record number of ambient advertisements or signs seen twice.",
                        "> Repeat code phrase to self: \"Same step, second time.\"",
                        " ",
                        "Notes: Pattern repetition in low-risk environments often flags memetic anchoring. Phrase aids in self-stabilization."
                    ]
                },
                {
                    "keyword": "msp-09/2022",
                    "clearance": 2,
                    "response": [
                        "Fetching data from MSP Database...",
                        3000,
                        " ",
                        "Protocol Title: MSP-09/2022 - Email Chain Contamination Procedure",
                        "Scenario: Operative receives strange or recursive message chain with unexplained CC/BCC recipients.",
                        " ",
                        "Instructions:",
                        "> Do not open attachments.",
                        "> Forward entire email to MEM-BOX address with subject \"Loop.\"",
                        "> Power cycle device within 30 minutes.",
                        " ",
                        "Notes: Recursive email behavior is a known memetic vector. \"MEM-BOX\" is the designated SCO-AE intake for digital anomaly screening by System AURELIS."
                    ]
                },
                {
                    "keyword": "msp-10/2023",
                    "clearance": 1,
                    "response": [
                        "Fetching data from MSP Database...",
                        3000,
                        " ",
                        "Protocol Title: MSP-10/2023 - Temporary Language Disruption (Field)",
                        "Scenario: Operative experiences spontaneous foreign word recall or unreadable signage in familiar language zone.",
                        " ",
                        "Instructions:",
                        "> Use mobile note app to transcribe words as seen or heard.",
                        "> Do not attempt translation.",
                        "> Submit entry under language tag \"FRAG-X\".",
                        " ",
                        "Notes: Language fragmentation is a pre-exposure phase. Transcription preserves original structure for analysis."
                    ]
                },
                {
                    "keyword": "msp-11/2021",
                    "clearance": 2,
                    "response": [
                        "Fetching data from MSP Database...",
                        3000,
                        " ",
                        "Protocol Title: MSP-11/2021 - Shared Dream Convergence (Group Exposure)",
                        "Scenario: Multiple operatives report identical dream content within 48 hours.",
                        " ",
                        "Instructions:",
                        "> Do not recount full details in person.",
                        "> Each participant fills Form DR-6 individually.",
                        "> Submit under cross-tag \"COHERENT SLEEP-3\".",
                        " ",
                        "Notes: Group dream events indicate low-bandwidth memetic resonance. Reporting in isolation helps triangulate origin without reinforcing the pattern."
                    ]
                },
                {
                    "keyword": "msp-12/2024",
                    "clearance": 2,
                    "response": [
                        "Fetching data from MSP Database...",
                        3000,
                        " ",
                        "Protocol Title: MSP-12/2024 - Unauthorised Symbol Recognition in Government Material",
                        "Scenario: Operative sees anomalous symbol or sigil embedded in official documents, IDs, or signage.",
                        " ",
                        "Instructions:",
                        "> Photograph symbol indirectly (mirror, water, phone screen).",
                        "> File image via confidential drop point as \"Foreign Mark (FM-1)\".",
                        "> Do not discuss aloud.",
                        " ",
                        "Notes: Direct reproduction may activate latent triggers. Indirect capture preserves structure without enabling full semantic activation."
                    ]
                }

            ]
        },
        {
            "keyword": "math",
            "error": "Please specify a valid math operation: add.",
            "clearance": 0,
            "subcommands": [
                {
                    keyword: "add",
                    response: (args) => {
                        const numbers = args.map(Number);
                        return numbers.reduce((a, b) => a + b, 0);
                    }
                }
            ]
        }
    ]
};