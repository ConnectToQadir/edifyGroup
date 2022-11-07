import './TopBar.css'

const TopBar = () => {
    return (
        <div className="topBarOuter">
            <div className="topBar">
                <div className="eachSectionTopBar">
                    <ul>
                        <li><a href="tel:9203216667540"><i className="fa-solid fa-square-phone"></i> +92 321 6667540</a></li>
                        <li><a href="/"><i className="fa-solid fa-clock"></i> 10:30 AM To 6:30 PM | Saturday, Sunday Off</a></li>
                    </ul>
                </div>
                <div className="eachSectionTopBar">
                    <ul className="cust_social_list">
                        <li><a href="https://www.facebook.com/EdifyGroupPakistan" target="blank"><i className="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href="https://www.instagram.com/edifygroupofficial/" target="blank"><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/company/edify-group-of-companies/?viewAsMember=true" target="blank"><i className="fa-brands fa-linkedin"></i></a></li>
                        <li><a href="https://www.youtube.com/channel/UC144UJCe4YfW0NZJS1twcTg" target="blank"><i className="fa-brands fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default TopBar;