import './FsdBranch.css'
import NavBar from '../../NavBar/NavBar'
import ProsAbout from '../../ProsAbout/ProsAbout'
import Footer from '../../Footer/Footer'
import EachPageHeader from '../EachPageHeader/EachPageHeader'
import TopBar from '../../TopBar/TopBar'

const FsdBranch = () => {

    const placesNames = [
        "Waiting Area",
        "Waiting Area",
        "Counselling Office",
        "Corridor",
        "Waiting Area",
        "Discussion Area",
        "Waiting Area",
        "Waiting Area",
        "Waiting Area",
        "Class Room",
        "Counselling Office",
        "Interview Room",
        "Class Room",
        "Class Room",
        "Accounts & Marketing Office",
        "Out-Door",
        "Accounts & Marketing Office",
        "Reception",
        "Out-Door",
        "CEO Office",
        "CEO Office",
    ]

    return (
        <div className='Campus' >
            <TopBar />
            <NavBar />
            <div className="actualCampus">
                <EachPageHeader heading="Faisalabad Campus" />
                <div className="row allImages">
                    {
                        placesNames.map((v, i) => {
                            return (
                                <div key={i} className="col-xl-3 col-lg-4 col-md-4 col-sm-12 eachImageOuter">
                                    <div className="imgDiv">
                                        <img src={`images/campus/FsdBranch/${i+1}.jpeg`} alt="" />
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

export default FsdBranch