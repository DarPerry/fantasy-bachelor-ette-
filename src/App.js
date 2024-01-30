import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import {
    Box,
    Container,
    Grid,
    List,
    ListItemText,
    Typography,
} from "@mui/material";
import Footer from "./components/Footer";
const RULES = [
    "League Commissioner determines the number of teams participating in their league and the number of Contestants per team",
    "Week 1 is for scouting, the game officially begins with Week 2",
    "League Commissioner organizes the draft — between Week 1 and 2 — to determine which Contestants are on which Team (draft recommendations below)",
    "Teams earn points based on their Contestants' performance over the course of the season",
    "Team with the most points at the end of the season wins the League",
];

const DRAFT_SECTIONS = [
    "To make sure you’re here for the right reasons, we wanted to share a couple of recommendations on how to run your Draft.",
    "Regardless of how you draft, we suggest making a night of it – gather all your Teams together in one place, share some gossip, and hold an in-person draft. Alternatively, if everyone is too busy sipping vino by the pool, you can easily hold your draft over e-mail. As Commissioner, the choice is up to you:",

    "Determine a draft order for the Teams, by seeing who can come up with the most creative date, who can come closest to guessing how many times the words “connection” or “journey” are used during the first episode, or simply picking out of a hat (any other random method of your choosing will do). Then hold a “snake” draft to pick one Contestant per round of the draft – the Team with the first pick in round one, picks last in round two; the Team with the second pick in round one, picks second to last in round two, etc. Once a Team picks a Contestant during the draft, that Contestant is “spoken for” and no other Team may select that Contestant.",
];

const ScoringCell = (label, score) => ({ label, score });

const Cell = ({ score = 1, label = "Group Date", index }) => {
    const borderStyle = "1px solid white";
    return (
        <Box
            sx={{
                width: "215px",
                borderBottom: borderStyle,
                pb: "59px",
                borderRight: borderStyle,
                borderLeft: borderStyle,
            }}
        >
            <Typography
                sx={{
                    fontSize: "79px",
                }}
            >
                {score}
            </Typography>
            <Typography
                sx={{
                    fontSize: "14px",
                    textTransform: "uppercase",
                }}
            >
                {label}
            </Typography>
        </Box>
    );
};

const PointGrid = () => {
    return (
        <Box>
            <Typography
                sx={{
                    mt: 6,
                    textTransform: "uppercase",
                    fontSize: 20,
                    fontWeight: 500,
                    letterSpacing: 2.3,
                    color: "white",
                }}
            >
                - Each Episode -
            </Typography>
            <Grid
                sx={{
                    mt: 7,
                }}
                container
                spacing={0}
            >
                {[
                    ScoringCell("Group Date", 1),
                    ScoringCell("Two-On-One Date", 1.5),
                    ScoringCell("One-On-One Date", 2),
                    ScoringCell("Ride on Any Flying Apparatus", 1),
                    ScoringCell(
                        "Receiving a Rose During a Date or Cocktail Party",
                        1
                    ),
                    ScoringCell(
                        "Receiving a Rose During the Rose Ceremony ",
                        1
                    ),
                ].map((value, index) => (
                    <Grid item xs={4}>
                        <Cell index={index} {...value}>
                            xs=8
                        </Cell>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

function App() {
    return (
        <div className="App">
            <Header />
            <Box
                sx={{
                    backgroundColor: "#eaeaea",
                    px: 9,
                    py: 11,
                    mx: "auto",
                    display: "flex",
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: "#93897e",
                        fontWeight: 500,
                        mr: 12,
                        fontSize: "88px",
                    }}
                >
                    Here Are The Rules To Win True Love
                </Typography>
                <List>
                    {RULES.map((rule, index) => (
                        <ListItemText key={index}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        color: "#2c3135",
                                        mr: 3,
                                    }}
                                >
                                    {index + 1}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "#93897e",
                                        fontSize: "14px",
                                        letterSpacing: ".1em",
                                        display: "inline-flex",
                                        textAlign: "left",
                                        mb: 3,
                                    }}
                                >
                                    {rule}
                                </Typography>
                            </Box>
                        </ListItemText>
                    ))}
                </List>
            </Box>
            <Box
                sx={{
                    backgroundColor: "#e9868a",
                    px: 9,
                    py: 11,
                    mx: "auto",
                    display: "flex",
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: 52,
                        color: "rgb(44, 49, 53)",
                        mx: "auto",
                    }}
                >
                    Points System
                    <PointGrid />
                </Typography>
            </Box>
            <Box
                sx={{
                    backgroundColor: "#eaeaea",
                    px: 9,
                    py: 11,
                    mx: "auto",
                    display: "flex",
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: "#93897e",
                        fontWeight: 500,
                        mr: 12,
                        fontSize: "88px",
                        minWidth: "425px",
                    }}
                >
                    How to Draft Your Team
                </Typography>
                <List>
                    {DRAFT_SECTIONS.map((rule, index) => (
                        <ListItemText
                            key={index}
                            primary={rule}
                            sx={{
                                color: "#2c3135",
                                fontSize: "14px",
                                pb:
                                    index === DRAFT_SECTIONS.length - 1
                                        ? 0
                                        : "25px",
                                textAlign: "left",
                            }}
                        />
                    ))}
                </List>
            </Box>
            <Footer />
        </div>
    );
}

export default App;
