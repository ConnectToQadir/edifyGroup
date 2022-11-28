import { useEffect, useState, useRef, useContext } from 'react'
import './Applications.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import { Context } from '../../../context/Context'

const Applications = () => {

    // Checking Internet Connection Start ===========================>

    const [isOnline, setIsOnline] = useState(navigator.onLine);
    useEffect(() => {
        // Update network status
        const handleStatusChange = () => {
            setIsOnline(navigator.onLine);
        };

        // Listen to the online status
        window.addEventListener('online', handleStatusChange);

        // Listen to the offline status
        window.addEventListener('offline', handleStatusChange);

        // Specify how to clean up after this effect for performance improvment
        return () => {
            window.removeEventListener('online', handleStatusChange);
            window.removeEventListener('offline', handleStatusChange);
        };
    }, [isOnline]);

    // Checking Internet Connection End   ===========================>




    // Fetch Counselors From DB
    const [counsolers, setCounsolers] = useState([])
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

    const { user } = useContext(Context);
    const [allApplications, setAllApplications] = useState([]);
    const [allCampusApplications, setAllCampusApplications] = useState([]);
    const tableRef = useRef(null);
    const [toggleEnquiries, setToggleEnquiries] = useState(user.desig === "Receptionist" ? true : false)
    const [deletingApplication, setDeletingAppliction] = useState(false)

    // Comment Management Section Start===========================================================

    const [fetchedComment, setFetchedComments] = useState([]);
    const [targetedStudentID, setTargetedStudentID] = useState("")
    const [commentSubmitting, setCommentSubmitting] = useState(false)

    const [comment, setComment] = useState({
        name: user.username,
        commentDate: new Date(),
        comment: ""
    })

    const targetedRemarks = (rem, id) => {
        setFetchedComments(rem)
        setTargetedStudentID(id)
    }

    const commentSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            let newComments = [...fetchedComment, comment]
            setCommentSubmitting(true)
            let res;
            if (toggleEnquiries) {
                if (fetchedComment.length === 0) {
                    res = await axios.put(`https://edifygroup.herokuapp.com/api/campusApply/${targetedStudentID}`, { rem: newComments, conStatus: "Contacted" })
                    setComment({
                        name: user.username,
                        commentDate: new Date(),
                        comment: ""
                    })
                } else {
                    res = await axios.put(`https://edifygroup.herokuapp.com/api/campusApply/${targetedStudentID}`, { rem: newComments })
                    setComment({
                        name: user.username,
                        commentDate: new Date(),
                        comment: ""
                    })
                }
            } else {
                if (fetchedComment.length === 0) {
                    res = await axios.put(`https://edifygroup.herokuapp.com/api/apply/${targetedStudentID}`, { rem: newComments, conStatus: "Contacted" })
                    setComment({
                        name: user.username,
                        commentDate: new Date(),
                        comment: ""
                    })
                } else {
                    res = await axios.put(`https://edifygroup.herokuapp.com/api/apply/${targetedStudentID}`, { rem: newComments })
                    setComment({
                        name: user.username,
                        commentDate: new Date(),
                        comment: ""
                    })
                }
            }
            res && setFetchedComments(res.data.rem)
            setCommentSubmitting(false)
        } catch (error) {
            toast.error("Something Wend Wrong" + error)
        }
    }

    // Comment Management Section End===========================================================



    const [pageLoading, setPageLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [tRecords, setTRecords] = useState()

    const [filterAndSearchData, setFilteredAndSearchData] = useState({
        filterBy: "",
        filteredTerm: "",
        searchBy: "",
        searchedTerm: ""
    })

    useEffect(() => {
        resetFilterAndSearchData()
    }, [toggleEnquiries])

    const resetFilterAndSearchData = () => {
        setFilteredAndSearchData({
            filterBy: "",
            filteredTerm: "",
            searchBy: "",
            searchedTerm: ""
        })
        setCurrentPage(1)
    }

    const filterAndSearchDataChageHandler = (e) => {
        setFilteredAndSearchData({ ...filterAndSearchData, [e.target.name]: e.target.value });
        setCurrentPage(1);
    }


    // Set Refered

    const [refering, setRefering] = useState(false)
    const [referingStudentId, setReferingStudentId] = useState("")

    const refToChangeHandler = async (id, cName) => {
        try {
            setRefering(true)
            setReferingStudentId(id)
            setPageLoading(true)
            await axios.put(`https://edifygroup.herokuapp.com/api/apply/${id}`, { conStatus: "Referred", refTo: cName })
        } catch (error) {
            alert(error)
        }
    }


    // Fetching All Applications
    useEffect(() => {
        try {
            const fetchAllCampusApplications = async () => {
                setPageLoading(true)
                const res = await axios.get(`https://edifygroup.herokuapp.com/api/campusApply?page=${currentPage}${user.desig === "Counselor" ? `&refTo=${user.userCode}` : ""}${filterAndSearchData.filteredTerm ? `&${filterAndSearchData.filterBy}=${filterAndSearchData.filteredTerm}` : ""}${filterAndSearchData.searchedTerm ? `&${filterAndSearchData.searchBy}=${filterAndSearchData.searchedTerm}` : ""}${user.username.split(" ")[0] === "Lhr" ? "&branch=Lhr" : ""}${user.username.split(" ")[0] === "Fsd" ? "&branch=Fsd" : ""}`)
                setAllCampusApplications(res.data.data)
                setTRecords(res.data.count)
                setPageLoading(false)
            }
            const fetchWebApplications = async () => {
                setPageLoading(true)
                const res = await axios.get(`https://edifygroup.herokuapp.com/api/apply?page=${currentPage}${user.desig === "Counselor" ? `&refTo=${user.userCode}` : ""}${filterAndSearchData.filteredTerm ? `&${filterAndSearchData.filterBy}=${filterAndSearchData.filteredTerm}` : ""}${filterAndSearchData.searchedTerm ? `&${filterAndSearchData.searchBy}=${filterAndSearchData.searchedTerm}` : ""}`)
                setAllApplications(res.data.data)
                setTRecords(res.data.count)
                setPageLoading(false)
                setRefering(false)
            }

            toggleEnquiries ? fetchAllCampusApplications() : fetchWebApplications()

        } catch (error) {
            console.log("error")
        }
    }, [isOnline, commentSubmitting, currentPage, filterAndSearchData.filteredTerm, filterAndSearchData.searchedTerm, toggleEnquiries, deletingApplication, refering])

    // Deleting An Applications
    const deleteApplication = async (id) => {
        try {
            if (window.confirm("Are You Sure To Delete This Review")) {
                setDeletingAppliction(true)
                const deletedApplication = await axios.delete(`https://edifygroup.herokuapp.com/api/${toggleEnquiries === true ? "campusApply" : "apply"}/${id}`)
                deletedApplication && toast.success("Application Deleted Successfully!")
                setDeletingAppliction(false)
            }
        } catch (error) {
            toast.error("Something Went Wronge While Deleting This Application!" + error)
        }
    }

    // Adding Leading Zeros Before a Number
    const addLeadingZero = (num, zeros) => {
        num = num.toString();
        while (num.length < zeros) num = "0" + num;
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

    return (
        <div className='Enquiries Applications'>
            <ToastContainer />

            {/* Comments Showing Modal Start========================= */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Comments</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
                        </div>

                        <div className="modal-body">
                            <div className="mb-3">
                                {
                                    fetchedComment.map((v, i) => {
                                        return (
                                            <div key={i} className="eachComment">
                                                <div className="name">
                                                    <div className="inner">
                                                        {v?.name}
                                                    </div>
                                                </div>
                                                <div className="Comment">{v?.comment}</div>
                                                <div className="dataDiv">
                                                    <div className="innerDate">
                                                        {dateFormating(new Date(v?.commentDate))}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <form onSubmit={commentSubmitHandler} className="mb-3">
                                <label htmlFor="message-text" className="col-form-label">New Comment:</label>
                                <textarea required value={comment.comment} onChange={(e) => setComment({ ...comment, comment: e.target.value })} className="form-control" id="message-text"></textarea>
                                <button type='submit' className='btn-success' disabled={commentSubmitting}>{commentSubmitting && <i class="fa-solid fa-spinner fa-spin-pulse"></i>}Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Comments Showing Modal End=========================== */}

            <div className="enquiriesHeader">
                <div style={{ display: "flex", alignItems: "center" }} >
                    {user.desig === "Receptionist" ?
                        <></> :
                        <div className="toggleEnquiryTypeBtn">
                            <div onClick={() => setToggleEnquiries(!toggleEnquiries)} className="toggleBtnOuterDiv">
                                <div title='Switch Between Web and Campus Enquiries' style={{ left: toggleEnquiries !== true ? "0%" : "50%" }} className="toggleNode">{toggleEnquiries !== true ? <i className="fa-solid fa-globe"></i> : <i className="fa-solid fa-house"></i>}</div>
                            </div>
                        </div>
                    }
                    <h3 className='hfont' data-aos="fade-up" data-aos-duration="1200">Enquiries</h3>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                    <div className="filterAndSearchSection">
                        <div className="filterSection">
                            <i className="fa-solid fa-filter"></i>
                            <select onChange={filterAndSearchDataChageHandler} value={filterAndSearchData.filterBy} name="filterBy" id="">
                                <option value="">Select</option>
                                {(toggleEnquiries && ((user.desig !== "Counselor") && (user.desig !== "Receptionist"))) && <option value="branch">Branch</option>}
                                <option value="hereAbout">Source</option>
                                {user.desig !== "Counselor" && <option value="refTo">Counselor</option>}
                                <option value="pCountries">Countries</option>
                                {!toggleEnquiries && <option value="conStatus">Contact Status</option>}
                            </select>
                            {
                                filterAndSearchData.filterBy &&
                                <select onChange={filterAndSearchDataChageHandler} value={filterAndSearchData.filteredTerm} name="filteredTerm" id="">
                                    {
                                        filterAndSearchData.filterBy === "branch" && <>
                                            <option value="">Select Branch</option>
                                            <option value="Fsd">Faisalabad</option>
                                            <option value="Lhr">Lahore</option>
                                        </>
                                    }
                                    {
                                        filterAndSearchData.filterBy === "refTo" && <>
                                            <option value="">Select Counsellor</option>
                                            {
                                                counsolers.map((v, i) => {
                                                    return (

                                                        <option key={i} value={`${v.userCode}`}>{v.username}</option>
                                                    )
                                                })
                                            }
                                        </>
                                    }

                                    {
                                        filterAndSearchData.filterBy === "pCountries" && <>
                                            <option value="">Select Country</option>
                                            <option value="UK">UK</option>
                                            <option value="USA">USA</option>
                                            <option value="Canada">Canada</option>
                                            <option value="Sweden">Sweden</option>
                                            <option value="Australia">Australia</option>
                                            <option value="Other">Other</option>
                                        </>
                                    }

                                    {
                                        filterAndSearchData.filterBy === "hereAbout" && <>
                                            <option value="">Select Source</option>
                                            <option value="Banner">Banner</option>
                                            <option value="YouTube">YouTube</option>
                                            <option value="Social Media">Social Media</option>
                                            <option value="Call / SMS">Call / SMS</option>
                                            <option value="Through a Friend">Through a Friend</option>
                                        </>
                                    }

                                    {
                                        filterAndSearchData.filterBy === "conStatus" && <>
                                            <option value="">Select Status</option>
                                            {user.desig !== "Counselor" && <option value="Pending">Pending</option>}
                                            <option value="Referred">Referred</option>
                                            <option value="Contacted">Contacted</option>
                                        </>
                                    }

                                </select>
                            }
                            <button onClick={resetFilterAndSearchData} title="Remove Filters" type='reset'><i className="fa-solid fa-eraser"></i></button>
                        </div>
                        <div className="searchSection">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <select onChange={filterAndSearchDataChageHandler} value={filterAndSearchData.searchBy} name="searchBy" id="">
                                <option value="">Select</option>
                                <option value="name">Name</option>
                                <option value="phone">Phone</option>
                            </select>
                            {
                                filterAndSearchData.searchBy &&
                                <input name="searchedTerm" placeholder={filterAndSearchData.searchBy === "name" ? "Enter Student Name" : "Enter Student Cell No"} onChange={filterAndSearchDataChageHandler} type={`text`} />
                            }
                        </div>
                    </div>

                    <DownloadTableExcel
                        filename={`Applications-${dateFormating(new Date())}`}
                        sheet="users"
                        currentTableRef={tableRef.current}
                    >
                        <button title='Export Into Excel Sheet' style={{ border: "none" }} data-aos="fade-up" data-aos-duration="1200"><i className="fa-solid fa-file-excel"></i></button>
                    </DownloadTableExcel>
                </div>
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
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allApplications.map((v, i) => {
                                        return (
                                            <tr key={i} className='EachDataRow'>
                                                <td className='text-center serialSticky' >{(currentPage - 1) * 50 + 1 + i}</td>
                                                <td>{dateFormating(new Date(v.createdAt))}</td>
                                                <td className='serialStickyName'>{v.name}</td>
                                                <td className='text-center' >{getAgeFromDob(new Date(v.dob))}</td>
                                                <td>{v.phone}</td>
                                                <td>{v.edu[v.edu.length - 1]?.edu}</td>
                                                <td>{v.edu[v.edu.length - 1]?.sub}</td>
                                                <td className='text-center' >{v.eTest === "Y" ? "Yes" : "-"}</td>
                                                <td>{v.pCountries.toString()}</td>
                                                <td>{v.city}</td>
                                                <td>{v.hereAbout}</td>

                                                {
                                                    v.conStatus === "Pending" && <td className='text-center' style={{ padding: "0px 4px", fontWeight: "800", letterSpacing: "1.3px" }}><span style={{ borderRadius: "5px", padding: "2px 5px", backgroundColor: "rgba(255,0,0,30%)" }}>{v.conStatus}</span></td>
                                                }
                                                {
                                                    v.conStatus === "Referred" && <td className='text-center' style={{ padding: "0px 4px", fontWeight: "800", letterSpacing: "1.3px" }}><span style={{ borderRadius: "5px", padding: "2px 5px", backgroundColor: "rgba(255, 205, 0, 50%)" }}>{v.conStatus}</span></td>
                                                }
                                                {
                                                    v.conStatus === "Contacted" && <td className='text-center' style={{ padding: "0px 4px", fontWeight: "800", letterSpacing: "1.3px" }}><span style={{ borderRadius: "5px", padding: "2px 5px", backgroundColor: "rgba(0, 200, 0,50%)" }}>{v.conStatus}</span></td>
                                                }

                                                <td className='text-center'>
                                                    {

                                                        !(v.refTo === "") ? counsolers.filter(i=>i.userCode === v.refTo)[0]?.username : (
                                                            (v._id === referingStudentId) ? <i className="fa-solid fa-spinner fa-spin-pulse"></i> :
                                                                <select className='applicationSelect' name="refTo" onChange={(e) => {
                                                                    refToChangeHandler(v._id, e.target.value)
                                                                }} value={v.refTo}>
                                                                    <option value="">Select Counsellor</option>
                                                                    {
                                                                        counsolers.map((v, i) => {
                                                                            return (

                                                                                <option key={i} value={`${v.userCode}`}>{v.username}</option>
                                                                            )
                                                                        })
                                                                    }
                                                                </select>
                                                        )
                                                    }
                                                </td>
                                                <td style={{ padding: "5px 10px", paddingTop: "10px" }} className='actionsIcons'> <span><i onClick={() => targetedRemarks(v.rem, v._id)} data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" className="fa-solid fa-comment"></i>{v.rem.length ? <span>{v.rem.length}</span> : ""}</span>  <Link to={`apply/${v._id}`}><i className="fa-solid fa-rectangle-list"></i></Link> {(user.desig === "Admin" || user.desig === "Developer" || user.desig === "Admin Assistant") && <i onClick={() => deleteApplication(v._id)} className="fa-solid fa-trash"></i>}</td>
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
                                    allCampusApplications.map((v, i) => {
                                        return (
                                            <tr key={i} className='EachDataRow'>
                                                <td className='text-center serialSticky' >{(currentPage - 1) * 50 + 1 + i}</td>
                                                <td>{dateFormating(new Date(v.createdAt))}</td>
                                                <td className='text-center'>{v.branch}</td>
                                                <td className='serialStickyName'>{v.name}</td>
                                                <td className='text-center' >{v.gender}</td>
                                                <td className={v.email === "" ? "text-center" : ""}>{v.email === "" ? "-" : v.email}</td>
                                                <td>{v.phone}</td>
                                                <td>{v.city}</td>
                                                <td>{v.edu}</td>
                                                <td className='text-center' >{v.eTest === "Y" ? "Yes" : "-"}</td>
                                                <td className="text-center">{v.desig === "" ? "-" : v.desig}</td>
                                                <td className={v.ref === "" ? "text-center" : ""}>{v.ref === "" ? "-" : v.ref}</td>
                                                <td>{v.pCountries.toString()}</td>
                                                <td>{counsolers.filter(i=>i.userCode === v.refTo)[0]?.username}</td>
                                                <td>{v.hereAbout}</td>
                                                <td style={{ padding: "5px 10px", paddingTop: "15px" }} className='actionsIcons'> <span title='View & Add Comments' ><i onClick={() => targetedRemarks(v.rem, v._id)} data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" className="fa-solid fa-comment"></i>{v.rem.length ? <span>{v.rem.length}</span> : ""}</span> {(user.desig === "Admin" || user.desig === "Developer" || user.desig === "Receptionist") && <Link to="/admin/campusEnquiryForm" state={v && v} ><i title='Edit' className="fa-solid updateIcon fa-pen-to-square"></i></Link>}  {(user.desig === "Admin" || user.desig === "Developer") && <i title='Delete' onClick={() => deleteApplication(v?._id)} className="fa-solid fa-trash"></i>}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                }
            </div>
            <div className="applicationsPaginationsSection">
                <div className="currentPageShowingFromTo">
                    <p>{(currentPage - 1) * 50 + 1} <b>To</b> {(currentPage - 1) * 50 + (toggleEnquiries ? allCampusApplications.length : allApplications.length)}</p>
                </div>
                <div className="innerPaginate">
                    <button title='Go To Previous Page' disabled={pageLoading || (currentPage === 1)} onClick={() => setCurrentPage(currentPage - 1)} >{pageLoading ? <i className="fa-solid fa-spinner fa-spin-pulse"></i> : <i className="fa-solid fa-angle-left"></i>}</button>
                    <p><b>{currentPage}</b> of <b>{JSON.stringify(Math.ceil(tRecords / 50))}</b></p>
                    <button title='Go To Next Page' disabled={pageLoading || (Math.ceil(tRecords / 50) === currentPage)} onClick={() => setCurrentPage(currentPage + 1)} > {pageLoading ? <i className="fa-solid fa-spinner fa-spin-pulse"></i> : <i className="fa-solid fa-angle-right"></i>} </button>
                </div>
                <div className="totalDiv">
                    <p><b>Total : </b>{tRecords}</p>
                </div>
            </div>
        </div>
    )
}

export default Applications;


