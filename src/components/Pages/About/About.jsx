import './About.css'
import NavBar from '../../NavBar/NavBar'
import Footer from '../../Footer/Footer'
import EachPageHeader from '../EachPageHeader/EachPageHeader'
import EachQuality from './EachQuality'
import ProsAbout from '../../ProsAbout/ProsAbout'
import TopBar from '../../TopBar/TopBar'
import {seo} from '../SEO';
import { useEffect } from 'react'

const About = () => {
  
  useEffect(()=>{
    seo({
      title: 'Edify | About',
      metaDescription: 'Some Meta Description About Edify'
    });
  },[])

  return (
    <div>
      <TopBar />
      <NavBar />
      <div className='About'>
        <EachPageHeader heading="About Us" bgImg="images/about/topAboutImg.jpeg" />
        <div className="container-fluid aboutUsInner" style={{ width: "100%" }}>
          <div className="row">
            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 aboutEachContentItemDiv">
              <p className='flp'>ABOUT US</p>
              <h1 className='slbh' data-aos-duration="1200" data-aos="fade-down" >We Are One Stop-Shop For All Your Applications</h1>
              <p className='slbp' style={{ textAlign: "justify", fontSize: "13px" }}>Edify has been a one stop solution for all your Study Abroad ambitions since 2016. We help students simplify and plan their study abroad aspirations with personalized consultations. Edify aims to give all students accurate facts and guidelines to help them make informative decisions. We provide a platform for studying in some of the leading and wide ranged universities in Australia, Canada, UK, USA and Sweden. Our team is eager to help you today for you to excel tomorrow. We welcome you to unlock your true potential with Edify.</p>
            </div>
            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 imgDiv" style={{ backgroundColor: "#ffce10" }}>
              <img data-aos-duration="1200" data-aos="fade-up" style={{ width: "50%", height: "" }} src="images/aboutImg.png" alt="" />
            </div>
          </div>
          <div className="row" style={{ padding: "30px 0px" }}>
            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 imgDiv" style={{ paddingLeft: "0px", paddingRight: "20px" }}>
              <img data-aos-duration="1200" data-aos="fade-up" src="images/about/aboutImg03.jpeg" alt="" />
            </div>
            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 aboutEachContentItemDiv">
              <div className="headerDiv">
                <h3 className='tlbh'>Why Choose Edify?</h3>
              </div>
              <div className="descDiv">
                <p className='slbp'>We are unique in the quality of our services and stand out from our competitors. Unlike other consultancy firms in Pakistan, we truly care for our students. We always strive to give the best possible directives and solutions that a student may require. Our experienced counsellors and well trained team of compliance are always at hand to assist you in your application aptly. Since we understand that college applications encapsulate complex series of applications and there is a wide range of consultants to choose from, let us tell you why should you choose Edify:</p>
              </div>
            </div>
          </div>
          <EachQuality title="Practice Makes Perfect" desc="Experience - It is all that matters! Having more than 5+ years of experience in education consultancy, Edify Group of Companies have constructed a history of success and unprecedented growth from a small consulting firm. Our dedication and unwavering commitment made it possible to create the goodwill that we achieved. We have a team of trained personnel that you can rely on. We provide accurate, factual and updated information only. There are many pitfalls to avoid, important decisions to make, and systems to navigate. Our experts will make sure you have the best advice throughout your study abroad journey." imgUrl="images/aboutImg.jpg" iconClass="fa-solid fa-bullseye" />
          <EachQuality title="Lucidity" desc="The quality of being easily understood, completely intelligible, or comprehensible is what defines Edify! Our services are our commitments to you and we deliver what we commit. We do not chase the impossible and make fake promises - we live in reality. We are truthful to our words and maintain accountability and integrity. Edify maintains transparency (openness, communication and accountability) in every aspect of our dealings. We work to ensure students and families receive the fullest picture of admissions with real insight about the whole admissions process, visa application and even pre-departure orientation." imgUrl="images/aboutImg.jpg" iconClass="fa-solid fa-recycle" />
          <EachQuality title="Devoted" desc="We look at the consultancy differently! We are particularly clinical to take care of your problems and remain focused until we can find the right solution. We dedicate ourselves to understand your individual needs and provide special tailored service you may require. We are always in touch and responsive to your queries. At Edify, we strive to give wholehearted personal attention to every single student in friendly manner." imgUrl="images/aboutImg.jpg" iconClass="fa-solid fa-hands-holding-circle" />
          <EachQuality title="Global Partners" desc="Our excellent network with the Universities helps us to deliver superlative services to our students. We provide end to end services in the application process and visa formalities along with specialised staff members to teach you to crack entry-level tests IELTS, PTE, LanguageCert etc which makes us a single point of contact for overseas education. We work closely with students and institutions to ensure that students receive the best and most appropriate guidance. Our aim is to ensure that every student get proper advice, and this, together with our extensive educational knowledge and our excellent relationship with Universities/Colleges, means that we always achieve optimum placement for our students." imgUrl="images/aboutImg.jpg" iconClass="fa-solid fa-handshake" />
          <EachQuality title="Astute Team" desc="Practical wisdom, trusted advice! Our success rate with visa applications and university admissions is one of the highest in the industry. So, you can be rest assured that your whole application process is in good hands with our certified and professionally trained team of counsellors and processing team. We provide help with accurate and error-free application for admission and visa application. Once we take an assignment, we carry on our work on time and through due diligence we follow necessary procedures. Our target is to achieve 100% success rate." imgUrl="images/aboutImg.jpg" iconClass="fa-solid fa-people-group" />
          <EachQuality title="Ever Lasting Accord" desc="A long-term healthy is our signature! At Edify, we are committed to provide much more than excellent education consultancy – with us, you are not a number only; you are an individual whom we take care of. We hope that you can take great inspiration and motivation from our counselling and drive your ambition to the optimum level. We also guide you from the start to finish during your studies, taking total care of you throughout and then help you with career planning for the future." imgUrl="images/aboutImg.jpg" iconClass="fa-solid fa-star" />
        </div>
        <div className="row ceoMessage">
          <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 CEOImg">
            <img src="images/CEOImg.jpeg" alt="" />
          </div>
          <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 ceoMessageText">
            <p className='slbp'>Founder Message</p>
            <h3 className='tlbh'>CEO Message</h3>
            <p className='slbp text-justify'>
              It is a matter of immense pride for me to present Edify Group of Companies’ services. With our team of professional counsellors and other highly skilled personnel, we aim to help students achieve their dream of attaining premium quality education from top-quality institutions around the world. We are committed to deliver the very best to our esteemed clients. I hope to see Edify Company rising to the heights of global standards and achieving much more, which I am certain, it is capable of. The team is skilled in understanding the requirements and the mindset of each individual client- this allows us to help them attain results as per their demands. The team at Edify is fully equipped with the knowledge of recent transitions of the industry which aids us in providing top quality services according to the current trends. To keep ourselves at par with the ever-changing standards, we never slack in picking up the very best human resource. I am utterly pleased to see how our company is able to manage the coalescence of suited human capital with your unique and elusive requirements in a most conducive working environment. The team at Edify is readily available to answer any questions that students might be having. On behalf of Edify Company, I assure you of the best services that we provide by integrating care and perseverance while providing you the very best of solutions. <br />
              Therefore, I, Azeem Qasim, invite you to join us so that you may experience quality of services that are a class apart.
            </p>
            <p className='slbp'>I look forward to meeting you soon.</p>
            <img className='CEOSignature' src="images/signature.png" alt="" />
            <h5>Azeem Qasim</h5>
            <p className='slbp'>Edify Founder & CEO</p>
          </div>
        </div>
      </div>
      <ProsAbout />
      <Footer />
    </div>
  )
}

export default About