import { Avatar, Box, Typography } from "@mui/material";
import _, { sum, sumBy } from "lodash";
import { contestants } from "../constants";
import { getContestantImage } from "../util/contestants";
import ViewHeader from "../components/ViewHeader";

const suffixMap = {
    1: "st",
    2: "nd",
    3: "rd",
    4: "th",
    5: "th",
    6: "th",
};

const ScoreCardTeamHeader = ({
    manager,
    color,
    teamName,
    reverse = false,
    // score,
    team,
}) => {
    const score = _.sumBy(team, ({ points }) => _.sum(points));

    return (
        <Box
            sx={{
                display: "flex",
                gap: 4,
                padding: 2,
                flexDirection: reverse ? "row-reverse" : "row",
                width: "100%",
                borderTop: "1px solid rgba(247,247,247,0.3)",
                borderLeft: "1px solid rgba(247,247,247,0.3)",
                borderRight: "1px solid rgba(247,247,247,0.3)",

                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#e9868a",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    gap: 1.5,
                    flexDirection: reverse ? "row-reverse" : "row",
                    alignItems: "center",
                    textAlign: reverse ? "right" : "left",
                }}
            >
                <Avatar
                    alt={manager}
                    src="/static/images/avatar/1.jpg"
                    sx={{ backgroundColor: color, width: 38, height: 38 }}
                />
                <Box>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: "1.0625rem",
                            fontWeight: 700,
                            color: "#2c3135",
                        }}
                    >
                        {manager}
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: ".6875rem",
                            textAlign: reverse ? "right" : "left",
                            color: "white",
                            fontWeight: 400,
                        }}
                    >
                        {teamName}
                    </Typography>
                    {/* <Typography
                        variant="h3"
                        sx={{
                            fontSize: 12,
                            textAlign: reverse ? "right" : "left",
                        }}
                    >
                        1st || 2nd Place
                    </Typography> */}
                </Box>
            </Box>

            <Typography
                sx={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#2c3135",
                }}
            >
                {score || "--"}
            </Typography>
        </Box>
    );
};

const ContestantScoreCardCell = ({ reversed, contestant = {}, theme }) => {
    const { name, age, job, location } = contestant;

    const score = _.sum(contestant.points);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: reversed ? "row-reverse" : "row",
                borderBottom: "1px solid rgb(241, 242, 243)",
                borderLeft: "1px solid rgb(241, 242, 243)",
                borderRight: "1px solid rgb(241, 242, 243)",

                padding: 2,
                gap: 3,
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                height: "fit-content",
                backgroundColor: "#eaeaea",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    gap: 1.25,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: reversed ? "row-reverse" : "row",
                }}
            >
                <Avatar
                    alt={name}
                    src={getContestantImage(name)}
                    sx={{
                        width: 32,
                        height: 32,
                    }}
                />
                <Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: reversed ? "end" : "start",
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: 14,
                                color: theme,
                                textAlign: reversed ? "right" : "left",
                                fontWeight: 700,
                            }}
                        >
                            {name}
                        </Typography>
                        {/* <Typography
                            variant="h3"
                            sx={{
                                fontSize: "0.9375rem",
                                color: "2c3135",
                                fontWeight: 400,
                            }}
                        >
                            {age}
                        </Typography> */}
                    </Box>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: "0.7rem",
                            color: "rgb(121, 123, 125)",
                            textAlign: reversed ? "right" : "left",
                            color: "2c3135",
                            fontWeight: "400",
                        }}
                        mt={0.25}
                    >
                        {age} • {location.split(",")[1]}
                    </Typography>
                </Box>
            </Box>
            <Typography
                sx={{
                    fontSize: 16,
                    // padding: 3,
                    fontWeight: 700,
                    color: "#2c3135",
                }}
            >
                {score || "--"}
            </Typography>
        </Box>
    );
};

const ScoreCardRow = ({
    index,
    team,

    jillInfo,
    dariusInfo,
}) => {
    const jillsTeam = jillInfo.team;
    const dariusTeam = dariusInfo.team;

    const jillTheme = jillInfo.color;
    const dariusTheme = dariusInfo.color;

    return (
        <Box
            sx={{
                display: "flex",
            }}
        >
            <ContestantScoreCardCell
                contestant={jillsTeam[index]}
                theme={jillTheme}
            />
            {/* <Box
                sx={{
                    color: "rgb(121, 123, 125)",
                    backgroundColor: "#818c8e",
                    fontWeight: 700,
                    fontSize: 11,
                    display: "flex",
                    alignItems: "center",
                    width: 60,
                    justifyContent: "center",
                    color: "white",
                    // lineHeight: 13,
                }}
                px={2}
            >
                {index + 1}
                {suffixMap[index + 1]}
            </Box> */}
            <ContestantScoreCardCell
                contestant={dariusTeam[index]}
                theme={dariusTheme}
                reversed
            />
        </Box>
    );
};

const scoreCardView = (props) => {
    const teams = [
        {
            manager: "Jill",
            color: "#E0B0FF",
            teamName: "Team Jill",
            team: _.orderBy(
                contestants.filter((contestant) => contestant.team === "Jill"),
                ({ points }) => _.sum(points),
                "desc"
            ),
        },
        {
            manager: "Darius",
            color: "#228B22",
            teamName: "#PeterSZNBestSZN",
            reverse: true,
            team: _.orderBy(
                contestants.filter(
                    (contestant) => contestant.team === "Darius"
                ),
                ({ points }) => _.sum(points),
                "desc"
            ),
        },
    ];

    return (
        <Box
            // px={15}
            py={4}
            px={1}
            sx={{
                backgroundColor: "#f7f7f7",
            }}
        >
            <ViewHeader />
            <Box mt={3}>
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
                    borderTop: "1px solid rgba(247,247,247,0.3)",
                    borderBottom: "1px solid rgba(247,247,247,0.3)",
                }}
            >
                {_.times(6).map((i) => (
                    <ScoreCardRow
                        key={i}
                        index={i}
                        jillInfo={teams[0]}
                        dariusInfo={teams[1]}
                        jillsTeam={teams[0].team}
                        dariusTeam={teams[1].team}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default scoreCardView;
