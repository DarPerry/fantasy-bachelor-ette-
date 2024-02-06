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

function App() {
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
                        <Route index element={<ScoreCardView />} />
                        <Route path="rules" element={<RulesView />} />
                        <Route
                            path="contestants"
                            element={<ContestantsView />}
                        />
                        <Route path="scorecard" element={<ScoreCardView />} />
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
