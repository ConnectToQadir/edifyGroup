import { Link } from 'react-router-dom'
import './AboutUs.css'
const AboutUs = () => {
    return (
        <div className='AboutUs'>
            <div className="container-fluid aboutUsInner">
                <div className="row">
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 aboutEachContentItemDiv">
                        <p className='flp'>ABOUT US</p>
                        <h1 className='slbh' data-aos-duration="1200" data-aos="fade-down" >Our Process is Data-Driven</h1>
                        <p className='slbp' style={{ textAlign: "justify", fontSize: "13px" }}>Education is a driving force that focuses on the development of reflective thinking and abilities so that the human race is able to carve out how they wish to exist in todays competitive and ever changing global economy.
                            Amidst such extraordinary uncertainty and dynamic world order, Edify is helping higher education leaders around the world build resilience, seize opportunities for growth, and discover new ways to enhance the skillset by introducing them to the world.
                            Edify is committed to improving student outcomes, increasing access and affordability, and enabling new academic research across the entire education ecosystem in Pakistan as well as around the globe.
                            Edify group of companies takes enormous pride in representing prestigious educational institutions that are not merely large and comprehensive student bodies, but are also home for millions of successful alumni around the globe.</p>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 imgDiv" style={{ backgroundColor: "#ffce10" }}>
                        <img data-aos-duration="1200" data-aos="fade-up" style={{ width: "50%", height: "" }} src="images/aboutImg.png" alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 aboutEachContentItemDiv">
                        <div className="headerDiv">
                            <h3 className='slbh'>Why Choose Edify?</h3>
                        </div>
                        <div className="descDiv">
                            <p className='slbp'>We are unique in the quality of our services and stand out from our competitors. Unlike other consultancy firms in Pakistan, we truly care for our students.</p>
                        </div>
                        <div className='allAbouts'>
                            <div className="eachAbout">
                                <div className="header">
                                    <div className="icon aboutIcons">
                                        <i className="fa-solid fa-bullseye"></i>
                                    </div>
                                    <h3 className='tlbh' style={{ marginBottom: "0", fontSize: "20px" }}>Practice Makes Perfect</h3>
                                </div>
                                <p className='slbp'>Experience - It is all that matters! Having more than 5+ years of experience in education consultancy...</p>
                            </div>
                            <div className="eachAbout">
                                <div className="header">
                                    <div className="icon aboutIcons">
                                        <i className="fa-solid fa-recycle"></i>
                                    </div>
                                    <h3 className='tlbh' style={{ marginBottom: "0", fontSize: "20px" }}>Lucidity</h3>
                                </div>
                                <p className='slbp'>The quality of being easily understood, completely intelligible, or comprehensible is what defines Edify...</p>
                            </div>
                            <div className="eachAbout">
                                <Link to="/About">
                                    <button className='defbtn' style={{ padding: "8px" }} >More About Us</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 imgDiv">
                        <img data-aos-duration="1200" data-aos="fade-up" src="images/about/aboutImg04.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs