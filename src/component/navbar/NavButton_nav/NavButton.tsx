import React from "react";

interface Iprops {
    name: string;
}

const NavButton: React.FC<Iprops> = (props:Iprops) => {
    return (
        <>
            <button id="nav-buttn">{props.name}</button>
        </>
    )
}

export default NavButton