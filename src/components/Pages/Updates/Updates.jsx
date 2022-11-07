import './Updates.css'
import NavBar from '../../NavBar/NavBar'
import Footer from '../../Footer/Footer'
import EachPageHeader from '../EachPageHeader/EachPageHeader'
import ProsAbout from '../../ProsAbout/ProsAbout'
import Slider from "react-slick";
import { useRef } from 'react'
import TopBar from '../../TopBar/TopBar'

const Updates = () => {

  const sliderRef = [useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),useRef(null)]

  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    cssEase: "linear"
  };

  const allUpdate = [
    {
      dirName:"1",
      imgUrl: [1, 2, 3, 4],
      date: "29 Aug 2022",
      title: "British council visits to Edify Group",
      desc:"We are proud to be the First Ever Gold Level Member Achievers.“Give the world the best you have and the best will come back to you” Thank You, British Council for this incredible award."
    },
    {
      dirName:"2",
      imgUrl: [1, 2],
      date: "29 Aug 2022",
      title: "Eliya Care Foundation visits to Edify Group" ,
      desc:"The CEO of Edify Group of Companies and Vice President at Eilya Care Foundation is hosting a meeting with Board of Directors of Eilya Care Foundation Regarding Upcoming Projects for special children, New building for school, Fund Raising and internship programs for school and colleges."
    },
    {
      dirName:"3",
      imgUrl: [1, 2, 3, 4, 5, 6, 7],
      date: "29 Aug 2022",
      title: "Edify Inhouse Events",
      desc:"Reason Behind a good teamwork --- who celebrate and share their special things with each other"
    },
    {
      dirName:"4",
      imgUrl: [1, 2, 3, 4, 5],
      date: "29 Aug 2022",
      title: "Navitas visits to Edify Group ",
      desc:"We had a great meeting with Mr. Shoaib Gill The Student Recruitment Manager (Pakistan).Who’s Representing the Deakin College through NAVITAS GROUP. We discussed the Scholarships and Programs that offered at Deakin College."
    },
    {
      dirName:"5",
      imgUrl: [1, 2, 3],
      date: "29 Aug 2022",
      title: "Study Group visits to Edify Group",
      desc:"The Study Group Visited the Edify Group Head Office Faisalabad. We are honored to have you here. Regards The Edify Team."
    },
    {
      dirName:"6",
      imgUrl: [1],
      date: "29 Aug 2022",
      title: "Xiamen University Visits To Pakistan",
      desc:"Xiamen University paid visit to Edify Group of Companies and discussed regarding Admissions from Pakistan. Xiamen University ranks in top 10 university in China and 350 in the world. Xiamen University will offer upto 100% scholarship to Pakistani Students. Edify Group is now authorised agent of Xiamen."
    },
  ]

  return (
    <div className='upadatesOuter'>
      <TopBar />
      <NavBar />
      <div className='Updates'>
        <EachPageHeader heading="News & Upadates" />
        <div className="row allNews">
          {
            allUpdate.map((v, i) => {
              return (
                <div key={i} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 eachNewsOuter" onMouseEnter={() => sliderRef[i].current.slickPlay()} onMouseLeave={() => sliderRef[i].current.slickPause()} >
                  <div className="eachNewsInner">
                    <div className="imgDiv">
                      <Slider ref={sliderRef[i]} {...settings}>
                        {
                          v.imgUrl.map((o, f) => {
                            return (
                              <img key={f} src={`images/eventsImages/${v.dirName}/${o}.jpg`} alt="" />
                            )
                          })
                        }
                      </Slider>
                    </div>
                    <div className="contentDiv">
                      <p>{v.date}</p>
                      <h4>{v.title}</h4>
                      <p className='slbp'>{v.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <ProsAbout />
      <Footer />
    </div>
  )
}

export default Updates