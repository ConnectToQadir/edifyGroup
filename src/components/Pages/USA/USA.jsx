import React from 'react'
import NavBar from '../../NavBar/NavBar'
import ProsAbout from '../../ProsAbout/ProsAbout'
import Footer from '../../Footer/Footer'
import EachPageHeader from '../EachPageHeader/EachPageHeader'
import TopBar from '../../TopBar/TopBar'

const USA = () => {

    const universitiesList = [
        "Colorado State University",
        "Drew University",
        "George Mason University",
        "Marshall University",
        "Oregon State University",
        "University of South Florida",
        "Saint Louis University",
        "The University of Alabama at Birmingham",
        "Hofstra University",
        "Suffolk University",
        "Washington State University",
        "llinois State University",
        "University of Massachusetts Boston",
        "Adelphi University",
        "University of Dayton",
        "The University of llinois, Chicago",
        "University of South Carolina",
        "Mercer University",
        "Auburn University",
        "Auburn Montgomery",
        "Florida International University",
        "University of Central Florida",
        "Louisiana State University",
        "The University of Kansas",
        "University of Utah",
        "University of Pacific",
        "Baylor University",
        "James Madison University",
        "Long Island University, Brooklyn",
        "Long Island University, Post",
        "Lipscomb University",
        "Merrimack College",
        "Oglethorpe University",
        "Roosevelt University",
        "Texas A&M University",
        "University of Vermont",
        "West Virginia University",
        "Western Washington University",
        "Widener University",
        "Florida Atlantic University",
        "University of Idaho",
        "University of New Hampshire",
        "University of Massachusetts Dartmouth",
        "University of Massachusetts Lowell",
        "llinois Institute of Technology",
        "ONCAMPUS Boston",
        "University Bridge",
        "Arizona State University",
        "Northeastern University",
        "Pace University",
        "The University of Tulsa",
        "University of Maryland",
        "American University",
        "Wright State University",
        "Duquesne University",
        "University of Nebraska",
        "California Silicon Valley-Bridge",
        "College of San Mateo-UBridge",
    ]


    return (
        <div className='USA'>
            <TopBar />
            <NavBar />
            <div className='Destinations'>
                <EachPageHeader heading="USA" />
                <div className="allCountries">
                    <div className="eachCountry">
                        <p className="flp">Choose Your Destination</p>
                        <h2 className="slbh">Why Study in USA?</h2>
                        <p className="slbp">The United States of America offers a wealth of higher-education opportunities that you will not find anywhere else in the world! Hosting the greatest number of international students and offering them a multi-cultural setting with abundant opportunities, USA is where all your higher studies dreams come true. </p>
                        <div className="row Countrywhy">
                            <div className="col-lg-4 col-sm-12 countryWhyEachItemOuter">
                                <div className="countryWhyEachItem">
                                    <h2 className="slbh" style={{ borderBottom: "1px solid var(--blueMain)" }}>Why USA?</h2>
                                    <p>The US is still the best choice for international students, and this is largely because of the prestige of having a US-certified university degree. Higher study programs in the US are known for their exceptional standard of quality in terms of learning experiences, intellectual rigor, and innovative practices. About 1 million international students are enrolled in the USA each year. 16 of the top 20 universities in the world are in USA. USA is home to 58 of the top 100 universities in the world. Choose from over 4000 Universities across the USA. American society is the epitome of freedom, fun and opportunity. Nearly every university in the U.S. takes diversity to be one of their defining pillars.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 countryWhyEachItemOuter">
                                <div className="countryWhyEachItem" style={{ backgroundColor: "var(--blueMain)", borderRadius: "10px", boxShadow: "0px 0px 10px 2px rgba(0,0,0,25%)" }}>
                                    <h2 className="slbh" style={{ color: "#fff", borderBottom: "1px solid #fff" }}>Top Ranking Universities</h2>
                                    <p style={{ color: "#fff" }}>
                                        Home to the venerable Ivy League, the United States has plenty of top-ranked universities. Some of the best, highest ranked institutions are in the United States. Throughout the world, their colleges and schools have a wide reputation, inviting students from everywhere to learn from some of the biggest names in their field.
                                        There are plenty of options to choose from, all over the U.S., where you can pursue a Bachelor's, Master's, or Ph.D at a top-ranked and globally recognized institution.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 countryWhyEachItemOuter">
                                <div className="countryWhyEachItem">
                                    <h2 className="slbh" style={{ borderBottom: "1px solid var(--blueMain)" }}>Post Study Work Opportunities</h2>
                                    <p>You may have many questions like “how long I can stay in USA after graduation?” “Can a F-1 student get an international student visa after graduation?” and more. There are many rules that international students must follow while working in the US, and initially, these regulations may seem like a challenge. One of the ways that students can stay in the US on an international student visa after graduation is with an OPT extension. The post-completion OPT allows recent graduates to work in the US for up to 12 months. </p>
                                </div>
                            </div>
                        </div>
                        <div className="process">
                            <p className="flp">USA Visa Process</p>
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
                            <h2 className="slbh">United State America</h2>
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

export default USA