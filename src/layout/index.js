import React from "react"

//Components
import Layout from "./layout"
import SEO from "../components/seo"
import PractitionerFeatures from "../components/Home/PractitionerFeatures";
import Counter from "../components/Home/Counter";
import Biomag3DFeatures from "../components/Home/Biomag3DFeatures";
import ContactUs from "../components/Home/contact-us";
import OurApp from "../components/Home/ourApp";
import Highlights from "../components/Home/highlights";
import BannerSlider from "../components/Home/BannerSlider";

const IndexPage = ({ pageContext }) => {
    return (
        <Layout pageContext={pageContext}>
            <SEO title="Home" />
            <BannerSlider/>
            <OurApp />
            <Highlights />
            <Biomag3DFeatures />
            <Counter />
            <PractitionerFeatures />
            <ContactUs />
        </Layout>
    )
}

export default IndexPage
