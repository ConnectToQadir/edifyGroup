import './Services.css'
import NavBar from '../../NavBar/NavBar'
import Footer from '../../Footer/Footer'
import ProsAbout from '../../ProsAbout/ProsAbout'
import EachPageHeader from '../EachPageHeader/EachPageHeader'
import TopBar from '../../TopBar/TopBar'

const Services = () => {

  const allServices = [
    {
      imgUrl: "2",
      title: "Admission Guidance",
      desc: "We give special attention to your application, highlighting the areas essential for a well-presented, error free application. We assist with References and the 'all-important' Statement of Purpose. We assess your English and the Universities admission committees many times consider our recommendations. We have exhaustive information, prospectus, brochures, CD's & application forms, etc."
    }
    ,
    {
      imgUrl: "3",
      title: "University Selection",
      desc: "University selection is the most crucial stage of the application process. It is done, based on your test scores, at least six months before the time you intend to join your prospective universities. Based on our extensive experience in this field and contacts with our past students from various universities around the world, we help you select good universities to apply to, where chances of getting financial assistance are also good."
    }
    ,
    {
      imgUrl: "4",
      title: "Visa Application Assistance",
      desc: "We help you in entire Visa process like, filling up applications, preparing financial statements, and also guidance and training for mock interviews and much more. We are regularly advised by the consulates about the latest Visa documentation and rules and have a success rate of over 90%. Visa Guidance is Free for all Edify’s clients for all countries."
    },
    {
      imgUrl: "5",
      title: "Pre- Departure Orientation",
      desc: "Prior to landing in a new country of your choice appropriate guidance is provided to help you migrate, travel & settle abroad. The same provides an opportunity to meet other students and their parents who are heading abroad and possibly to the same university. We also provide an extremely updated & comprehensive Pre-Departure Brochure to every student prior to their travel."
    },
    {
      imgUrl: "6",
      title: "Travel Assistance",
      desc: "We take care of booking flights well in advance to allow ideal departure dates, routes and also best discounts. We help you identify the right airlines for excess baggage schemes. Several International Airlines offer special schemes for students & our counsellors can help you with this information."
    },
    {
      imgUrl: "7",
      title: "Post-Departure Support",
      desc: "We at Edify continue to provide our support and help even when you reach a new country. We’ll assist you with: open bank account overseas, university enrollment, etc."
    },
    {
      imgUrl: "9",
      title: "Language Test Preparation",
      desc: "Here, at Edify, one of our expertise lies in preparing students for the IELTS test. We, on our hands, provide all that you need; preparation materials and even British Council Certified Trainer. So, without any further delay, get yourself enrolled in IELTS test preparation at Edify. Apart from IELTS, we also prepare students for Duolingo, PTE, TOEFL, IELTS UKVI, IELTS Life Skills and IELTS General Training."
    },
    {
      imgUrl: "8",
      title: "Financial Aid & Scholarship Guidance",
      desc: "We provide guidance about securing scholarships, bursaries, loans and awards."
    }

  ]


  return (
    <div>
      <TopBar />
      <NavBar />
      <div className='Services'>
        <EachPageHeader heading="Services" />
        <div className="row actualServies">
          <div className="sideBar col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <p className="flp" data-aos="fade-down">Our Services</p>
            <h2 className="slbh"data-aos="fade-down" data-aos-duration="1200" >We Strive to Provide the Finest Service Possible to Our Students</h2>
            <p className="slbp">Edify consultant provides A to Z services for student visa in major universities and colleges of the countries around the globe, when student come with dream of studying abroad. We are the place he/she starts with selection of subject and institution end up with successful completion of their proposed study program. We are committed to ensuring that students receive a worthwhile, productive and high-quality education.</p>
            <div data-aos="fade-right" data-aos-duration="1200" className="EachServiceOuter counceling">
              <div className="eachServiceInner">
                <div className="imgDiv">
                  <img src={`images/services/1w.png`} alt="" />
                </div>
                <div className="ContentDiv">
                  <h3 className="tlbh">Counselling</h3>
                  <p className='slbp'>Applying for studies abroad is a huge decision and that is why we do not limit our counselling to just choosing the right country and right university but extend it to making the right ‘career decision’. Our educational counsellors first try to understand your educational background and your career objectives and then suggest programs in the countries and universities suiting your preferences. Careful strategic planning is the key to successfully maneuvering through the emotional and financial decisions regarding the college/university selection process. This is where Edify can help students to make appropriate and rewarding choices. Edify ensures that students achieve their long-cherished goals of studying abroad without any obstacle. Highly qualified and experienced counsellors are here to help students in the best possible way.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="sideBar col-xl-8 col-lg-8 col-md-12 col-sm-12">
            <div className='row'>
              {
                allServices.map((v, i) => {
                  return (
                    <div data-aos="zoom-in" key={i} className="col-xl-6 col-lg-6 col-md-12 col-sm-12 EachServiceOuter">
                      <div className="eachServiceInner">
                        <div className="imgDiv">
                          <img src={`images/services/${v.imgUrl}.png`} alt="" />
                        </div>
                        <div className="ContentDiv">
                          <h3 className="tlbh">{v.title}</h3>
                          <p className='slbp'>{v.desc}</p>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <ProsAbout />
      <Footer />
    </div>
  )
}

export default Services