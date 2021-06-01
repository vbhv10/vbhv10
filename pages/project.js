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

const carouselData = [
  {
    images: {
      api: "/images/API Gateway.jpg",
      DCT: "/images/DCT.jpg",
      DVU: "/images/DVU.jpg",
      Mars: "/images/MARS.jpg",
      snap: "/images/Snap-Sponsor.jpg",
    },
    headlines: {
      Mars: "Modern Analytics and Reporting System (MARS)",
      DCT: "DigiValet Setup (DCT)",
      DVU: "DigiValet Utilities",
      Api: "API Gateway",
      Snap: "Snap-Sponsor",
    },
  },
];

export default function project() {
  const classes = useStyles();

  return (
    <>
      <Head>project</Head>

      <div className={classes.root}>
        <section>
          {carouselData.map((item, i) => (
            <>
              <img src="/images/API Gateway.jpg" alt="#" />

              <h1 className={classes.heading}>Headline</h1>

              <p className={classes.paragraph}>Discription</p>

              <h4>Technology Used</h4>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
            </>
          ))}
        </section>
      </div>
    </>
  );
}
