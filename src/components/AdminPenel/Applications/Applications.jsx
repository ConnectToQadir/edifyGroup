import { useEffect, useState, useRef, useContext } from 'react'
import './Applications.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import { Context } from '../../../context/Context'
import loadingGif from '../../../assets/gif/loading.gif'

const Applications = () => {

    const { user } = useContext(Context);
    const [allApplications, setAllApplications] = useState([]);
    const [allCampusApplications, setAllCampusApplications] = useState([]);
    const tableRef = useRef(null);
    const [filterTerm, setFilteredTerm] = useState("")
    const [toggleEnquiries, setToggleEnquiries] = useState(user.desig === "Receptionist" ? true : false)
    const [applicationsLoading, setApplicationsLoading] = useState(true)

    const refToChangeHandler = async (id) => {
        try {
            await axios.put(`https://edifygroup.herokuapp.com/api/apply/${id}`, { conStatus: "Refered" })
        } catch (error) {
            alert(error)
        }
    }

    // Fetching All Applications
    useEffect(() => {
        try {
            const fetchAllApplications = async () => {
                const res = await axios.get("https://edifygroup.herokuapp.com/api/apply/")
                setAllApplications(res.data)
                setApplicationsLoading(false)
            }
            fetchAllApplications();
        } catch (error) {
            console.log("error")
        }
    }, [allApplications])


    // Fetching All Campus Applications
    useEffect(() => {
        try {
            const fetchAllCampusApplications = async () => {
                const res = await axios.get("https://edifygroup.herokuapp.com/api/campusApply/")
                setAllCampusApplications(res.data)
            }
            fetchAllCampusApplications();
        } catch (error) {
            console.log("error")
        }
    }, [allCampusApplications])

    // Deleting An Applications
    const deleteApplication = async (id) => {
        try {
            if (window.confirm("Are You Sure To Delete This Review")) {
                const deletedApplication = await axios.delete(`https://edifygroup.herokuapp.com/api/${toggleEnquiries === true ? "campusApply" : "apply"}/${id}`)
                deletedApplication && toast.success("Application Deleted Successfully!")
            }
        } catch (error) {
            toast.error("Something Went Wronge While Deleting This Application!" + error)
        }
    }

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

    // Get Age From DOB
    const getAgeFromDob = (d) => {
        var year = d.getFullYear();
        var cYear = new Date(Date.now()).getFullYear();
        var age = cYear - year;
        return age
    }

    // titleCase Conversion Function
    function titleCase(str) {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(' ');
    }


    return (
        <div className='Enquiries Applications'>
            <ToastContainer />
            <div className="enquiriesHeader">
                <div style={{ display: "flex", alignItems: "center" }} >
                    {user.desig === "Receptionist" ?
                        <></> :
                        <div className="toggleEnquiryTypeBtn">
                            <div onClick={() => setToggleEnquiries(!toggleEnquiries)} className="toggleBtnOuterDiv">
                                <div style={{ left: toggleEnquiries !== true ? "0%" : "50%" }} className="toggleNode">{toggleEnquiries !== true ? "W" : "C"}</div>
                            </div>
                        </div>
                    }
                    <h3 className='hfont' data-aos="fade-up" data-aos-duration="1200">Enquiries</h3>
                </div>
                <DownloadTableExcel
                    filename={`Applications-${dateFormating(new Date())}`}
                    sheet="users"
                    currentTableRef={tableRef.current}
                >
                    <button data-aos="fade-up" data-aos-duration="1200"><i className="fa-solid fa-file-excel"></i></button>
                </DownloadTableExcel>

            </div>
            <div className="filterInputDiv">
                <input type="text" name="" value={filterTerm} onChange={(e) => setFilteredTerm(e.target.value)} placeholder='Global Filter' />
            </div>
            <div className="enquiriesTable ApplicationsTable" data-aos="fade-up" data-aos-duration="1200">
                {
                    toggleEnquiries !== true ?
                        <table ref={tableRef} width="1100px">
                            <thead>
                                <tr className='headerRow'>
                                    <th className='serialStickyhead'>Sr</th>
                                    <th>Date</th>
                                    <th className='serialStickyheadName'>Name</th>
                                    <th>Age</th>
                                    <th>Phone</th>
                                    <th>Qualification</th>
                                    <th>Subject</th>
                                    <th>IELTS</th>
                                    <th>Countries</th>
                                    <th>City</th>
                                    <th>Ref</th>
                                    <th style={{ whiteSpace: "nowrap" }}>Contact Status</th>
                                    <th style={{ whiteSpace: "nowrap" }}>Refered To</th>
                                    <th style={{ whiteSpace: "nowrap" }}>Remarks</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    applicationsLoading ?
                                        <tr><td colSpan="15"><div className="imgDiv"><img src={loadingGif} alt="" /></div></td></tr>
                                        :
                                        allApplications.filter((v) => {
                                            if (filterTerm === "") {
                                                return v
                                            } else if (
                                                dateFormating(new Date(v.createdAt)).includes(filterTerm) ||
                                                v.name.toLowerCase().includes(filterTerm.toLowerCase()) ||
                                                v.edu.toString().toLowerCase().includes(filterTerm.toLowerCase()) ||
                                                v.hereAbout.toLowerCase().includes(filterTerm.toLowerCase()) ||
                                                v.pCountries.toString().toLowerCase().includes(filterTerm.toLowerCase()) ||
                                                v.phone.includes(filterTerm) ||
                                                v.address.toLowerCase().includes(filterTerm.toLocaleLowerCase())
                                            ) {
                                                return v
                                            }
                                        }).map((v, i) => {
                                            return (
                                                <tr key={i} className='EachDataRow'>
                                                    <td className='text-center serialSticky' >{i + 1}</td>
                                                    <td>{dateFormating(new Date(v.createdAt))}</td>
                                                    <td className='serialStickyName'>{v.name}</td>
                                                    <td className='text-center' >{getAgeFromDob(new Date(v.dob))}</td>
                                                    <td>{0 + v.phone}</td>
                                                    <td>{v.edu[v.edu.length - 1]?.edu}</td>
                                                    <td>{v.edu[v.edu.length - 1]?.sub}</td>
                                                    <td className='text-center' >{v.eTest === "Y" ? "Yes" : "-"}</td>
                                                    <td>{v.pCountries.toString()}</td>
                                                    <td>{v.city}</td>
                                                    <td>{v.hereAbout}</td>
                                                    <td className='text-center'>
                                                        <span style={{ backgroundColor: v.conStatus === "Refered" ? "#ffff5c" : "rgb(255 225 225)", padding: "1px 3px" }} >{v.conStatus}</span>
                                                    </td>
                                                    <td className='text-center'>
                                                        <select className='applicationSelect' name="refTo" onChange={(e) => {
                                                            refToChangeHandler(v._id)
                                                        }} value={v.refTo}>
                                                            <option value="">Select Counselor</option>
                                                            <option value="Junaid Sohail">Junaid Sohail</option>
                                                            <option value="Amaima Iftikhar">Amaima Iftikhar</option>
                                                            <option value="Nasir Raza">Nasir Raza</option>
                                                            <option value="Syed Nouman Shah">Syed Nouman Shah</option>
                                                            <option value="Marwa Yasin">Marwa Yasin</option>
                                                            <option value="Mehreen Tiwana">Mehreen Tiwana</option>
                                                            <option value="Muhammad Bilal">Muhammad Bilal</option>
                                                            <option value="Muhammad Azhar">Muhammad Azhar</option>
                                                        </select></td>
                                                    <td className='text-center'>{v.remarks === "" ? "-" : v.remarks}</td>
                                                    <td className='actionsIcons'><Link to={`apply/${v._id}`}><i className="fa-solid fa-rectangle-list"></i></Link> <i onClick={() => deleteApplication(v._id)} className="fa-solid fa-trash"></i></td>
                                                </tr>
                                            )
                                        })
                                }
                            </tbody>
                        </table>
                        :
                        <table ref={tableRef} width="1100px">
                            <thead>
                                <tr className='headerRow'>
                                    <th className='serialStickyhead'>Sr</th>
                                    <th>Date</th>
                                    <th>Branch</th>
                                    <th className='serialStickyheadName'>Name</th>
                                    <th>Gender</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>City</th>
                                    <th>Education</th>
                                    <th>IELTS</th>
                                    <th>Desig</th>
                                    <th>Referance</th>
                                    <th>Countries</th>
                                    <th>Assign To</th>
                                    <th>Source</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allCampusApplications.filter((v) => {
                                        if (filterTerm === "") {
                                            if (user.username === "Fsd Reception") {
                                                if (v.branch === "Fsd") {
                                                    return v
                                                }
                                            } else if (user.username === "Lhr Reception") {
                                                if (v.branch === "Lhr") {
                                                    return v
                                                }
                                            } else if (user.username === "Mtn Reception") {
                                                if (v.branch === "Mtn") {
                                                    return v
                                                }
                                            } else {
                                                return v
                                            }
                                        } else if (
                                            dateFormating(new Date(v.createdAt)).includes(filterTerm) ||
                                            v.branch.toLowerCase().includes(filterTerm.toLowerCase()) ||
                                            v.name.toLowerCase().includes(filterTerm.toLowerCase()) ||
                                            v.gender.toLowerCase().includes(filterTerm.toLowerCase()) ||
                                            v.email.toLowerCase().includes(filterTerm.toLowerCase()) ||
                                            v.phone.includes(filterTerm) ||
                                            v.city.toLowerCase().includes(filterTerm.toLocaleLowerCase()) ||
                                            v.edu.toString().toLowerCase().includes(filterTerm.toLowerCase()) ||
                                            v.eTest.toLowerCase().includes(filterTerm.toLowerCase()) ||
                                            v.desig.toLowerCase().includes(filterTerm.toLowerCase()) ||
                                            v.ref.toLowerCase().includes(filterTerm.toLowerCase()) ||
                                            v.pCountries.toString().toLowerCase().includes(filterTerm.toLowerCase()) ||
                                            v.refTo.toString().toLowerCase().includes(filterTerm.toLowerCase()) ||
                                            v.hereAbout.toLowerCase().includes(filterTerm.toLowerCase())
                                        ) {
                                            if (user.username === "Fsd Reception") {
                                                if (v.branch === "Fsd") {
                                                    return v
                                                }
                                            } else if (user.username === "Lhr Reception") {
                                                if (v.branch === "Lhr") {
                                                    return v
                                                }
                                            } else if (user.username === "Mtn Reception") {
                                                if (v.branch === "Mtn") {
                                                    return v
                                                }
                                            } else {
                                                return v
                                            }
                                        }
                                    }).map((v, i) => {
                                        return (
                                            <tr key={i} className='EachDataRow'>
                                                <td className='text-center serialSticky' >{i + 1}</td>
                                                <td>{dateFormating(new Date(v.createdAt))}</td>
                                                <td className='text-center'>{v.branch}</td>
                                                <td className='serialStickyName'>{titleCase(v.name)}</td>
                                                <td className='text-center' >{v.gender}</td>
                                                <td className={v.email.trim() === "" ? "text-center" : ""}>{v.email.trim() === "" ? "-" : v.email.trim()}</td>
                                                <td>{"0"+parseInt(v.phone)}</td>
                                                <td>{titleCase(v.city)}</td>
                                                <td>{v.edu}</td>
                                                <td className='text-center' >{v.eTest === "Y" ? "Yes" : "-"}</td>
                                                <td className="text-center">{v.desig.toUpperCase() === "" ? "-" : titleCase(v.desig)}</td>
                                                <td className={v.ref.trim() === "" ? "text-center" : ""}>{v.ref.toUpperCase() === "" ? "-" : titleCase(v.ref)}</td>
                                                <td>{v.pCountries.toString()}</td>
                                                <td>{v.refTo}</td>
                                                <td>{v.hereAbout}</td>
                                                <td className='actionsIcons'><Link to="/admin/campusEnquiryForm" state={v} ><i className="fa-solid updateIcon fa-pen-to-square"></i></Link> {user.desig !== "Receptionist" && <i onClick={() => deleteApplication(v._id)} className="fa-solid fa-trash"></i>}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                }
            </div>
        </div>
    )
}

export default Applications;