import { useLocation } from 'react-router-dom'
import './ApplicationView.css'
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import JsPDF from 'jspdf'

const ApplicationView = () => {

    const [application, setApplication] = useState({})
    const applicationRef = useRef()

    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [altPhone, setAltPhone] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [edu, setEdu] = useState([])
    const [eTest, setETest] = useState("")
    const [eTestName, setETestName] = useState("")
    const [eTestOMar, setETestOMar] = useState("")
    const [lisMar, setLisMar] = useState("")
    const [readMar, setReadMar] = useState("")
    const [wriMar, setWriMar] = useState("")
    const [speekMar, setSpeekMar] = useState("")
    const [desig, setDesig] = useState("")
    const [cName, setCName] = useState("")
    const [sDate, setSDate] = useState("")
    const [eDate, setEDate] = useState("")
    const [pCountries, setPCountries] = useState([])
    const [pCourse, setPCourse] = useState("")
    const [pCity, setPCity] = useState("")
    const [oQuery, setOQuery] = useState("")
    const [hereAbout, setHereAbout] = useState("")


    const location = useLocation();
    const path = location.pathname.split("/")[4];

    useEffect(() => {
        const fetchBlog = async () => {
            const res = await axios.get(`https://edifygroup.herokuapp.com/api/apply/${path}`);
            setApplication(res.data)
            setName(res.data.name)
            setDob(res.data.dob)
            setGender(res.data.gender)
            setEmail(res.data.email)
            setPhone(res.data.phone)
            setAltPhone(res.data.altPhone)
            setAddress(res.data.address)
            setCity(res.data.city)
            setCountry(res.data.country)
            setEdu(res.data.edu)
            setETest(res.data.eTest)
            setETestName(res.data.eTestName)
            setETestOMar(res.data.eTestOMar)
            setLisMar(res.data.lisMar)
            setReadMar(res.data.readMar)
            setSpeekMar(res.data.speekMar)
            setWriMar(res.data.wriMar)
            setDesig(res.data.desig)
            setCName(res.data.cName)
            setEDate(res.data.eDate)
            setSDate(res.data.sDate)
            setPCountries(res.data.pCountries)
            setPCourse(res.data.pCourse)
            setPCity(res.data.pCity)
            setOQuery(res.data.oQuery)
            setHereAbout(res.data.hereAbout)
        }
        fetchBlog();
    }, [application])


    // Adding Leading Zeros Before a Number
    const addLeadingZero = (num, l) => {
        num = num.toString();
        while (num.length < l) num = "0" + num;
        return num;
    }

    // Date Formatting
    const dateFormating = (d) => {
        var day = addLeadingZero(d.getDate(), 2);
        var month = addLeadingZero(d.getMonth() + 1, 2);
        var year = d.getFullYear();
        return `${day}-${month}-${year}`;
    }

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
        <div className='ApplicationView'>
            <form className='Apply ApplicationView'>
                <h2 className='flh' style={{ marginBottom: "10px", color: "#000" }}>Information <span style={{ color: "var(--blueMain)" }}>Application</span></h2>
            <span onClick={generatePdf}>Download PDF</span>
                <div ref={applicationRef} style={{ border: "0px", maxWidth: "570px" }} className="allSections">

                    <div className="eachSection">
                        <h3 style={{ fontSize: "14px", padding: "2px 10px", borderTop: "1px solid var(--blueMain)", borderBottom: "1px solid var(--blueMain)", backgroundColor: "#eee" }} className='flbp'>Personal Information</h3>
                        <div style={{ padding: "5px" }} className="allInputFields">

                            <div style={{ padding: "5px" }} className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachInput">
                                <label style={{ fontSize: "11px", color: "#000", marginBottom: "0px", fontWeight: "400" }} htmlFor="name">Name : </label>
                                <p style={{ fontSize: "10px", marginBottom: "0px", color: "#444" }}>{name}</p>
                            </div>

                            <div style={{ padding: "5px" }} className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachInput">
                                <label style={{ fontSize: "11px", color: "#000", marginBottom: "0px", fontWeight: "400" }} htmlFor="dob">DOB :</label>
                                <p style={{ fontSize: "10px", marginBottom: "0px", color: "#444" }}>{dateFormating(new Date(dob))}</p>
                            </div>

                            <div style={{ padding: "5px" }} className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachInput">
                                <label style={{ fontSize: "11px", color: "#000", marginBottom: "0px", fontWeight: "400" }} htmlFor="gender">Gender : </label>
                                <p style={{ fontSize: "10px", marginBottom: "0px", color: "#444" }}>{gender}</p>
                            </div>

                            <div style={{ padding: "5px" }} className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachInput">
                                <label style={{ fontSize: "11px", color: "#000", marginBottom: "0px", fontWeight: "400" }} htmlFor="email">Email :</label>
                                <p style={{ fontSize: "10px", marginBottom: "0px", color: "#444" }}>{email}</p>
                            </div>

                            <div style={{ padding: "5px" }} className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachInput">
                                <label style={{ fontSize: "11px", color: "#000", marginBottom: "0px", fontWeight: "400" }} htmlFor="phone">Contact No : </label>
                                <p style={{ fontSize: "10px", marginBottom: "0px", color: "#444" }}>{0 + phone}</p>
                            </div>

                            <div style={{ padding: "5px" }} className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachInput">
                                <label style={{ fontSize: "11px", color: "#000", marginBottom: "0px", fontWeight: "400" }} htmlFor="altPhone">Alt Contact No : </label>
                                <p style={{ fontSize: "10px", marginBottom: "0px", color: "#444" }}>{altPhone === "" ? "-" : 0 + altPhone}</p>
                            </div>

                            <div style={{ padding: "5px" }} className="col-6 eachInput">
                                <label style={{ fontSize: "11px", color: "#000", marginBottom: "0px", fontWeight: "400" }} htmlFor="address">Address : </label>
                                <p style={{ fontSize: "10px", marginBottom: "0px", color: "#444" }}>{address}</p>
                            </div>

                            <div style={{ padding: "5px" }} className="col-3 eachInput">
                                <label style={{ fontSize: "11px", color: "#000", marginBottom: "0px", fontWeight: "400" }} htmlFor="address">City : </label>
                                <p style={{ fontSize: "10px", marginBottom: "0px", color: "#444" }}>{city}</p>
                            </div>

                            <div style={{ padding: "5px" }} className="col-3 eachInput">
                                <label style={{ fontSize: "11px", color: "#000", marginBottom: "0px", fontWeight: "400" }} htmlFor="address">Country : </label>
                                <p style={{ fontSize: "10px", marginBottom: "0px", color: "#444" }}>{country}</p>
                            </div>

                        </div>
                    </div>

                    <div className=" eachSection">
                        <h3 style={{ fontSize: "14px", padding: "2px 10px", borderTop: "1px solid var(--blueMain)", borderBottom: "1px solid var(--blueMain)", backgroundColor: "#eee" }} className='flbp'>Previous Qualification</h3>   {/* Pending =================== */}
                        <div style={{ padding: "5px" }} className="allInputFields">
                            <div className="col-12 eachQualificationSection">
                                {edu.map((v, i) => {
                                    return (
                                        <>
                                            <div style={{ padding: "5px" }} className="col-xl-2 col-md-2 col-lg-2 col-sm-12 eachInput">
                                                <label style={{ fontSize: "11px", color: "#000", marginBottom: "0px", fontWeight: "400" }} htmlFor="edu">Qualification :</label>
                                                <p style={{ fontSize: "10px", marginBottom: "0px", color: "#444" }}>{v.edu}</p>
                                            </div>

                                            <div style={{ padding: "5px" }} className="col-xl-3 col-md-3 col-lg-3 col-sm-12 eachInput">
                                                <label style={{ fontSize: "11px", color: "#000", marginBottom: "0px", fontWeight: "400" }} htmlFor="yCom">Subject : </label>
                                                <p style={{ fontSize: "10px", marginBottom: "0px", color: "#444" }}>{v.sub}</p>
                                            </div>

                                            <div style={{ padding: "5px" }} className="col-xl-2 col-md-2 col-lg-2 col-sm-12 eachInput">
                                                <label style={{ fontSize: "11px", color: "#000", marginBottom: "0px", fontWeight: "400" }} htmlFor="yCom">Year : </label>
                                                <p style={{ fontSize: "10px", marginBottom: "0px", color: "#444" }}>{v.yCom}</p>
                                            </div>

                                            <div style={{ padding: "5px" }} className="col-xl-2 col-md-2 col-lg-2 col-sm-12 eachInput">
                                                <label style={{ fontSize: "11px", color: "#000", marginBottom: "0px", fontWeight: "400" }} htmlFor="marks">Grade : </label>
                                                <p style={{ fontSize: "10px", marginBottom: "0px", color: "#444" }}>{v.marks}</p>
                                            </div>

                                            <div style={{ padding: "5px" }} className="col-xl-3 col-md-3 col-lg-3 col-sm-12 eachInput">
                                                <label style={{ fontSize: "11px", color: "#000", marginBottom: "0px", fontWeight: "400" }} htmlFor="ins">Institution : </label>
                                                <p style={{ fontSize: "10px", marginBottom: "0px", color: "#444" }}>{v.ins}</p>
                                            </div>
                                        </>
                                    )
                                })}


                                <div style={{ padding: "5px" }} className="col-4 eachInput">
                                    <label style={{ fontSize: "11px", color: "#000", marginBottom: "0px", fontWeight: "400" }} htmlFor="name">Language Test? </label>
                                    <p style={{ fontSize: "10px", marginBottom: "0px", color: "#444" }}>{eTest === "Y" ? "YES" : "NO"}</p>
                                </div>
                                {eTest === "Y" &&
                                    <div style={{ padding: "5px" }} className="col-3 eachInput">
                                        <label style={{ fontSize: "11px", color: "#000", marginBottom: "0px", fontWeight: "400" }} htmlFor="eTestName">Which Test : </label>
                                        <p style={{ fontSize: "10px", marginBottom: "0px", color: "#444" }}>{eTestName}</p>
                                    </div>
                                }
                                {eTest === "Y" &&
                                    <div style={{ padding: "5px" }} className="col-3 eachInput">
                                        <label style={{ fontSize: "11px", color: "#000", marginBottom: "0px", fontWeight: "400" }} htmlFor="eTestName">Overall Marks : </label>
                                        <p style={{ fontSize: "10px", marginBottom: "0px", color: "#444" }}>{eTestOMar}</p>
                                    </div>
                                }
                                {eTest === "Y" &&
                                    <div style={{ padding: "5px" }} className="col-3 eachInput">
                                        <label style={{ fontSize: "11px", color: "#000", marginBottom: "0px", fontWeight: "400" }} htmlFor="lisMar">Listening : </label>
                                        <p style={{ fontSize: "10px", marginBottom: "0px", color: "#444" }}>{lisMar}</p>
                                    </div>
                                }
                                {eTest === "Y" &&
                                    <div style={{ padding: "5px" }} className="col-3 eachInput">
                                        <label style={{ fontSize: "11px", color: "#000", marginBottom: "0px", fontWeight: "400" }} htmlFor="readMar">Reading : </label>
                                        <p style={{ fontSize: "10px", marginBottom: "0px", color: "#444" }}>{readMar}</p>
                                    </div>
                                }
                                {eTest === "Y" &&
                                    <div style={{ padding: "5px" }} className="col-3 eachInput">
                                        <label style={{ fontSize: "11px", color: "#000", marginBottom: "0px", fontWeight: "400" }} htmlFor="speekMar">Speeking : </label>
                                        <p style={{ fontSize: "10px", marginBottom: "0px", color: "#444" }}>{speekMar}</p>
                                    </div>
                                }
                                {eTest === "Y" &&
                                    <div style={{ padding: "5px" }} className="col-3 eachInput">
                                        <label style={{ fontSize: "11px", color: "#000", marginBottom: "0px", fontWeight: "400" }} htmlFor="wriMar">Writing : </label>
                                        <p style={{ fontSize: "10px", marginBottom: "0px", color: "#444" }}>{wriMar}</p>
                                    </div>
                                }
                            </div>
                        </div>
                        {desig !== "" &&
                            <div className=" eachSection">
                                <h3 style={{ fontSize: "14px", padding: "2px 10px", borderTop: "1px solid var(--blueMain)", borderBottom: "1px solid var(--blueMain)", backgroundColor: "#eee" }} className='flbp'>Work Experience / Internship</h3>
                                <div style={{ padding: "5px" }} className="allInputFields">

                                    <div style={{ padding: "5px" }} className="col-xl-3 col-lg-3 col-md-3 col-sm-12 eachInput">
                                        <label style={{ fontSize: "11px", color: "#000", marginBottom: "0px", fontWeight: "400" }} htmlFor="desig">Designation : </label>
                                        <p style={{ fontSize: "10px", marginBottom: "0px", color: "#444" }}>{desig}</p>
                                    </div>

                                    <div style={{ padding: "5px" }} className="col-xl-3 col-lg-3 col-md-3 col-sm-12 eachInput">
                                        <label style={{ fontSize: "11px", color: "#000", marginBottom: "0px", fontWeight: "400" }} htmlFor="cName">Company Name : </label>
                                        <p style={{ fontSize: "10px", marginBottom: "0px", color: "#444" }}>{cName === "" ? "-" : cName}</p>
                                    </div>

                                    <div style={{ padding: "5px" }} className="col-xl-3 col-lg-3 col-md-3 col-sm-12 eachInput">
                                        <label style={{ fontSize: "11px", color: "#000", marginBottom: "0px", fontWeight: "400" }} htmlFor="sDate">From : </label>
                                        <p style={{ fontSize: "10px", marginBottom: "0px", color: "#444" }}>{sDate === "" ? "-" : dateFormating(new Date(sDate))}</p>
                                    </div>

                                    <div style={{ padding: "5px" }} className="col-xl-3 col-lg-3 col-md-3 col-sm-12 eachInput">
                                        <label style={{ fontSize: "11px", color: "#000", marginBottom: "0px", fontWeight: "400" }} htmlFor="eDate">To : </label>
                                        <p style={{ fontSize: "10px", marginBottom: "0px", color: "#444" }}>{eDate === "" ? "-" : dateFormating(new Date(eDate))}</p>
                                    </div>

                                </div>
                            </div>
                        }

                        <div className=" eachSection">
                            <h3 style={{ fontSize: "14px", padding: "2px 10px", borderTop: "1px solid var(--blueMain)", borderBottom: "1px solid var(--blueMain)", backgroundColor: "#eee" }} className='flbp'>Country Preference</h3>
                            <div style={{ padding: "5px" }} className="allInputFields">

                                <div style={{ padding: "5px" }} className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachInput">
                                    <label style={{ fontSize: "11px", color: "#000", marginBottom: "0px", fontWeight: "400" }} htmlFor="name">Prefered Countries : </label>
                                    <p style={{ fontSize: "10px", marginBottom: "0px", color: "#444" }}>{pCountries.map((v, i) => `${v} `)}</p>
                                </div>
                                <div style={{ padding: "5px" }} className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachInput">
                                    <label style={{ fontSize: "11px", color: "#000", marginBottom: "0px", fontWeight: "400" }} htmlFor="pCourse" >Prefered Course : </label>
                                    <p style={{ fontSize: "10px", marginBottom: "0px", color: "#444" }}>{pCourse}</p>
                                </div>

                                <div style={{ padding: "5px" }} className="col-xl-4 col-lg-4 col-md-4 col-sm-12 eachInput">
                                    <label style={{ fontSize: "11px", color: "#000", marginBottom: "0px", fontWeight: "400" }} htmlFor="pCity" >Prefered City : </label>
                                    <p style={{ fontSize: "10px", marginBottom: "0px", color: "#444" }}>{pCity}</p>
                                </div>

                            </div>
                        </div>

                        <div className=" eachSection">
                            <h3 style={{ fontSize: "14px", padding: "2px 10px", borderTop: "1px solid var(--blueMain)", borderBottom: "1px solid var(--blueMain)", backgroundColor: "#eee" }} className='flbp'>More Info</h3>
                            <div style={{ padding: "5px" }} className="allInputFields">

                                <div style={{ padding: "5px" }} className="col-xl-6 col-lg-6 col-md-6 col-sm-12 eachInput">
                                    <label style={{ fontSize: "11px", color: "#000", marginBottom: "0px", fontWeight: "400" }} htmlFor="oQuery">Any Other Query : </label>
                                    <p style={{ fontSize: "10px", marginBottom: "0px", color: "#444" }}>{oQuery === "" ? "-" : oQuery}</p>
                                </div>

                                <div style={{ padding: "5px" }} className="col-xl-6 col-lg-6 col-md-6 col-sm-12 eachInput">
                                    <label style={{ fontSize: "11px", color: "#000", marginBottom: "0px", fontWeight: "400" }} htmlFor='hereAbout'>How did you hear about us ? </label>
                                    <p style={{ fontSize: "10px", marginBottom: "0px", color: "#444" }}>{hereAbout}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ApplicationView