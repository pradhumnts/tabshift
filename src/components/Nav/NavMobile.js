import React from "react";
import {
  Box,
  Button,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import logo from "./../../assets/logo.png";
import logoText from "../../assets/logo-text.png";
import logo1 from "./../../assets/logo-icon.png";
import "./nav.css";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from "@mui/icons-material/Close";
import DragIndicatorOutlinedIcon from "@mui/icons-material/DragIndicatorOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Link } from "react-router-dom";

const NavMobile = () => {
  const theme = useTheme();

  const menuItems = [
    {
      icon: (
        <DragIndicatorOutlinedIcon sx={{ color: theme.palette.primary.main }} />
      ),
      name: "Services",
      link: "/services",
    },
    {
      icon: <SellOutlinedIcon sx={{ color: theme.palette.primary.main }} />,
      name: "Pricing",
      link: "",
    },
    {
      icon: <InfoOutlinedIcon sx={{ color: theme.palette.primary.main }} />,
      name: "About Us",
      link: "/about-us",
    },
  ];

  const [state, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <Box>
      <div className="nav">
        <div className="logo-img">
          <div className="logo-wrapper-mobile">
            <img src={logo1} alt="" />
          </div>
        </div>
        <Link to="/">
          <div className="logo-img">
            <div className="logo-wrapper-text">
              <img src={logoText} alt="" />
            </div>
          </div>
        </Link>
        <div className="nav-links">
            <MenuRoundedIcon onClick={toggleDrawer(!state)} sx={{ fontSize: "2rem", color: theme.palette.primary.main }} />
        </div>
      </div>
      <Box>
        <Button onClick={toggleDrawer(true)}>Right</Button>
        <SwipeableDrawer
          anchor={"right"}
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <Box
            sx={{ width: "70vw", backgroundColor: theme.palette.primary.main }}
          >
            <Box
              sx={{
                p: 2,
                px: 4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #7070703b",
              }}
            >
              <div></div>
              <Button onClick={toggleDrawer(!state)}>
                <CloseIcon sx={{ fontSize: "2rem", color: "white" }} />
              </Button>
            </Box>
            <Box>
              <List
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                  height: "100%",
                }}
                aria-label="contacts"
              >
                {menuItems.map((x, index) => (
                  <Link key={index} onClick={toggleDrawer(!state)} to={x.link}>
                    <ListItem disablePadding>
                      <ListItemButton sx={{ p: 2, px: 4 }}>
                        <ListItemIcon>{x.icon}</ListItemIcon>
                        <ListItemText
                          sx={{
                            color: theme.palette.primary.main,
                            fontWeight: 600,
                          }}
                          primary={x.name}
                        />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Box>
          </Box>
          <Box sx={{ flex: 1 }} />
          <Box
            sx={{
              width: "100%",
              padding: 2,
              borderTop: "1px solid #7070703b;",
            }}
          >
            <a href="mailto:contact@tabshift.io">
              <Button
                variant="contained"
                sx={{ fontSize: 18, width: "100%" }}
                size="large"
              >
                Contact Now
              </Button>
            </a>
          </Box>
        </SwipeableDrawer>
      </Box>
    </Box>
  );
};

export default NavMobile;
