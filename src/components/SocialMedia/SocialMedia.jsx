import './SocialMedia.css'

const SocialMedia = () => {
  return (
    <div data-aos="flip-up" className='SocialMedia'>
      <div className='socialMediaLayer'>
        <h2 className='tlwh' data-aos="fade-down" data-aos-duration="1200">Social Media Presence</h2>
        <div data-aos="fade-up" data-aos-duration="1200" className="allsocialMedia">
          <div data-aos="fade-up" data-aos-duration="1500" className="eachSocialMedia ">
            <a href="https://www.facebook.com/EdifyGroupPakistan" target="blank" >
              <i className="fa-brands fa-facebook-f"></i>
              <p>Facebook</p>
            </a>
          </div>
          <div data-aos="fade-up" data-aos-duration="1500" className="eachSocialMedia ">
            <a href="https://www.instagram.com/edifygroupofficial/" target="blank" >
              <i className="fa-brands fa-instagram"></i>
              <p>Instagram</p>
            </a>
          </div>
          <div data-aos="fade-up" data-aos-duration="1500" className="eachSocialMedia ">
            <a href="https://www.twitter.com" target="blank" >
              <i className="fa-brands fa-twitter"></i>
              <p>Twitter</p>
            </a>
          </div>
          <div data-aos="fade-up" data-aos-duration="1500" className="eachSocialMedia ">
            <a href="https://wa.me/+923216667540" target="blank" >
              <i className="fa-brands fa-whatsapp"></i>
              <p>Whatsapp</p>
            </a>
          </div>
          <div data-aos="fade-up" data-aos-duration="1500" className="eachSocialMedia ">
            <a href="https://www.linkedin.com/company/edify-group-of-companies/mycompany/" target="blank" >
              <i className="fa-brands fa-linkedin"></i>
              <p>Linkedin</p>
            </a>
          </div>
          <div data-aos="fade-up" data-aos-duration="1500" className="eachSocialMedia ">
            <a href="https://www.youtube.com/c/EDIFYGROUP/featured" target="blank" >
              <i className="fa-brands fa-youtube"></i>
              <p>YouTube</p>
            </a>
          </div>
        </div>
      </div>
      <div className="layer"></div>
    </div>
  )
}

export default SocialMedia;