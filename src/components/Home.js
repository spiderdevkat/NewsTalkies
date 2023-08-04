import React, { useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

function Home() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the location state exists and contains an 'id'
        if (location.state && location.state.id) {
            // Render the welcome message if 'id' is available in the state
            return;
        } else {
            // Redirect to the main page if 'id' is not available in the state
            navigate.push('/');
        }
    }, [navigate, location.state]);

    return (
        <div className="homepage">
            <h1>Hello {location.state.id} and welcome to the home</h1>
        </div>
    );
}

export default Home;