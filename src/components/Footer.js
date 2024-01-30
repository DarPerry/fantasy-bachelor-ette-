import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Footer = () => {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: "white",
                px: 20,
                boxShadow: "none",
            }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                {[
                    "Terms of Use",
                    "Privacy Policy",
                    "Content Policy",
                    "FAQ",
                    "CONTACT",
                    "@SOCIALHANDLE",
                ].map((optionLabel) => (
                    <Typography
                        color="#2c3135"
                        sx={{
                            fontWeight: 500,
                            fontSize: "14px",
                            my: 4,
                        }}
                    >
                        {optionLabel}
                    </Typography>
                ))}{" "}
            </Toolbar>
        </AppBar>
    );
};

export default Footer;
