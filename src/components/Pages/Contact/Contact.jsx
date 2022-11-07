import './Contact.css'
import NavBar from '../../NavBar/NavBar'
import Footer from '../../Footer/Footer'
import EachPageHeader from '../EachPageHeader/EachPageHeader'
import ProsAbout from '../../ProsAbout/ProsAbout'
import TopBar from '../../TopBar/TopBar'

const Contact = () => {
  return (
    <div>
      <TopBar />
      <NavBar />
      <div className='Contact'>
        <EachPageHeader heading="Contact Us" />
        <div className="branchesNav">
          <div className="eachNavOuter">
            <a href='#fsd' className="innerNav" >Faisalabad Office</a>
          </div>
          <div className="eachNavOuter">
            <a href='#lahore' className="innerNav">Lahore Office</a>
          </div>
          <div className="eachNavOuter">
            <a href='#multan' className="innerNav">Multan Office</a>
          </div>
          <div className="eachNavOuter commingSoon">
            <a href='#commingSoon' className="innerNav">Islamabad Office</a>
          </div>
          <div className="eachNavOuter commingSoon">
            <a href='#commingSoon' className="innerNav">Karachi Office</a>
          </div>
          <div className="eachNavOuter commingSoon">
            <a href='#commingSoon' className="innerNav">Gujaranwala Office</a>
          </div>
        </div>
        <div className="allBranches">
          <div className="row eachBranch" id='fsd' >
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 detailSection">
              <h2 className='slbh'>Faisalabad Office ( Head Branch )</h2>
              <div className="contactDetails">
                <div className="eachConDet phone">
                  <div className='head'>
                    <i class="icon fa-solid fa-phone"></i>
                    <div>Phone</div>
                  </div>
                  <p>
                    <a href="tel:+418501893">041 8501893</a>
                  </p>
                </div>
                <div className="eachConDet whatsapp">
                  <div className='head'>
                    <i class="icon fa-brands fa-whatsapp"></i>
                    <div>Whatsapp</div>
                  </div>
                  <p>
                    <a href="https://wa.me/+923216667540" target="blank">0321 6667540</a>
                  </p>
                </div>
                <div className="eachConDet mail">
                  <div className='head'>
                    <i class="icon fa-solid fa-envelope"></i>
                    <div>Email</div>
                  </div>
                  <p>
                    <a href="mailto:junaid.sohail@edify.pk">junaid.sohail@edify.pk</a>
                  </p>
                </div>
                <div className="eachConDet address">
                  <div className='head'>
                    <i class="icon fa-solid fa-location-dot"></i>
                    <div>Address</div>
                  </div>
                  <p>
                    <a href="/">Edify Building, 3rd Floor, S1/S2 Susan Road, Madina Town Faisalabad</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mapSection map">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    title='map1'
                    className="gmap_iframe"
                    width="100%"
                    frameBorder={0}
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://maps.google.com/maps?width=600&height=500&hl=en&q=edify group of companies&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                  />
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".mapouter{position:relative;text-align:right;width:100%;height:100%;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:500px;}.gmap_iframe {height:500px!important;}"
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row eachBranch" id='lahore' >
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 detailSection">
              <h2 className='slbh'>Lahore Office</h2>
              <div className="contactDetails">
                <div className="eachConDet phone">
                  <div className='head'>
                    <i class="icon fa-solid fa-phone"></i>
                    <div>Phone</div>
                  </div>
                  <p>
                    <a href="tel:+4235747733">042 35747733</a>
                  </p>
                </div>
                <div className="eachConDet whatsapp">
                  <div className='head'>
                    <i class="icon fa-brands fa-whatsapp"></i>
                    <div>Whatsapp</div>
                  </div>
                  <p>
                    <a href="https://wa.me/+923008888542" target="blank">0300 8888542</a>
                  </p>
                </div>
                <div className="eachConDet mail">
                  <div className='head'>
                    <i class="icon fa-solid fa-envelope"></i>
                    <div>Email</div>
                  </div>
                  <p>
                    <a href="mailto:bilal@edify.pk">bilal@edify.pk</a>
                  </p>
                </div>
                <div className="eachConDet address">
                  <div className='head'>
                    <i class="icon fa-solid fa-location-dot"></i>
                    <div>Address</div>
                  </div>
                  <p>
                    <a href="/">1st Floor Plaza No. Y-213, DHA Phase 3, Near ChenOne, Lahore.</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mapSection map">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    title='map02'
                    className="gmap_iframe"
                    width="100%"
                    frameBorder={0}
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Edify%20Group%20Lahore%20DHA%20Branch DHA Phase 3, Near, Lahore.&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                  />
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}"
                  }}
                />
              </div>

            </div>
          </div>
          <div className="row eachBranch" id='multan' >
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 detailSection">
              <h2 className='slbh'>Multan Office</h2>
              <div className="contactDetails">
                <div className="eachConDet phone">
                  <div className='head'>
                    <i class="icon fa-solid fa-phone"></i>
                    <div>Phone</div>
                  </div>
                  <p>
                    <a href="tel:+616210066">061 6210066</a>
                  </p>
                </div>
                <div className="eachConDet whatsapp">
                  <div className='head'>
                    <i class="icon fa-brands fa-whatsapp"></i>
                    <div>Whatsapp</div>
                  </div>
                  <p>
                    <a href="https://wa.me/+923218888220" target="blank">0321 8888220</a>
                  </p>
                </div>
                <div className="eachConDet mail">
                  <div className='head'>
                    <i class="icon fa-solid fa-envelope"></i>
                    <div>Email</div>
                  </div>
                  <p>
                    <a href="mailto:azhar@edify.pk">azhar@edify.pk</a>
                  </p>
                </div>
                <div className="eachConDet address">
                  <div className='head'>
                    <i class="icon fa-solid fa-location-dot"></i>
                    <div>Address</div>
                  </div>
                  <p>
                    <a href="/">Twin Tower 10-A, Tehsil Chowk near Masoom’s Cafe Gulgasht, Bosan Road, Multan</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mapSection map">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    title='map3'
                    className="gmap_iframe"
                    width="100%"
                    frameBorder={0}
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Edify Group Multan Branch Twin Tower 10-A, Tehsil Chowk, Bosan Rd, near Masoom's Cafe, Gulgasht Colony, Multan, 60700&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                  />
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".mapouter{position:relative;text-align:right;width:100%;height:100%;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:100%;}.gmap_iframe {height:400px!important;}"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="commingSoonBranches" id='commingSoon' >
          <h1 className='slbh'>Comming Soon!</h1>
        </div>
      </div>
      <ProsAbout />
      <Footer />
    </div>
  )
}

export default Contact