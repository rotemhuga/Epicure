import React from "react"
import appStore from "../../../assets/icons/app-store-icon.svg"
import googlePlay from "../../../assets/icons/apple-icon.svg"
import aboutUs from "../../../assets/icons/Epicure-about-us-logo.svg"
import "../About_us/About_us.css"
import appStoreImg from "../../../assets/icons/app-store-img.svg"
import googlePlayImg from "../../../assets/icons/google-play-img.svg"


const About_us: React.FC = ()=> {
    return (
        <div id="about-us-container">
            <div id="about-us-left">
                <div id="about-us-title">ABOUT US:</div>
                <div id="about-us-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non 
                eu ipsum. Cras porta malesuada eros, eget blandit
                turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, 
                dignissim a vestibulum.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
                eu ipsum. Cras porta malesuada eros.
                </div>
                <div id="download-apps">
                    <button id="download-app-store">
                        <img src={appStoreImg} alt="app-Store-Img" />
                    </button>
                    <button id="download-google-play">
                        <img src={googlePlayImg} alt="google-Play-Img" />
                    </button>
                </div >
            </div>
            <div id="abous-us-right">
                <img src={aboutUs} alt="epicure-logo" id="epicure-logo" />
            </div>
        </div>
    ) 
}

export default About_us