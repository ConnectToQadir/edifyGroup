import './Destination.css'
import { Link } from 'react-router-dom'

const Destination = () => {
    return (
        <div className='container-fluid Destination'>
            <div className="row header">
                <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
                    <p data-aos="fade-down" data-aos-duration="1200" className='flp'>FAVOURITE DESTINATION</p>
                    <h1 data-aos="fade-down" className='slbh'>Popular Destinations For International Students</h1>
                    <p className='slbp'>Are you ready to launch the next phase of your academic as well as professional growth? Is quality education in distinguished universities around the world your ultimate dream? If yes, sit back and let us take the wheel!</p>
                </div>
            </div>
            <div className="row destinations">
                <div data-aos="flip-up" className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachDestination">
                    <div className="imgDiv">
                        <img src="images/countries/UK-01.png" style={{ height: "100%" }} alt="" />
                        <p>United Kingdom</p>
                    </div>
                    <div className="contentDiv">
                        <p className='slbp'>Home to some of the world's greatest cities and one of Europe's cultural hubs, there are many reasons to study in the United Kingdom...</p>
                        <Link data-aos="fade-up" data-aos-duration="1200" to='/UK'>Read More<i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div data-aos="flip-up" className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachDestination">
                    <div className="imgDiv">
                        <img src="images/countries/swedon.png" style={{ height: "100%", width: "100%" }} alt="" />
                        <p>Sweden</p>
                    </div>
                    <div className="contentDiv">
                        <p className='slbp'>Studying in Sweden is a unique and a dissimilar experience from studying in other countries because Swedish universities have an inclusive...</p>
                        <Link data-aos="fade-up" data-aos-duration="1200" to='/Sweden'>Read More<i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div data-aos="flip-up" className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachDestination">
                    <div className="imgDiv" style={{display:"flex",alignItems:"flex-end"}}>
                        <img src="images/countries/australia.png" style={{ height: "60%", width: "100%" }} alt="" />
                        <p>Australia</p>
                    </div>
                    <div className="contentDiv">
                        <p className='slbp'>Whether you choose to undertake an MBA, engineering, humanities or English language course, Australia is the place to be....</p>
                        <Link data-aos="fade-up" data-aos-duration="1200" to='/Australia'>Read More<i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div data-aos="flip-up" className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachDestination">
                    <div className="imgDiv">
                        <img src="images/countries/USA.png" style={{ height: "100%", width: "50%" }} alt="" />
                        <p>USA</p>
                    </div>
                    <div className="contentDiv">
                        <p className='slbp'>The United States of America offers a wealth of higher-education opportunities that you will not find anywhere else in the world...</p>
                        <Link data-aos="fade-up" data-aos-duration="1200" to='/USA'>Read More<i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div data-aos="flip-up" className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachDestination">
                    <div className="imgDiv">
                        <img src="images/countries/canada.png" style={{ height: "100%", width: "60%" }} alt="" />
                        <p>Canada</p>
                    </div>
                    <div className="contentDiv">
                        <p className='slbp'>Canada is currently ranked as the #1 country for quality of life. From vibrant cities to diverse campuses with welcoming communities...</p>
                        <Link data-aos="fade-up" data-aos-duration="1200" to='/Canada'>Read More<i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div data-aos="flip-up" className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachDestination">
                    <div className="imgDiv">
                        <img src="images/countries/kyrgistan.png" style={{ height: "100%", width: "53%" }} alt="" />
                        <p>Kyrgyzstan</p>
                    </div>
                    <div className="contentDiv">
                        <p className='slbp'>Kyrgyzstan is entirely coloured by the customs and culture of the nomadic lifestyle. The Russian norms and lifestyle brands Kyrgyzstan...</p>
                        <Link data-aos="fade-up" data-aos-duration="1200" to='/Kyrgyzstan'>Read More<i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination;