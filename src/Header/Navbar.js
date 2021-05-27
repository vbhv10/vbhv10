import {
  IconButton,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Head from "next/head";
import NavLink from "../UI/NavLink";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "black",
    color: "white",
    display: "flex",
    alignItems: "center",
    padding: "0 4rem",
    height: "4rem",
    position: "sticky",
    top: 0,
    background: "black",
    zIndex: 200,
    boxShadow: "0px -4px 13px 0 #7b7b7b",
    [theme.breakpoints.down(800)]: {
      padding: "0 2rem",
    },
    [theme.breakpoints.down(576)]: {
      padding: "0 1rem",
    },
  },
  logoImg: {
    marginRight: "auto",
  },
  link: {
    color: "white",
    transition: "color 0.3s",
    fontSize: "0.9rem",
    fontWeight: 400,
    letterSpacing: 1,
    cursor: "pointer",
    "& + &": {
      marginLeft: "2rem",
    },
  },
  backdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 100,
  },
  sideDrawer: {
    position: "fixed",
    zIndex: 150,
    width: 300,
    height: "100%",
    right: 0,
    top: "4rem",
    background: "#090909",
    transform: "translateY(100%)",
    transition: "transform 0.3s",
  },
  openSideDrawer: {
    transform: "translateY(0)",
  },
  sideDrawerUl: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "2rem",
  },
  sideDrawerLink: {
    color: "white",
    transition: "color 0.3s",
    fontSize: "0.9rem",
    fontWeight: 400,
    letterSpacing: 1,
    cursor: "pointer",
    "& + &": {
      marginTop: "2rem",
    },
  },
  activeLink: {
    color: "orange",
  },
}));

const links = [
  { to: "home", name: "Home", offset: -120 },
  { to: "work", name: "Work", offset: -95 },
  { to: "about", name: "About", offset: -105 },
  { to: "contact", name: "Contact", offset: -100 },
  { to: "project", name: "Project", offset: -100 },
];

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(800));

  const [sideDrawer, _openSideDrawer] = useState(false);
  const openSideDrawer = (option) => () => {
    _openSideDrawer(option);
  };
  return (
    <>
      <Head>Navbar</Head>

      <header className={classes.root}>
        <img className={classes.logoImg} src="/logo.svg" alt="" />
        {isMobile ? (
          <IconButton onClick={openSideDrawer(true)} style={{ color: "white" }}>
            <MenuIcon style={{ fontSize: "2rem" }} />
          </IconButton>
        ) : (
          <ul className={classes.ul}>
            {links.map((link, i) => (
              <NavLink
                key={i}
                link={link.to}
                className={classes.link}
                activeClassName={classes.activeLink}
                offset={link.offset}
              >
                {link.name}
              </NavLink>
            ))}
          </ul>
        )}

        {isMobile && sideDrawer && (
          <div className={classes.backdrop} onClick={openSideDrawer(false)} />
        )}

        {isMobile && (
          <div
            className={clsx(classes.sideDrawer, {
              [classes.openSideDrawer]: sideDrawer,
            })}
          >
            <ul className={classes.sideDrawerUl}>
              {links.map((link, i) => (
                <NavLink
                  key={i}
                  link={link.to}
                  className={classes.sideDrawerLink}
                  activeClassName={classes.activeLink}
                  offset={link.offset}
                >
                  {link.name}
                </NavLink>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
