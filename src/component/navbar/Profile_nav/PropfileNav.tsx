import React from "react";
import profile from '../../../assets/icons/profile.svg';


const ProfileNav: React.FC = () => {
    return (
        <button><img src={profile} alt="profile" /></button>
    )
}

export default ProfileNav