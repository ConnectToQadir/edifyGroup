import './App.css';
import Home from './components/Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './components/Pages/Contact/Contact';
import Services from './components/Pages/Services/Services';
import Updates from './components/Pages/Updates/Updates';
import IELTS from './components/Pages/IELTS/IELTS';
import Blog from './components/Pages/Blog/Blog';
import FAQ from './components/Pages/FAQ/FAQ';
import Apply from './components/Pages/Apply/Apply';
import About from './components/Pages/About/About';
import ScrollToTop from '../src/ScrollToTop';
import Australia from './components/Pages/Australia/Australia';
import USA from './components/Pages/USA/USA'
import UK from './components/Pages/UK/UK'
import Sweden from './components/Pages/Sweden/Sweden'
import Canada from './components/Pages/Canada/Canada'
import Kyrgyzstan from './components/Pages/Kyrgyzstan/Kyrgyzstan'
import PostView from './components/PostView/PostView';
import FsdBranch from './components/Pages/FsdBranch/FsdBranch'
import LahoreBranch from './components/Pages/LahoreBranch/LahoreBranch'
import MultanBranch from './components/Pages/MultanBranch/MultanBranch'
import AdminPenel from './components/AdminPenel/AdminPenel'
import AdminReviews from './components/AdminPenel/AdminReviews/AdminReviews'
import AdminBlogs from './components/AdminPenel/AdminBlogs/AdminBlogs'
import AdminUpdates from './components/AdminPenel/AdminUpdates/AdminUpdates'
import Applications from './components/AdminPenel/Applications/Applications';
import Immigration from './components/Pages/Immigration/Immigration';
import ApplicationView from './components/Pages/ApplicationView/ApplicationView'
import {Context} from '../src/context/Context'
import { useContext } from 'react';
import Login from '../src/components/Login/Login'
import AdminHome from './components/AdminPenel/AdminHome/AdminHome';
import Practise from './components/Practise'
import CvDesign from './components/Pages/CvDesign/CvDesign';
import AdminReceptionForm from './components/AdminPenel/AdminReceptionForm/AdminReceptionForm'

function App() {
  const {user} = useContext(Context);
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route path='/contact-us/' element={<Contact />} />
          <Route path='/education/faisalabad-office' element={<Contact />} />
          <Route path='/lahore-office' element={<Contact />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Updates' element={<Updates />} />
          <Route path='/IELTS' element={<IELTS />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/FAQ' element={<FAQ />} />
          <Route path='/Apply' element={<Apply />} />
          <Route path='/apply-online' element={<Apply />} />
          <Route path='/Practise' element={<Practise />} />
          <Route path='/About' element={<About />} />
          <Route path='/FsdBranch' element={<FsdBranch />} />
          <Route path='/LahoreBranch' element={<LahoreBranch />} />
          <Route path='/MultanBranch' element={<MultanBranch />} />
          <Route path='/Australia' element={<Australia />} />
          <Route path='/USA' element={<USA />} />
          <Route path='/UK' element={<UK />} />
          <Route path='/CvDesign' element={<CvDesign />} />
          <Route path='/Sweden' element={<Sweden />} />
          <Route path='/*' element={<Home />} />
          <Route path='/Canada' element={<Canada />} />
          <Route path='/Immigration' element={<Immigration />} />
          <Route path='/Kyrgyzstan' element={<Kyrgyzstan />} />
          <Route path='/blog/:id/:title' element={<PostView />} />
          <Route path='/admin/' element={!user?<Login />: <AdminPenel />}>
            <Route path='updates' element={user?.desig === "Developer" || user?.desig === "Admin" ? <AdminUpdates /> : <AdminHome /> } />
            <Route path='blogs' element={user?.desig === "Developer" || user?.desig === "Admin" ? <AdminBlogs /> : <AdminHome /> } />
            <Route path='home' element={<AdminHome />} />
            <Route path='campusEnquiryForm' element={user?.desig === "Developer" || user?.desig === "Admin" || user?.desig === "Receptionist" ? <AdminReceptionForm /> : <AdminHome />} />
            <Route path='reviews' element={user?.desig === "Developer" || user?.desig === "Admin" ? <AdminReviews /> : <AdminHome />} />
            <Route path='applications' element={<Applications />} />
            <Route path='applications/apply/:id' element={<ApplicationView />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
