import './AdminReceptionForm.css'
import { useState, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { Context } from '../../../context/Context'
import loadingGif from '../../../assets/gif/loading.gif'

const AdminReceptionForm = () => {

    const { user } = useContext(Context);
    const location = useLocation()
    const [updating, setUpdating] = useState(false)
    const [submitLoading, setSubmitLoading] = useState(false)

    const [counsolers, setCounsolers] = useState([])

    // Fetch Users From DB
    useEffect(() => {
        try {
            const fetchCounsolers = async () => {
                let response = await axios.get("https://edifygroup.herokuapp.com/api/auth/allUsers?desig=Counselor")
                setCounsolers(response.data.data)
            }
            fetchCounsolers()
        } catch (error) {
            console.log(error)
        }
    }, [])

    const [formData, setFormData] = useState({
        branch: user.username.split(" ")[0],
        name: "",
        gender: "",
        email: "",
        phone: "",
        city: "",
        edu: "",
        eTest: "",
        desig: "",
        ref: "",
        pCountries: [],
        refTo: "",
        hereAbout: "",
    })

    // Updating Form .....................................
    useEffect(() => {
        if (location.state) {
            setUpdating(true)
            setFormData(location.state)
        }
    }, [])

    const handleFormChange = (e) => {
        if (e.target.name === "pCountries") {
            let copy = { ...formData }
            if (e.target.checked) {
                copy.pCountries.push(e.target.value)
            } else {
                copy.pCountries = copy.pCountries.filter(el => el !== e.target.value)
            }
            setFormData(copy)
        } else {
            setFormData(() => ({
                ...formData,
                [e.target.name]: e.target.value
            }))
        }
    }

    const resetValuesToDefault = () => {
        setFormData({
            branch: user.username.split(" ")[0],
            name: "",
            gender: "",
            email: "",
            phone: "",
            city: "",
            edu: "",
            eTest: "",
            desig: "",
            ref: "",
            pCountries: [],
            refTo: "",
            hereAbout: "",
        })
        setUpdating(false)
    }

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        if (formData.name.trim() === "") {
            toast.error("Please Enter Student Name")
        } else if (formData.gender === "") {
            toast.error("Please Select Gender First")
        } else if (!(formData.phone > 2999999999 && formData.phone < 4000000000)) {
            toast.error("Please Enter 10 Digit Contact No Without Leading Zero")
        } else if (formData.city.trim() === "") {
            toast.error("Please Enter City Name")
        } else if (formData.edu === "") {
            toast.error("Please Select Qualification")
        } else if (formData.eTest === "") {
            toast.error("Please Select Language Test")
        } else if (formData.pCountries.length === 0) {
            toast.error("Please Select Prefered Countries")
        } else if (formData.refTo === "") {
            toast.error("Please Select Counsellor")
        } else if (formData.hereAbout === "") {
            toast.error("Please Select Hear About Field")
        } else {
            try {
                let submittedApplication;
                if (updating) {
                    setSubmitLoading(true)
                    submittedApplication = await axios.put(`https://edifygroup.herokuapp.com/api/campusApply/${location.state._id}`, formData)
                    setSubmitLoading(false)
                } else {
                    setSubmitLoading(true)
                    submittedApplication = await axios.post("https://edifygroup.herokuapp.com/api/campusApply/addApply", formData)
                    setSubmitLoading(false)
                }
                submittedApplication && toast.success(updating ? "Form Updated Successfully!" : "Form Submitted Successfully!")
                submittedApplication && resetValuesToDefault()
            }
            catch (error) {
                toast.error("Something Went Wrong While Submitted This Form => " + error)
            }
        }
    }


    return (
        <div className='AdminReceptionForm'>
            <form onSubmit={formSubmitHandler} className='Apply'>
                <h2 className='flh' style={{ color: "#000" }}>Enquiry <span style={{ color: "var(--blueMain)" }}>Form</span></h2>
                <div className="allSections">
                    <div className=" eachSection">
                        <div className="allInputFields">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachInput">
                                <label htmlFor="name">Name : <span style={{ color: "red" }}>*</span> </label>
                                <input id='name' name='name' value={formData.name} onChange={handleFormChange} type="text" placeholder='Full Name' />
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachInput">
                                <label htmlFor="gender">Gender : <span style={{ color: "red" }}>*</span></label>
                                <span className='radio'>
                                    <span className='eachRadio'>
                                        <input type="radio" value="Male" onChange={handleFormChange} checked={formData.gender === "Male"} name="gender" /><span>Male</span>
                                    </span>
                                    <span className='eachRadio'>
                                        <input type="radio" value="Female" onChange={handleFormChange} checked={formData.gender === "Female"} name="gender" /><span>Female</span>
                                    </span>
                                </span>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachInput">
                                <label htmlFor="email">Email Address :</label>
                                <input id='email' value={formData.email} onChange={handleFormChange} name='email' type="email" placeholder='Email Address' />
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachInput">
                                <label htmlFor="phone">Contact No : <span style={{ color: "red" }}>*</span> </label>
                                <span className='phoneDiv'>
                                    <span>+92</span>
                                    <input id='phone' value={formData.phone} onChange={handleFormChange} name='phone' type="number" placeholder='3xxxxxxxxx' />
                                </span>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachInput">
                                <label htmlFor="city">City : <span style={{ color: "red" }}>*</span></label>
                                <input id='city' value={formData.city} onChange={handleFormChange} name="city" type="text" placeholder='City' />
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachInput">
                                <label htmlFor="edu">Qualification <span style={{ color: "red" }}>*</span> : </label>
                                <select
                                    value={formData.edu}
                                    onChange={handleFormChange}
                                    name='edu'
                                    id='edu'>
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

                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachInput">
                                <label htmlFor="eTest">Language Test?  <span style={{ color: "red" }}>*</span> </label>
                                <span className='radio'>
                                    <span className="eachRadio">
                                        <input type="radio" checked={formData.eTest === "Y"} value="Y" onChange={handleFormChange} name="eTest" /><span>Yes</span>
                                    </span>
                                    <span className="eachRadio">
                                        <input type="radio" checked={formData.eTest === "N"} value="N" onChange={handleFormChange} name="eTest" /><span>No</span>
                                    </span>
                                </span>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachInput">
                                <label htmlFor="desig">Designation : </label>
                                <input type="text" value={formData.desig} onChange={handleFormChange} id='desig' name='desig' placeholder='Enter Designation' />
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachInput">
                                <label htmlFor="ref">Reference : </label>
                                <input type="text" value={formData.ref} onChange={handleFormChange} id='ref' name='ref' placeholder='Enter Designation' />
                            </div>

                            <div className="col-12 eachInput">
                                <label htmlFor="pCountries">Select Your Prefered Countries : <span style={{ color: "red" }}>*</span> </label>
                                <span className='checkBox'>
                                    <span className="eachCheckBox" >
                                        <input name='pCountries' checked={formData.pCountries.indexOf('Australia') !== -1} value="Australia" type="checkBox" onChange={handleFormChange} /><span>Australia</span>
                                    </span>
                                    <span className="eachCheckBox">
                                        <input name='pCountries' checked={formData.pCountries.indexOf('UK') !== -1} value="UK" type="checkBox" onChange={handleFormChange} /><span>UK</span>
                                    </span>
                                    <span className="eachCheckBox">
                                        <input name='pCountries' checked={formData.pCountries.indexOf('USA') !== -1} value="USA" type="checkBox" onChange={handleFormChange} /><span>USA</span>
                                    </span>
                                    <span className="eachCheckBox">
                                        <input name='pCountries' checked={formData.pCountries.indexOf('Sweden') !== -1} value="Sweden" type="checkBox" onChange={handleFormChange} /><span>Sweden</span>
                                    </span>
                                    <span className="eachCheckBox">
                                        <input name='pCountries' checked={formData.pCountries.indexOf('Canada') !== -1} value="Canada" type="checkBox" onChange={handleFormChange} /><span>Canada</span>
                                    </span>
                                    <span className="eachCheckBox">
                                        <input name='pCountries' checked={formData.pCountries.indexOf('Other') !== -1} value="Other" type="checkBox" onChange={handleFormChange} /><span>Other</span>
                                    </span>
                                </span>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 eachInput">
                                <label htmlFor="refTo">English Language Test<span style={{ color: "red" }}>*</span> : </label>
                                <select
                                    value={formData.refTo}
                                    onChange={handleFormChange}
                                    name='refTo'
                                    id='refTo'>
                                    <option value="">Select ELT</option>
                                    <option value="ELT-Acad">IELTS Academic</option>
                                    <option value="ELT-GT">IELTS General Training</option>
                                    <option value="ELT-LS">IELTS Life Skills</option>
                                    <option value="ELT-PTE">PTE</option>
                                    <option value="ELT-LC">Language Cert</option>
                                    <option value="ELT-OIETC">OIETC</option>

                                </select>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 eachInput">
                                <label htmlFor="refTo">Refer To <span style={{ color: "red" }}>*</span> : </label>
                                <select
                                    value={formData.refTo}
                                    onChange={handleFormChange}
                                    name='refTo'
                                    id='refTo'>
                                    <option value="">Select Counsellor</option>
                                    {
                                        counsolers.map((v, i) => {
                                            return (

                                                <option key={i} value={`${v.userCode}`}>{v.username}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                            <div className="col-12 eachInput">
                                <label htmlFor='hereAbout'>How did you hear about us ? <span style={{ color: "red" }}>*</span> </label>
                                <span className='radio'>
                                    <span className='eachRadio'><input onChange={handleFormChange} checked={formData.hereAbout === "Banner"} type="radio" value="Banner" name="hereAbout" /><span>Banner</span></span>
                                    <span className='eachRadio'><input onChange={handleFormChange} checked={formData.hereAbout === "YouTube"} type="radio" value="YouTube" name="hereAbout" /><span>YouTube</span></span>
                                    <span className='eachRadio'><input onChange={handleFormChange} checked={formData.hereAbout === "Social Media"} type="radio" value="Social Media" name="hereAbout" /><span>Social Media</span></span>
                                    <span className='eachRadio'><input onChange={handleFormChange} checked={formData.hereAbout === "Call / SMS"} type="radio" value="Call / SMS" name="hereAbout" /><span>Call / SMS</span></span>
                                    <span className='eachRadio'><input onChange={handleFormChange} checked={formData.hereAbout === "Through a Friend"} type="radio" value="Through a Friend" name="hereAbout" /><span>Through a Friend</span></span>
                                </span>
                            </div>

                            <div className="col-12 eachSection btnsSection">
                                <button disabled={submitLoading} onClick={resetValuesToDefault} type='reset'>Reset</button>
                                <button disabled={submitLoading} type='submit'>
                                    {
                                        submitLoading ?
                                            <img src={loadingGif} alt="" /> :
                                            updating ? "Update" : "Submit"
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form >
            <ToastContainer />
        </div >
    )
}

export default AdminReceptionForm



