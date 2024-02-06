import _ from "lodash";

export const CURRENT_WEEK = 3;

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

export const SCORING_CATERGORIES = {
    GROUP_DATE: ScoringRule("Group Date", 1),
    "TWO-ON-ONE_DATE": ScoringRule("Two-on-One Date", 1.5),
    ONE_ON_ONE_DATE: ScoringRule("One-on-One Date", 2),
    RIDE_ON_ANY_FLYING_APPARATUS: ScoringRule(
        "Ride on Any Flying Apparatus",
        1
    ),
    DATE_OR_COCKTAIL_PARTY_ROSE: ScoringRule(
        "Received Rose - Cocktail Party or Date",
        0.5
    ),
    ROSE_CEREMONY_ROSE: ScoringRule("Received Rose - Rose Ceremony", 1),
    GROUP_DATE_SOMETHING_EXTRA: ScoringRule(
        "Group Date -  Something Extra",
        0.5
    ),
    ELIMINATED: ScoringRule("Eliminated", 0),
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

export const SCORING_CATERGORIES_KEYS = {
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

// const Contestant = (name, age, job, location, team) => {
//     let isEliminated = false;
//     const weeklyPoints = [];

//     _.times(CURRENT_WEEK - 1, (idx) => {
//         const eventsForWeek = weeklyScoring[idx];
//         let pointsForWeek = 0;

//         // Add A Point For Not Getting Eliminated

//         const contestantsEliminatedThisWeek = eventsForWeek.find(
//             (a) => Object.keys(a)[0] === "ELIMINATED"
//         )?.ELIMINATED;

//         console.log("Week", idx + 1, contestantsEliminatedThisWeek);

//         console.log(name, isEliminated);

//         const determinateEvents = [];

//         for (const event of eventsForWeek) {
//             const scoringEventName = Object.keys(event)[0];

//             if (
//                 ![
//                     "ELIMINATED",
//                     SCORING_CATERGORIES_KEYS.DATE_OR_COCKTAIL_PARTY_ROSE,
//                 ].includes(scoringEventName)
//             ) {
//                 const eventKey = Object.keys(event)[0];
//                 const contestantsInvolved = Object.values(event)[0];

//                 if (contestantsInvolved?.includes(name)) {
//                     console.log(scoringEventName, "scoringEventName", name);

//                     pointsForWeek += SCORING_CATERGORIES[eventKey].points;
//                 }
//             } else {
//                 if (scoringEventName === "ELIMINATED") {
//                     if (event.ELIMINATED.includes(name)) {
//                         isEliminated = true;
//                     }
//                 } else {
//                     //SHOULD ONLY BE GROUP DATE OR COCKTAIL PARTY ROSE

//                     if (
//                         scoringEventName ===
//                         "SCORING_CATERGORIES_KEYS.DATE_OR_COCKTAIL_PARTY_ROSE"
//                     ) {
//                         pointsForWeek +=
//                             SCORING_CATERGORIES[scoringEventName].points;
//                     }

//                     //+1 For Surving Week
//                     if (!contestantsEliminatedThisWeek?.includes(name)) {
//                         console.log(name, "survied week", idx + 1);
//                         pointsForWeek += 1;
//                     }
//                 }
//             }
//         }

//         weeklyPoints.push(pointsForWeek);
//     });

//     return {
//         name,
//         age: Number(age),
//         job,
//         location,
//         // eliminated: isEliminated,
//         // points: weeklyPoints,
//         team,
//     };
// };
