import _ from "lodash";

const CURRENT_WEEK = 3;

const CONTESTANTS = {
    ALLISON: "Allison",
    AUTUMN: "Autumn",
    CHANDLER: "Chandler",
    CHRISSA: "Chrissa",
    DAISY: "Daisy",
    EDWINA: "Edwina",
    ERIKA: "Erika",
    EVALIN: "Evalin",
    JENN: "Jenn",
    JESS: "Jess",
    KATELYN: "Katelyn",
    KAYLA: "Kayla",
    KELSEY_A: "Kelsey A.",
    KELSEY_T: "Kelsey T.",
    KYRA: "Kyra",
    LANIE: "Lanie",
    LAUREN: "Lauren",
    LEA: "Lea",
    LEXI: "Lexi",
    MADINA: "Madina",
    MARIA: "Maria",
    MARLENA: "Marlena",
    NAT: "Nat",
    RACHEL: "Rachel",
    SAM: "Sam",
    SAMANTHA: "Samantha",
    SANDRA: "Sandra",
    STARR: "Starr",
    SYDNEY: "Sydney",
    TALYAH: "Talyah",
    TAYLOR: "Taylor",
    ZOE: "Zoe",
};

const {
    ALLISON,
    AUTUMN,
    CHANDLER,
    CHRISSA,
    DAISY,
    EDWINA,
    ERIKA,
    EVALIN,
    JENN,
    JESS,
    KATELYN,
    KAYLA,
    KELSEY_A,
    KELSEY_T,
    KYRA,
    LANIE,
    LAUREN,
    LEA,
    LEXI,
    MADINA,
    MARIA,
    MARLENA,
    NAT,
    RACHEL,
    SAM,
    SAMANTHA,
    SANDRA,
    STARR,
    SYDNEY,
    TALYAH,
    TAYLOR,
    ZOE,
} = CONTESTANTS;

const SCORING_FREQUENCIES = {
    EACH_EPISODE: "each episode",
    END_OF_SEASON: "weekly",
};

const ScoringRule = (
    category,
    points,
    frequency = SCORING_FREQUENCIES.EACH_EPISODE
) => ({
    category,
    points,
    frequency,
});

const SCORING_CATERGORIES = {
    GROUP_DATE: ScoringRule("Group Date", 1),
    "TWO-ON-ONE_DATE": ScoringRule("Two-on-One Date", 1.5),
    ONE_ON_ONE_DATE: ScoringRule("One-on-One Date", 2),
    RIDE_ON_ANY_FLYING_APPARATUS: ScoringRule(
        "Ride on Any Flying Apparatus",
        1
    ),
    DATE_OR_COCKTAIL_PARTY_ROSE: ScoringRule(
        "Receiving a Rose During a Date or Cocktail Party",
        0.5
    ),
    ROSE_CEREMONY_ROSE: ScoringRule(
        "Receiving a Rose During a Rose Ceremony",
        1
    ),
    GROUP_DATE_SOMETHING_EXTRA: ScoringRule("Group Date Something Extra", 0.5),
    /// END OF SEASON
    /// END OF SEASON
    HOMETOWN_DATE: ScoringRule(
        "Hometown Date",
        2,
        SCORING_FREQUENCIES.END_OF_SEASON
    ),
    FANTASY_SUITE: ScoringRule(
        "Fantasy Suite",
        2,
        SCORING_FREQUENCIES.END_OF_SEASON
    ),
    PROPOSAL: ScoringRule("Proposal", 5, SCORING_FREQUENCIES.END_OF_SEASON),
    FINAL_ROSE: ScoringRule(
        "Receiving Final Rose",
        5,
        SCORING_FREQUENCIES.END_OF_SEASON
    ),
};

const SCORING_CATERGORIES_KEYS = {
    GROUP_DATE: "GROUP_DATE",
    "TWO-ON-ONE_DATE": "TWO-ON-ONE_DATE",
    ONE_ON_ONE_DATE: "ONE_ON_ONE_DATE",
    RIDE_ON_ANY_FLYING_APPARATUS: "RIDE_ON_ANY_FLYING_APPARATUS",
    DATE_OR_COCKTAIL_PARTY_ROSE: "DATE_OR_COCKTAIL_PARTY_ROSE",
    ROSE_CEREMONY_ROSE: "ROSE_CEREMONY_ROSE",
    HOMETOWN_DATE: "HOMETOWN_DATE",
    FANTASY_SUITE: "FANTASY_SUITE",
    PROPOSAL: "PROPOSAL",
    FINAL_ROSE: "FINAL_ROSE",
    GROUP_DATE_SOMETHING_EXTRA: "GROUP_DATE_SOMETHING_EXTRA",
};

export const weeklyScoring = [
    [
        {
            [SCORING_CATERGORIES_KEYS.DATE_OR_COCKTAIL_PARTY_ROSE]: [LEA],
        },
        {
            ELIMINATED: [
                CHANDLER,
                KAYLA,
                KYRA,
                LANIE,
                NAT,
                SAM,
                SAMANTHA,
                SANDRA,
                TALYAH,
                ZOE,
            ],
        },
    ],
    [
        {
            [SCORING_CATERGORIES_KEYS.GROUP_DATE]: [
                RACHEL,
                TAYLOR,
                KELSEY_T,
                LEXI,
                EVALIN,
                MARIA,
                LAUREN,
                JESS,
                KELSEY_A,
                CHRISSA,
                AUTUMN,
                JENN,
                MADINA,
                ALLISON,
                EDWINA,
                KATELYN,
                MARLENA,
                STARR,
            ],
        },
        {
            [SCORING_CATERGORIES_KEYS.RIDE_ON_ANY_FLYING_APPARATUS]: [DAISY],
        },
        {
            [SCORING_CATERGORIES_KEYS.GROUP_DATE_SOMETHING_EXTRA]: [
                RACHEL,
                EDWINA,
            ],
        },
        {
            [SCORING_CATERGORIES_KEYS.ONE_ON_ONE_DATE]: [DAISY],
        },
        {
            [SCORING_CATERGORIES_KEYS.DATE_OR_COCKTAIL_PARTY_ROSE]: [
                DAISY,
                JESS,
                EDWINA,
            ],
        },
        {
            ELIMINATED: [LAUREN, TAYLOR, ERIKA, MARLENA],
        },
    ],
];

