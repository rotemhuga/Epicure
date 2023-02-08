import React from "react";
import search from '../../../assets/NavbarAssets/search.svg';
import "../Search_nav/SearchNav.css";


const searchNav: React.FC = () => {
    return (
        <form id="button-search">
            <input type="text" placeholder={`Search for restaurant cuisine, chef`} id="input-search"/>
            <button type="submit"><img src={search} alt="search" id="button-icon"/></button>
        </form> 
    )
}

{/* <form>
  <input type="search" placeholder="Search...">
  <button type="submit">Search</button>
</form> */}

export default searchNav