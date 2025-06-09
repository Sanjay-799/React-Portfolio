import React from "react";


function ResumePage(){

    return(
        <>
        <div className="container">
            <div className="">
                <h1 className="main-heading">Resume</h1>
                <p className="bio">Aspiring Data Analyst with hands-on experience in data analysis, statistical modeling, and data-driven decision-making. Skilled in Python, Excel, Power BI, and MySQL, with a strong foundation in data analysis, reporting, and project execution. Passionate about leveraging data to drive actionable insights and solve real-world problems.</p>
            </div>

            <div className="">
                <h1 className="main-heading">Education</h1>
            </div>
            <hr style={{ border: '3px solid #ccc' }} />



            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="card">
                        <span className="year">2021-2025</span>
                        <h1>B.Tech in Computer Science and Engineering (AI)</h1>
                        <span className="college">Parul University</span>
                        <span className="cgpa">CGPA: 6.47</span>                    
                    </div> 
                </div>

                <div className="col-12 col-md-6">
                    <div className="card">
                        <span className="year">2019-2021</span>
                        <h1>Intermediate (MPC)</h1>
                        <span className="college">Sri Chaitanya Junior College, Hyderabad</span>
                        <span className="cgpa">Percentage: 86%</span>                    
                    </div> 
                </div>

                
                <div className="col-12 col-md-6">
                    <div className="card">
                        <span className="year">2018-2019</span>
                        <h1>Secondary School Certificate (SSC)</h1>
                        <span className="college">Sri Chaitanya Techno School, Warangal</span>
                        <span className="cgpa">Percentage: 95%</span>                    
                    </div> 
                </div>                
            </div>


            <div className="btn-resume">
                <button className="my-works-button" onClick={()=>{
                    window.open("https://drive.google.com/file/d/1329TG34PaArnBB1_DY4Q1kWBa8UGo7Ii/view?usp=drive_link", '_blank');
                }}>DOWNLOAD CV</button>
            </div>
            

            
            


            
        </div>
        </>
    )
}

export default ResumePage;