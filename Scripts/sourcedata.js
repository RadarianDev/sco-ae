const data = {
    "loginBanner": ">>> SCO-AE SECURE LOGIN <<<",
    "users": {
        "guest": {
            "password": "GUEST",
            "clearance": 1,
            "intro": [
                "Accessing node: SCO-AE-INT-01",
                "Connection Secure (AES-512)",
                "Handshake complete. Session initialized.",
                " ",
                "Welcome, Guest.",
                "Security Clearance: EU Confidential / SCO-AE Access",
                " ",
                "== THIS ACCOUNT IS AVAILABLE ONLY UNDER SCO-AE STAFF SUPERVISION ==",
                " ",
                "> This is a secure node of the Special Coordination Office for Anomalous Events.",
                "> This system is classified under EU Council Security Regulations. ",
                "> Unauthorized access constitutes a breach of EU cybersecurity and defense law.",
                " ",
                "Project JANUS / System AURELIS / AE Monitoring / Incident Logs / Memetic Safety Protocols / Our Staff"
            ]

        },
        "halvorune": {
            "password": "kattunge623",
            "clearance": 2,
            "intro": [
                "Accessing node: SCO-AE-INT-01",
                "Connection Secure (AES-512)",
                "Handshake complete. Session initialized.",
                " ",
                "Welcome, Erik Halvorsen.",
                "Security Clearance: EU Secret / JANUS / SCO-AE Access",
                " ",
                "> This is a secure node of the Special Coordination Office for Anomalous Events.",
                "> This system is classified under EU Council Security Regulations. ",
                "> Unauthorized access constitutes a breach of EU cybersecurity and defense law.",
                " ",
                "Run the following to initiate probe:",
                "> validate_user --token=<REDACTED>",
                " ",
                "Project JANUS / System AURELIS / AE Monitoring / Incident Logs / Memetic Safety Protocols / Our Staff"
            ]
        },
        "radardev": {
            "password": "J4MT1M3",
            "clearance": 2,
            "intro": [
                "Accessing node: SCO-AE-INT-01",
                "Connection Secure (AES-512)",
                "Handshake complete. Session initialized.",
                " ",
                "Welcome, Radim Kozar.",
                "Security Clearance: EU Secret / JANUS / SCO-AE Access",
                " ",
                "> This is a secure node of the Special Coordination Office for Anomalous Events.",
                "> This system is classified under EU Council Security Regulations.",
                "> Unauthorized access constitutes a breach of EU cybersecurity and defense law.",
                " ",
                "Project JANUS / System AURELIS / AE Monitoring / Incident Logs / Memetic Safety Protocols / Our Staff"
            ]
        },
        "kingpin": {
            "password": "ALTERM3M0",
            "clearance": 4,
            "intro": [
                "Accessing node: SCO-AE-INT-01",
                "Connection Secure (AES-512)",
                "Handshake complete. Session initialized.",
                " ",
                "Welcome, Jean-Michel Lemoine.",
                "Security Clearance: EU Top Secret / JANUS-AURELIS / SCO-AE Access",
                " ",
                "> This is a secure node of the Special Coordination Office for Anomalous Events.",
                "> This system is classified under EU Council Security Regulations.",
                "> Unauthorized access constitutes a breach of EU cybersecurity and defense law.",
                " ",
                "Project JANUS / System AURELIS / AE Monitoring / Incident Logs / Memetic Safety Protocols / Our Staff"
            ]
        },
        "solvanix": {
            "password": "c@rk3ys",
            "clearance": 3,
            "intro": [
                "Accessing node: SCO-AE-INT-01",
                "Connection Secure (AES-512)",
                "Handshake complete. Session initialized.",
                " ",
                "Welcome, Carlos Navarro.",
                "Security Clearance: EU Secret / JANUS-AURELIS / SCO-AE Access",
                " ",
                "> This is a secure node of the Special Coordination Office for Anomalous Events.",
                "> This system is classified under EU Council Security Regulations.",
                "> Unauthorized access constitutes a breach of EU cybersecurity and defense law.",
                " ",
                "Project JANUS / System AURELIS / AE Monitoring / Incident Logs / Memetic Safety Protocols / Our Staff"
            ]
        },
        "rozdaci": {
            "password": "mun7igrae",
            "clearance": 3,
            "intro": [
                "Accessing node: SCO-AE-INT-01",
                "Connection Secure (AES-512)",
                "Handshake complete. Session initialized.",
                " ",
                "Welcome, Mihaela Vasilescu.",
                "Security Clearance: EU Secret / JANUS-AURELIS / SCO-AE Access",
                " ",
                "> This is a secure node of the Special Coordination Office for Anomalous Events.",
                "> This system is classified under EU Council Security Regulations.",
                "> Unauthorized access constitutes a breach of EU cybersecurity and defense law.",
                " ",
                "Project JANUS / System AURELIS / AE Monitoring / Incident Logs / Memetic Safety Protocols / Our Staff"
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
                    "response": ["> kingpin: Analysis Division Director, Project JANUS", "> > radardev: Analysis Division, Project JANUS", "> > halvorune: Project JANUS", "> > rozdaci: Containment Division, Project JANUS", "> > solvanix: Analysis Division, Project JANUS",],
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
                                "Repeated deviation from standard interdepartmental reporting timelines noted across Q1 and Q2. Field contact outside protocol recorded (REF: IR-231-KK).",
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
                                "> Facilitates secure communication between NFPs and central SCO-AE",
                                " ",
                                "Performance Notes:",
                                "Demonstrated above-average situational adaptability. Reliable in cross-border logistics under provisional clearance conditions.",
                                "Minor protocol lapse in AE-13-2025 reporting chain noted (REF: Audit-JN/1552). Subject has exhibited minor friction with Analysis Division directives.",
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
                                "> Oversight of Tier-1 containment response teams and mobile quarantine logistics",
                                "> Management of post-AE sanitisation protocols (physical, digital, and cognitive domains)",
                                "> Liaison with national-level law enforcement for rapid suppression of exposure events",
                                " ",
                                "Performance Notes:",
                                "Demonstrated high-efficiency strategic coordination in AE-04 through AE-12 containment cycles.",
                                "Operational secrecy thresholds routinely met or exceeded. Interdivision transparency concerns raised by Audit Division (REF: CON-834.2).",
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