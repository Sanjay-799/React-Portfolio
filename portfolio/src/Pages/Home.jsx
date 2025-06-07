import React from "react";

function HomePage() {
    return (
        <>


            <div className="homepage container">
                <div className="text-section">
                    <h6 className="greeting">HELLO!</h6>
                    <h1 className="name">
                        I'm <span>Sanjay Dasari</span>
                    </h1>
                    <h3 className="role">Engineer</h3>
                    <h2 className="title">Aspiring Data Analyst</h2>
                    <button className="my-works-button">MY WORKS</button>
                </div>

                <div className="image-section">
                    <img src="/images/bg3.png" alt="Sanjay Dasari" />
                </div>
            </div>
        </>
    );
}

export default HomePage;
