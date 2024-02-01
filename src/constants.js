const Contestant = (name, age, job, location, eliminated = false) => ({
    name,
    age: Number(age),
    job,
    location,
    eliminated,
});

export const contestants = [
    Contestant("Allison", 26, "Realtor/Lauren's Sister", "Philadelphia, PA"),
    Contestant("Autumn", 26, "Account Executive", "St. Louis, MO "),
    Contestant("Chandler", "24", "Graphic Designer", "New York, NY", true),
    Contestant("Chrissa", "26", "Marketing Director", "Abbotsford, BC"),
    Contestant("Daisy", "25", "Account Executive", "MN"),
    Contestant("Edwina", "25", "Entrepreneur", "Atlanta, GA"),
    Contestant("Erika", "25", "Leasing Agent", "North Bergen, NJ"),
    Contestant("Evalin", "29", "Nanny", "San Antonio, Texas "),
    Contestant("Jenn", "25", "Physician Assistant Student", "Miami, FL"),
    Contestant("Jess", "24", "Executive Assistant", "San Diego, CA"),
    Contestant("Katelyn", "25", "Radiochemist", "Santa Fe, NM "),
    Contestant("Kayla", "27", "Guidance Counselor", "Hamilton, OH"),
    Contestant("Kelsey A.", "25", "Junior Project Manager", "New Orleans, LA"),
    Contestant("Kelsey T.", "31", "Actor", "Los Angeles, CA"),
    Contestant("Kyra", "26", "Paralegal", "Miami, FL"),
    Contestant("Lanie", "27", "Realtor", "Philadelphia, PA"),
    Contestant(
        "Lauren",
        "28",
        "Registered Nurse/Allison's Sister",
        "Philadelphia, PA"
    ),
    Contestant("Lea", "23", "Account Manager", "Waipahu, HI"),
    Contestant("Lexi", "30", "Digital Strategist", "Atlanta, GA"),
    Contestant("Madina", "31", "Mental Health Therapist", "Charlotte, NC"),
    Contestant("Maria", "29", "Executive Assistant", "Kleinburg, ON"),
    Contestant("Marlena", "26", "Finance Writer", "West Palm Beach, Florida "),
    Contestant("Nat", "26", "Registered Nurse/Professor", "Sudbury, CA"),
    Contestant("Rachel", "26", "ICU Nurse", "Honolulu, HI"),
    Contestant("Sam", "31", "CPA", "Nashville, TN "),
    Contestant("Samantha", "25", "Pro Football Cheerleader", "Miami, FL"),
    Contestant("Sandra", "26", "Cybersecurity Consultant", "Nashville, TN"),
    Contestant("Starr", "25", "Mental Health Counselor", "Delray Beach, FL"),
    Contestant("Sydney", "28", "Vintage Store Owner", "Newport, RI"),
    Contestant("Talyah", "23", "Esthetician", "Huntington Beach, CA"),
    Contestant("Taylor", "23", "Recruiter", "Chicago, IL"),
    Contestant("Zoe", "24", "Artist", "Atlanta, GA"),
];
