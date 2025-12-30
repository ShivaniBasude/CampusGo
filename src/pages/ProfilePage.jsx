import { useState , useEffect } from "react";
import Navbar from "../components/Navbar";

export default function ProfilePage(){
    const [profile , setProfile ] = useState({
        name : "",
        email : "",
        phone : "",
        address : ""
    });

    useEffect( () => {
        const saved = JSON.parse(localStorage.getItem("userProfile"));
        if(saved) setProfile(saved);
    }, []);

    const handleChange = (e) => {
        setProfile ({ ...profile, [e.target.name] : e.target.value});
    };

    const saveProfile = () => {
        localStorage.setItem("userProfile", JSON.stringify(profile));
        alert ("Profile saved successfully!");
    };

    return(
        <>
        <Navbar />
        <div className="page-container">
            <h2> Your Profile👤</h2>

            <div className="profile-form">
                <input name="name" placeholder="Full name" value={profile.name}
                onChange={handleChange} />

                <input name="email" placeholder="Email" value={profile.email}
                onChange={handleChange} />

                <input name="phone" placeholder="Phone Number" value={profile.phone}
                onChange={handleChange} />

                <input name="address" placeholder="Address / Hostel" value={profile.address}
                onChange={handleChange} />

                <button onClick={saveProfile}> Save profile</button>
            </div>
        </div>
        </>
    );
}