import './CvDesign.css'
import NavBar from '../../NavBar/NavBar'
import Footer from '../../Footer/Footer'
import EachPageHeader from '../EachPageHeader/EachPageHeader'
import ProsAbout from '../../ProsAbout/ProsAbout'
import TopBar from '../../TopBar/TopBar'
import { useState, useRef } from 'react'
import Expand from 'react-expand-animated';
import JsPDF from 'jspdf'

const CvDesign = () => {

    const applicationRef = useRef()

    window.onbeforeunload = function (e) {
        var dialogText = 'Dialog text here';
        e.returnValue = dialogText;
        return dialogText;
    };

    const [photo, setPhoto] = useState("")
    const [loading, setLoading] = useState(false)

    const [cvData, setCVData] = useState({
        name: "",
        desig: "",
        gender: "",
        dob: "",
        phone: "",
        email: "",
        website: "",
        address: "",
        aboutme: "",
        eduations: [],
        workExp: [],
        activities: [],
        skills: [],
        awards: "",
        interest: "",
        certifications: ""
    })

    console.log(cvData)

    // Uplaoding Image to Cloudinary
    const handleFileInputChange = async e => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0])
        data.append("upload_preset", 'edifyBlog')
        setLoading(true)
        const res = await fetch("https://api.cloudinary.com/v1_1/connecttoqadir/image/upload", {
            method: "POST",
            body: data
        })
        const file = await res.json();
        setPhoto(file.secure_url)
        setLoading(false)
    }

    const [personalInfor, setPersonalInfor] = useState(false)
    const [aboutMe, setAboutMe] = useState(false)
    const [education, setEducation] = useState(false)
    const [workExp, setWorkExp] = useState(false)
    const [activities, setActivities] = useState(false)
    const [skills, setSkills] = useState(false)
    const [awards, setAwards] = useState(false)
    const [certifications, setCertifications] = useState(false)
    const [interest, setInterest] = useState(false)

    const handleFormChange = (e, id) => {
        if (e.target.name === "activity" || e.target.name === "actRole" || e.target.name === "actSDate" || e.target.name === "actEDate" || e.target.name === "actDesc") {
            const newArray = cvData.activities.map((v, i) => {
                if (i === id) {
                    return { ...v, [e.target.name]: e.target.value }
                }
                return v
            })
            setCVData({
                ...cvData, activities: newArray
            })
        } else if (e.target.name === "skillName" || e.target.name === "skillDesc") {
            const newArray = cvData.skills.map((v, i) => {
                if (i === id) {
                    return { ...v, [e.target.name]: e.target.value }
                }
                return v
            })
            setCVData({
                ...cvData, skills: newArray
            })
        } else if (e.target.name === "workCom" || e.target.name === "workDesig" || e.target.name === "workSDate" || e.target.name === "workEDate" || e.target.name === "workDesc") {
            const newArray = cvData.workExp.map((v, i) => {
                if (i === id) {
                    return { ...v, [e.target.name]: e.target.value }
                }
                return v
            })
            setCVData({
                ...cvData, workExp: newArray
            })
        } else if (e.target.name === "qua" || e.target.name === "ins" || e.target.name === "sDate" || e.target.name === "eDate" || e.target.name === "marks") {
            const newArray = cvData.eduations.map((v, i) => {
                if (i === id) {
                    return { ...v, [e.target.name]: e.target.value }
                }
                return v
            })
            setCVData({
                ...cvData, eduations: newArray
            })
        } else {
            setCVData(() => ({
                ...cvData,
                [e.target.name]: e.target.value
            }))
        }
    }

    const addMoreSkill = () => {
        setCVData({
            ...cvData, skills: [...cvData.skills, {
                skillName: "",
                skillDesc: "",
            }]
        })
    }

    const addMoreAct = () => {
        setCVData({
            ...cvData, activities: [...cvData.activities, {
                activity: "",
                actRole: "",
                actSDate: "",
                actEDate: "",
                actDesc: ""
            }]
        })
    }

    const addMoreEdu = () => {
        setCVData({
            ...cvData, eduations: [...cvData.eduations, {
                qua: "",
                ins: "",
                sDate: "",
                eDate: "",
                marks: ""
            }]
        })
    }

    const addWorkExp = () => {
        setCVData({
            ...cvData, workExp: [...cvData.workExp, {
                workCom: "",
                workDesig: "",
                workSDate: "",
                workEDate: "",
                workDesc: ""
            }]
        })
    }

    const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]

    const generatePdf = () => {
        var pdf = new JsPDF('p', 'pt', 'a4');
        pdf.html(applicationRef.current, {
            margin: [10, 10, 10, 10],
            callback: (pdf) => {
                pdf.save("Application.pdf")
            }
        })
    }

    return (
        <div>
            <TopBar />
            <NavBar />
            <div className="CvDesign">
                <EachPageHeader heading="CV Builder" />
                <button onClick={generatePdf}>Download PDF</button>
                <div ref={applicationRef} className="col-8 liveViewSection">
                    <div className="liveViewSectionInner">
                        <div className="row topboxes">
                            <div style={{backgroundColor:"#2b3743"}} className="col-4 bgClr"></div>
                            <div style={{backgroundColor:"#eee"}} className="col-8 bgClr"></div>
                        </div>
                        <div style={{backgroundColor:"#548ca8"}} className="row nameAndPhotoSection">
                            <div style={{"display":"flex","flexDirection":"column","justifyContent":"center","padding":"25px"}} className="col-9 nameAndDesig">
                                <h2 style={{color:"#fff",textTransform:"uppercase"}}>{cvData.name}</h2>
                                <h5 style={{color:"#fff"}}>{cvData.desig}</h5>
                            </div>
                            <div className="col-3 imgSection">
                                <input
                                    name='file'
                                    type="file"
                                    id="file"
                                    style={{ display: "none" }}
                                    onChange={handleFileInputChange}
                                />
                                <div style={{"width":"150px","height":"150px","borderRadius":"50%","border":"6px solid #fff","backgroundColor":"#e4e6e7","overflow":"hidden","display":"flex","alignItems":"center","justifyContent":"center","position":"relative"}}>
                                    <label htmlFor="file" style={{ cursor: loading && "not-allowed" }}>
                                        {
                                            !loading && (photo === "" ? <div style={{"fontSize":"100px","backgroundColor":"#e4e6e7","width":"100%","height":"100%","position":"absolute","top":"0","left":"0","color":"#aeb4b7","display":"flex","alignItems":"center","justifyContent":"center","cursor":"pointer"}}>
                                                {/* <i className="fa-solid fa-user"></i> */}
                                            </div> :
                                                <img style={{"width":"100%","height":"auto","objectFit":"cover","zIndex":"1","cursor":"pointer"}} src={photo} alt="" />
                                            )
                                        }
                                        {
                                            loading &&
                                            <div style={{"width":"100%","position":"absolute","height":"100%","top":"0","left":"0","display":"flex","alignItems":"center","justifyContent":"center"}} className="loader">
                                                <img style={{ width: "30%","height":"auto","objectFit":"cover","zIndex":"1","cursor":"pointer" }} src="images/gif/starLoading.gif" alt="" />
                                            </div>
                                        }
                                        <div className="uploadImg">Upload</div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row bottomBoxes">
                            <div className="col-4 bgClr sideBar">
                                {
                                    ((cvData.gender !== "") || (cvData.dob !== "") || (cvData.phone !== "") || (cvData.email !== "") || (cvData.website !== "") || (cvData.address !== "")) &&
                                    <div className="sideBarEachSection contactSection">
                                        {cvData.gender &&
                                            <div className="eachContactUser"><i className="fa-solid fa-user"></i>{cvData.gender}</div>
                                        }
                                        {cvData.dob &&
                                            <div className="eachContactUser"><i className="fa-solid fa-calendar-days"></i>{(new Date(cvData.dob)).toDateString()}</div>
                                        }
                                        {cvData.phone &&
                                            <div className="eachContactUser"><i className="fa-solid fa-phone"></i>{cvData.phone}</div>
                                        }
                                        {cvData.email &&
                                            <div className="eachContactUser"><i className="fa-solid fa-envelope"></i>{cvData.email}</div>
                                        }
                                        {cvData.website &&
                                            <div className="eachContactUser"><i className="fa-solid fa-globe"></i>{cvData.website}</div>
                                        }
                                        {cvData.address &&
                                            <div className="eachContactUser"><i className="fa-solid fa-location-dot"></i>{cvData.address}</div>
                                        }
                                    </div>
                                }
                                {
                                    cvData.skills.length >= 1 &&
                                    <div className="sideBarEachSection skillsSections">
                                        <h5>SKILLS</h5>
                                        <ul>
                                            {cvData.skills.map((v, i) => {
                                                return (
                                                    <li key={i}>{v.skillName}
                                                        <p>{`- ${v.skillDesc}`}</p>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                }

                                {
                                    cvData.awards &&
                                    <div className="sideBarEachSection honorsAndAwardsSection">
                                        <h5>HONORS AND AWARDS</h5>
                                        <p>{`- ${cvData.awards}`}</p>
                                    </div>
                                }
                                {
                                    cvData.certifications &&
                                    <div className="sideBarEachSection honorsAndAwardsSection">
                                        <h5>HONORS AND AWARDS</h5>
                                        <p>{`- ${cvData.certifications}`}</p>
                                    </div>
                                }
                                {
                                    cvData.interest &&
                                    <div className="sideBarEachSection certificationsSection">
                                        <h5>INTERESTS</h5>
                                        <p>{`- ${cvData.interest}`}</p>
                                    </div>
                                }
                            </div>
                            <div className="col-8 bgClr rightSideBarSection">
                                {cvData.aboutme &&
                                    <div className="eachRightSideBarSection">
                                        <div className="headingSection">
                                            <h5>About Me</h5>
                                            <div className="line"></div>
                                        </div>
                                        <p>{cvData.aboutme}</p>
                                    </div>
                                }
                                {cvData.eduations.length !== 0 &&
                                    <div className="eachRightSideBarSection">
                                        <div className="headingSection">
                                            <h5>EDUCATION</h5>
                                            <div className="line"></div>
                                        </div>
                                        <ul>
                                            {
                                                cvData.eduations.map((v, i) => {
                                                    return (
                                                        <li key={i}>
                                                            <div>
                                                                <div>
                                                                    <i className="fa-solid fa-circle"></i> {v.qua}
                                                                </div>
                                                                <div>{v.sDate !== "" && `${monthName[(new Date(v.sDate).getMonth())]} ${(new Date(v.sDate).getFullYear())}`} - {v.eDate !== "" && `${monthName[(new Date(v.eDate).getMonth())]} ${(new Date(v.eDate).getFullYear())}`}</div>
                                                            </div>
                                                            <p>{v.ins}</p>
                                                            <p>{v.marks}</p>
                                                        </li>
                                                    )
                                                })}
                                        </ul>
                                    </div>
                                }
                                {cvData.workExp.length !== 0 &&
                                    <div className="eachRightSideBarSection">
                                        <div className="headingSection">
                                            <h5>WORK EXPERIENCE</h5>
                                            <div className="line"></div>
                                        </div>
                                        <ul>
                                            {
                                                cvData.workExp.map((v, i) => {
                                                    return (
                                                        <li key={i}>
                                                            <div>
                                                                <div>
                                                                    <i className="fa-solid fa-circle"></i> {v.workCom}
                                                                </div>
                                                                <div>{v.workSDate !== "" && `${monthName[(new Date(v.workSDate).getMonth())]} ${(new Date(v.workSDate).getFullYear())}`} - {v.workEDate !== "" && `${monthName[(new Date(v.workEDate).getMonth())]} ${(new Date(v.workEDate).getFullYear())}`}</div>
                                                            </div>
                                                            <p className='desigName'>{v.workDesig}</p>
                                                            <p>{`- ${v.workDesc}`}</p>
                                                        </li>
                                                    )
                                                })}
                                        </ul>
                                    </div>
                                }
                                {cvData.activities.length !== 0 &&
                                    <div className="eachRightSideBarSection">
                                        <div className="headingSection">
                                            <h5>ACTIVITIES</h5>
                                            <div className="line"></div>
                                        </div>
                                        <ul>
                                            {
                                                cvData.activities.map((v, i) => {
                                                    return (
                                                        <li key={i}>
                                                            <div>
                                                                <div>
                                                                    <i className="fa-solid fa-circle"></i> {v.activity}
                                                                </div>
                                                                <div>{v.actSDate !== "" && `${monthName[(new Date(v.actSDate).getMonth())]} ${(new Date(v.actSDate).getFullYear())}`} - {v.actEDate !== "" && `${monthName[(new Date(v.actEDate).getMonth())]} ${(new Date(v.actEDate).getFullYear())}`}</div>
                                                            </div>
                                                            <p className='desigName'>{v.actRole}</p>
                                                            <p>{`- ${v.actDesc}`}</p>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="actualCVbuilder">
                    <div className="col-4 inputsSection">
                        <div className="eachInfoSection personalInfoSection">
                            <div className="eachInfoSectionHeader">
                                <h4>Personal Info</h4>
                                <div className="showButtonDropDown">
                                    <i style={{ transform: `rotate(${personalInfor ? "0deg" : "180deg"})` }} onClick={() => setPersonalInfor(!personalInfor)} className="fa-solid fa-angle-down"></i>
                                </div>
                            </div>
                            <Expand open={personalInfor}>
                                <div className="eachInputSection">
                                    <label htmlFor="name">Name :</label>
                                    <input name="name" onChange={handleFormChange} type="text" placeholder='Enter Name Here' />
                                </div>
                                <div className="eachInputSection">
                                    <label htmlFor="desig">Designation :</label>
                                    <input name="desig" onChange={handleFormChange} type="text" placeholder='Enter Name Here' />
                                </div>
                                <div className="eachInputSection">
                                    <label htmlFor="gender">Gender :</label>
                                    <div>
                                        <span>
                                            <input type="radio" name="gender" value="Male" onChange={handleFormChange} placeholder='Enter Name Here' />Male
                                        </span>
                                        <span>
                                            <input type="radio" name="gender" value="Female" onChange={handleFormChange} placeholder='Enter Name Here' />Female
                                        </span>
                                    </div>
                                </div>
                                <div className="eachInputSection">
                                    <label htmlFor="dob">DOB :</label>
                                    <input type="date" name="dob" onChange={handleFormChange} placeholder='Enter Name Here' />
                                </div>
                                <div className="eachInputSection">
                                    <label htmlFor="phone">Contact :</label>
                                    <input type="number" name="phone" onChange={handleFormChange} placeholder='Enter Name Here' />
                                </div>
                                <div className="eachInputSection">
                                    <label htmlFor="email">Email :</label>
                                    <input type="email" name="email" onChange={handleFormChange} placeholder='Enter Name Here' />
                                </div>
                                <div className="eachInputSection">
                                    <label htmlFor="website">Website :</label>
                                    <input type="text" name="website" onChange={handleFormChange} placeholder='Enter Name Here' />
                                </div>
                                <div className="eachInputSection">
                                    <label htmlFor="address">Address :</label>
                                    <input type="text" name="address" onChange={handleFormChange} placeholder='Enter Name Here' />
                                </div>
                            </Expand>
                        </div>
                        <div className="eachInfoSection">
                            <div className="eachInfoSectionHeader">
                                <h4>About Me</h4>
                                <div className="showButtonDropDown">
                                    <i style={{ transform: `rotate(${aboutMe ? "0deg" : "180deg"})` }} onClick={() => setAboutMe(!aboutMe)} className="fa-solid fa-angle-down"></i>
                                </div>
                            </div>
                            <Expand open={aboutMe}>
                                <div className="eachInputSection">
                                    <label htmlFor="aboutme">Description :</label>
                                    <textarea name='aboutme' onChange={handleFormChange} type="text" placeholder='Enter Name Here' />
                                </div>
                            </Expand>
                        </div>
                        <div className="eachInfoSection qualificationsSection">
                            <div className="eachInfoSectionHeader">
                                <h4>Education</h4>
                                <div className="showButtonDropDown">
                                    <i style={{ transform: `rotate(${education ? "0deg" : "180deg"})` }} onClick={() => setEducation(!education)} className="fa-solid fa-angle-down"></i>
                                </div>
                            </div>
                            <Expand open={education}>
                                {
                                    cvData.eduations.map((v, i) => {
                                        return (
                                            <div key={i} className="eachQualification">
                                                <div className="eachInputSection">
                                                    <label htmlFor="qua">Qualification :</label>
                                                    <input name='qua' onChange={(e) => handleFormChange(e, i)} type="text" placeholder='Qualification' />
                                                </div>
                                                <div className="eachInputSection">
                                                    <label htmlFor="ins">Institution :</label>
                                                    <input name='ins' onChange={(e) => handleFormChange(e, i)} type="text" placeholder='Institution Name' />
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="eachInputSection">
                                                            <label htmlFor="sDate">From :</label>
                                                            <input name='sDate' onChange={(e) => handleFormChange(e, i)} type="Date" placeholder='Qualification' />
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="eachInputSection">
                                                            <label htmlFor="eDate">To :</label>
                                                            <input name='eDate' onChange={(e) => handleFormChange(e, i)} type="Date" placeholder='Qualification' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="eachInputSection">
                                                    <label htmlFor="marks">Marks :</label>
                                                    <input name='marks' onChange={(e) => handleFormChange(e, i)} type="text" placeholder='Marks' />
                                                </div>
                                            </div>
                                        )
                                    })}
                                <button className='defBtn addMoreQualificationBtn' onClick={addMoreEdu}>{cvData.eduations.length === 0 ? "Add Qualification" : "Add More"}</button>
                            </Expand>
                        </div>
                        <div className="eachInfoSection qualificationsSection">
                            <div className="eachInfoSectionHeader">
                                <h4>Work Experience</h4>
                                <div className="showButtonDropDown">
                                    <i style={{ transform: `rotate(${workExp ? "0deg" : "180deg"})` }} onClick={() => setWorkExp(!workExp)} className="fa-solid fa-angle-down"></i>
                                </div>
                            </div>
                            <Expand open={workExp}>
                                {
                                    cvData.workExp.map((v, i) => {
                                        return (
                                            <div key={i} className="eachQualification">
                                                <div className="eachInputSection">
                                                    <label htmlFor="workCom">Company :</label>
                                                    <input name='workCom' onChange={(e) => handleFormChange(e, i)} type="text" placeholder='Company Name' />
                                                </div>
                                                <div className="eachInputSection">
                                                    <label htmlFor="workDesig">Designation :</label>
                                                    <input name='workDesig' onChange={(e) => handleFormChange(e, i)} type="text" placeholder='Designation' />
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="eachInputSection">
                                                            <label htmlFor="workSDate">From :</label>
                                                            <input name='workSDate' onChange={(e) => handleFormChange(e, i)} type="Date" placeholder='Qualification' />
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="eachInputSection">
                                                            <label htmlFor="workEDate">To :</label>
                                                            <input name='workEDate' onChange={(e) => handleFormChange(e, i)} type="Date" placeholder='Qualification' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="eachInputSection">
                                                    <label htmlFor="workDesc">Experience Description :</label>
                                                    <input name='workDesc' onChange={(e) => handleFormChange(e, i)} type="text" placeholder='Marks' />
                                                </div>
                                            </div>
                                        )
                                    })}
                                <button className='defBtn addMoreQualificationBtn' onClick={addWorkExp}>{cvData.workExp.length === 0 ? "Add Work Experience" : "Add More"}</button>
                            </Expand>
                        </div>
                        <div className="eachInfoSection qualificationsSection">
                            <div className="eachInfoSectionHeader">
                                <h4>Activities</h4>
                                <div className="showButtonDropDown">
                                    <i style={{ transform: `rotate(${activities ? "0deg" : "180deg"})` }} onClick={() => setActivities(!activities)} className="fa-solid fa-angle-down"></i>
                                </div>
                            </div>
                            <Expand open={activities}>
                                {
                                    cvData.activities.map((v, i) => {
                                        return (
                                            <div key={i} className="eachQualification">
                                                <div className="eachInputSection">
                                                    <label htmlFor="activity">Activity :</label>
                                                    <input name='activity' onChange={(e) => handleFormChange(e, i)} type="text" placeholder='Qualification' />
                                                </div>
                                                <div className="eachInputSection">
                                                    <label htmlFor="actRole">Role :</label>
                                                    <input name='actRole' onChange={(e) => handleFormChange(e, i)} type="text" placeholder='Institution Name' />
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="eachInputSection">
                                                            <label htmlFor="actSDate">From :</label>
                                                            <input name='actSDate' onChange={(e) => handleFormChange(e, i)} type="Date" placeholder='Qualification' />
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="eachInputSection">
                                                            <label htmlFor="actEDate">To :</label>
                                                            <input name='actEDate' onChange={(e) => handleFormChange(e, i)} type="Date" placeholder='Qualification' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="eachInputSection">
                                                    <label htmlFor="actDesc">Marks :</label>
                                                    <input name='actDesc' onChange={(e) => handleFormChange(e, i)} type="text" placeholder='Marks' />
                                                </div>
                                            </div>
                                        )
                                    })}
                                <button className='defBtn addMoreQualificationBtn' onClick={addMoreAct}>{cvData.eduations.length === 0 ? "Add Qualification" : "Add More"}</button>
                            </Expand>
                        </div>
                        <div className="eachInfoSection qualificationsSection">
                            <div className="eachInfoSectionHeader">
                                <h4>Skills</h4>
                                <div className="showButtonDropDown">
                                    <i style={{ transform: `rotate(${skills ? "0deg" : "180deg"})` }} onClick={() => setSkills(!skills)} className="fa-solid fa-angle-down"></i>
                                </div>
                            </div>
                            <Expand open={skills}>
                                {
                                    cvData.skills.map((v, i) => {
                                        return (
                                            <div key={i} className="eachQualification">
                                                <div className="eachInputSection">
                                                    <label htmlFor="skillName">Skill Name :</label>
                                                    <input name='skillName' onChange={(e) => handleFormChange(e, i)} type="text" placeholder='Skill Name ' />
                                                </div>
                                                <div className="eachInputSection">
                                                    <label htmlFor="skillDesc">Skill Description :</label>
                                                    <input name='skillDesc' onChange={(e) => handleFormChange(e, i)} type="text" placeholder='Skill Description' />
                                                </div>
                                            </div>
                                        )
                                    })}
                                <button className='defBtn addMoreQualificationBtn' onClick={addMoreSkill}>{cvData.skills.length === 0 ? "Add Skill" : "Add More"}</button>
                            </Expand>
                        </div>
                        <div className="eachInfoSection">
                            <div className="eachInfoSectionHeader">
                                <h4>Awards</h4>
                                <div className="showButtonDropDown">
                                    <i style={{ transform: `rotate(${awards ? "0deg" : "180deg"})` }} onClick={() => setAwards(!awards)} className="fa-solid fa-angle-down"></i>
                                </div>
                            </div>
                            <Expand open={awards}>
                                <div className="eachInputSection">
                                    <label htmlFor="awards">Description :</label>
                                    <textarea name='awards' onChange={handleFormChange} type="text" placeholder='Enter Name Here' />
                                </div>
                            </Expand>
                        </div>
                        <div className="eachInfoSection">
                            <div className="eachInfoSectionHeader">
                                <h4>Certifications</h4>
                                <div className="showButtonDropDown">
                                    <i style={{ transform: `rotate(${certifications ? "0deg" : "180deg"})` }} onClick={() => setCertifications(!certifications)} className="fa-solid fa-angle-down"></i>
                                </div>
                            </div>
                            <Expand open={certifications}>
                                <div className="eachInputSection">
                                    <label htmlFor="certifications">Certifications Details :</label>
                                    <textarea name='certifications' onChange={handleFormChange} type="text" placeholder='Enter Certificates Details' />
                                </div>
                            </Expand>
                        </div>
                        <div className="eachInfoSection">
                            <div className="eachInfoSectionHeader">
                                <h4>Interest</h4>
                                <div className="showButtonDropDown">
                                    <i style={{ transform: `rotate(${interest ? "0deg" : "180deg"})` }} onClick={() => setInterest(!interest)} className="fa-solid fa-angle-down"></i>
                                </div>
                            </div>
                            <Expand open={interest}>
                                <div className="eachInputSection">
                                    <label htmlFor="interest">Description :</label>
                                    <textarea name='interest' onChange={handleFormChange} type="text" placeholder='Enter Name Here' />
                                </div>
                            </Expand>
                        </div>
                    </div>


                    <div className="col-8 liveViewSection">
                        <div className="liveViewSectionInner">
                            <div className="row topboxes">
                                <div className="col-4 bgClr"></div>
                                <div className="col-8 bgClr"></div>
                            </div>
                            <div className="row nameAndPhotoSection">
                                <div className="col-9 nameAndDesig">
                                    <h2>{cvData.name}</h2>
                                    <h5>{cvData.desig}</h5>
                                </div>
                                <div className="col-3 imgSection">
                                    <input
                                        name='file'
                                        type="file"
                                        id="file"
                                        style={{ display: "none" }}
                                        onChange={handleFileInputChange}
                                    />
                                    <div className="imgDiv">
                                        <label htmlFor="file" style={{ cursor: loading && "not-allowed" }}>
                                            {
                                                !loading && (photo === "" ? <div className="defaultImg">
                                                    <i className="fa-solid fa-user"></i>
                                                </div> :
                                                    <img src={photo} alt="" />
                                                )
                                            }
                                            {
                                                loading &&
                                                <div className="loader">
                                                    <img style={{ width: "30%" }} src="images/gif/starLoading.gif" alt="" />
                                                </div>
                                            }
                                            <div className="uploadImg">Upload</div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row bottomBoxes">
                                <div className="col-4 bgClr sideBar">
                                    {
                                        ((cvData.gender !== "") || (cvData.dob !== "") || (cvData.phone !== "") || (cvData.email !== "") || (cvData.website !== "") || (cvData.address !== "")) &&
                                        <div className="sideBarEachSection contactSection">
                                            {cvData.gender &&
                                                <div className="eachContactUser"><i className="fa-solid fa-user"></i>{cvData.gender}</div>
                                            }
                                            {cvData.dob &&
                                                <div className="eachContactUser"><i className="fa-solid fa-calendar-days"></i>{(new Date(cvData.dob)).toDateString()}</div>
                                            }
                                            {cvData.phone &&
                                                <div className="eachContactUser"><i className="fa-solid fa-phone"></i>{cvData.phone}</div>
                                            }
                                            {cvData.email &&
                                                <div className="eachContactUser"><i className="fa-solid fa-envelope"></i>{cvData.email}</div>
                                            }
                                            {cvData.website &&
                                                <div className="eachContactUser"><i className="fa-solid fa-globe"></i>{cvData.website}</div>
                                            }
                                            {cvData.address &&
                                                <div className="eachContactUser"><i className="fa-solid fa-location-dot"></i>{cvData.address}</div>
                                            }
                                        </div>
                                    }
                                    {
                                        cvData.skills.length >= 1 &&
                                        <div className="sideBarEachSection skillsSections">
                                            <h5>SKILLS</h5>
                                            <ul>
                                                {cvData.skills.map((v, i) => {
                                                    return (
                                                        <li key={i}>{v.skillName}
                                                            <p>{`- ${v.skillDesc}`}</p>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    }

                                    {
                                        cvData.awards &&
                                        <div className="sideBarEachSection honorsAndAwardsSection">
                                            <h5>HONORS AND AWARDS</h5>
                                            <p>{`- ${cvData.awards}`}</p>
                                        </div>
                                    }
                                    {
                                        cvData.certifications &&
                                        <div className="sideBarEachSection honorsAndAwardsSection">
                                            <h5>HONORS AND AWARDS</h5>
                                            <p>{`- ${cvData.certifications}`}</p>
                                        </div>
                                    }
                                    {
                                        cvData.interest &&
                                        <div className="sideBarEachSection certificationsSection">
                                            <h5>INTERESTS</h5>
                                            <p>{`- ${cvData.interest}`}</p>
                                        </div>
                                    }
                                </div>
                                <div className="col-8 bgClr rightSideBarSection">
                                    {cvData.aboutme &&
                                        <div className="eachRightSideBarSection">
                                            <div className="headingSection">
                                                <h5>About Me</h5>
                                                <div className="line"></div>
                                            </div>
                                            <p>{cvData.aboutme}</p>
                                        </div>
                                    }
                                    {cvData.eduations.length !== 0 &&
                                        <div className="eachRightSideBarSection">
                                            <div className="headingSection">
                                                <h5>EDUCATION</h5>
                                                <div className="line"></div>
                                            </div>
                                            <ul>
                                                {
                                                    cvData.eduations.map((v, i) => {
                                                        return (
                                                            <li key={i}>
                                                                <div>
                                                                    <div>
                                                                        <i className="fa-solid fa-circle"></i> {v.qua}
                                                                    </div>
                                                                    <div>{v.sDate !== "" && `${monthName[(new Date(v.sDate).getMonth())]} ${(new Date(v.sDate).getFullYear())}`} - {v.eDate !== "" && `${monthName[(new Date(v.eDate).getMonth())]} ${(new Date(v.eDate).getFullYear())}`}</div>
                                                                </div>
                                                                <p>{v.ins}</p>
                                                                <p>{v.marks}</p>
                                                            </li>
                                                        )
                                                    })}
                                            </ul>
                                        </div>
                                    }
                                    {cvData.workExp.length !== 0 &&
                                        <div className="eachRightSideBarSection">
                                            <div className="headingSection">
                                                <h5>WORK EXPERIENCE</h5>
                                                <div className="line"></div>
                                            </div>
                                            <ul>
                                                {
                                                    cvData.workExp.map((v, i) => {
                                                        return (
                                                            <li key={i}>
                                                                <div>
                                                                    <div>
                                                                        <i className="fa-solid fa-circle"></i> {v.workCom}
                                                                    </div>
                                                                    <div>{v.workSDate !== "" && `${monthName[(new Date(v.workSDate).getMonth())]} ${(new Date(v.workSDate).getFullYear())}`} - {v.workEDate !== "" && `${monthName[(new Date(v.workEDate).getMonth())]} ${(new Date(v.workEDate).getFullYear())}`}</div>
                                                                </div>
                                                                <p className='desigName'>{v.workDesig}</p>
                                                                <p>{`- ${v.workDesc}`}</p>
                                                            </li>
                                                        )
                                                    })}
                                            </ul>
                                        </div>
                                    }
                                    {cvData.activities.length !== 0 &&
                                        <div className="eachRightSideBarSection">
                                            <div className="headingSection">
                                                <h5>ACTIVITIES</h5>
                                                <div className="line"></div>
                                            </div>
                                            <ul>
                                                {
                                                    cvData.activities.map((v, i) => {
                                                        return (
                                                            <li key={i}>
                                                                <div>
                                                                    <div>
                                                                        <i className="fa-solid fa-circle"></i> {v.activity}
                                                                    </div>
                                                                    <div>{v.actSDate !== "" && `${monthName[(new Date(v.actSDate).getMonth())]} ${(new Date(v.actSDate).getFullYear())}`} - {v.actEDate !== "" && `${monthName[(new Date(v.actEDate).getMonth())]} ${(new Date(v.actEDate).getFullYear())}`}</div>
                                                                </div>
                                                                <p className='desigName'>{v.actRole}</p>
                                                                <p>{`- ${v.actDesc}`}</p>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProsAbout />
            <Footer />
            CvDesign
        </div>
    )
}

export default CvDesign