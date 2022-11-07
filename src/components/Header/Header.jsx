import './Header.css'
import { Link } from 'react-router-dom'
import Login from '../Login/Login'

const Header = () => {
  return (
    <div className='Header'>
      <div className="overlay"></div>
      <div className="headerImg">
        <img data-aos="fade-left" data-aos-duration="1000" src="images/headerimg.png" alt="" />
      </div>
      <div className="contentdiv">
        <p data-aos-duration="1200" data-aos="fade-down" className='flp'>An Overseas Education Consultant</p>
        <h1 data-aos="fade-down" className='flh'>FROM GOAL TO GLORY</h1>
        <p style={{textAlign:"justify"}} className='slwp'>Edify group of companies takes enormous pride in representing prestigious educational institutions that are not merely large and comprehensive student bodies, but are also home for millions of successful alumni around the globe.</p>
        <Link to="/Apply"><button className='defbtn'>Apply Now</button></Link>
      </div>
      <div data-aos-duration="1200" data-aos="fade-up" className='bottomContentBoxesOuter'>
        <div className="row bottomContentBoxes">
          <div style={{ backgroundColor: "#002858" }} className="col-lg-4 col-md-4 col-sm-12 eachBottomContentBox">
            <h2 className='tlwh'>Overseas Education</h2>
            <p className='slwp'>Edify Consultants Provides A To Z Services For Student Visa in Major Universities And Colleges Of The Countries Around The Globe </p>
            <Link to='/Services'>Read More<i className="fa-solid fa-arrow-right"></i></Link>
          </div>
          <div style={{ backgroundColor: "rgb(20 84 149)" }} className="col-lg-4 col-md-4 col-sm-12 eachBottomContentBox">
            <h2 className='tlwh'>IELTS</h2>
            <p className='slwp'>Being a platinum level member of the British council, Edify takes pride in providing range of multiple English tests</p>
            <Link to='/IELTS'>Read More<i className="fa-solid fa-arrow-right"></i></Link>
          </div>
          <div style={{ backgroundColor: "rgb(29 110 188)" }} className="col-lg-4 col-md-4 col-sm-12 eachBottomContentBox">
            <h2 className='tlwh'>Immigration</h2>
            <p className='slwp'>At Edify Group, we are happy to ease the burden and help you choose the most suitable immigration program for your unique situation.</p>
            <Link to='/Immigration'>Read More<i className="fa-solid fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header