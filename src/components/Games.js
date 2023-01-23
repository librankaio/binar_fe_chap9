import { useParams } from 'react-router-dom';
import React from "react";
import Navbar from './Navbar';

function Games() {
    const params = useParams();
    return (
        <div>
            <Navbar />
            <div style={{ textAlign: "center" }}>
                <h1>This is {params.username} Game List page</h1>
            </div>
        </div>
    );
}

export default Games;