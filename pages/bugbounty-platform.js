import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ServiceDetailsContent from "../components/ServiceDetails/ServiceDetailsContent";
import Footer from "../components/Layouts/Footer";

class ServiceDetails extends Component {
  render() {
    return (
      <>
        <Navbar />

        <PageBanner pageTitle="Bug Bounty Platform" />

        <ServiceDetailsContent />
        <Footer />
      </>
    );
  }
}

export default ServiceDetails;
