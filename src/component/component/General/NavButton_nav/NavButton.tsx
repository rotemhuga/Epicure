import React from "react";

interface Iprops {
    name: string,
    src?: string,
    alt?: string,
    class?:string
}

const NavButton: React.FC<Iprops> = (props:Iprops) => {
    return (
        <>
            <button className={`button ${props.class}`}>
                    {props.name}
                    <img src={props.src} alt={props.alt}/>
            </button>
        </>
    )
}

export default NavButton