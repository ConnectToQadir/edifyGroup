import './Apply.css'
import NavBar from '../../NavBar/NavBar'
import Footer from '../../Footer/Footer'
import ProsAbout from '../../ProsAbout/ProsAbout'
import TopBar from '../../TopBar/TopBar'
import { useFormik } from 'formik'
import { useState } from 'react'
import { applySchema } from './Schema'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';


const initialValues = {
  // Personal Info
  name: "",
  dob: "",
  gender: "",
  email: "",
  phone: "",
  altPhone: "",
  address: "",
  city: "",
  country: "",

  // Previous Qualifications
  edu: [],
  eTest: "",
  eTestName: "",
  eTestOMar: "",
  lisMar: "",
  readMar: "",
  wriMar: "",
  speekMar: "",

  // Work Experience
  desig: "",
  cName: "",
  sDate: "",
  eDate: "",

  // Country Preference
  pCountries: [], // pending
  pCourse: "",
  pCity: "",


  // More Info
  oQuery: "",
  hereAbout: "",
}


const Apply = () => {

  const [noOfEdu, setNoOfEdu] = useState(1)
  const [eTest, setETest] = useState("")

  const { handleChange, values, handleSubmit, errors } = useFormik({
    initialValues,
    validationSchema: applySchema,
    onSubmit: async (values, action) => {
      try {
        if (getCheckedCountries().length === 0) {
          toast.error("Please Select Prefered Countries")
        } else {
          const submittedApplication = await axios.post("https://edifygroup.herokuapp.com/api/apply/addApply", values)
          submittedApplication && toast.success("Form Submitted Successfully!")
          const mailSent = await axios.post("https://edifygroup.herokuapp.com/sendResponse",{name:values.name,email:values.email})
          action.resetForm();
        }
      } catch (error) {
        toast.error("Something Went Wrong While Submitted This Form => " + error)
      }
    }
  })


  const [aus, setAus] = useState(false)
  const [usa, setUsa] = useState(false)
  const [uk, setUk] = useState(false)
  const [se, setSe] = useState(false)
  const [ca, setCa] = useState(false)
  const [oCountry, setOCountry] = useState(false)
  const [oCountryName, setOtherCountryName] = useState("")
  // Checked Values Collect Function
  const getCheckedCountries = () => {
    var checkedCountries = []
    aus && checkedCountries.push("Australia")
    usa && checkedCountries.push("USA")
    uk && checkedCountries.push("UK")
    se && checkedCountries.push("Sweden")
    ca && checkedCountries.push("Canada")
    oCountryName && checkedCountries.push(oCountryName)
    return checkedCountries;
  }
  values.pCountries = getCheckedCountries();

  // All Education States Variables ====================================================
  const [edu1, setEdu1] = useState("")
  const [edu2, setEdu2] = useState("")
  const [edu3, setEdu3] = useState("")
  const [edu4, setEdu4] = useState("")
  const [edu5, setEdu5] = useState("")
  const [edu6, setEdu6] = useState("")

  const [sub1,setSub1] = useState("")
  const [sub2,setSub2] = useState("")
  const [sub3,setSub3] = useState("")
  const [sub4,setSub4] = useState("")
  const [sub5,setSub5] = useState("")
  const [sub6,setSub6] = useState("")

  const [yCom1, setYCom1] = useState("")
  const [yCom2, setYCom2] = useState("")
  const [yCom3, setYCom3] = useState("")
  const [yCom4, setYCom4] = useState("")
  const [yCom5, setYCom5] = useState("")
  const [yCom6, setYCom6] = useState("")

  const [ins1, setIns1] = useState("")
  const [ins2, setIns2] = useState("")
  const [ins3, setIns3] = useState("")
  const [ins4, setIns4] = useState("")
  const [ins5, setIns5] = useState("")
  const [ins6, setIns6] = useState("")

  const [marks1, setMarks1] = useState("")
  const [marks2, setMarks2] = useState("")
  const [marks3, setMarks3] = useState("")
  const [marks4, setMarks4] = useState("")
  const [marks5, setMarks5] = useState("")
  const [marks6, setMarks6] = useState("")

  // Collect All Qualifications Fuctions
  const collectAllQualifications = () => {
    const educations = []
    if (edu1 != "") {
      educations.push({
        edu: edu1,
        sub:sub1,
        yCom: yCom1,
        ins: ins1,
        marks: marks1
      })
    }
    if (edu2 != "") {
      educations.push({
        edu: edu2,
        sub:sub2,
        yCom: yCom2,
        ins: ins2,
        marks: marks2
      })
    }
    if (edu3 != "") {
      educations.push({
        edu: edu3,
        sub:sub3,
        yCom: yCom3,
        ins: ins3,
        marks: marks3
      })
    }
    if (edu4 != "") {
      educations.push({
        edu: edu4,
        sub:sub4,
        yCom: yCom4,
        ins: ins4,
        marks: marks4
      })
    }
    if (edu5 != "") {
      educations.push({
        edu: edu5,
        sub:sub5,
        yCom: yCom5,
        ins: ins5,
        marks: marks5
      })
    }
    if (edu6 != "") {
      educations.push({
        edu: edu6,
        sub:sub6,
        yCom: yCom6,
        ins: ins6,
        marks: marks6
      })
    }
    return educations
  }

  values.edu = collectAllQualifications();

  return (
    <div>
      <TopBar />
      <NavBar />
      <form onSubmit={handleSubmit} className='Apply'>
        <h2 className='flh' style={{ marginBottom: "30px", color: "#000" }}>Information <span style={{ color: "var(--blueMain)" }}>Form</span></h2>
        <div className="allSections">

          <div className=" eachSection">
            <h3 style={{ fontSize: "18px", borderTop: "1px solid #bbb" }} className='flbp'>Personal Information</h3>
            <div className="allInputFields">

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 eachInput">
                <label htmlFor="name">Name <span style={{color:"red"}}>*</span> : </label>
                <input id='name' name='name' value={values.name} onChange={handleChange} type="text" placeholder='Full Name' />
                <p className='slbp errPara'>{errors.name}</p>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 eachInput">
                <label htmlFor="dob">Date of Birth <span style={{color:"red"}}>*</span> :</label>
                <input id='dob' name='dob' value={values.dob} onChange={handleChange} type="date" />
                <p className='slbp errPara'>{errors.dob}</p>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 eachInput">
                <label htmlFor="gender">Gender <span style={{color:"red"}}>*</span> : </label>
                <span className='radio'>

                  <span className='eachRadio'>
                    <input type="radio" value="Male" onChange={handleChange} name="gender" /><span>Male</span>
                  </span>
                  <span className='eachRadio'>
                    <input type="radio" value="Female" onChange={handleChange} name="gender" /><span>Female</span>
                  </span>

                </span>
                <p className='slbp errPara'>{errors.gender}</p>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachInput">
                <label htmlFor="email">Email Address <span style={{color:"red"}}>*</span> :</label>
                <input id='email' value={values.email} onChange={handleChange} name='email' type="email" placeholder='Email Address' />
                <p className='slbp errPara'>{errors.email}</p>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachInput">
                <label htmlFor="phone">Contact No <span style={{color:"red"}}>*</span> : </label>
                <span className='phoneDiv'>
                  <span>+92</span>
                  <input id='phone' value={values.phone} onChange={handleChange} name='phone' type="number" placeholder='3xxxxxxxxx' />
                </span>
                <p className='slbp errPara'>{errors.phone}</p>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachInput">
                <label htmlFor="altPhone">Alternate Contact No : </label>
                <span className='phoneDiv'>
                  <span>+92</span>
                  <input id='altPhone' value={values.altPhone} onChange={handleChange} name="altPhone" type="number" placeholder='3xxxxxxxxx' />
                </span>
                <p className='slbp errPara'>{errors.altPhone}</p>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachInput">
                <label htmlFor="address">Home Address <span style={{color:"red"}}>*</span> : </label>
                <input id='address' value={values.address} onChange={handleChange} name="address" type="text" placeholder='Home Address' />
                <p className='slbp errPara'>{errors.address}</p>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachInput">
                <label htmlFor="city">City <span style={{color:"red"}}>*</span> : </label>
                <input id='city' value={values.city} onChange={handleChange} name="city" type="text" placeholder='City' />
                <p className='slbp errPara'>{errors.city}</p>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachInput">
                <label htmlFor="country">Country <span style={{color:"red"}}>*</span> : </label>
                <input id='country' value={values.country} onChange={handleChange} name="country" type="text" placeholder='Country' />
                <p className='slbp errPara'>{errors.country}</p>
              </div>

            </div>
          </div>

          <div className=" eachSection">
            <h3 style={{ fontSize: "18px" }} className='flbp'>Previous Qualification From Matric Onward</h3>   {/* Pending =================== */}
            <div className="allInputFields">

              {[...Array(noOfEdu)].map((v, i) => {
                return (
                  <div key={i} className="col-12 eachQualificationSection">
                    <div className="col-xl-3 col-md-3 col-lg-3 col-sm-12 eachInput">
                      <label htmlFor="edu">Qualification <span style={{color:"red"}}>*</span> : </label>
                      <select
                        name='edu'
                        id='edu'
                        value={eval(`edu${i + 1}`)}
                        onChange={(e) => eval(`setEdu${i + 1}`)(e.target.value)}
                      >
                        <option value="">Select Qualification</option>
                        <option value="Matric">Matric</option>
                        <option value="oLevels">O-Levels / IGCSE</option>
                        <option value="Inter"> Intermediate</option>
                        <option value="A-Levels"> A-Levels</option>
                        <option value="AS-Levels"> AS-Levels</option>
                        <option value="Bachelor">Bcom / BA / BSc</option>
                        <option value="Bachelor-I">ADP / HND</option>
                        <option value="Bachelor Hons">Bechelor Honors</option>
                        <option value="Master">Master</option>
                      </select>
                    </div>
                    <div className="col-xl-3 col-md-3 col-lg-3 col-sm-12 eachInput">
                      <label htmlFor="sub">Subject / Program / Degree <span style={{color:"red"}}>*</span> : </label>
                      <input value={eval(`sub${i + 1}`)}
                        onChange={(e) => eval(`setSub${i + 1}`)(e.target.value)} type="string" id='sub' name="sub" placeholder='e.g Science,FSC,BSCS' />
                    </div>
                    <div className="col-xl-2 col-md-2 col-lg-2 col-sm-12 eachInput">
                      <label htmlFor="yCom">Year of Completion <span style={{color:"red"}}>*</span> : </label>
                      <input value={eval(`yCom${i + 1}`)}
                        onChange={(e) => eval(`setYCom${i + 1}`)(e.target.value)} type="number" id='yCom' name="yCom" placeholder='Enter Year' />
                    </div>
                    <div className="col-xl-2 col-md-2 col-lg-2 col-sm-12 eachInput">
                      <label htmlFor="ins">Institution <span style={{color:"red"}}>*</span> : </label>
                      <input value={eval(`ins${i + 1}`)}
                        onChange={(e) => eval(`setIns${i + 1}`)(e.target.value)} type="text" id='ins' name="ins" placeholder='Institution Name' />
                    </div>

                    <div className="col-xl-2 col-md-2 col-lg-2 col-sm-12 eachInput">
                      <label htmlFor="marks">Grade / CGPA / %age <span style={{color:"red"}}>*</span> : </label>
                      <input value={eval(`marks${i + 1}`)}
                        onChange={(e) => eval(`setMarks${i + 1}`)(e.target.value)} type="text" id='marks' name='marks' placeholder='Grade / CGPA / %age' />
                    </div>
                  </div>
                )
              })}

              <div className="col-12 addMoreQuaSection" >
                <span onClick={() => setNoOfEdu(noOfEdu + 1)}><i className="fa-solid fa-circle-plus"></i>Add More</span>
              </div>


              <div className="col-6 eachInput">
                <label htmlFor="eTest">Have you ever taken any English Language Test?  <span style={{color:"red"}}>*</span> </label>
                <span className='radio'>
                  <span className="eachRadio">
                    <input type="radio" value="Y" onChange={handleChange} name="eTest" /><span>Yes</span>
                  </span>
                  <span className="eachRadio">
                    <input type="radio" value="N" onChange={handleChange} name="eTest" /><span>No</span>
                  </span>
                </span>
                <p className='slbp errPara'>{errors.eTest}</p>
              </div>

              {
                values.eTest === "Y" &&
                <div className="col-3 eachInput">
                  <label htmlFor="eTestName">Which Test <span style={{color:"red"}}>*</span> : </label>
                  <input type="text" value={values.eTestName} onChange={handleChange} autoFocus id='eTestName' name='eTestName' placeholder='Enter Test Name' />
                  <p className='slbp errPara'>{errors.eTestName}</p>
                </div>
              }

              {
                values.eTest === "Y" &&
                <div className="col-3 eachInput">
                  <label htmlFor="eTestOMar">Overall Marks <span style={{color:"red"}}>*</span> : </label>
                  <input type="text" value={values.eTestOMar} onChange={handleChange} id='eTestOMar' name='eTestOMar' placeholder='Enter Overall Marks' />
                  <p className='slbp errPara'>{errors.eTestOMar}</p>
                </div>
              }

              {
                values.eTest === "Y" &&
                <div className="col-3 eachInput">
                  <label htmlFor="lisMar">Listening <span style={{color:"red"}}>*</span> : </label>
                  <input type="number" value={values.lisMar} onChange={handleChange} id='lisMar' name='lisMar' placeholder='Listening Marks' />
                  <p className='slbp errPara'>{errors.lisMar}</p>
                </div>
              }

              {
                values.eTest === "Y" &&
                <div className="col-3 eachInput">
                  <label htmlFor="readMar">Reading <span style={{color:"red"}}>*</span> : </label>
                  <input type="number" value={values.readMar} onChange={handleChange} id='readMar' name='readMar' placeholder='Reading Marks' />
                  <p className='slbp errPara'>{errors.readMar}</p>
                </div>
              }
              {
                values.eTest === "Y" &&

                <div className="col-3 eachInput">
                  <label htmlFor="speekMar">Speeking <span style={{color:"red"}}>*</span> : </label>
                  <input type="number" value={values.speekMar} onChange={handleChange} id='speekMar' name='speekMar' placeholder='Speeking Marks' />
                  <p className='slbp errPara'>{errors.speekMar}</p>
                </div>
              }
              {
                values.eTest === "Y" &&
                <div className="col-3 eachInput">
                  <label htmlFor="wriMar">Writing <span style={{color:"red"}}>*</span> : </label>
                  <input type="number" value={values.wriMar} onChange={handleChange} id='wriMar' name='wriMar' placeholder='Writing Marks' />
                  <p className='slbp errPara'>{errors.wriMar}</p>
                </div>
              }

            </div>
          </div>

          <div className=" eachSection">
            <h3 style={{ fontSize: "18px" }} className='flbp'>Work Experience / Internship</h3>
            <div className="allInputFields">

              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 eachInput">
                <label htmlFor="desig">Designation : </label>
                <input type="text" value={values.desig} onChange={handleChange} id='desig' name='desig' placeholder='Enter Designation' />
                <p className='slbp errPara'>{errors.desig}</p>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 eachInput">
                <label htmlFor="cName">Company Name : </label>
                <input type="text" value={values.cName} onChange={handleChange} name='cName' id='cName' placeholder='Company Name' />
                <p className='slbp errPara'>{errors.cName}</p>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 eachInput">
                <label htmlFor="sDate">From : </label>
                <input type="date" value={values.sDate} onChange={handleChange} id='sDate' name='sDate' />
                <p className='slbp errPara'>{errors.sDate}</p>
              </div>

              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 eachInput">
                <label htmlFor="eDate">To : </label>
                <input type="date" value={values.eDate} onChange={handleChange} id='eDate' name='eDate' />
                <p className='slbp errPara'>{errors.eDate}</p>
              </div>

            </div>
          </div>

          <div className=" eachSection">
            <h3 style={{ fontSize: "18px" }} className='flbp'>Country Preference</h3>
            <div className="allInputFields">
              <div className="col-12 eachInput">

                <label htmlFor="name">Select Your Prefered Countries <span style={{color:"red"}}>*</span> : </label>
                <span className='checkBox'>
                  <span className="eachCheckBox" >
                    <input type="checkBox" value={aus} onChange={() => setAus(!aus)} /><span>Australia</span>
                  </span>
                  <span className="eachCheckBox">
                    <input type="checkBox" value={uk} onChange={() => setUk(!uk)} /><span>United Kingdom</span>
                  </span>
                  <span className="eachCheckBox">
                    <input type="checkBox" value={usa} onChange={() => setUsa(!usa)} /><span>USA</span>
                  </span>
                  <span className="eachCheckBox">
                    <input type="checkBox" value={se} onChange={() => setSe(!se)} /><span>Sweden</span>
                  </span>
                  <span className="eachCheckBox">
                    <input type="checkBox" value={ca} onChange={() => setCa(!ca)} /><span>Canada</span>
                  </span>
                  <span className="eachCheckBox">
                    <input type="checkBox" value={oCountry} onChange={() => setOCountry(!oCountry)} /><span>Other</span>
                    {
                      oCountry &&
                      <input autoFocus style={{ border: "none", borderBottom: "1px solid gray", padding: "0px 5px" }} value={oCountryName} onChange={(e) => setOtherCountryName(e.target.value)} type="text" placeholder='Other Country Name' />
                    }
                  </span>
                </span>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachInput">
                <label htmlFor="pCourse" >Prefered Course <span style={{color:"red"}}>*</span> : </label>
                <span>
                  <input type="text" value={values.pCourse} onChange={handleChange} name="pCourse" id='pCourse' placeholder='Course Name' />
                </span>
                <p className='slbp errPara'>{errors.pCourse}</p>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachInput">
                <label htmlFor="pCity" >Prefered City <span style={{color:"red"}}>*</span> : </label>
                <span>
                  <input type="text" value={values.pCity} onChange={handleChange} id='pCity' name="pCity" placeholder='City Name' />
                </span>
                <p className='slbp errPara'>{errors.pCity}</p>
              </div>

            </div>
          </div>

          <div className=" eachSection">
            <h3 style={{ fontSize: "18px" }} className='flbp'>More Info</h3>
            <div className="allInputFields">

              <div className="col-12 eachInput">
                <label htmlFor="oQuery">Any Other Query : </label>
                <textarea id='oQuery' value={values.oQuery} onChange={handleChange} name="oQuery" type="text" placeholder='Start Writing...' />
                <p className='slbp errPara'>{errors.oQuery}</p>
              </div>

              <div className="col-12 eachInput">
                <label htmlFor='hereAbout'>How did you hear about us ? <span style={{color:"red"}}>*</span> </label>
                <span className='radio'>
                  <span className='eachRadio'><input onChange={handleChange} type="radio" value="Banner" name="hereAbout" /><span>Banner</span></span>
                  <span className='eachRadio'><input onChange={handleChange} type="radio" value="Social Media" name="hereAbout" /><span>Social Media</span></span>
                  <span className='eachRadio'><input onChange={handleChange} type="radio" value="Call / SMS" name="hereAbout" /><span>Call / SMS</span></span>
                  <span className='eachRadio'><input onChange={handleChange} type="radio" value="Through a Friend" name="hereAbout" /><span>Through a Friend</span></span>
                </span>
                <p className='slbp errPara'>{errors.hereAbout}</p>
              </div>
            </div>
          </div>
          <div className=" eachSection btnsSection">
            <button type='submit'>Submit</button>
          </div>
        </div>
      </form >
      <ToastContainer />
      <ProsAbout />
      <Footer />
    </div >
  )
}

export default Apply

