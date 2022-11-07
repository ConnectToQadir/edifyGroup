import './HomeCEOMesssage.css'

const HomeCEOMesssage = () => {
    return (
        <div className='row HomeCEOMesssage'>
            <div className="col-xl-4 col-md-4 col-sm-12 imgSection">
                <img className='ceoImage' src="images/ceoImg.png" alt="" />
            </div>
            <div className="col-xl-8 col-md-8 col-sm-12 quoteSection">
                <img src="images/ceoQuoteMark.png" alt="" />
                <p className='quotePara'>“Edify group of companies is one of the leading consultancies in Pakistan because it is actively designing solutions for the world’s most ambitious change-makers who will define the future.”
                </p>
                <p className='flp namePara'>- Azeem Qasim</p>
            </div>
        </div>
    )
}


export default HomeCEOMesssage 