import React from "react";
import '../CSS/contact.css'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";





export default Contact 
function Contact()  {


    return (
        <>
      
        <div className="  text-slate-100" id='owner-contact-div'>  {/* owning div */}

        <div id="contact-div">  {/* content contact div */}
        <span className=" bg-amber-200 bg-opacity-30 rounded-sm p-1 font-bold text-black text-lg  sm:text-2xl "><p><FaPhone size={30} /></p>{import.meta.env.VITE_Number}</span>
        <span className="bg-amber-200 bg-opacity-30 rounded-sm p-1 font-bold text-black text-lg  sm:text-2xl "><p><MdEmail size={30} /></p>{import.meta.env.VITE_Email}</span>
        <span className="bg-amber-200 bg-opacity-30 rounded-sm p-1 font-bold text-black text-lg  sm:text-2xl "><p><FaLocationDot size={30} /></p>{import.meta.env.VITE_Location}</span>

        </div>

        </div>
        
        </>
    )
}