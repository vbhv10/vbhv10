import { makeStyles } from "@material-ui/core";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Navbar from "../src/Header/Navbar";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  swipeToSlide: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
};

const useStyles = makeStyles((theme) => ({
  root: {
    background: "black",
    color: "white",
    fontFamily: "'Poppins', sans-serif",
    paddingBottom: "3rem",
  },
}));

export default function project() {
  const classes = useStyles();

  return (
    <>
      <Head>project</Head>

      <div className={classes.root}></div>
    </>
  );
}
