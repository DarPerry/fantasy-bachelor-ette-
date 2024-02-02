import { Box, Stack, Typography, Paper, Avatar, Chip } from "@mui/material";
import { contestants } from "../constants";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _ from "lodash";

const ContestantRow = ({ name, age, job, location, eliminated, points }) => {
    const imageUrl = `/assets/${name
        .toLowerCase()
        .replace(".", "")
        .replace(" ", "-")}.jpg`;
    return (
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
                borderColor: eliminated ? "red" : "gray",
                justifyContent: "space-between",
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
            {/* <img src={"/allison.jpg"} alt="logo" /> */}

            <Box
                sx={{
                    backgroundColor: "#f8f9fc",
                    height: "100%",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 0.5,
                    borderLeft: "2px solid gray",
                }}
                py={2}
                px={3}
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
    );
};

const ContestantsView = () => {
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
                    direction="row"
                    flexWrap="wrap"
                    useFlexGap
                    justifyContent="center"
                >
                    {_.sortBy(contestants, "eliminated").map((contestant) => (
                        <ContestantRow {...contestant} />
                    ))}
                </Stack>
            </Box>
        </Box>
    );
};

export default ContestantsView;