const Contestant = (name, age, job, location, eliminated = false) => {
    let isEliminated = false;
    const weeklyPoints = [];

    _.times(CURRENT_WEEK - 1, (idx) => {
        const eventsForWeek = weeklyScoring[idx];
        let pointsForWeek = 0;

        // Add A Point For Not Getting Eliminated

        const determinateEvents = [];

        for (const event of eventsForWeek) {
            const scoringEventName = Object.keys(event)[0];

            if (
                ![
                    "ELIMINATED",
                    SCORING_CATERGORIES_KEYS.DATE_OR_COCKTAIL_PARTY_ROSE,
                ].includes(scoringEventName)
            ) {
                const eventKey = Object.keys(event)[0];
                const contestantsInvolved = Object.values(event)[0];

                if (contestantsInvolved?.includes(name)) {
                    if (name === "Daisy") {
                        console.log(
                            "44",
                            eventKey,
                            SCORING_CATERGORIES[eventKey].points
                        );
                    }
                    pointsForWeek += SCORING_CATERGORIES[eventKey].points;
                }
            } else {
                if (event.ELIMINATED) {
                    if (event.ELIMINATED.includes(name)) {
                        isEliminated = true;
                    }
                } else {
                    //SHOULD ONLY BE GROUP DATE OR COCKTAIL PARTY ROSE

                    if (
                        scoringEventName ===
                        " SCORING_CATERGORIES_KEYS.DATE_OR_COCKTAIL_PARTY_ROSE"
                    ) {
                        pointsForWeek +=
                            SCORING_CATERGORIES[scoringEventName].points;
                    }

                    //+1 For Surving Week
                    if (!isEliminated) {
                        pointsForWeek += 1;
                    }
                }
            }
        }

        weeklyPoints.push(pointsForWeek);
    });

    return {
        name,
        age: Number(age),
        job,
        location,
        eliminated: isEliminated,
        points: weeklyPoints,
    };
};

export const contestants = [
    Contestant("Allison", 26, "Realtor/Lauren's Sister", "Philadelphia, PA"),
    Contestant("Autumn", 26, "Account Executive", "St. Louis, MO"),
    Contestant("Chandler", "24", "Graphic Designer", "New York, NY", true),
    Contestant("Chrissa", "26", "Marketing Director", "Abbotsford, BC"),
    Contestant("Daisy", "25", "Account Executive", "MN"),
    Contestant("Edwina", "25", "Entrepreneur", "Atlanta, GA"),
    Contestant("Erika", "25", "Leasing Agent", "North Bergen, NJ", true),
    Contestant("Evalin", "29", "Nanny", "San Antonio, Texas"),
    Contestant("Jenn", "25", "Physician Assistant Student", "Miami, FL"),
    Contestant("Jess", "24", "Executive Assistant", "San Diego, CA"),
    Contestant("Katelyn", "25", "Radiochemist", "Santa Fe, NM"),
    Contestant("Kayla", "27", "Guidance Counselor", "Hamilton, OH", true),
    Contestant("Kelsey A.", "25", "Junior Project Manager", "New Orleans, LA"),
    Contestant("Kelsey T.", "31", "Actor", "Los Angeles, CA"),
    Contestant("Kyra", "26", "Paralegal", "Miami, FL", true),
    Contestant("Lanie", "27", "Realtor", "Philadelphia, PA", true),
    Contestant(
        "Lauren",
        "28",
        "Registered Nurse/Allison's Sister",
        "Philadelphia, PA",
        true
    ),
    Contestant("Lea", "23", "Account Manager", "Waipahu, HI"),
    Contestant("Lexi", "30", "Digital Strategist", "Atlanta, GA"),
    Contestant("Madina", "31", "Mental Health Therapist", "Charlotte, NC"),
    Contestant("Maria", "29", "Executive Assistant", "Kleinburg, ON"),
    Contestant(
        "Marlena",
        "26",
        "Finance Writer",
        "West Palm Beach, Florida",
        true
    ),
    Contestant("Nat", "26", "Registered Nurse/Professor", "Sudbury, CA", true),
    Contestant("Rachel", "26", "ICU Nurse", "Honolulu, HI"),
    Contestant("Sam", "31", "CPA", "Nashville, TN", true),
    Contestant("Samantha", "25", "Pro Football Cheerleader", "Miami, FL", true),
    Contestant(
        "Sandra",
        "26",
        "Cybersecurity Consultant",
        "Nashville, TN",
        true
    ),
    Contestant("Starr", "25", "Mental Health Counselor", "Delray Beach, FL"),
    Contestant("Sydney", "28", "Vintage Store Owner", "Newport, RI"),
    Contestant("Talyah", "23", "Esthetician", "Huntington Beach, CA", true),
    Contestant("Taylor", "23", "Recruiter", "Chicago, IL", true),
    Contestant("Zoe", "24", "Artist", "Atlanta, GA", true),
];

const CONESTANTS = contestants.reduce((contestantKeys, contestant) => {
    const nameKey = contestant.name.toUpperCase().replace(" ", "_");
    contestantKeys[nameKey] = contestant.name;

    return contestantKeys;
});
