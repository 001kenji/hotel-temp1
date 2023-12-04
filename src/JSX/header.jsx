import React, { useState } from "react";
import '../CSS/header.css'
import logo from '../assets/webLogo.png'
import { GiHamburgerMenu } from "react-icons/gi";

export default Header
function Header() {
    const [showConState, setshowContent] = useState(false)
console.log(window.innerWidth)


  const showContent = {
         display : showConState ? 'flex' : window.innerWidth >= 780 ? 'flex' : 'none' 
    }

    return (
        <>
        {/* owner div */}
       <div id="owning-header-div" className=" bg-slate-100">
        
        <div id="header-header-div">{/* header div */}

        <div id="header-header-div1"> 
            <div id="header-logo-div">{/* with header logo div */}
                <img src={logo} alt="" />
            </div>
            <div  style={showContent} id="header-content-div">{/* with header content div */}
                <span>Home</span>
                <span>Menu</span>
                <span>About</span>
                <select name="" id="">
                    <option value="" selected>Pages</option>
                    <option value="">Reservation</option>
                    <option value="">Stuff</option>
                    <option value="">Gallery</option>
                </select>
                <select name="" id="">
                    <option value="" selected>Blog</option>
                    <option value="">blog</option>
                    <option value="">blog Single</option>
                </select>
                <span>Contact</span>
                
            </div>

        </div>
        

        

        </div>

        <div className=" sm:hidden" id="header-header-div2">{/* with hamburgar div */}
        <GiHamburgerMenu onClick={() => setshowContent((e) => !e)} size={40} />

        </div>

       </div>
        </>
    )
}