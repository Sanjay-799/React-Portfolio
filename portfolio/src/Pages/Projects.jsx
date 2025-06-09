import React from "react";
import { Link } from "react-router-dom";

function ProjectPage(){
    return(
        <>
        <div className="container">
            <div>
                <h1 className="main-heading">Projects</h1>
            </div>
            <div className="row">
                <div className="col-12 col-md-4">
                    <div className="project-card">
                        <div>
                            <a href=""><img className="project-img" src="/images/credit-project.png" alt="Project" /></a>
                            
                        </div>
                        <div className="project-content">
                             <h1 className="project-title">Credit Card Financial Dashboard</h1>
                             <p className="project-des">Developed an interactive dashboard using transaction and customer data from MySQL, leveraging Power BI and DAX to provide real-time financial insights and trends.</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <div className="project-card">
                        <div>
                            <img className="project-img" src="/images/blinkit.png" alt="Project" />
                        </div>
                        <div className="project-content">
                             <h1 className="project-title">
Blinkit Sales Analysis</h1>
                             <p className="project-des">Analyzed 8,500+ rows of e-commerce data, ensuring data accuracy. Built interactive dashboards in Power BI to track sales metrics, customer ratings, and regional trends, providing insights into product performance and sales patterns.</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <div className="project-card">
                        <div>
                            <img className="project-img" src="/images/coffee.png" alt="Project" />
                        </div>
                        <div className="project-content">
                             <h1 className="project-title">
Coffee Store Sales Analysis</h1>
                             <p className="project-des">Cleaned and transformed six months of sales data using Microsoft Excel and Power Query. Developed an interactive dashboard to analyze total sales, customer footfall, product popularity, and peak business hours. Provided actionable insights to improve product performance and operational efficiency.</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <div className="project-card">
                        <div>
                            <img className="project-img" src="/images/credit-project.png" alt="Project" />
                        </div>
                        <div className="project-content">
                             <h1 className="project-title">Credit Card Financial Dashboard</h1>
                             <p className="project-des">Developed an interactive dashboard using transaction and customer data from MySQL, leveraging Power BI and DAX to provide real-time financial insights and trends.</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <div className="project-card">
                        <div>
                            <img className="project-img" src="/images/credit-project.png" alt="Project" />
                        </div>
                        <div className="project-content">
                             <h1 className="project-title">Credit Card Financial Dashboard</h1>
                             <p className="project-des">Developed an interactive dashboard using transaction and customer data from MySQL, leveraging Power BI and DAX to provide real-time financial insights and trends.</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <div className="project-card">
                        <div>
                            <img className="project-img" src="/images/credit-project.png" alt="Project" />
                        </div>
                        <div className="project-content">
                             <h1 className="project-title">Credit Card Financial Dashboard</h1>
                             <p className="project-des">Developed an interactive dashboard using transaction and customer data from MySQL, leveraging Power BI and DAX to provide real-time financial insights and trends.</p>
                        </div>
                    </div>
                </div>

                

                
                
            </div>
        </div>
        </>
    )
}

export default ProjectPage;