import './LahoreBranch.css'
import NavBar from '../../NavBar/NavBar'
import ProsAbout from '../../ProsAbout/ProsAbout'
import Footer from '../../Footer/Footer'
import EachPageHeader from '../EachPageHeader/EachPageHeader'
import TopBar from '../../TopBar/TopBar'

const LahoreBranch = () => {

    const placesNames = [
        "Waiting Area",
        "Corridor",
        "Processing Room",
        "Counselling Office",
        "Waiting Area",
        "Waiting Area",
        "Processing Room",
        "Kitchen",
        "Manager Office",
        "Interview Room",
        "Reception",
        "Kitchen",
        "Counselling Office",
        "Counselling Office",
        "Reception"
    ]

    return (
        <div className='Campus' >
            <TopBar />
            <NavBar />
            <div className="actualCampus">
                <EachPageHeader heading="Lahore Campus" />
                <div className="row allImages">
                    {
                        placesNames.map((v, i) => {
                            return (
                                <div key={i} className="col-xl-3 col-lg-4 col-md-4 col-sm-12 eachImageOuter">
                                    <div className="imgDiv">
                                        <img src={`images/campus/LahoreBranch/${i+1}.jpeg`} alt="" />
                                        <div className="imgDescLayer">
                                            <h4>{v}</h4>
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

export default LahoreBranch