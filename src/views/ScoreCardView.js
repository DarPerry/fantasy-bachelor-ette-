import { Avatar, Box, Typography } from "@mui/material";
import _ from "lodash";

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
    backgroundColor,
    teamName = "<Team Name>",
    reverse = false,
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
                    sx={{ backgroundColor }}
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
                            textAlign: "left",
                        }}
                    >
                        {manager}
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: 12,
                            textAlign: "left",
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
                123
            </Typography>
        </Box>
    );
};

const ContestantScoreCardCell = ({ reversed }) => {
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
                            }}
                        >
                            Contestant Name
                        </Typography>
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: 12,
                                color: "rgb(121, 123, 125)",
                            }}
                        >
                            Age
                        </Typography>
                    </Box>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: 12,
                            color: "rgb(121, 123, 125)",
                            textAlign: "left",
                        }}
                        mt={0.25}
                    >
                        Job and Location
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
                123
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
            <ContestantScoreCardCell />
            <Box
                sx={{
                    color: "rgb(121, 123, 125)",
                    backgroundColor: "rgb(249, 249, 251)",
                    fontWeight: 700,
                    fontSize: 11,
                    display: "flex",
                    alignItems: "center",
                    // lineHeight: 13,
                }}
                px={2}
            >
                {index + 1}
                {suffixMap[index + 1]}
            </Box>
            <ContestantScoreCardCell reversed />
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
                    <ScoreCardTeamHeader
                        manager={"Jill"}
                        backgroundColor={"#E0B0FF"}
                    />
                    <ScoreCardTeamHeader
                        manager={"Darius"}
                        backgroundColor={"#228B22"}
                        reverse
                    />
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
