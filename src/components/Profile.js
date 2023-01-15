import { useParams } from 'react-router-dom';
import React from "react";
import Navbar from './Navbar';

function Profile() {
    const params = useParams();
    return (
        <div>
            <Navbar />
            <div style={{ textAlign: "center" }}>
                <h1>This is {params.username} Profile page</h1>
            </div>
        </div>
    );
}

export default Profile;