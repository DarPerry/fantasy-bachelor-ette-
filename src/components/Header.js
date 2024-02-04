import { faRing } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const MENU_OPTIONS = ["Rules", "Contestants", "Scorecard"];

const Header = () => {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: "#2c3135",
            }}
        >
            <Toolbar>
                <FontAwesomeIcon
                    icon={faRing}
                    size="lg"
                    color="#92887d"
                    style={{
                        marginRight: "8px",
                    }}
                />
                <Typography
                    variant="h6"
                    // noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                        mr: 2,
                        // display: { xs: "none", md: "flex" },
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        // color: "inherit",
                        textDecoration: "none",
                        color: "#92887d",
                        flexGrow: 1,
                        textAlign: "left",
                    }}
                >
                    BFL
                </Typography>
                {MENU_OPTIONS.map((optionLabel) => (
                    <Button
                        color="inherit"
                        sx={{
                            fontWeight: 500,
                            fontSize: ".7rem",
                        }}
                    >
                        <Link
                            to={optionLabel.toLowerCase()}
                            style={{
                                textDecoration: "none",
                                color: "white",
                            }}
                        >
                            {optionLabel}
                        </Link>
                    </Button>
                ))}{" "}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
