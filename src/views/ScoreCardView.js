import { Avatar, Box, Typography } from "@mui/material";
import _ from "lodash";
import { contestants } from "../constants";

const teams = [
    {
        manager: "Jill",
        color: "#E0B0FF",
        teamName: "Team Jill",
    },
    {
        manager: "Darius",
        color: "#228B22",
        teamName: "#PeteSZNBestSZN",
        reverse: true,
    },
];

const suffixMap = {
    1: "st",
    2: "nd",
    3: "rd",
    4: "th",
    5: "th",
    6: "th",
};

const jillsTeam = contestants.filter(
    (contestant) => contestant.team === "Jill"
);
const dariusTeam = contestants.filter(
    (contestant) => contestant.team === "Darius"
);

const ScoreCardTeamHeader = ({
    manager,
    color,
    teamName,
    reverse = false,
    score,
}) => {
    return (
        <Box
            sx={{
                display: "flex",
                gap: 4,
                padding: 2,
                flexDirection: reverse ? "row-reverse" : "row",
                width: "100%",
                border: "1px solid rgb(241, 242, 243)",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    gap: 1.5,
                    flexDirection: reverse ? "row-reverse" : "row",
                }}
            >
                <Avatar
                    alt={manager}
                    src="/static/images/avatar/1.jpg"
                    sx={{ backgroundColor: color }}
                />
                <Box>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: 22,
                            fontWeight: 700,
                        }}
                    >
                        {teamName}
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: 12,
                            textAlign: reverse ? "right" : "left",
                        }}
                    >
                        {manager}
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: 12,
                            textAlign: reverse ? "right" : "left",
                        }}
                    >
                        1st || 2nd Place
                    </Typography>
                </Box>
            </Box>

            <Typography
                sx={{
                    fontSize: 28,
                    fontWeight: 700,
                }}
            >
                {score || "--"}
            </Typography>
        </Box>
    );
};

const ContestantScoreCardCell = ({ reversed, score, contestant = {} }) => {
    const { name, age, job, location } = contestant;
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: reversed ? "row-reverse" : "row",
                border: "1px solid rgb(241, 242, 243)",
                padding: 2,
                gap: 3,
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                height: "fit-content",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    gap: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: reversed ? "row-reverse" : "row",
                }}
            >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Box>
                    <Box
                        sx={{
                            display: "flex",
                            gap: 1.5,
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: 14,
                                color: "green",
                                textAlign: reversed ? "right" : "left",
                            }}
                        >
                            {name}
                        </Typography>
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: 12,
                                color: "rgb(121, 123, 125)",
                            }}
                        >
                            {age}
                        </Typography>
                    </Box>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: 12,
                            color: "rgb(121, 123, 125)",
                            textAlign: reversed ? "right" : "left",
                        }}
                        mt={0.25}
                    >
                        {job} | {location}
                    </Typography>
                </Box>
            </Box>
            <Typography
                sx={{
                    fontSize: 16,
                    // padding: 3,
                    fontWeight: 700,
                    color: "rgb(121, 123, 125)",
                }}
            >
                {score || "--"}
            </Typography>
        </Box>
    );
};

const ScoreCardRow = ({ index }) => {
    return (
        <Box
            sx={{
                display: "flex",
            }}
        >
            <ContestantScoreCardCell contestant={jillsTeam[index]} />
            <Box
                sx={{
                    color: "rgb(121, 123, 125)",
                    backgroundColor: "rgb(249, 249, 251)",
                    fontWeight: 700,
                    fontSize: 11,
                    display: "flex",
                    alignItems: "center",
                    width: 60,
                    justifyContent: "center",
                    // lineHeight: 13,
                }}
                px={2}
            >
                {index + 1}
                {suffixMap[index + 1]}
            </Box>
            <ContestantScoreCardCell contestant={dariusTeam[index]} reversed />
        </Box>
    );
};

const scoreCardView = (props) => {
    return (
        <Box px={15}>
            <Typography variant="h2">Score Card</Typography>
            <Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    {teams.map((team) => (
                        <ScoreCardTeamHeader {...team} />
                    ))}
                </Box>
            </Box>
            <Box
                sx={{
                    borderTop: "1px solid rgb(241, 242, 243)",
                    borderBottom: "1px solid rgb(241, 242, 243)",
                }}
            >
                {_.times(6).map((i) => (
                    <ScoreCardRow key={i} index={i} />
                ))}
            </Box>
        </Box>
    );
};

export default scoreCardView;
