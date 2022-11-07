import './FAQ.css'
import NavBar from '../../NavBar/NavBar'
import Footer from '../../Footer/Footer'
import ProsAbout from '../../ProsAbout/ProsAbout'
import EachPageHeader from '../EachPageHeader/EachPageHeader'
import { useState } from 'react'
import TopBar from '../../TopBar/TopBar'

const FAQ = () => {

  const [ans1Height, setAns1Height] = useState(0)
  const [ans2Height, setAns2Height] = useState(0)
  const [ans3Height, setAns3Height] = useState(0)
  const [ans4Height, setAns4Height] = useState(0)
  const [ans5Height, setAns5Height] = useState(0)
  const [ans6Height, setAns6Height] = useState(0)
  const [ans7Height, setAns7Height] = useState(0)
  const [ans8Height, setAns8Height] = useState(0)

  return (
    <div>
      <TopBar />
      <NavBar />
      <div className='FAQ'>
        <EachPageHeader heading="FAQ's" />
        <div className="wrapper">
          <p className='flp'>FAQS</p>
          <h2 className="slbh" style={{ textAlign: "center" }}>Frequently Asked Questions</h2>
          <div className="row allquestions">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 eachQuestionsSection">
              <div className="eachQA">
                <div className="eachQuestionSection" onClick={() => ans1Height === 0 ? setAns1Height(250) : setAns1Height(0)}>
                  <h5>Am I eligible to study abroad?</h5>
                  <i className="fa-solid fa-chevron-up"></i>
                </div>
                <div className="eachAsnwerSection" style={{ height: `${ans1Height}px` }}>
                  <p>To begin studying as an international student, there are a range of entry requirements you may have to meet.
                    The academic requirements (including evidence of English language skills) you need to study abroad will vary depending on the level of education you want to pursue. For instance, some courses will require you to have done a foundation course before applying for a degree. All universities and schools can have different entry requirements. We at Edify will help you assess your eligibility for different programs and guide you on the courses and locations that best meet your preferences.
                  </p>
                </div>
              </div>
              <div className="eachQA">
                <div className="eachQuestionSection" onClick={() => ans2Height === 0 ? setAns2Height(130) : setAns2Height(0)}>
                  <h5>How much will it cost to Study Abroad?</h5>
                  <i className="fa-solid fa-chevron-up"></i>
                </div>
                <div className="eachAsnwerSection" style={{ height: `${ans2Height}px` }}>
                  <p>The most important and major chunk of your study abroad expense depends on the type of qualification and institution you opt for. Here’s a quick overview of the tuition fee for different programs in our top destinations.</p>
                </div>
              </div>
              <div className="eachQA">
                <div className="eachQuestionSection" onClick={() => ans3Height === 0 ? setAns3Height(130) : setAns3Height(0)}>
                  <h5>How long does it take for a student visa to be issued?</h5>
                  <i className="fa-solid fa-chevron-up"></i>
                </div>
                <div className="eachAsnwerSection" style={{ height: `${ans3Height}px` }}>
                  <p>Student (F and M) visas for new students can be issued up to 120 days in advance of the start date for a course of study. Waiting times for your visa appointment vary wildly between countries. You could get it in 3 days or in 3 months, depending on the case</p>
                </div>
              </div>
              <div className="eachQA">
                <div className="eachQuestionSection" onClick={() => ans4Height === 0 ? setAns4Height(130) : setAns4Height(0)}>
                  <h5>Conditional & Un- Conditional Offer Letter- What is the difference?</h5>
                  <i className="fa-solid fa-chevron-up"></i>
                </div>
                <div className="eachAsnwerSection" style={{ height: `${ans4Height}px` }}>
                  <p>Conditional offer, as the name implies, comes with ‘conditions. When you are offered a ‘conditional’ offer, it means that you need to fulfil certain criteria, in terms of marks and academic requirements, to get admissions at the university whereas an unconditional offer letter is like a final acceptance letter. It signifies that a student has been accepted by the university since the student met the academic requirements.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 eachQuestionsSection">
              <div className="eachQA">
                <div className="eachQuestionSection" onClick={() => ans5Height === 0 ? setAns5Height(130) : setAns5Height(0)}>
                  <h5>Scholarships & Bursaries- What’s the difference?</h5>
                  <i className="fa-solid fa-chevron-up"></i>
                </div>
                <div className="eachAsnwerSection" style={{ height: `${ans5Height}px` }}>
                  <p>Scholarships are more inclined to fund students with outstanding academic performance while bursaries are mostly prone to support students in financial need.</p>
                </div>
              </div>
              <div className="eachQA">
                <div className="eachQuestionSection" onClick={() => ans6Height === 0 ? setAns6Height(130) : setAns6Height(0)}>
                  <h5>What challenges should I expect to face?</h5>
                  <i className="fa-solid fa-chevron-up"></i>
                </div>
                <div className="eachAsnwerSection" style={{ height: `${ans6Height}px` }}>
                  <p>Many students who leave their comfort zone may encounter culture shock, Homesickness or loneliness, financial issues, and language barriers. Remember to see these challenges as an opportunity for self-improvement, and the benefits of studying abroad will greatly outweigh the difficulties.
                    Studying Abroad is an incredible life-changing experience, but before you jump in, you need to do your research andplan accordingly. Edify Group is always there to support you along the way. Good luck!
                  </p>
                </div>
              </div>
              <div className="eachQA">
                <div className="eachQuestionSection" onClick={() => ans7Height === 0 ? setAns7Height(130) : setAns7Height(0)}>
                  <h5>What type of housing is available to me?</h5>
                  <i className="fa-solid fa-chevron-up"></i>
                </div>
                <div className="eachAsnwerSection" style={{ height: `${ans7Height}px` }}>
                  <p>Options vary and usually include student apartments, residential halls (dorms), and homestays with local families.</p>
                </div>
              </div>
              <div className="eachQA">
                <div className="eachQuestionSection" onClick={() => ans8Height === 0 ? setAns8Height(130) : setAns8Height(0)}>
                  <h5>What Is an I-20 Form?</h5>
                  <i className="fa-solid fa-chevron-up"></i>
                </div>
                <div className="eachAsnwerSection" style={{ height: `${ans8Height}px` }}>
                  <p>An “I-20” form for a student visa in the USA is a Certificate of Eligibility issued by accredited colleges or universities in the US for international students on an F-1 student visa or an M-1 student visa. The “I-20” form proves that you are a legitimate student studying in the US and is an important step in getting your student visa.</p>
                </div>
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

export default FAQ