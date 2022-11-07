import './AdminReviews.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminReviews = () => {

  const [allRev, setAllRev] = useState([])
  const [formMode, setFormMode] = useState("create")
  const [loading, setLoading] = useState(false)
  const [revUpdatingID, setRevUpdatingID] = useState("")

  const [name, setName] = useState("")
  const [photo, setPhoto] = useState("")
  const [country, setCountry] = useState("")
  const [uni, setUni] = useState("");
  const [rev, setRev] = useState("")


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
    console.log(file)
    setLoading(false)
  }

  // Reviews Uploading And Updating Fuction
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (name === "") {
      toast.error("Student Name is Required!")
    } else if (photo === "") {
      toast.error("Photo is not yet selected!")
    } else if (country === "") {
      toast.error("Country is Required!")
    } else if (uni === "") {
      toast.error("University is Required!")
    } else if (rev === "") {
      toast.error("Review is Required")
    } else {
      let newRev = {
        name,
        photo,
        country,
        uni,
        rev
      }

      try {
        setLoading(true)
        if (formMode === "create") {
          const savedRev = await axios.post("https://edifygroup.herokuapp.com/api/rev/addRev", newRev)
          savedRev && toast.success("Review Published Successfully!");
        } else if (formMode === "update") {
          const updatedRev = await axios.put(`https://edifygroup.herokuapp.com/api/rev/${revUpdatingID}`, newRev)
          setFormMode("create")
          updatedRev && toast.success("Review Updated Successfully!");
        }
        setName("")
        setPhoto("")
        setCountry("")
        setUni("")
        setRev("")
        setLoading(false)
      } catch (error) {
        toast.error("Something Went Wronge with DB, Server Or Duplicated Review" + error)
      }
    }
  }


  // Reseting Form to empty Values
  const setValuesToEmpty = () => {
    setName("")
    setUni("")
    setCountry("")
    setPhoto("")
    setRev("")
  }


  // Fetching All Reviews Published
  useEffect(() => {
    const getAllBlogs = async () => {
      const allReviews = await axios.get("https://edifygroup.herokuapp.com/api/rev/")
      setAllRev(allReviews.data);
    }
    getAllBlogs();
  }, [allRev])


  // Deleting An Existing Review
  const deleteReview = async (id) => {
    try {
      if (window.confirm("Are You Sure To Delete This Review")) {
        const deletedRev = await axios.delete(`https://edifygroup.herokuapp.com/api/rev/${id}`, { data: { blogId: id } })
        deletedRev && toast.success("Review Deleted Successfully!")
      }
    } catch (error) {
      toast.error("Something Went Wronge While Deleting This Review!")
    }
  }


  // Updating Review From
  const updateReview = (v) => {
    setRevUpdatingID(v._id)
    setName(v.name)
    setUni(v.uni)
    setCountry(v.country)
    setPhoto(v.photo)
    setRev(v.rev)
    setFormMode("update")
  }

  // Cancle Updating Mode
  const cancleUpadintMode = () => {
    setName("")
    setUni("")
    setCountry("")
    setPhoto("")
    setRev("")
    setFormMode("create")
  }
  return (
    <div className='AdminReviewsOuter'>
      <div className='AdminReviews'>
        <form onSubmit={formSubmitHandler} className="addNewBlogForm">
          <h1 className='slbh'>Add New Review</h1>
          <div className="eachInputSection">
            <label htmlFor="title">Student Name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Enter Name Here' />
          </div>

          <div className="eachInputSection selectImg">
            {/* Image Input Section Start  ============================================*/}
            <label htmlFor="file" style={{ cursor: loading && "not-allowed", opacity: loading && ".7" }}>
              <i className="fa-solid fa-circle-arrow-up"></i>
              UPLOAD IMAGE
            </label>
            {
              loading && <p>Loading....</p>
            }
            {
              photo !== "" &&
              <div className="blogImageSection">
                <img className='blogImage' src={photo} alt="" />
              </div>
            }
            <input
              name='file'
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={handleFileInputChange}
            />
            {/* Image Input Section End    ============================================*/}
          </div>

          <div className="eachInputSection">
            <label htmlFor="name">Country</label>
            <input type="text" value={country} onChange={e => setCountry(e.target.value)} placeholder='Enter Country Here' />
          </div>

          <div className="eachInputSection">
            <label htmlFor="name">University</label>
            <input type="text" value={uni} onChange={e => setUni(e.target.value)} placeholder='Enter University Here' />
          </div>

          <div className="eachInputSection">
            <label htmlFor="name">Review</label>
            <textarea type="text" value={rev} onChange={e => setRev(e.target.value)} placeholder='Start Writing...' />
          </div>

          <div className="buttonSection">
            {
              formMode === "update" &&
              <button onClick={cancleUpadintMode}>Cancel</button>
            }
            <button type="reset" onClick={setValuesToEmpty}>Reset</button>
            <button type="submit" style={{ cursor: loading && "not-allowed", opacity: loading && ".7" }}>{formMode === "create" ? "Submit" : "Update"}</button>

          </div>
        </form>
        <ToastContainer />
      </div>
      {/* All Reviews ====================================================== */}
      <div className="allReviews">
        {
          allRev.length === 0 ? <p className="slbp">No-one Student Review Added Yet!</p>:
          allRev.map((v, i) => {
            return (
              <div key={i} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 clientDesc">
                <div className="clientDescInner">
                  <div className="blogEditIcons">
                    <i className="fa-solid editIcon fa-pen-to-square" onClick={() => updateReview(v)} ></i>
                    <i className="fa-solid delIcon fa-trash" onClick={() => deleteReview(v._id)}></i>
                  </div>
                  <div className='stdDetail'>
                    <div className="col-3 imgDiv">
                      <img src={v.photo} alt="" />
                    </div>
                    <div className="col-9 nameAndWho">
                      <p className='flp' style={{ marginBottom: "0px" }}>{v.name.toUpperCase()}</p>
                      <p className='slwp' style={{ color: "#000" }}>{v.country}</p>
                      <p className='slwp'>{v.uni}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default AdminReviews