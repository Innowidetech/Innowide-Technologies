import './App.css'
import { Routes, Route } from "react-router-dom";
import AboutUs from './AboutUs';
import Home from './Home';
import Contact from './Contact';
import 'font-awesome/css/font-awesome.min.css';
import Itservices from './components/services/Itservices';
import Digitalservices from './components/services/Digitalservices';
import Blog from './components/Blog/Blog';
import Privacy from './Privacy';
import Termscondition from './TermsandCondition';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogDashboards from './components/Blog/BlogDashboards';
import BlogDetails from './components/Blog/BlogDetails';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/itservices' element={<Itservices/>}/>
        <Route path='/digitalservices' element={<Digitalservices/>}/>
        <Route path='/TermsandCondition' element={<Termscondition/>}/>
        <Route path='/privacyandPolicy' element={<Privacy/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blogdashboard' element={<BlogDashboards/>}/>
        <Route path='/blog-detail' element={<BlogDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
