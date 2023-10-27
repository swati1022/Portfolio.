import React, { Fragment } from "react";
import Header from "../header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "../app.css";
import HeroSection from "../hero-section/HeroSection";
import About from "../about/About";
import Services from "../services/Services";
import Experiance from "../experiance/Experiance";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";

const Layout = () => {
  return <Fragment>

    <Header/>
    <HeroSection/>
    <About/>
    <Services/>
    <Experiance/>
    <Contact/>
    <Footer/>
  </Fragment>;
};

export default Layout;
