import React from "react";
import "../Week_chef/Week_chef.css"
import yossi_shitrit from "../../../assets/images/yossi-shitrit.png"

const Week_chef: React.FC = ()=> {
    return (
        <div id="week-chef-container">
            <div id="week-chef-title">CHEF OF THE WEEK:</div>
            <div id="week-chef-all-content">
                <div id="week-chef-profile">
                    <img src={yossi_shitrit} alt="week-chef-img" id="week-chef-img" />
                    <div id="week-chef-name">Yossi Shitrit</div>
                </div>
                <div id="week-chef-text">
                Chef Yossi Shitrit has been living and breathing his
                culinary dreams for more than two decades, including
                running the kitchen in his first restaurant, the fondly
                -rememberedViolet, located in Moshav  Udim. Shitrit's
                creativity and culinary  acumen born of long experience
                are expressed in the every detail of each and every dish.
                </div>
            </div>
        </div>
    ) 

}

export default Week_chef