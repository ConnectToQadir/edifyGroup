import './Footer.css'
import logo from '../../assets/images/edifywhitelogo.png'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="footerinner">
        <div className="footerSocial">
          <div className="footerSocialInner">
            <img src={logo} alt="" />
            <p className='paraUnderFooterLogo'>“Together we redefine the idea of foreign education consultancy in Pakistan <br /> by nurturing a culture of quality over quantity”</p>
            <div className="socialDiv">
              <div><a target="blank" href="https://www.facebook.com/EdifyGroupPakistan"><i className="fa-brands fa-facebook"></i></a></div>
              <div><a target="blank" href="https://www.instagram.com/edifygroupofficial/"><i className="fa-brands fa-instagram"></i></a></div>
              <div><a target="blank" href="https://www.linkedin.com/company/edify-group-of-companies/mycompany/"><i className="fa-brands fa-linkedin"></i></a></div>
              <div><a target="blank" href="https://www.youtube.com/c/EDIFYGROUP/featured"><i className="fa-brands fa-youtube"></i></a></div>
            </div>
          </div>
        </div>
        <div className="row actualFooter">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 actualFooterEachSection ">
            <h3 className='tlwh'>Services</h3>
            <ul>
              <li><Link to="/services">Student Visa</Link></li>
              <li><Link to="/IELTS">IELTS</Link></li>
              <li><Link to="/">Immigration</Link></li>
            </ul>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 actualFooterEachSection ">
            <h3 className='tlwh'>Important Links</h3>
            <ul>
              <li><Link to="/Updates">Updates</Link></li>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/FAQ">FAQ's</Link></li>
            </ul>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 contactSection">
            <h3 className='tlwh contactFooterSection'>Contact</h3>
            <ul>
              <li>
                <Link to="/Contact">Faisalabad <span>(Head Office)</span></Link>
              </li>
              <li>
                <Link to="/Contact">Lahore Office</Link>
              </li>
              <li>
                <Link to="/Contact">Multan Office</Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 actualFooterEachSection newsLetterSection">
            <h3 className='tlwh'>Subscribe Our Newsletter</h3>
            <p>Let us help you yield your true academic potential for foreign education. To configure and discover an apt international enrolment strategy, get in touch!</p>
            <div>
              <input type="text" placeholder='Your Email' />
              <button><i className="fa-solid fa-angle-right"></i></button>
            </div>
          </div>
        </div>
        <div className="copyRightSection">
          <p>© 2022 Edify Group of Companies . All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer