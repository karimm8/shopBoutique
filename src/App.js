import './App.css';
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import Home from './compenent/Home';
import Gallery from './compenent/Gallery';
import Contact from './compenent/Contact';
import React , {useState}  from 'react';
import {FaBars} from 'react-icons/fa';
import {FaTimes} from 'react-icons/fa';
function App() {
  const [click,setClick] = useState(false);
  const handClick = () => setClick(!click)
  return (
    <div className="container">
        <BrowserRouter>
           <div className='header'>
                <Link style={{textDecoration:"none",zIndex:4}} to="/">
                  <h2 className='logo'>Karim shop boutique</h2>
                </Link>
                <ul className={click ? "nav active" : "nav"} >
                    <a>
                      <Link to={"/"} target='_self'>home</Link>
                    </a>
                    <a>
                      <Link to={"/compenent/gallery"} target='_self'>gallery</Link>
                    </a>
                    <a>
                      <Link to={"/compenent/contact"} target='_self'>contact</Link>
                    </a>
                </ul>
                <div className="humburger" onClick={handClick}>
                      {
                        click ? ( <FaTimes size={30} style={{color:"#fff"}} />) : (  <FaBars size={30} style={{color:"#fff"}} />)
                      }
                </div>
           </div>
           <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/compenent/gallery' element={<Gallery />}/>
            <Route path='/compenent/contact' element={<Contact />}/>
           </Routes>
        </BrowserRouter>
        <div className="footer">
                © Karimshop 2020
        </div>
    </div>
  );
}

export default App;
