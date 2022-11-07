import './Visa.css'
import { Link } from 'react-router-dom'
const Visa = () => {
    return (
        <div className='Visa'>
            <div className="inner">
                <p data-aos="fade-down" data-aos-duration="1200" className='flp'>WHAT WE DO</p>
                <h1 data-aos="fade-down" className='slwh'>Sheer Risk Management Through Active Problem-Solving Coupled With Limitless Vision</h1>
                <div className='row allService'>
                    <div data-aos="fade-left" className="col-xl-4 col-lg-4 col-md-6 col-sm-6 eachVisaItem">
                        <div className="imgDiv">
                            <img src="images/services/1.png" alt="" />
                        </div>
                        <h3 className='tlwh' style={{fontSize: "calc(12px + .6vw)",margin:"10px 0px"}} >Counselling</h3>
                        <p className='slwp'>Applying for studies abroad is a huge decision and that is why we do not limit our counselling to just choosing the right country...</p>
                        <Link to='/Services'>Read More<i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                    <div data-aos="fade-left" className="col-xl-4 col-lg-4 col-md-6 col-sm-6 eachVisaItem">
                        <div className="imgDiv">
                            <img src="images/services/2.png" alt="" />
                        </div>
                        <h3 className='tlwh' style={{fontSize: "calc(12px + .6vw)",margin:"10px 0px"}} >Admission Guidance</h3>
                        <p className='slwp'>We give special attention to your application, highlighting the areas essential for a well-presented, error free application...</p>
                        <Link to='/Services'>Read More<i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                    <div data-aos="fade-left" className="col-xl-4 col-lg-4 col-md-6 col-sm-6 eachVisaItem">
                        <div className="imgDiv">
                            <img src="images/services/3.png" alt="" />
                        </div>
                        <h3 className='tlwh' style={{fontSize: "calc(12px + .6vw)",margin:"10px 0px"}} >University Selection</h3>
                        <p className='slwp'>University selection is the most crucial stage of the application process. It is done, based on your test scores, at least six...</p>
                        <Link to='/Services'>Read More<i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                    <div data-aos="fade-right" className="col-xl-4 col-lg-4 col-md-6 col-sm-6 eachVisaItem">
                        <div className="imgDiv">
                            <img src="images/services/4.png" alt="" />
                        </div>
                        <h3 className='tlwh' style={{fontSize: "calc(12px + .6vw)",margin:"10px 0px"}} >Visa Application Assistance</h3>
                        <p className='slwp'>We help you in entire Visa process like, filling up applications, preparing financial statements, and also guidance and training for...</p>
                        <Link to='/Services'>Read More<i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                    <div data-aos="fade-right" className="col-xl-4 col-lg-4 col-md-6 col-sm-6 eachVisaItem">
                        <div className="imgDiv">
                            <img src="images/services/5.png" alt="" />
                        </div>
                        <h3 className='tlwh' style={{fontSize: "calc(12px + .6vw)",margin:"10px 0px"}} >Pre- Departure Orientation</h3>
                        <p className='slwp'>Prior to landing in a new country of your choice appropriate guidance is provided to help you migrate, travel & settle abroad...</p>
                        <Link to='/Services'>Read More<i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                    <div data-aos="fade-right" className="col-xl-4 col-lg-4 col-md-6 col-sm-6 eachVisaItem">
                        <div className="imgDiv">
                            <img src="images/services/6.png" alt="" />
                        </div>
                        <h3 className='tlwh' style={{fontSize: "calc(12px + .6vw)",margin:"10px 0px"}} >Travel Assistance</h3>
                        <p className='slwp'>We take care of booking flights well in advance to allow ideal departure dates, routes and also best discounts. We help you...</p>
                        <Link to='/Services'>Read More<i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                    <div data-aos="fade-left" className="col-xl-4 col-lg-4 col-md-6 col-sm-6 eachVisaItem">
                        <div className="imgDiv">
                            <img src="images/services/7.png" alt="" />
                        </div>
                        <h3 className='tlwh' style={{fontSize: "calc(12px + .6vw)",margin:"10px 0px"}} >Post-Departure Support</h3>
                        <p className='slwp'>We at Edify continue to provide our support and help even when you reach a new country. We’ll assist you with: open bank account...</p>
                        <Link to='/Services'>Read More<i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                    <div data-aos="fade-left" className="col-xl-4 col-lg-4 col-md-6 col-sm-6 eachVisaItem">
                        <div className="imgDiv">
                            <img src="images/services/8.png" alt="" />
                        </div>
                        <h3 className='tlwh' style={{fontSize: "calc(12px + .6vw)",margin:"10px 0px"}} >Financial Aid & Scholarship Guidance</h3>
                        <p className='slwp'>We provide guidance about securing scholarships, bursaries, loans and awards...</p>
                        <Link to='/Services'>Read More<i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                    <div data-aos="fade-left" className="col-xl-4 col-lg-4 col-md-6 col-sm-6 eachVisaItem">
                        <div className="imgDiv">
                            <img src="images/services/9.png" alt="" />
                        </div>
                        <h3 className='tlwh' style={{fontSize: "calc(12px + .6vw)",margin:"10px 0px"}} >Language Test Preparation</h3>
                        <p className='slwp'>Here, at Edify, one of our expertise lies in preparing students for the IELTS test. We, on our hands, provide all that you need...</p>
                        <Link to='/Services'>Read More<i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Visa