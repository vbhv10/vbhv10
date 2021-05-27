import { makeStyles } from "@material-ui/core";
import Head from "next/head";

const useStyles = makeStyles((theme) => ({
  root: {},
  mainImg: {
    marginLeft: "10vw",
    marginRight: "10vw",
    height: "660px",
    width: "1140px",
    top: "153px",
  },
  heading: {
    fontFamily: "Poppins",
    fontSize: "58px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "87px",
    letterSpacing: "0.1em",
    textAlign: "left",
    color: "#FFFFFF",
    marginLeft: "10vw",
    marginRight: "10vw",
  },
  span: {
    fontFamily: "Poppins",
    fontSize: "22px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "33px",
    letterSpacing: "0.1em",
    textAlign: "left",
    color: "#FFB800",
    textDecoration: "underline",
  },
  paragraph: {
    fontFamily: "Poppins",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "37px",
    letterSpacing: "0.1em",
    textAlign: "left",
    height: "185px",
    color: "#FFFF",
  },
}));

const headlineData = [
  "MARS : Modern Analytics and Reporting System ",

  "DCT DigiValet Setup",
  " DVU DigiValet Utilities",
  "Digimailer",
  "API Gateway",
];

const marsTech = [
  " ELK stack",
  "BigQuery Library",
  "MariaDB",
  "Celery",
  " Django",
];
const dctTech = [
  " DCT Cloud",
  " Client (on sites)",
  "DRF",
  "Celery",
  "Docker",
  "sqlite",
  " shutil",
];
const dvuTech = ["paramiko", "pdfkit", "sshtunnel", "DRF"];
const apiFatewayTech = ["loki", "Grafana."];
const SnapSponsorTech = ["JSON APIs", "MongoDB", "MongoDB Cloud", "Firebase"];

export default function project() {
  const classes = useStyles();

  return (
    <>
      <Head>project</Head>

      <div className={classes.root}>
        <section id="project">
          <div>
            <img
              src="/images/API Gateway.jpg"
              alt="api"
              className={classes.mainImg}
            />

            <h1 className={classes.heading}>{headlineData[0]}</h1>

            <span className={classes.span}>About</span>
            <p className={classes.paragraph}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
              totam aperiam sapiente accusamus ut magnam. Asperiores
              necessitatibus placeat modi facere id, cupiditate maxime
              voluptatem ullam aperiam adipisci! Ratione, facere pariatur?
            </p>
            <p className={classes.paragraph}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
              totam aperiam sapiente accusamus ut magnam. Asperiores
              necessitatibus placeat modi facere id, cupiditate maxime
              voluptatem ullam aperiam adipisci! Ratione, facere pariatur?
            </p>
            <span className={classes.span}>Technology Used</span>
            <p style={{ color: "#FFFFF" }}>{marsTech[0]}</p>
            <p style={{ color: "#FFFFF" }}>{marsTech[1]}</p>
            <p style={{ color: "#FFFFF" }}>{marsTech[2]}</p>
            <p style={{ color: "#FFFFF" }}>{marsTech[4]}</p>
            <p style={{ color: "#FFFFF" }}>{marsTech[0]}</p>
          </div>
        </section>
      </div>
    </>
  );
}
