import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import {
    Box,
    Container,
    Grid,
    List,
    ListItemText,
    Paper,
    Typography,
} from "@mui/material";
import Footer from "./components/Footer";
import _ from "lodash";
import RulesView from "./views/RulesView";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ContestantsView from "./views/ContestantsView";
import ScoreCardView from "./views/ScoreCardView";
import AdminView from "./views/AdminView";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";
import { SCORING_CATERGORIES, SCORING_CATERGORIES_KEYS } from "./constants";

function App() {
    const [contestants, setContestants] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data: contestantsData } = await axios.get(
                "https://fbl-server.onrender.com/contestants"
            );
            const { data: weeklyEventsData } = await axios.get(
                "https://fbl-server.onrender.com/weeklyEvents"
            );

            console.log(weeklyEventsData);

            const contestantSeasonData = contestantsData.map((contestant) => {
                let isEliminated = false;

                const name = contestant.name;
                const weeklyPoints = weeklyEventsData.reduce(
                    (acc, { events: eventMap }) => {
                        let pointsForWeek = 0;

                        const contestantsEliminatedThisWeek =
                            eventMap?.ELIMINATED.includes(name);

                        Object.entries(eventMap).forEach(
                            ([event, contestantsInvolved]) => {
                                const scoringEventName = event;

                                if (
                                    ![
                                        "ELIMINATED",
                                        SCORING_CATERGORIES_KEYS.DATE_OR_COCKTAIL_PARTY_ROSE,
                                    ].includes(scoringEventName)
                                ) {
                                    const eventKey = Object.keys(event)[0];

                                    if (contestantsInvolved?.includes(name)) {
                                        pointsForWeek +=
                                            SCORING_CATERGORIES[
                                                scoringEventName
                                            ].points;
                                    }
                                } else {
                                    if (scoringEventName === "ELIMINATED") {
                                        if (contestantsEliminatedThisWeek) {
                                            isEliminated = true;
                                        }
                                    } else {
                                        //SHOULD ONLY BE GROUP DATE OR COCKTAIL PARTY ROSE

                                        if (
                                            scoringEventName ===
                                            "SCORING_CATERGORIES_KEYS.DATE_OR_COCKTAIL_PARTY_ROSE"
                                        ) {
                                            pointsForWeek +=
                                                SCORING_CATERGORIES[
                                                    scoringEventName
                                                ].points;
                                        }

                                        //+1 For Surving Week
                                        if (!contestantsEliminatedThisWeek) {
                                            pointsForWeek += 1;
                                        }
                                    }
                                }
                            }
                        );

                        return acc.concat(pointsForWeek);
                    },
                    []
                );

                return {
                    ...contestant,
                    eliminated: isEliminated,
                    points: weeklyPoints,
                };
            });

            setContestants(contestantSeasonData);
        };

        fetchData();
    }, []);

    return (
        <div className="App" style={{ fontSize: 16 }}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Toaster />
                                <Header />
                                <Outlet />
                                <Footer />
                            </>
                        }
                    >
                        <Route
                            index
                            element={
                                <ScoreCardView contestants={contestants} />
                            }
                        />
                        <Route path="rules" element={<RulesView />} />
                        <Route
                            path="contestants"
                            element={<ContestantsView />}
                        />
                        <Route
                            path="scorecard"
                            element={
                                <ScoreCardView contestants={contestants} />
                            }
                        />
                        <Route path="admin" element={<AdminView />} />
                        {/* <Route path="*" element={<NoPage />} /> */}
                    </Route>
                </Routes>
            </BrowserRouter>

            {/* <img
                src={
                    "https://cdn1.edgedatg.com/aws/v2/abc/TheBachelor/person/4362397/0fa781b5411ff6127e806dedf6e1404b/1600x640-Q90_0fa781b5411ff6127e806dedf6e1404b.jpg"
                }
                alt="allison"
            /> */}
        </div>
    );
}

export default App;
