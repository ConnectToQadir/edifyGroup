import './Immigration.css'
import NavBar from '../../NavBar/NavBar'
import ProsAbout from '../../ProsAbout/ProsAbout'
import Footer from '../../Footer/Footer'
import EachPageHeader from '../EachPageHeader/EachPageHeader'
import TopBar from '../../TopBar/TopBar'
import { Link } from 'react-router-dom'

const Immigration = () => {
    return (
        <div className='Immigration'>
            <TopBar />
            <NavBar />
            <div className="immigrationInner">
                <EachPageHeader heading="Immigration" />
                <div className="actualImmigration">
                    <div className="row eachImmigrationSection">
                        <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 aboutEachContentItemDiv">
                            <p className='flp'>ABOUT US</p>
                            <h1 className='slbh' data-aos-duration="1200" data-aos="fade-down" >We Make The World Accessible To You</h1>
                            <p className='slbp' style={{ textAlign: "justify", fontSize: "13px" }}>Edify group of companies established in 2016, today Pakistan's one of the largest immigration consultancy firms. For over six years we have been committed to turning dreams and visions into a reality that people can live in and prosper from. We offer reliable and proficient consultancy services in immigration, foreign education, visit visas, citizenship, and more.
                                We specialise in executing end to end immigration solutions for your study, settlement, business, or investment plans. Our team of experts offers customised plans for you and your family based on every individual's requirement and preference. Our affiliation with prestigious universities from the UK, Australia, Canada, the USA, and Europe has helped thousands of students pursue the career of their dreams and mould them today into a better tomorrow.
                                All our efforts become fruitful when satisfied clients start their journey through a hassle-free procedure. We are here to assist you at every step of your immigration or foreign education plan.
                            </p>
                        </div>
                        <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 imgDiv">
                            <img src="images/immigrationPen.jpeg" alt="" />
                        </div>
                    </div>
                    <div className="row eachImmigrationSection">
                        <h1 className="slbh">What we do?</h1>
                        <div className='row allDoSections'>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 eachDoSection">
                                <div className="iconDiv"><i className="fa-solid fa-users"></i></div>
                                <div className="contentDiv">
                                    Guide you through complete registration process for the country of your choice offering immigration and walking you through the process with ease until you receive your Permanent Residency.
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 eachDoSection">
                                <div className="iconDiv"><i className="fa-solid fa-users"></i></div>
                                <div className="contentDiv">
                                    Give thorough professional advice on all the immigration matters, maximising your chances of visa approval by minimising the errors and delays of incomplete applications.
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 eachDoSection">
                                <div className="iconDiv"><i className="fa-solid fa-users"></i></div>
                                <div className="contentDiv">
                                    Assist in identifying education and real estate options.
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 eachDoSection">
                                <div className="iconDiv"><i className="fa-solid fa-users"></i></div>
                                <div className="contentDiv">
                                    Matching your skills and interest to these countries for selection of job vacancies.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="eachImmigrationSection tagLine" style={{backgroundColor:"var(--blueMain)"}}>
                        <h2 className="slwh">We Know Immigration Matters</h2>
                    </div>
                    <div className="row eachImmigrationSection missionVissionSection">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="eachmissionVissionSectionInner">
                                <h2 className="slbh">Our Vision</h2>
                                <div className="iconDiv">
                                    <i class="fa-solid fa-eye"></i>
                                </div>
                                <div className="ContentDiv">
                                    We being the leading immigration and student counsellors, endeavour to ensure a bright future by opening doors of opportunities to our clients.
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="eachmissionVissionSectionInner">
                                <h2 className="slbh">Our Mission</h2>
                                <div className="iconDiv">
                                    <i class="fa-solid fa-bullseye"></i>
                                </div>
                                <div className="ContentDiv">
                                    We seek to be the trustworthy leaders to deliver brilliance to kin and the society overall, to transform their fantasies into realities.
                                </div>
                            </div>
                        </div>
                        <div className="col-6"></div>
                    </div>
                    <div className="row eachImmigrationSection eachVisaTypeSection">
                        <h1 className="slbh">START-UP VISA</h1>
                        <p className="slbp text-justify">This category is for people seeking to establish a business in the UK for the first time. Applicants will have an innovative, viable and scalable business idea which is supported by an endorsing body. This category offers leave for 2 years and does not lead directly to settlement in the UIK, but applicants may progress into the INNOVATOR category. <Link to="/StartUpVisa">Read More</Link> </p>
                    </div>
                    <div className="row eachImmigrationSection eachVisaTypeSection">
                        <h1 className="slbh">INNOVATOR</h1>
                        <p className="slbp text-justify">The Innovator Visa is for experienced business persons seeking to establish a new business in UK. In most cases you will need to have access to at least £50,000 to invest in your business. You will also need to have an innovative, viable and scalable business idea which has been approved by an endorsing body.
                            Innovator visas are valid for 3 years and can lead directly to indefinite leave to remain in the UK at the end of this period. Innovator visa applicants can bring their partner and any children under the age of 18 to the UK.
                            <Link to="/StartUpVisa">Read More</Link> </p>
                    </div>
                    <div className="row eachImmigrationSection eachVisaTypeSection">
                        <h1 className="slbh">AUSTRALIA SUBCLASS 188</h1>
                        <p className="slbp text-justify">Work and live in Australia with the Business Innovation and Investment (Provisional) Visa (Subclass 188). This visa allows you to own and manage a new or existing business in Australia, or to invest in Australia. You must be nominated by a state or territory government or Australian agency to be eligible to apply. <Link to="/StartUpVisa">Read More</Link> </p>
                    </div>
                    <div className="row eachImmigrationSection eachVisaTypeSection">
                        <h1 className="slbh">PORTUGAL GOLDEN RESIDENT PERMIT </h1>
                        <p className="slbp text-justify">Since the launch of Portugal's residence permit by investment program in 2012, 9,340 investors and 15,965 of their family members have received golden visas in return for a total investment of more than 5.6 billion euros.
                            To apply for a residence permit by investment, applicants can choose one of seven options, including buying real estate, investing in a business and making a contribution to scientific or cultural projects.
                            <Link to="/StartUpVisa">Read More</Link> </p>
                    </div>
                    <div className="row eachImmigrationSection eachVisaTypeSection">
                        <h1 className="slbh">DOMINICA CITIZENSHIP</h1>
                        <p className="slbp text-justify"> Dominica citizenship by investment program was launched in 1993. It has become a popular program, and 4,192 investors received Dominica passports from 2017 to 2020.
                            Dominica offers one of the most affordable citizenship programs in the Caribbean. Foreigners can get citizenship by investing minimum $100,000 in a government fund or $200,000 in real estate after 3-6 months passport registration process.
                            <Link to="/StartUpVisa">Read More</Link> </p>
                    </div>
                </div>
            </div>
            <ProsAbout />
            <Footer />
        </div>
    )
}

export default Immigration