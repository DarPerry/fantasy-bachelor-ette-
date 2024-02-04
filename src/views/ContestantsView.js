import {
    Box,
    Stack,
    Typography,
    Paper,
    Avatar,
    Chip,
    Fab,
    Container,
} from "@mui/material";
import { contestants } from "../constants";
import {
    faBan,
    faChevronCircleLeft,
    faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _ from "lodash";
import { useState } from "react";

const ScoreTile = ({ week, points }) => {
    return (
        <Box
            sx={{
                backgroundColor: "#eaeaea",
                width: "100%",
                py: 0.5,
            }}
        >
            <Typography
                sx={{
                    color: "#93897e",
                    fontSize: 12,
                }}
            >
                {week}
            </Typography>
            <Typography
                sx={{
                    fontWeight: "bold",
                    color: "#2c3135",
                }}
            >
                {points}
            </Typography>
        </Box>
    );
};

const ContestantRow = ({ name, age, job, location, eliminated, points }) => {
    const [team, setTeam] = useState(null);

    const showDraftButtons = !team;
    const isTeamJill = team === "Jill";
    const isTeamDarius = team === "Darius";
    const moveDistance = "35";

    const imageUrl = `/assets/${name
        .toLowerCase()
        .replace(".", "")
        .replace(" ", "-")}.jpg`;
    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {showDraftButtons && (
                <Fab
                    variant="extended"
                    color="secondary"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        mr: 2,
                    }}
                    onClick={() => setTeam("Jill")}
                >
                    <FontAwesomeIcon
                        icon={faChevronCircleLeft}
                        style={{
                            marginRight: 5,
                        }}
                        size="xl"
                    />
                    Team Jill
                </Fab>
            )}
            <Paper
                textAlign="left"
                sx={{
                    display: "flex",
                    width: 560,
                    alignItems: "center",
                    opacity: eliminated ? 0.3 : 1,
                    borderWidth: 3,
                    position: "relative",
                    borderStyle: "solid",
                    borderColor: eliminated ? "red" : "#93897e",
                    justifyContent: "space-between",
                    left: showDraftButtons
                        ? 0
                        : !isTeamJill
                        ? `${moveDistance * 2}%`
                        : `-${moveDistance}%`,
                    // left: isTeamJill ? `-${moveDistance}%` : 0,
                    // right: isTeamDarius ? `-${moveDistance}%` : 0,
                    transition: "left 0.5s",
                }}
            >
                {eliminated && (
                    <FontAwesomeIcon
                        icon={faBan}
                        style={{
                            position: "absolute",
                            zIndex: 1,
                            fontSize: 60,
                            color: "red",
                            left: "43%",
                        }}
                    />
                )}
                <Box
                    sx={{
                        width: "100%",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            padding: 1,
                        }}
                    >
                        <Avatar
                            alt="Remy Sharp"
                            src={imageUrl}
                            sx={{ width: 80, height: 80 }}
                        />
                        <Box p={2}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: 18,
                                        fontWeight: "bold",
                                    }}
                                >
                                    {name}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: 15,
                                        fontWeight: "bold",
                                        color: "rgb(118, 118, 118)",
                                        position: "relative",
                                        bottom: -1,
                                    }}
                                    ml={1}
                                >
                                    {age}
                                </Typography>
                            </Box>

                            <Stack direction="row" spacing={1} mt={0.5}>
                                <Chip label={job} size="small" />
                                <Chip label={location} size="small" />
                            </Stack>
                        </Box>
                    </Box>
                    <Stack
                        direction="row"
                        sx={{
                            borderTop: "1px solid #93897e",
                        }}
                    >
                        {_.times(9).map((idx) => (
                            <ScoreTile week={idx + 1} points={points[idx]} />
                        ))}
                    </Stack>
                </Box>

                {/* <img src={"/allison.jpg"} alt="logo" /> */}

                <Box
                    sx={{
                        backgroundColor: "#f8f9fc",
                        height: "154px",
                        boxSizing: "border-box",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 0.5,
                        borderLeft: "2px solid #93897e",
                        width: 170,
                    }}
                    py={1.5}
                    px={2.5}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "flex-end",
                            gap: 0.5,
                        }}
                    >
                        <Typography
                            sx={{
                                color: "rgb(51, 51, 51)",
                                fontWeight: 800,
                                fontSize: 24,
                            }}
                        >
                            {points[0] + points[1]}
                        </Typography>
                        <Typography
                            sx={{
                                color: "rgb(51, 51, 51)",
                                fontWeight: 700,
                                fontSize: 12,
                                position: "relative",
                                bottom: 3,
                            }}
                        >
                            Points
                        </Typography>
                    </Box>
                    <Typography
                        sx={{
                            color: "rgb(51, 51, 51)",
                            fontWeight: 600,
                            fontSize: 11,
                        }}
                    >
                        In Weeks 1-2
                    </Typography>
                </Box>
            </Paper>
            {showDraftButtons && (
                <Fab
                    variant="extended"
                    color="primary"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        ml: 2,
                    }}
                    onClick={() => setTeam("Darius")}
                >
                    Team Darius
                    <FontAwesomeIcon
                        icon={faChevronCircleRight}
                        style={{
                            marginLeft: 5,
                        }}
                        size="xl"
                    />
                </Fab>
            )}
        </Container>
    );
};

const ContestantsView = () => {
    const jillsTeam = contestants.filter(({ team }) => team === "Jill");
    const dariusTeam = contestants.filter(({ team }) => team === "Darius");

    return (
        <Box
            sx={{
                backgroundColor: "#f7f7f7",
                py: 8,
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    color: "#93897e",
                    fontSize: 52,
                }}
            >
                Contestants
            </Typography>
            <Box sx={{ width: "100%" }}>
                <Stack
                    spacing={2}
                    direction="column"
                    flexWrap="wrap"
                    useFlexGap
                    justifyContent="center"
                    alignContent={"center"}
                >
                    {_.orderBy(
                        contestants.filter(({ eliminated }) => !eliminated),
                        "points",
                        "desc"
                    ).map((contestant) => (
                        <ContestantRow {...contestant} />
                    ))}
                    {_.orderBy(
                        contestants.filter(({ eliminated }) => eliminated),
                        "points",
                        "desc"
                    ).map((contestant) => (
                        <ContestantRow {...contestant} />
                    ))}
                </Stack>
            </Box>
        </Box>
    );
};

export default ContestantsView;
