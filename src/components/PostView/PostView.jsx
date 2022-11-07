import './PostView.css'
import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import TopBar from '../TopBar/TopBar'
import loadingGif from '../../assets/gif/loading.gif'
import { FacebookMessengerShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton } from 'react-share'


const PostView = () => {
    const [loadingRel, setLoadingRel] = useState(false)
    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState("");
    const [photo, setPhoto] = useState("")
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState("")
    const [username, setUsername] = useState("")
    const [category, setCategory] = useState("")
    const [relatedArticles, setRelatedArticles] = useState([])

    const location = useLocation();
    const id = location.pathname.split("/")[2];

    useEffect(() => {
        const fetchBlog = async () => {
            setLoading(true)
            const res = await axios.get(`https://edifygroup.herokuapp.com/api/blogs/${id}`);
            setTitle(res.data.title)
            setDesc(res.data.desc)
            setDate(res.data.createdAt)
            setUsername(res.data.username)
            setPhoto(res.data.photo)
            setCategory(res.data.categories)
            setLoading(false)
        }
        fetchBlog();
    }, [id])

    useEffect(() => {
        const fetchRelatedPost = async () => {
            setLoadingRel(true)
            const resRel = await axios.get(`https://edifygroup.herokuapp.com/api/blogs/?cat=${category}`)
            setRelatedArticles(resRel.data)
            setLoadingRel(false)
        }
        category && fetchRelatedPost()
    }, [category])


    return (
        <div>
            <TopBar />
            <NavBar />
            <div className="row postPage">
                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 PostView">
                    {loading === true ?
                        <div className="loadingImgDiv col-12">
                            <img src={loadingGif} alt="" />
                        </div>
                        :
                        <>
                            <p className='categoryPara'><Link to={`/blog?cat=${category}`}>{category}</Link></p>
                            <span className='triangle-bottomleft'></span>
                            <h1>{title}</h1>
                            <div className="autherAndDateSection">
                                <span>
                                    <i className="fa-solid fa-user"></i>
                                    {username}
                                </span>
                                <span>
                                    <i className="fa-solid fa-calendar-days"></i>
                                    {new Date(date).toDateString()}
                                </span>
                            </div>
                            <img src={photo} alt="" />
                            <article dangerouslySetInnerHTML={{ __html: desc }}></article>
                            <div className="SharingSection">
                                <p>Share On : </p>
                                <div className="ShareOn">
                                    <div className="eachSocialMedia">
                                        <FacebookMessengerShareButton url={`https://edify.pk${location.pathname}`}>
                                            <i style={{ backgroundColor: "#1877F2" }} className="fa-brands fa-facebook-f"></i>
                                        </FacebookMessengerShareButton>
                                    </div>
                                    <div className="eachSocialMedia">
                                        <TwitterShareButton url={`https://edify.pk${location.pathname}`}>
                                            <i style={{ backgroundColor: "#1DA1F2" }} className="fa-brands fa-twitter"></i>
                                        </TwitterShareButton>
                                    </div>
                                    <div className="eachSocialMedia">
                                        <LinkedinShareButton url={`https://edify.pk${location.pathname}`}>
                                            <i style={{ backgroundColor: "#0A66C2" }} className="fa-brands fa-linkedin"></i>
                                        </LinkedinShareButton>
                                    </div>
                                    <div className="eachSocialMedia">
                                        <WhatsappShareButton url={`https://edify.pk${location.pathname}`}>
                                            <i style={{ backgroundColor: "#25D366" }} className="fa-brands fa-whatsapp"></i>
                                        </WhatsappShareButton>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 categoriesSideBar">
                    <div className="categoriesSideBarInner">
                        <h3>Categories</h3>
                        <hr />
                        <ul>
                            <li><Link to="/blog?cat=Education">Education</Link></li>
                            <li><Link to="/blog?cat=English Test">English Test</Link></li>
                            <li><Link to="/blog?cat=Immigration">Immigration</Link></li>
                            <li><Link to="/blog?cat=Universities">Universities</Link></li>
                            <li><Link to="/blog?cat=Courses And Programs">Courses And Programs</Link></li>
                            <li><Link to="/blog?cat=Career Counselling">Career Counselling</Link></li>
                        </ul>
                    </div>
                    <div className="relatedPosts">
                        <h3>Related Articles</h3>
                        <hr />
                        <div className="allRelatedPosts">
                            {loadingRel === true ?
                                <div className="loadingImgDiv col-12">
                                    <img src={loadingGif} alt="" />
                                </div>
                                :

                                relatedArticles.filter(v => {
                                    if (v._id !== id) {
                                        return v
                                    }
                                }).slice(-4).map((v, i) => {
                                    return (
                                        <div key={i} className="eachPost">
                                            <div className="imgSection">
                                                <Link to={`/Blog/${v._id}/${v.title.replace(/ /g, "-")}`}><img src={v.photo} alt="" /></Link>
                                            </div>
                                            <div className="titleDiv">
                                                <Link to={`/Blog/${v._id}/${v.title.replace(/ /g, "-")}`}>{v.title}</Link>
                                            </div>
                                        </div>
                                    )
                                })

                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PostView