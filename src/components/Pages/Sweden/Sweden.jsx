import React from 'react'
import NavBar from '../../NavBar/NavBar'
import ProsAbout from '../../ProsAbout/ProsAbout'
import Footer from '../../Footer/Footer'
import EachPageHeader from '../EachPageHeader/EachPageHeader'
import TopBar from '../../TopBar/TopBar'

const Sweden = () => {

    const universitiesList = [
        "Jonkoping University",
        "Linkoping University",
        "Linnaeus University",
        "Uppsala University",
        "Lund University",
        "Dalarna University",
        "Gavle University",
        "Stockholm University",
        "Blekinge Institute of Technology",
        "Skovde University",
    ]


    return (
        <div className='Sweden'>
            <TopBar />
            <NavBar />
            <div className='Destinations'>
                <EachPageHeader heading="Sweden" />
                <div className="allCountries">
                    <div className="eachCountry">
                        <p className="flp">Choose Your Destination</p>
                        <h2 className="slbh">Why Study In Sweden?</h2>
                        <p className="slbp">Sweden is quite well known for its welcoming environment especially it is welcome
                            to the international population. International students from around the globe come
                            to study in Sweden for the best foreign education. There are more than 1,000-degree
                            programs that are taught in the English language. When it comes to higher education,
                            Sweden is known to be among the best choices.
                        </p>
                        <div className="row Countrywhy">
                            <div className="col-lg-4 col-sm-12 countryWhyEachItemOuter">
                                <div className="countryWhyEachItem">
                                    <h2 className="slbh" style={{ borderBottom: "1px solid var(--blueMain)" }}>Why Sweden?</h2>
                                    <p>Sweden is quite well known for its welcoming environment especially it is welcome to the international population. International students from around the globe come to study in Sweden for the best foreign education. There are more than 1,000-degree programs that are taught in the English language. When it comes to higher education, Sweden is known to be among the best choices.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 countryWhyEachItemOuter">
                                <div className="countryWhyEachItem" style={{ backgroundColor: "var(--blueMain)", borderRadius: "10px", boxShadow: "0px 0px 10px 2px rgba(0,0,0,25%)" }}>
                                    <h2 className="slbh" style={{ color: "#fff", borderBottom: "1px solid #fff" }}>Top Ranking Universities</h2>
                                    <p style={{ color: "#fff" }}>
                                        Sweden is an amazing destination for international students eager to get their bachelor’s and master’s degrees. Based on The Academic Ranking of World Universities and Times Higher Education World University Rankings, we managed to create a list of 13 highly ranked universities. Some of the most popular ones among students are Uppsala University (in Uppsala), KTH Royal Institute of Technology (in Stockholm), University of Gothenburg (in Goteborg), and Chalmers University of Technology (still in Goteborg).
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 countryWhyEachItemOuter">
                                <div className="countryWhyEachItem">
                                    <h2 className="slbh" style={{ borderBottom: "1px solid var(--blueMain)" }}>Post Study Work Opportunities</h2>
                                    <p>Sweden is therefore a great place to kick-start your career! When you come to Sweden, you can aim to get a part-time job while you study, get valuable working experience through an internship and/or look for jobs in the country after you graduate. Sweden gives foreign students the opportunity to work while studying. While there
                                        is no formal limit to the number of hours you will work during your study, it is
                                        important to remember that you are supposed to spend about 40 hours per week on
                                        your academics.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="process">
                            <p className="flp">Sweden Visa Process</p>
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
                            <h2 className="slbh">Sweden</h2>
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

export default Sweden