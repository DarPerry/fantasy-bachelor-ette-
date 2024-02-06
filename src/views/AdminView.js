import {
    Box,
    Button,
    Chip,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { CURRENT_WEEK, SCORING_CATERGORIES, contestants } from "../constants";
import MultiSelect from "../components/common/MultiSelect";
import EventsForWeek from "../models/EventsForWeek";
import axios from "axios";
import toast from "react-hot-toast";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const AdminView = () => {
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
                    if (CURRENT_WEEK < 6 && frequency === "each episode") {
                        return (
                            <MultiSelect
                                key={key}
                                ruleKey={key}
                                label={category}
                                value={formData[key]}
                                setValue={(value) =>
                                    setFormData({ ...formData, [key]: value })
                                }
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
                        "https://fbl-server.onrender.com/weeklyEvents",
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
