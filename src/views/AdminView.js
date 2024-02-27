import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import {
    CURRENT_WEEK,
    SCORING_CATERGORIES,
    WEEK_OF_HOME_TOWN_DATES,
} from "../constants";
import MultiSelect from "../components/common/MultiSelect";
import EventsForWeek from "../models/EventsForWeek";
import axios from "axios";
import toast from "react-hot-toast";
import { DOMAIN } from "../util/api";

console.log(SCORING_CATERGORIES);

const AdminView = ({ contestants }) => {
    const [formData, setFormData] = useState(
        Object.keys(SCORING_CATERGORIES).reduce((acc, key) => {
            acc[key] = [];
            return acc;
        }, {})
    );

    return (
        <Box>
            <Typography>Admin View</Typography>
            {Object.entries(SCORING_CATERGORIES).map(
                ([key, { category, frequency }]) => {
                    if (
                        CURRENT_WEEK <= WEEK_OF_HOME_TOWN_DATES &&
                        frequency === "each episode"
                    ) {
                        return (
                            <MultiSelect
                                key={key}
                                ruleKey={key}
                                label={category}
                                value={formData[key]}
                                setValue={(value) =>
                                    setFormData({ ...formData, [key]: value })
                                }
                                contestants={contestants}
                            />
                        );
                    }
                }
            )}
            <Button
                variant="contained"
                onClick={async () => {
                    const eventsWithValues = Object.entries(formData).reduce(
                        (acc, [key, value]) => {
                            if (value.length) {
                                acc[key] = value;
                            }
                            return acc;
                        },
                        {}
                    );

                    console.log(
                        EventsForWeek({
                            week: CURRENT_WEEK,
                            events: eventsWithValues,
                        })
                    );

                    // const { data } = await axios.post(
                    //     "http://localhost:3030/weeklyEvents",
                    //     EventsForWeek({
                    //         week: CURRENT_WEEK,
                    //         events: eventsWithValues,
                    //     })
                    // );

                    const { data } = await axios.post(
                        `${DOMAIN}/weeklyEvents`,
                        EventsForWeek({
                            week: CURRENT_WEEK,
                            events: eventsWithValues,
                        })
                    );

                    toast(`Week ${CURRENT_WEEK} Events Submitted!`, {
                        icon: "👏",
                    });
                }}
            >
                Submit
            </Button>
        </Box>
    );
};

export default AdminView;
