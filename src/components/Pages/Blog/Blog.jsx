import './Blog.css'
import NavBar from '../../NavBar/NavBar'
import Footer from '../../Footer/Footer'
import ProsAbout from '../../ProsAbout/ProsAbout'
import EachPageHeader from '../EachPageHeader/EachPageHeader'
import { Link,useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import TopBar from '../../TopBar/TopBar'
import axios from 'axios'
import loadingGif from '../../../../src/assets/gif/loading.gif'

const Blog = () => {

  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(false)
  const {search} = useLocation();

  useEffect(() => {
    const getAllBlogs = async () => {
      setLoading(true)
      const allBlogs = await axios.get("https://edifygroup.herokuapp.com/api/blogs/"+search)
      setBlogs(allBlogs.data);
      setLoading(false)
    }
    getAllBlogs();
  }, [search])


  return (
    <div className='blogOuter'>
      <TopBar />
      <NavBar />
      <div className='Blog'>
        <EachPageHeader heading="Blog" />
        <div className="row allBlogs">
          {
            loading === true ?
              <div className="loadingImgDiv col-12">
                <img src={loadingGif} alt="" />
              </div>
              :
              blogs.length === 0 ? <p className='text-right'>No such blog available Yet!</p>:
              blogs.map((v, i) => {
                return (
                  <div key={i} className="eachBlog col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                    <div className="blogInner">
                      <div className="imgDiv">
                        <Link to={`/Blog/${v._id}/${v.title.replace(/ /g, "-")}`}>
                          <img src={v.photo} alt="" />
                        </Link>
                      </div>
                      <div className="contentDiv">
                        <div className="authUdateDiv">
                          <i className="fa-solid fa-calendar-days"></i>
                          <span>{new Date(v.createdAt).toDateString()}</span>
                        </div>
                        <h1><Link to={`/Blog/${v._id}/${v.title.replace(/ /g, "-")}`}>{v.title}</Link></h1>
                        <div className="readMoreLink">
                          <Link to={`/Blog/${v._id}/${v.title.replace(/ /g, "-")}`}>Read More <i className="fa-solid fa-angle-right"></i></Link>
                        </div>
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

export default Blog