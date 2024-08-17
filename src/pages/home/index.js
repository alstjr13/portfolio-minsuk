import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async'
import './style.css';

export const Home = () => {
    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Home | My Portfolio</title>
                    <meta name="description" content="Welcome to the home page of my portfolio." />
                </Helmet>
                
                <section id="home" className="home">
                    <h1>Welcome to My Portfolio</h1>
                    <p>This is the home page of my portfolio. Explore my projects and learn more about me.</p>
                </section>
                
                <div className="additional-content">
                    <p>More content can go here, like a list of recent projects or a brief bio.</p>
                </div>
            </div>
        </HelmetProvider>
    );
};