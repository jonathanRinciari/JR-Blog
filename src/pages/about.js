import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaCheckCircle } from "react-icons/fa"
import "./index.css"

import Sidebar from "../components/sidebar/Sidebar"
import TechTag from "../components/tags/TechTag"

const AboutPage = (props) => {
    return (
        <Layout>
            <SEO title="About" />
            <div className="post-page-main">
                <div className="sidebar px-4 py-2">
                    <Sidebar />
                </div>
                <div className="post-main">
                    <SEO title="About" />
                    <div className="mt-3">
                        <h2 className="heading">Hey!</h2>
                        <p><i>I am Jon Rinciari, and I work as a Software Engineer at Amazon in Seattle, WA!</i></p>
                        <p>
                            I have been working professionally for the last 5 years. Working at a variety of different start ups. I have had 
                            the oppurtunity to use the latest technologies and work with some of the best engineers!
                        </p>
                        <p>
                            I love exploring new technolgies, but also sharing what I learn with others. I taught myself programming and now
                            I want to share what I know with all of you!
                        </p>
                        <br />
                        <p className="d-inline-block ml-3 w-75 align-top">Some Technologies I Love!</p>
                        <div>
                            <div className="ml-5">
                                <TechTag tag="react" tech="React" name="DiReact" size={20} color="deepskyblue" />
                                <TechTag tag="nodejs" tech="Node.js" name="DiNodejsSmall" size={20} color="lightgreen" />
                                <TechTag tag="html" tech="HTML" name="FaHtml5" size={20} color="darkorange" />
                                <TechTag tag="css" tech="CSS" name="DiCss3Full" size={20} color="teal" />
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}



export default AboutPage

