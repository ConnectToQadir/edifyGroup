import React from 'react'
import NavBar from '../../NavBar/NavBar'
import ProsAbout from '../../ProsAbout/ProsAbout'
import Footer from '../../Footer/Footer'
import EachPageHeader from '../EachPageHeader/EachPageHeader'
import TopBar from '../../TopBar/TopBar'

const Kyrgyzstan = () => {

    const universitiesList = [
        "Jalalabad State University",
        "Kyrgyz Russian Slavic University",
        "Osh State University",
        "Kyrgyzstan State Medical Academy",
        "IMI Academy",
        "Bishkek and Asia Medical Institute.",
    ]


    return (
        <div className='Kyrgyzstan'>
            <TopBar />
            <NavBar />
            <div className='Destinations'>
                <EachPageHeader heading="Kyrgyzstan" />
                <div className="allCountries">
                    <div className="eachCountry">
                        <p className="flp">Choose Your Destination</p>
                        <h2 className="slbh">Why Study in Kyrgyzstan? </h2>
                        <p className="slbp">Kyrgyzstan offers diverse educational opportunities which include both state and private institutes.
                            Study MBBS in Kyrgyzstan will provide you a unique viewpoint of Asian culture and amusing
                            traditions of antique culture. Students will have the opportunity to assist businesses in developing
                            outreach and marketing programs while embedding Asian culture in it.
                        </p>
                        <div className="row Countrywhy">
                            <div className="col-lg-4 col-sm-12 countryWhyEachItemOuter">
                                <div className="countryWhyEachItem">
                                    <h2 className="slbh" style={{ borderBottom: "1px solid var(--blueMain)" }}>Why MBBS in Kyrgyzstan?</h2>
                                    <p style={{ color: "#000" }} className="paraWithList">
                                        <div><div><i className="fa-solid fa-circle-check"></i></div>Modern study environment</div>
                                        <div><div><i className="fa-solid fa-circle-check"></i></div>Low tuition fee</div>
                                        <div><div><i className="fa-solid fa-circle-check"></i></div>English is the study medium</div>
                                        <div><div><i className="fa-solid fa-circle-check"></i></div>Recognized Universities</div>
                                        <div><div><i className="fa-solid fa-circle-check"></i></div>Good hostel facilities</div>
                                        <div><div><i className="fa-solid fa-circle-check"></i></div>National Accreditation Board Agency is responsible for maintaining education standards
                                            that are committed to providing world-class education.</div>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 countryWhyEachItemOuter">
                                <div className="countryWhyEachItem" style={{ backgroundColor: "var(--blueMain)", borderRadius: "10px", boxShadow: "0px 0px 10px 2px rgba(0,0,0,25%)" }}>
                                    <h2 className="slbh" style={{ color: "#fff", borderBottom: "1px solid #fff" }}>Top Ranking Universities </h2>
                                    <p style={{ color: "#fff" }} className="paraWithList">
                                        The country is the home to world-class medical universities including:
                                        {universitiesList.map((v, i) => {
                                            return (
                                                <div key={i}><div><i className="fa-solid fa-circle-check"></i></div>{v}</div>
                                            )
                                        })}
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 countryWhyEachItemOuter">
                                <div className="countryWhyEachItem">
                                    <h2 className="slbh" style={{ borderBottom: "1px solid var(--blueMain)" }}>Mandatory documents list</h2>
                                    <p className='paraWithList'>
                                        <div style={{ color: "#000" }}><div><i className="fa-solid fa-circle-check"></i></div>SSC Transcript or Certificate is necessary</div>
                                        <div style={{ color: "#000" }}><div><i className="fa-solid fa-circle-check"></i></div>HSSC Transcript / Certificate is also required for admission</div>
                                        <div style={{ color: "#000" }}><div><i className="fa-solid fa-circle-check"></i></div>Scan Copy of the First-page passport</div>
                                        <div style={{ color: "#000" }}><div><i className="fa-solid fa-circle-check"></i></div>A white background Fresh photo</div>
                                        <div style={{ color: "#000" }}><div><i className="fa-solid fa-circle-check"></i></div>Medical report</div>
                                        <div style={{ color: "#000" }}><div><i className="fa-solid fa-circle-check"></i></div>Clearance certificate of police</div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="process">
                            <p className="flp">Kyrgyzstan Visa Process</p>
                            <h2 className="slbh">Your Are Just 3 Steps Away</h2>
                            <div className="allProcesses3">
                                <div data-aos="fade-right" className="eachProcess">
                                    <div className="eachProcessInner">
                                        <div className="iconDiv">
                                            <i className="fa-solid fa-comment icon"></i>
                                            <h4>1</h4>
                                        </div>
                                        <div className="descDiv">
                                            <p className='slbp'>Consult and find a university you like</p>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-right" className="eachProcess">
                                    <div className="eachProcessInner">
                                        <div className="iconDiv">
                                            <i className="fa-solid fa-check icon"></i>
                                            <h4>2</h4>
                                        </div>
                                        <div className="descDiv">
                                            <p className='slbp'>Apply and get your offer letter in 3-10 days</p>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-right" className="eachProcess">
                                    <div className="eachProcessInner">
                                        <div className="iconDiv">
                                            <i className="fa-solid fa-plane icon"></i>
                                            <h4>3</h4>
                                        </div>
                                        <div className="descDiv">
                                            <p className='slbp'>Apply for your student visa and fly</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="universities">
                            <p className="flp">Universities</p>
                            <h2 className="slbh">Kyrgyztan</h2>
                            <div className="allUniversitesList">
                                {
                                    universitiesList.map((v, i) => {
                                        return (
                                            <div key={i} className="eachUniversity">
                                                <div className="iconDiv">
                                                    <i className="fa-solid fa-square-check"></i>
                                                </div>
                                                <p>{v}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <p className="text-left" style={{ marginTop: "15px", fontSize: "12px", color: "gray" }}><i> source www.wikipedia.org</i></p>
                    </div>
                </div>
            </div >
            <ProsAbout />
            <Footer />
        </div >
    )
}

export default Kyrgyzstan