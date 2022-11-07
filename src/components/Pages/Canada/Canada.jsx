import React from 'react'
import NavBar from '../../NavBar/NavBar'
import ProsAbout from '../../ProsAbout/ProsAbout'
import Footer from '../../Footer/Footer'
import EachPageHeader from '../EachPageHeader/EachPageHeader'
import TopBar from '../../TopBar/TopBar'

const Canada = () => {

    const universitiesList = [
        "FIC-Simon Fraser University",
        "ICM- University of Manitoba",
        "University of Windsor",
        "Royal Roads University",
        "Queen's University",
        "McGill University",
        "University of Toronto",
        "University of Waterloo",
        "University of Regina",
        "University of Calgary",
        "McMaster University",
        "University of Alberta",
        "University of British Columbia",
        "Ryerson University",
        "University of York",
        "University of Victoria",
        "Lakehead University",
        "Apply Board",
    ]


    return (
        <div className='Canada'>
            <TopBar />
            <NavBar />
            <div className='Destinations'>
                <EachPageHeader heading="Canada" />
                <div className="allCountries">
                    <div className="eachCountry">
                        <p className="flp">Choose Your Destination</p>
                        <h2 className="slbh">Why Study In Canada</h2>
                        <p className="slbp">Study in Canada to unleash endless possibilities
                            Canada is currently ranked as the #1 country for quality of life. From vibrant cities to diverse campuses with welcoming communities, it is the perfect place for you to learn and grow.
                        </p>
                        <div className="row Countrywhy">
                            <div className="col-lg-4 col-sm-12 countryWhyEachItemOuter">
                                <div className="countryWhyEachItem">
                                    <h2 className="slbh" style={{ borderBottom: "1px solid var(--blueMain)" }}>Why Canada?</h2>
                                    <p>Each year, nearly 500,000 international students choose Canada as their study destination. 3 of the best student cities are in Canada. Canada is home to 10 of the top 250 universities in the world. Students from around the world rank Canada the 2nd most welcoming country. You can gain professional work experience while studying by participating in co-op programs. Canada is known for having affordable university tuition fees among English-speaking countries.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 countryWhyEachItemOuter">
                                <div className="countryWhyEachItem" style={{ backgroundColor: "var(--blueMain)", borderRadius: "10px", boxShadow: "0px 0px 10px 2px rgba(0,0,0,25%)" }}>
                                    <h2 className="slbh" style={{ color: "#fff", borderBottom: "1px solid #fff" }}>Top Ranking Universities </h2>
                                    <p style={{ color: "#fff" }}>Universities in Canada have always gained a wide reputation for good teaching and excellent research. Seriously! - have you seen what they're doing with telecom and cyber research? Canadian universities are highly ranked among international schools and institutions worldwide, and they continue to attract the smartest people to their highly respected and prestigious degree programs. All these top ranked colleges, universities, law schools, medical schools, and engineering schools have a wide, global reputation
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 countryWhyEachItemOuter">
                                <div className="countryWhyEachItem">
                                    <h2 className="slbh" style={{ borderBottom: "1px solid var(--blueMain)" }}>Post Study Work Opportunities </h2>
                                    <p>The name of Canada comes up among the top study abroad destinations that offers the best job and stay back opportunities post study. Before diving into the job opportunities in Canada for Pakistan’s students, let us understand whether international students can work in Canada after study or not? Yes, you can absolutely work in Canada after you graduate, and you will need a work permit to do so. Along with this, with the post-graduation work permit (PGWP) in place, it is possible to target the best jobs in Canada for international students.</p>
                                </div>
                            </div>
                        </div>
                        <div className="process">
                            <p className="flp">Canada Visa Process</p>
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
                            <h2 className="slbh">Canada</h2>
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

export default Canada