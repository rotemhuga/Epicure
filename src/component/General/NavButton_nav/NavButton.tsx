import React from "react";
import "../NavButton_nav/NavButton.css"

interface Iprops {
    name: string,
    src?: string,
    alt?: string,
    class?:string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const NavButton: React.FC<Iprops> = (props:Iprops) => {
    return (
        <>
            <button className={`button ${props.class}`} onClick ={props.onClick} >
                    {props.name} 
                    <img src={props.src} alt={props.alt}/> 
                    <img src={props.src} alt={props.alt}/> 
            </button>
        </>
    )
}

export default NavButton

