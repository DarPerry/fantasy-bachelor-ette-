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
                    const handleSelectChange = () => {};

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
            <Button variant="contained" onClick={() => console.log(formData)}>
                Submit
            </Button>
        </Box>
    );
};

export default AdminView;
