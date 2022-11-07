import React from 'react'
import './Australia.css'
import NavBar from '../../NavBar/NavBar'
import ProsAbout from '../../ProsAbout/ProsAbout'
import Footer from '../../Footer/Footer'
import EachPageHeader from '../EachPageHeader/EachPageHeader'
import TopBar from '../../TopBar/TopBar'

const Australia = () => {

    const universitiesList = [
        "Australia National University",
        "University of Melbourne",
        "University of New South Wales",
        "University of Queensland",
        "University of Sydney",
        "Monash University",
        "University of Western Australia",
        "University of Adelaide",
        "University of New Castle",
        "University of Wollongong",
        "MIT University",
        "Curtin University",
        "Deakin University",
        "La Trobe University",
        "University of South Australia",
        "SAE Institute",
        "Edith Cowan University",
        "Charles Stuart University",
        "Sydney Institute of Business and Technology",
        "Taylors College",
        "Griffith University",
        "La robe University Sydney Campus",
        "University of Canberra",
        "Western Sydney University",
        "Southern Cross University",
        "CIC College",
        "Murdoch University",
        "Kings Own Institute",
    ]


    return (
        <div className='Australia'>
            <TopBar />
            <NavBar />
            <div className='Destinations'>
                <EachPageHeader heading="Australia" />
                <div className="allCountries">
                    <div className="eachCountry">
                        <p className="flp">Choose Your Destination</p>
                        <h2 className="slbh">Why Study In Australia</h2>
                        <p className="slbp">Whether you choose to undertake an MBA, engineering, humanities or English language course, Australia is the place to be. It is difficult to beat the country when it comes to its standard of living, academic excellence, and support for international students.</p>
                        <div className="row Countrywhy">
                            <div className="col-lg-4 col-sm-12 countryWhyEachItemOuter">
                                <div className="countryWhyEachItem">
                                    <h2 className="slbh" style={{ borderBottom: "1px solid var(--blueMain)" }}>Why Australia?</h2>
                                    <p>Australia is currently home to nearly 700,000 international students. 7 of the best student cities are in Australia. Australian universities rank in the world’s top 50 in a huge range of study
                                        areas. The Australian Government has invested over AUD $300 million in
                                        scholarships for international students. You can gain work experience while you study in Australia. An Australian qualification will make you a very attractive potential
                                        employee to employers in Australia, at home and around the world.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 countryWhyEachItemOuter">
                                <div className="countryWhyEachItem" style={{ backgroundColor: "var(--blueMain)", borderRadius: "10px", boxShadow: "0px 0px 10px 2px rgba(0,0,0,25%)" }}>
                                    <h2 className="slbh" style={{ color: "#fff", borderBottom: "1px solid #fff" }}>Top Ranking Universities</h2>
                                    <p style={{ color: "#fff" }}>Australia is home of the world’s leading universities. Australia has a national regulatory and quality agency for higher education called – the Tertiary Education Quality and Standards Agency (TEQSA). It established by the Australian Government to monitor quality and regulate university and non-university higher education providers against a set of standards developed by the independent Higher Education Standards Panel.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 countryWhyEachItemOuter">
                                <div className="countryWhyEachItem">
                                    <h2 className="slbh" style={{ borderBottom: "1px solid var(--blueMain)" }}>Post-Study Work Opportunities</h2>
                                    <p>The enormous of international students can spend more time in Australia following the completion of their studies.
                                        The temporary graduate visa (subclass 485) allows you to remain in Australia to live, study or work after you have finished your studies. The visa has two streams: Graduate Work stream and Post-Study Work stream. The length of your stay will depend on which stream you apply for.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="process">
                            <p className="flp">Australia Visa Process</p>
                            <h2 className="slbh">Your Are Just 5 Steps Away</h2>
                            <div className="allProcesses5">
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
                                            <i className="fa-solid fa-arrow-right-arrow-left icon"></i>
                                            <h4>3</h4>
                                        </div>
                                        <div className="descDiv">
                                            <p className='slbp'>Complete GTE process <br />(if applicable)</p>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-right" className="eachProcess">
                                    <div className="eachProcessInner">
                                        <div className="iconDiv">
                                            <i className="fa-solid fa-thumbs-up icon"></i>
                                            <h4>4</h4>
                                        </div>
                                        <div className="descDiv">
                                            <p className='slbp'>Pay your first deposite & Accept your COE</p>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-right" className="eachProcess">
                                    <div className="eachProcessInner">
                                        <div className="iconDiv">
                                            <i className="fa-solid fa-plane icon"></i>
                                            <h4>5</h4>
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
                            <h2 className="slbh">Australia</h2>
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

export default Australia