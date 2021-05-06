import { Box, makeStyles, styled } from "@material-ui/core";
import clsx from "clsx";
import Head from "next/head";
import { useState } from "react";
import Navbar from "../src/Header/Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "black",
    color: "white",
    fontFamily: "'Poppins', sans-serif",
    paddingBottom: "3rem",
  },
  mainContainer: {
    width: "100%",
    maxWidth: "1320px",
    padding: "0 15px",
    margin: "4rem auto 0",
    borderLeft: "1px solid #FFB800",
    paddingBottom: "3rem",
    position: "relative",
    [theme.breakpoints.down(1410)]: {
      maxWidth: "90%",
    },
    [theme.breakpoints.down(576)]: {
      maxWidth: "calc( 100% - 1.5rem )",
    },
  },
  lineBubble: {
    width: "1rem",
    height: "1rem",
    borderRadius: "100%",
    background: "black",
    border: "3px solid #FFB800",
    position: "absolute",
    left: 0,
  },
  sectionHeading: {
    marginBottom: "1rem",
    fontSize: "1rem",
    letterSpacing: 1,
    textTransform: "capitalize",
    position: "relative",
    "&::before": {
      content: "''",
      width: "0.5rem",
      height: "0.5rem",
      borderRadius: "100%",
      background: "black",
      border: "2px solid #FFB800",
      position: "absolute",
      left: -21.5,
      top: "50%",
      transform: "translateY(-50%)",
    },
  },
  strokedText: {
    color: "#A6A6A6",
    "-webkit-text-fill-color":
      "transparent" /* Will override color (regardless of order) */,
    "-webkit-text-stroke-width": "1px",
    "-webkit-text-stroke-color": "#A6A6A6",
  },
  textImgDiv: {
    display: "grid",
    gridTemplateColumns: "5fr 2fr",
    columnGap: "2rem",
    [theme.breakpoints.down(790)]: {
      gridTemplateColumns: "1fr",
    },
  },
  textDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down(905)]: {
      minHeight: "23rem",
    },
  },
  personImg: {
    width: "100%",
    alignSelf: "center",
    [theme.breakpoints.down(790)]: {
      display: "none",
    },
  },
  heading: {
    fontSize: "7rem",
    letterSpacing: 1,
    textTransform: "uppercase",
    lineHeight: 1.1,
    transition: "font-size 0.3s",
    [theme.breakpoints.down(1100)]: {
      fontSize: "6rem",
    },
    [theme.breakpoints.down(905)]: {
      fontSize: "5rem",
    },
    [theme.breakpoints.down(660)]: {
      fontSize: "4rem",
    },
    [theme.breakpoints.down(500)]: {
      fontSize: "3rem",
    },
    "& span": {
      display: "block",
    },
  },
  projectsDiv: {
    display: "flex",
    flexDirection: "column",
    margin: "2rem 0",
  },
  project: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    width: "50%",
    transition: "width 0.3s",
    minHeight: "12rem",
    [theme.breakpoints.down(1100)]: {
      width: "65%",
    },
    [theme.breakpoints.down(820)]: {
      width: "75%",
    },
    [theme.breakpoints.down(650)]: {
      width: "100%",
    },
    "& + &": {
      marginTop: "2rem",
      [theme.breakpoints.down(1100)]: {
        marginTop: "3rem",
      },
    },
  },
  projectTextDiv: {
    position: "absolute",
    zIndex: 2,
    margin: "auto",
    marginLeft: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.65)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    transition: "background-color 0.3s",
    [theme.breakpoints.down(500)]: {
      padding: "0 1rem",
      backgroundColor: "rgba(0,0,0,0.75)",
    },
  },
  projectImg: {
    width: "calc(100% - 5rem)",
    marginLeft: "auto",
    transition: "width 0.3s",
    [theme.breakpoints.down(500)]: {
      width: "100%",
    },
  },
  projectSmallText: {
    fontSize: "1.1rem",
    letterSpacing: 1,
    fontWeight: 500,
    textShadow: "0 0 0 black",
    [theme.breakpoints.down(500)]: {
      fontSize: "1rem",
    },
  },
  projectNumberText: {
    lineHeight: 1.6,
    marginBottom: 7,
    position: "relative",
    fontSize: "1.3rem",
    fontWeight: 700,
    [theme.breakpoints.down(820)]: {
      fontSize: "1.2rem",
    },
    "&::after": {
      position: "absolute",
      content: "''",
      bottom: 0,
      left: 0,
      width: "4.5rem",
      height: 0,
      borderBottom: "2px solid #A6A6A6",
    },
  },
  projectTitle: {
    fontSize: "2.25rem",
    letterSpacing: 2,
    textTransform: "capitalize",
    fontWeight: 500,
    marginBottom: 5,
    transition: "font-size 0.3s",
    [theme.breakpoints.down(820)]: {
      fontSize: "1.8rem",
    },
    [theme.breakpoints.down(500)]: {
      fontSize: "1.5rem",
    },
  },
  about: {
    display: "grid",
    gridTemplateColumns: "5fr 2fr",
    columnGap: "2rem",
    margin: "4rem 0",
    [theme.breakpoints.down(790)]: {
      gridTemplateColumns: "1fr",
    },
  },
  aboutTextDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  aboutHead: {
    fontSize: "2rem",
    letterSpacing: 2,
    fontWeight: 500,
    textTransform: "capitalize",
    wordSpacing: 4,
    lineHeight: 1.6,
    margin: "5px 0 20px",
    [theme.breakpoints.down(944)]: {
      fontSize: "1.7rem",
    },
    [theme.breakpoints.down(550)]: {
      fontSize: "1.5rem",
    },
    "& span": {
      display: "block",
      // [theme.breakpoints.down(944)]: {
      //   display: "initial",
      // },
    },
  },
  aboutDescription: {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.7,
    width: "95%",
  },
  contact: {},
  contactHeading: {
    fontSize: "6rem",
    fontWeight: 600,
    lineHeight: 1.7,
    textTransform: "uppercase",
    transition: "font-size 0.3s",
    [theme.breakpoints.down(830)]: {
      fontSize: "5rem",
    },
    [theme.breakpoints.down(630)]: {
      fontSize: "4rem",
    },
    [theme.breakpoints.down(500)]: {
      fontSize: "3rem",
    },
  },
  contactGrid: {
    display: "grid",
    gridTemplateColumns: "5fr 4fr",
    columnGap: "2rem",
    rowGap: "3rem",
    [theme.breakpoints.down(630)]: {
      gridTemplateColumns: "1fr",
    },
  },
  contactForm: {
    display: "flex",
    alignItems: "flex-start",
    rowGap: "1.5rem",
    flexDirection: "column",
    padding: "2rem 0",
  },
  input: {
    outline: "none",
    border: "none",
    borderBottom: "1px solid #A6A6A6",
    background: "transparent",
    width: "100%",
    resize: "none",
    color: "white",
    fontFamily: "inherit",
    padding: "0.5rem",
    letterSpacing: 0.7,
  },
  contactFormButton: {
    outline: "none",
    border: "none",
    background: "transparent",
    display: "flex",
    alignItems: "center",
    height: "2rem",
    position: "relative",
    marginTop: "2rem",
    cursor: "pointer",
    "& span": {
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "2rem",
      background: "#FFB800",
      borderRadius: "100%",
    },
    "& $buttonText": {
      position: "relative",
      zIndex: 1,
      margin: "auto 0",
      marginLeft: "1rem",
      height: "auto",
      width: "auto",
      borderRadius: 0,
      background: "transparent",
      color: "white",
      letterSpacing: 2,
      fontSize: "1rem",
    },
    "& img": {
      width: "2rem",
      marginLeft: 5,
    },
  },
  buttonText: {},
  connectWithDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  socialMediaCont: {
    display: "flex",
    columnGap: "1rem",
    rowGap: "1rem",
    marginTop: "1rem",
    "& img": {
      width: "1.75rem",
      height: "1.75rem",
      display: "block",
    },
  },
  copyright: {
    textAlign: "center",
    color: "#A6A6A6",
    letterSpacing: 2,
    marginTop: "1rem",
  },
}));

