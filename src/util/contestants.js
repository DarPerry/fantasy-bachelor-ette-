export const getContestantImage = (name) => {
    if (!name) return null;

    return `/assets/${name
        .toLowerCase()
        .replace(".", "")
        .replace(" ", "-")}.jpg`;
};
