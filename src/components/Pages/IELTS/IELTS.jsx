import './IELTS.css'
import NavBar from '../../NavBar/NavBar'
import Footer from '../../Footer/Footer'
import ProsAbout from '../../ProsAbout/ProsAbout'
import EachPageHeader from '../EachPageHeader/EachPageHeader'
import TopBar from '../../TopBar/TopBar'

const IELTS = () => {
  return (
    <div>
      <TopBar />
      <NavBar />
      <div className='IELTS'>
        <EachPageHeader heading="IELTS" />
        <div className="row ieltsDetailSectionOuter">
          <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 ieltsDetailSection">
            <p className="flp">IELTS Details</p>
            <h2 className="slbh">IELTS Coaching Overview</h2>
            <p className="slbp">Being a platinum level member of the British council, Edify takes pride in providing range of multiple English tests, that not only help you applying in multiple institutes around the globe as well as polish your English language proficiency. Most of the tests offered by our IELTS centre provide in-depth language assessment and evaluates all students on their English skills – reading, writing, listening and speaking. Some of the programs offered are enlisted below:</p>
            <div className="row ieltsTestsLoges">
              <div className="col-6 imgDiv"><img src="images/IELTS/1.png" alt="" /></div>
              <div className="col-6 imgDiv"><img src="images/IELTS/2.png" alt="" /></div>
              <div className="col-6 imgDiv"><img src="images/IELTS/6.png" alt="" /></div>
              <div className="col-6 imgDiv"><img src="images/IELTS/3.png" alt="" /></div>
              <div className="col-6 imgDiv"><img src="images/IELTS/4.png" alt="" /></div>
              <div className="col-6 imgDiv"><img src="images/IELTS/5.png" alt="" /></div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 coachingListSection">
            <h2 className="slbh" style={{ marginBottom: "16px" }}>Coaching List</h2>
            <div className="allItems">
              <div className="eachItem">
                <p className="flp" style={{ color: "#fff" }}>IELTS</p>
              </div>
              <div className="eachItem">
                <p className="flp" style={{ color: "#fff" }}>IELTS UKVI</p>
              </div>
              <div className="eachItem">
                <p className="flp" style={{ color: "#fff" }}>IELTS LIFE SKILLS</p>
              </div>
              <div className="eachItem">
                <p className="flp" style={{ color: "#fff" }}>IELTS GENERAL TRAINING</p>
              </div>
              <div className="eachItem">
                <p className="flp" style={{ color: "#fff" }}>DUOLINGO TEST</p>
              </div>
              <div className="eachItem">
                <p className="flp" style={{ color: "#fff" }}>SPOKEN ENGLISH</p>
              </div>
              <div className="eachItem">
                <p className="flp" style={{ color: "#fff" }}>TOEFL</p>
              </div>
              <div className="eachItem">
                <p className="flp" style={{ color: "#fff" }}>LANGUAGE CERT</p>
              </div>
              <div className="eachItem">
                <p className="flp" style={{ color: "#fff" }}>PTE Academic</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row ieltsDetailSectionOuter">
          <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 ieltsDetailSection">
            <p className="flp">HOW TO</p>
            <h2 className="slbh">How To Do Test Preparation</h2>
            <p className="slbp">
              Preparation plays a vital role and that's what we keep in mind here at Edify, starting from early revision sessions to answering the student’s questions to anticipate their concerns, problems, and interests.
            </p>
            <div className="allPreprationItems">
              <div className="eachPreprationItem">
                <div className="iconDiv">
                  <i className="fa-solid fa-chalkboard-user"></i>
                </div>
                <div className="contentDiv">
                  <p className="flp" style={{ fontSize: "22px", marginBottom: "10px", color: "var(--blueMain)" }}>Tutor Led Sessions</p>
                  <p>In our exceptional tutor led sessions, satisfaction is a guarantee. Provision of adequate guidance and feedback from our students is undoubtedly a positive feature of tutor led classes at Edify.</p>
                </div>
              </div>
              <div className="eachPreprationItem">
                <div className="iconDiv">
                  <i className="fa-solid fa-chalkboard-user"></i>
                </div>
                <div className="contentDiv">
                  <p className="flp" style={{ fontSize: "22px", marginBottom: "10px", color: "var(--blueMain)" }}>Real Time Classes</p>
                  <p>Edify creates a face-to-face environment for students and teachers where everyone can communicate with each other and engage.</p>
                </div>
              </div>
              <div className="eachPreprationItem">
                <div className="iconDiv">
                  <i className="fa-solid fa-chalkboard-user"></i>
                </div>
                <div className="contentDiv">
                  <p className="flp" style={{ fontSize: "22px", marginBottom: "10px", color: "var(--blueMain)" }}>Resource Material</p>
                  <p>Students at Edify are provided with sufficient material resources to ensure timely progress of students and to facilitate them with the best of supporting material, guaranteeing their success.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 onlineRegistrationOuter">
            <h2 className="slwh" >Online Registration</h2>
            <form action="" className='onlineRegistration'>
              <input type="text" placeholder='Name' />
              <input type="email" placeholder='Email' />
              <input type="number" placeholder='Phone' />
              <textarea type="text" placeholder='Message' />
              <button>Submit</button>
            </form>
          </div>
        </div>
        <div className="benefits">
          <p className="flp">BENEFITS</p>
          <h2 className='slbh'>Graduate Exam Benefits</h2>
          <div className="row allbenefits">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachBenefit">
              <div className="iconDiv">
                <i className="fa-solid fa-people-group"></i>
              </div>
              <div className="contentDiv">
                <h2 className="slbh">Coaching Time</h2>
                <p className='slbp'>We offer classes starting from 10 am to 6 pm for all our language exam preparation and certification classes.</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachBenefit">
              <div className="iconDiv">
                <i className="fa-solid fa-people-group"></i>
              </div>
              <div className="contentDiv">
                <h2 className="slbh">Assessment</h2>
                <p className='slbp'>Students at Edify are provided with facilitating regular assessment sessions throughout the coaching sessions.</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachBenefit">
              <div className="iconDiv">
                <i className="fa-solid fa-people-group"></i>
              </div>
              <div className="contentDiv">
                <h2 className="slbh">Certificate</h2>
                <p className='slbp'>Get your certifications from Edify, from a wide range of our divergent courses of exams and certifications.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProsAbout />
      <Footer />
    </div>
  )
}

export default IELTS