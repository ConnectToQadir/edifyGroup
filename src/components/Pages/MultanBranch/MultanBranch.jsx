import './MultanBranch.css'
import NavBar from '../../NavBar/NavBar'
import ProsAbout from '../../ProsAbout/ProsAbout'
import Footer from '../../Footer/Footer'
import EachPageHeader from '../EachPageHeader/EachPageHeader'
import TopBar from '../../TopBar/TopBar'

const MultanBranch = () => {

    const placesNames = [
        "Class Room",
        "Corridor",
        "Corridor",
        "Reception",
        "Corridor",
        "Discussion Area",
        "Processing Room",
        "Discussion Area",
        "Counselling Office",
    ]

    return (
        <div className='Campus' >
            <TopBar />
            <NavBar />
            <div className="actualCampus">
                <EachPageHeader heading="Multan Campus" />
                <div className="row allImages">
                    {
                        placesNames.map((v, i) => {
                            return (
                                <div key={i} className="col-xl-3 col-lg-4 col-md-4 col-sm-12 eachImageOuter">
                                    <div className="imgDiv">
                                        <img src={`images/campus/MultanBranch/${i+1}.jpeg`} alt="" />
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

export default MultanBranch