const projects = [
  {
    title: "Food App",
    work: "UI/UX",
    image: "projects/foodApp.svg",
  },
  {
    title: "Food App",
    work: "UI/UX",
    image: "projects/furnitureApp.svg",
  },
  {
    title: "Food App",
    work: "UI/UX",
    image: "projects/techLandingPage.svg",
  },
  {
    title: "Food App",
    work: "UI/UX",
    image: "projects/foodApp.svg",
  },
  {
    title: "Food App",
    work: "UI/UX",
    image: "projects/furnitureApp.svg",
  },
];

const socialMediaIcons = [
  { link: "/", image: "/icons/facebook.svg" },
  { link: "/", image: "/icons/instagram.svg" },
  { link: "/", image: "/icons/linkedin.svg" },
];

export default function Home() {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = (e) => {
    e.preventDefault();

    const subject = "Mail via website.";
    const body = `Name: ${name}          Email: ${email}          Message: ${message}`;
    window.open(
      `mailto:vaibhav@gmail.com?subject=${subject}&body=${body}`,
      "_self"
    );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={classes.root}>
        <Navbar />

        <Box className={classes.mainContainer}>
          <span
            className={classes.lineBubble}
            style={{ top: 0, transform: "translate(-50%, -50%)" }}
          ></span>
          <div className={classes.textImgDiv} id="home">
            <div className={classes.textDiv}>
              <p className={classes.sectionHeading}>Hello, I am</p>
              <h1 className={clsx(classes.heading, classes.strokedText)}>
                <span>Vaibhav</span> <span>Mahajan</span>
              </h1>
            </div>
            <img className={classes.personImg} src="/person.svg" alt="" />
          </div>

          <div id="work">
            <p className={classes.sectionHeading}>Works</p>
            <div className={classes.projectsDiv}>
              {projects.map((project, i) => (
                <div
                  className={classes.project}
                  key={i}
                  style={{ alignSelf: i % 2 === 0 ? "flex-start" : "flex-end" }}
                >
                  <div className={classes.projectTextDiv}>
                    <p
                      className={clsx(
                        classes.strokedText,
                        classes.projectSmallText,
                        classes.projectNumberText
                      )}
                    >
                      0{i + 1}
                    </p>
                    <h4 className={classes.projectTitle}>{project.title}</h4>
                    <p className={classes.projectSmallText}>{project.work}</p>
                  </div>
                  <img
                    className={classes.projectImg}
                    src={project.image}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={classes.about} id="about">
            <div className={classes.aboutTextDiv}>
              <p className={classes.sectionHeading}>About</p>
              <h2 className={classes.aboutHead}>
                <span>Hello, I am Vaibhav Mahajan,</span>{" "}
                <span>I am UI/UX designer.</span>
              </h2>
              <p className={classes.aboutDescription}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam repudiandae nisi molestias fugit optio quos eligendi
                dignissimos possimus ipsa atque, dicta dolorem voluptatibus
                rerum sequi similique nostrum, est enim dolor?
              </p>
            </div>
            <img className={classes.personImg} src="/person.svg" alt="" />
          </div>

          <div className={classes.contact} id="contact">
            <p className={classes.sectionHeading}>Contact</p>
            <h3 className={clsx(classes.contactHeading, classes.strokedText)}>
              <span>Say</span> <span>Hello</span>
            </h3>
            <div className={classes.contactGrid}>
              <form className={classes.contactForm}>
                <input
                  type="text"
                  className={classes.input}
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  className={classes.input}
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  className={classes.input}
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button
                  className={classes.contactFormButton}
                  onClick={sendMail}
                >
                  <span></span>
                  <span className={classes.buttonText}>Send</span>
                  <img src="/icons/sendIcon.svg" alt="" />
                </button>
              </form>
              <div className={classes.connectWithDiv}>
                <p>Connect With</p>
                <div className={classes.socialMediaCont}>
                  {socialMediaIcons.map((icon, i) => (
                    <a href={icon.link} key={i}>
                      <img src={icon.image} alt="" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <span
            className={classes.lineBubble}
            style={{ bottom: 0, transform: "translate(-50%, 50%)" }}
          ></span>
        </Box>

        <hr
          style={{
            background: "transparent",
            border: "none",
            borderTop: "1px solid #FFB800",
            background: "transparent",
          }}
        />

        <p className={classes.copyright}>Copyright 2021</p>
      </div>
    </>
  );
}
