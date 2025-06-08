import React from "react";


function HomePage() {
    return (
        <section id="hero-section">
            <div className="grid-container">
                <div className="content-img">
                    <img src="/images/abt.jpg" width={200} height={200} alt="Sanjay Dasari" />
                </div>
                <div className="content-div">
                    <span className="main-hello">HELLO!</span>
                    <h1 className="my-tag">I'm <span className="my-name">Sanjay Dasari</span></h1>
                    <span className="main-role">Engineer</span>
                    <h3 className="main-aspiring">Aspiring Data Analyst</h3>
                    <button className="my-works-button">MY WORKS</button>
                </div>
                
            </div>
        </section>
    );
}

export default HomePage;
