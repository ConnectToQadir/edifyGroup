import './Work.css'

const Work = () => {
    return (
        <div className='Work'>
            <p className='flp'>HOW WE WORK</p>
            <h1 style={{ marginBottom: "50px",wordSpacing:"3px" }} data-aos-duration="1200" data-aos="fade-down" className='slbh'>You Are Just 3 Steps Away</h1>
            <div className="row">
                <div data-aos="zoom-in" className="col-xl-4 col-md-6 col-lg-6 col-sm-12 eachFlow">
                    <div className="eachFlowInner">
                        <div className='numDiv'><i className="fa-solid fa-message"></i></div>
                        <h3 className='tlbh'>Consult</h3>
                        <p className='slbp'>Come meet our expert counselors for a free consultation</p>
                    </div>
                </div>
                <div data-aos="zoom-in" className="col-xl-4 col-md-6 col-lg-6 col-sm-12 eachFlow">
                    <div className="eachFlowInner">
                        <div className='numDiv'><i className="fa-solid fa-check"></i></div>
                        <h3 className='tlbh'>Apply</h3>
                        <p className='slbp'>With the help of our team get admission at your own desired university</p>
                    </div>
                </div>
                <div data-aos="zoom-in" className="col-xl-4 col-md-6 col-lg-6 col-sm-12 eachFlow">
                    <div className="eachFlowInner">
                        <div className='numDiv'><i className="fa-solid fa-plane"></i></div>
                        <h3 className='tlbh'>Fly</h3>
                        <p className='slbp'>Get your visa done with our team, and fly to your dream university</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work