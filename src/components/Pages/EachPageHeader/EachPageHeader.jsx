import './EachPageHeader.css'

const EachPageHeader = (props) => {
    return (
        <div data-aos="flip-up" className="EachPageHeader">
            <h2 data-aos-duration="1200" data-aos="fade-up" className="flh">{props.heading}</h2>
        </div>
    )
}

export default EachPageHeader