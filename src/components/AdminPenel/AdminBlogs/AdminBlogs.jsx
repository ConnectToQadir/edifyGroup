import './AdminBlogs.css'
import React, { useState, useRef, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminBlogs = () => {

  const [formMode, setFormMode] = useState("create")
  const [blogUpdatingID, setBlogUpdatingID] = useState("")
  const [title, setTitle] = useState("")
  const [photo, setPhoto] = useState("")
  const [category, setCategory] = useState("")
  const [content, setContent] = useState("");
  const [username, setUsername] = useState("")



  const [loading, setLoading] = useState(false)
  const editor = useRef(null);

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


  const formSubmitHandler = async (e) => {
    e.preventDefault();

    if (title === "") {
      toast.error("Title is Required!")
    } else if (photo === "") {
      toast.error("Photo is not yet selected!")
    } else if (username === "") {
      toast.error("Author Name is Required")
    } else if (category === "") {
      toast.error("Category is not yet selected!")
    } else if (content === "" || content === "<p>&nbsp;<br></p>" || content === "<p><br></p>" || content === "<p>&nbsp;&nbsp;<br></p>") {
      toast.error("Description is Required")
    } else {
      try {
        let newBlog = {
          title,
          desc: content,
          photo,
          categories: category,
          username
        }
        setLoading(true)
        if (formMode === "create") {
          const savedBlog = await axios.post("https://edifygroup.herokuapp.com/api/blogs/addBlog", newBlog)
          savedBlog && toast.success("Blog Published Successfully!");
        } else if (formMode === "update") {
          const updatedBlog = await axios.put(`https://edifygroup.herokuapp.com/api/blogs/${blogUpdatingID}`, newBlog)
          setFormMode("create")
          updatedBlog && toast.success("Blog Updated Successfully!");
        }
        setTitle("")
        setCategory("")
        setPhoto("")
        setContent("")
        setUsername("")
        setLoading(false)
      } catch (error) {
        toast.error("Something Went Wronge with DB, Server Or Duplicated Content" + error)
      }
    }
  }


  const setValuesToEmpty = () => {
    setTitle("")
    setCategory("")
    setPhoto("")
    setContent("")
    setCategory("")
    setUsername("")
  }


  // Fetching All Blogs Published
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const getAllBlogs = async () => {
      const allBlogs = await axios.get("https://edifygroup.herokuapp.com/api/blogs/")
      setBlogs(allBlogs.data);
    }
    getAllBlogs();
  }, [blogs])


  // Deleting An Existing Pos
  const deletePost = async (id) => {
    try {
      if (window.confirm("Are You Sure To Delete This Blog")) {
        const deletedPost = await axios.delete(`https://edifygroup.herokuapp.com/api/blogs/${id}`, { data: { blogId: id } })
        deletedPost && toast.success("Post Deleted Successfully!")
      }
    } catch (error) {
      toast.error("Something Went Wronge While Deleting This Blog!")
    }
  }

  // Updating Post
  const updatePost = (v) => {
    setBlogUpdatingID(v._id)
    setTitle(v.title)
    setCategory(v.category)
    setPhoto(v.photo)
    setContent(v.desc)
    setUsername(v.username)
    setFormMode("update")
  }

  return (
    <div className='AdminBlogsOuter'>
      <div className='AdminBlogs'>
        <form onSubmit={formSubmitHandler} className="addNewBlogForm">
          <h1 className='slbh'>Add New Blog</h1>
          <div className="eachInputSection">
            <label htmlFor="title">Title</label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder='Enter Title Here' />
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
            <label htmlFor="name">Author Name</label>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder='Enter Auther Name Here' />
          </div>

          <div className="eachInputSection">
            <label htmlFor="desc">Category</label>
            <select name="desc" value={category} onChange={(e) => setCategory(e.target.value)} >
              <option value="">Select Category</option>
              <option value="Education">Education</option>
              <option value="English Test">English Test</option>
              <option value="Immigration">Immigration</option>
              <option value="Universities">Universities</option>
              <option value="Courses And Programs">Courses And Programs</option>
              <option value="Career Counselling">Career Counselling</option>
            </select>
          </div>

          <div className="eachInputSection">
            <label htmlFor="desc">Description</label>
            <JoditEditor
              ref={editor}
              value={content}
              tabIndex={1}
              onBlur={newContent => setContent(newContent)}
              onChange={newContent => { setContent(newContent) }}
            />
          </div>

          <div className="buttonSection">
            <button type="reset" onClick={setValuesToEmpty}>Reset</button>
            <button type="submit" style={{ cursor: loading && "not-allowed", opacity: loading && ".7" }}>{formMode === "create" ? "Submit" : "Update"}</button>

          </div>
        </form>
        <ToastContainer />
      </div>
      {/* All Blogs ====================================================== */}
      <div className="row allBlogs">
        {
          blogs.length === 0 ? <div className="eachBlog col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
            <p className="slbp">No-one blog uploaded yet!</p>
          </div> :
            blogs.map((v, i) => {
              return (
                <div key={i} className="eachBlog col-xl-3 col-lg-3 col-md-4 col-sm-6 ">
                  <div className="blogInner">
                    <div className="imgDiv blogEditIcons">
                      <i className="fa-solid editIcon fa-pen-to-square" onClick={() => updatePost(v)} ></i>
                      <i className="fa-solid delIcon fa-trash" onClick={() => deletePost(v._id)}></i>
                    </div>
                    <div className="contentDiv">
                      <div className="authUdateDiv">
                        <i className="fa-solid fa-calendar-days"></i>
                        <span>{new Date(v.createdAt).toDateString()}</span>
                      </div>
                      <h1><Link to={`/Blog/${v._id}`}>{v.title}</Link></h1>
                    </div>
                  </div>
                </div>
              )
            })
        }
      </div>
      {/* All Blogs ====================================================== */}
    </div>
  )
}

export default AdminBlogs