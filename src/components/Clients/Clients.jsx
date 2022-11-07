import './Clients.css'

const Clients = () => {

    const imagesNames = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
    ]

    return (
        <div className='clientOuter'>
            <div className='Clients'>
                <div className="container-fluid ClientsInner">
                    <p data-aos="fade-down" data-aos-duration="1200" className='flp'>OUR PREMIUM PARTNERS</p>
                    <h1 data-aos="fade-down" className='slbh'>Trusted By The World</h1>
                    <div className="row allClients">
                        {imagesNames.map((v, i) => {
                            return (
                                <div key={i} className="col-xl-3 col-lg-3 col-md-4 col-sm-6 eachClient">
                                    <div className="eachClientInner">
                                        <img src={`images/partners/${v}.png`} alt="" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients