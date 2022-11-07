import React from 'react'
import NavBar from '../../NavBar/NavBar'
import ProsAbout from '../../ProsAbout/ProsAbout'
import Footer from '../../Footer/Footer'
import EachPageHeader from '../EachPageHeader/EachPageHeader'
import TopBar from '../../TopBar/TopBar'

const UK = () => {

    const universitiesList = [
        "Queen Mary, University of London",
        "City, University of London",
        "Newcastle University",
        "Queen's University Belfast",
        "University of East Anglia",
        "University of Dundee",
        "Durham University",
        "University of Glasgow",
        "University of Leeds",
        "University of Birmingham",
        "University of Liverpool",
        "Regent's University of London",
        "Heriot Watt University/ Shorelight",
        "Royal Holloway, University of London/Study Group",
        "The University of Manchester",
        "University of Exeter",
        "University of Nottingham",
        "University of York",
        "University of Kent",
        "University of Strathchlyde",
        "University of Sussex",
        "The University of Sheffield",
        "University of Lincoln",
        "Aston University",
        "University of Essex",
        "University of Aberdeen",
        "Manchester Metropolitan University",
        "UWE Bristol",
        "Nottingham Trent University",
        "Glasgow Caledonian University",
        "University of Hertfordshire",
        "University of West of Scotland",
        "University of East London",
        "University of West London",
        "Roehampton University",
        "Birkbeck, University of London",
        "Cambridge School of Visual & Performing Arts",
        "The University of Northampton",
        "Brighton University",
        "Goldsmiths, University of London",
        "London South Bank University",
        "University of Central Lancashire",
        "University of Sunderland",
        "University of Surrey",
        "Keeled University",
        "Kingston University London",
        "Lancaster University/Apply Board",
        "Leeds International Study Centre",
        "Liverpool John Moore University",
        "University of Huddersfield",
        "University of Leicester",
        "Bellboys College",
        "The University of Law",
        "Anglia Ruskin University",
        "Birmingham City University",
        "Brunel University",
        "Edinburgh Napier University",
        "Plymouth University",
        "Robert Gordon University",
        "Swansea University",
        "University of Portsmouth",
        "Bournemouth University, Talbot Campus",
        "Canfield University",
        "University of Salford",
        "Coventry University",
        "BPP University",
        "University West of England",
        "Ulster University",
        "Greenwich University",
    ]


    return (
        <div className='UK'>
            <TopBar />
            <NavBar />
            <div className='Destinations'>
                <EachPageHeader heading="United Kingdom" />
                <div className="allCountries">
                    <div className="eachCountry">
                        <p className="flp">Choose Your Destination</p>
                        <h2 className="slbh">Why study in the United Kingdom?</h2>
                        <p className="slbp">Wherever in the world you choose to pursue your career, a degree from a university in the United Kingdom is internationally respected and considered a quality education. This impression is backed up by the numbers, with the UK producing 14% of the world’s most cited academic papers and 5% of the world’s scientific research.</p>
                        <div className="row Countrywhy">
                            <div className="col-lg-4 col-sm-12 countryWhyEachItemOuter">
                                <div className="countryWhyEachItem">
                                    <h2 className="slbh" style={{ borderBottom: "1px solid var(--blueMain)" }}>Why UK?</h2>
                                    <p>The UK welcomes over 400,000 international higher education students each year. 3 out of 10 of the world’s top universities are in the UK. UK is home to 50 of the top 500 universities in the world. Choose from over 50,000 courses, in more than twenty-five (25) subject areas in the UK. Employers and academics recognize UK higher education degrees and qualifications worldwide. The UK holds the highest student satisfaction rates amongst English speaking countries, with over 90% of the whopping 2.32 million students are happy with their experience.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 countryWhyEachItemOuter">
                                <div className="countryWhyEachItem" style={{ backgroundColor: "var(--blueMain)", borderRadius: "10px", boxShadow: "0px 0px 10px 2px rgba(0,0,0,25%)" }}>
                                    <h2 className="slbh" style={{ color: "#fff", borderBottom: "1px solid #fff" }}>Top Ranking Universities</h2>
                                    <p style={{ color: "#fff" }}>Number of top-ranked universities located in the United Kingdom. In fact, plenty of the highest ranked academic institutions in the U.K., like University of Leeds, University of Edinburgh, and Lancaster University, offer the best Bachelor's, Master's, and Ph.D programs in the world. Alongside their posh accents and old buildings, U.K.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 countryWhyEachItemOuter">
                                <div className="countryWhyEachItem">
                                    <h2 className="slbh" style={{ borderBottom: "1px solid var(--blueMain)" }}>Post-Study Work Opportunities</h2>
                                    <p>An international student in the UK is typically allowed to work up to 20 hours a week during school term, and up to full-time when school is out of term. You should check with your international advisor at your school before starting any work - you do not want to be in violation of your visa, and rules change frequently.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="process">
                            <p className="flp">UK Visa Process</p>
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
                            <h2 className="slbh">United Kingdom</h2>
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
                        <p className="text-left" style={{marginTop:"15px",fontSize:"12px",color:"gray"}}><i> source www.wikipedia.org</i></p>
                    </div>
                </div>
            </div>
            <ProsAbout />
            <Footer />
        </div>
    )
}

export default UK