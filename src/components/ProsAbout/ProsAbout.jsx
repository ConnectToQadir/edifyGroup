import './ProsAbout.css'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { useState } from 'react'

const ProsAbout = () => {

    const [counter, setCounter] = useState(false);
    const [applicationSuccess,setApplicationSuccess] = useState("")
    const [scholarships,setScholarships] = useState("")
    const [visaSuccess,setVisaSuccess] = useState("")

    const ScrollEnterHandler = () =>{
        setCounter(true);
        setApplicationSuccess("applicationSuccess")
        setScholarships("scholarships")
        setVisaSuccess("visaSuccess")
    }

    const ScrollExitHandler = () =>{
        setCounter(false);
        setApplicationSuccess("")
        setScholarships("")
        setVisaSuccess("")
    }

    return (
        <ScrollTrigger onEnter={ScrollEnterHandler} onExit={ScrollExitHandler}>
            <div className="prosAboutOuter">
                <div className="completebgLine"><img src="images/pros/completeBgLine.png" alt="" /></div>
                <div className="bgt"><img src="images/pros/bgline2.png" alt="" /></div>
                <div className="bgb"><img src="images/pros/bgline2.png" alt="" /></div>
                <div className='row ProsAbout'>
                    <div className="col-xl-6 col-md-12 col-lg-6 leftSection">
                        <h1>ABOUT <span>US</span></h1>
                        <div className='row allParams'>
                            <div className="col-3 eachParamSection">
                                <div className='eachFigParam'>
                                    <h3>{counter && <CountUp start={0} end={200} duration={2} delay={0} />} +</h3>
                                    <h5>Institutions</h5>
                                </div>
                                <div className='eachFigParam'>
                                    <h3>{counter && <CountUp start={0} end={5078} duration={2} delay={0} />}+</h3>
                                    <h5>Students <br /> Enrolled</h5>
                                </div>
                                <div className='eachFigParam'>
                                    <h3>{counter && <CountUp start={0} end={4} duration={2} delay={0} />}+</h3>
                                    <h5>Destinations</h5>
                                </div>
                                <div className='eachFigParam'>
                                    <h3>{counter && <CountUp start={0} end={3} duration={2} delay={0} />}+</h3>
                                    <h5>Branches</h5>
                                </div>
                                <div className='eachFigParam'>
                                    <h3 style={{ color: "#ffcd11" }}>{counter && <CountUp start={0} end={5} duration={2} delay={0} />}+ Years</h3>
                                    <h5>Experience</h5>
                                </div>
                                <div className='eachFigParam'>
                                    <h3 style={{ color: "#ffcd11" }}>{counter && <CountUp start={0} end={500} duration={2} delay={0} />}+</h3>
                                    <h5>Courses</h5>
                                </div>
                                <div className='eachFigParam'>
                                    <h3>{counter && <CountUp start={0} end={50} duration={2} delay={0} />}k+</h3>
                                    <h5>YouTube <br />Subscribers</h5>
                                </div>
                            </div>
                            <div className="col-9 eachParamSection">
                                <div className="inner">
                                    <div className="col-6 eachItem">
                                        <div className="icon"><img src="images/pros/1.png" alt="" /></div>
                                        <p>Virtually Impartial <br /> Counselling</p>
                                    </div>
                                    <div className="col-6 eachItem">
                                        <div className="icon"><img src="images/pros/4.png" alt="" /></div>
                                        <p>Complete Interview <br /> Prep</p>
                                    </div>
                                    <div className="col-6 eachItem">
                                        <div className="icon"><img src="images/pros/2.png" alt="" /></div>
                                        <p>Large International <br /> Subagent Network </p>
                                    </div>
                                    <div className="col-6 eachItem">
                                        <div className="icon"><img src="images/pros/5.png" alt="" /></div>
                                        <p>Fast Processing</p>
                                    </div>
                                </div>
                                <div className="inner">
                                    <div className="col-6 eachItem">
                                        <div className="icon"><img className='trophyImg' style={{ width: "100px" }} src="images/pros/3.png" alt="" /></div>
                                        <p>Platinum Member of British Council</p>
                                    </div>
                                    <div className="col-6 eachItem">
                                        <div className="icon"><img src="images/pros/6.png" alt="" /></div>
                                        <p>Complete Pre- <br /> Departure Briefing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12 col-lg-6 rightSection">
                        <div className="eachRow quotationSection">
                            <div className="quoteDiv">
                                <img src="images/pros/quote.png" alt="" />
                            </div>
                            <h3>THEY KNOW ENOUGH WHO KNOW <br /> HOW TO LEARN</h3>
                        </div>
                        <div className="eachRow ieltsSection">
                            <div className="col-6 eachColSection heading">
                                <h3>PURPOSE BUILD <span>IELTS</span> CENTER</h3>
                            </div>
                            <div className="col-6 eachColSection">
                                <div className="iconDiv">
                                    <img src="images/pros/growth.png" alt="" />
                                </div>
                                <p><span><b>{counter && <CountUp start={0} end={100} duration={2} delay={0} />}+</b></span>Trained Personnel , trained and certified counselors and up-to-date compliance Team</p>
                            </div>
                        </div>
                        <div className="eachRow graphSection">
                            <div className="col-6 figureSection">
                                <h1>NO.1</h1>
                                <p>Edify Group Ranks No. 1 <br />
                                    In Faisalabad Region</p>
                                <hr />
                                <p>Personal Statement <br />
                                    Assistance &</p>
                                <h5>RESUME BUILDING</h5>
                                <hr />
                                <div className='row intakes'>
                                    <div className="eachItem col-3">
                                        <h1>3</h1>
                                    </div>
                                    <div className="valueDiv col-9">
                                        <h4>
                                            INTAKES <br />
                                            IN A YEAR
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 barsSection">
                                <div className="inner">
                                    <div className="eachBarDiv">
                                        <p>APPLICATION SUCCESS</p>
                                        <div className="outerBlue">
                                            <div className='bar' style={{animationName:applicationSuccess}} id="applicationSuccess"></div>
                                        </div>
                                        <p>100%</p>
                                    </div>
                                    <div className="eachBarDiv">
                                        <p>AUTHENTIC ADVICE</p>
                                        <div className="outerBlue">
                                            <div className='bar' style={{animationName:applicationSuccess,backgroundColor: "#ffce12"}} id="authenticAdvice" ></div>
                                        </div>
                                        <p>100%</p>
                                    </div>
                                    <div className="eachBarDiv">
                                        <p>SCHOLARSHIPS</p>
                                        <div className="outerBlue">
                                            <div className='bar' id="scholarships" style={{animationName:scholarships,backgroundColor: "#ffce12"}}></div>
                                        </div>
                                        <p>UPTO 50%</p>
                                    </div>
                                    <div className="eachBarDiv">
                                        <p>SATISFIED CLIENT</p>
                                        <div className="outerBlue">
                                            <div className='bar' style={{animationName:applicationSuccess}} id="satisfiedClients"></div>
                                        </div>
                                        <p>100%</p>
                                    </div>
                                    <div className="eachBarDiv">
                                        <p>VISA SUCCESS</p>
                                        <div className="outerBlue">
                                            <div className='bar' style={{animationName:visaSuccess}} id="visaSuccess" ></div>
                                        </div>
                                        <p>95%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollTrigger>
    )
}

export default ProsAbout