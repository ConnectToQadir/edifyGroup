import './Home.css'
import NavBar from '../../NavBar/NavBar'
import Header from '../../Header/Header';
import AboutUs from '../../AboutUs/AboutUs';
import Work from '../../Work/Work';
import Visa from '../../Visa/Visa';
import Destination from '../../Destination/Destination';
import Testimonial from '../../Testimonial/Testimonial';
import Clients from '../../Clients/Clients';
import Footer from '../../Footer/Footer';
import SocialMedia from '../../SocialMedia/SocialMedia'
import ProsAbout from '../../ProsAbout/ProsAbout';
import HomeCEOMesssage from '../../HomeCEOMesssage/HomeCEOMesssage'
import TopBar from '../../TopBar/TopBar';
import {seo} from '../SEO';
import { useEffect } from 'react';

const Home = () => {
    useEffect(()=>{
        seo({
          title: 'Edify Group Of Companies',
          metaDescription: 'Edify Group of Companies An Overseas Education Consultant & Immigration Service Providers'
        });
      },[])
    return (
        <div className='Home'>
            <TopBar />
            <NavBar />
            <Header />
            <SocialMedia />
            <AboutUs />
            <HomeCEOMesssage />
            <Work />
            <Visa />
            <Destination />
            <Testimonial />
            <Clients />
            <ProsAbout />
            <Footer />
        </div>
    )
}

export default Home