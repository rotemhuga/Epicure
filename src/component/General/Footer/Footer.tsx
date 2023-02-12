import React from "react"
import "../Footer/Footer.css"

const Footer: React.FC = ()=> {
    return (
        <div id="footer-container">
            <button className="contact-us footer-button">Contact us</button>
            <button className="terms footer-button">Term of Use</button>
            <button className="privacy footer-button">Privacy Policy</button>
        </div>
    )
}
export default Footer