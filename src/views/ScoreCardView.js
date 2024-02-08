import { Avatar, Box, Typography } from "@mui/material";
import _ from "lodash";
import { getContestantImage } from "../util/contestants";
import ViewHeader from "../components/ViewHeader";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSpinner, faXmark } from "@fortawesome/free-solid-svg-icons";

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
                {/* <Avatar
                    alt={manager}
                    src="/static/images/avatar/1.jpg"
                    sx={{ backgroundColor: color, width: 38, height: 40 }}
                /> */}
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
    const { name, age, job, location, eliminated, ...rest } = contestant;

    const score = _.sum(contestant.points);
    console.log(555, rest);

    return (
        <Box
            sx={{
                display: "flex",
                borderBottom: "1px solid rgb(241, 242, 243)",
                borderLeft: "1px solid rgb(241, 242, 243)",
                borderRight: "1px solid rgb(241, 242, 243)",

                padding: 2,
                gap: 1.1,
                // justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#eaeaea",
                width: "100%",
                flexDirection: "column",
                opacity: eliminated ? 0.5 : 1,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    flexDirection: reversed ? "row-reverse" : "row",
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
                                    letterSpacing: "0.25px",
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
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                }}
            >
                {_.times(9).map((i) => {
                    const value = contestant.points[i];
                    const showEliminatedIcon =
                        contestant.points[i - 1] && !value && eliminated;

                    if (eliminated) {
                        console.log(
                            "showEliminatedIcon",
                            contestant.points[i - 1],
                            !value
                        );
                    }

                    if (showEliminatedIcon) {
                        return <FontAwesomeIcon icon={faXmark} color="red" />;
                    }

                    return (
                        <Box
                            sx={{
                                backgroundColor: "#9a88b6",

                                fontSize: ".5rem",
                                width: 15,
                                height: 15,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "white",
                                borderRadius: 2,
                                opacity: value ? 1 : 0.3,
                                lineHeight: 0,
                                visibility:
                                    !value && eliminated ? "hidden" : "flex",
                            }}
                        >
                            {value}
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
};

const ScoreCardRow = ({ index, jillInfo, dariusInfo }) => {
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

const ScoreCardView = ({ contestants = [] }) => {
    console.log(666666, contestants);

    if (!contestants.length) return <Box></Box>;

    const teams = [
        {
            manager: "Jill",
            color: "#E0B0FF",
            teamName: "Can I Steal You For A Sec?",
            team: _.orderBy(
                contestants.filter((contestant) => contestant.team === "Jill"),
                ({ points }) => _.sum(points),
                "desc"
            ),
        },
        {
            manager: "Darius",
            color: "#228B22",
            teamName: "#PeteSZNBestSZN",
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
            {!contestants.length ? (
                <FontAwesomeIcon
                    icon={faSpinner}
                    color="#e9868a"
                    spin
                    size="3x"
                    style={{
                        padding: "300px 0",
                    }}
                />
            ) : (
                <>
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
                        {contestants.length &&
                            _.times(6).map((i) => (
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
                </>
            )}
        </Box>
    );
};

export default ScoreCardView;
