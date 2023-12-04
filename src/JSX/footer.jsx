import React from "react";
import '../CSS/footer.css'

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";


export default Footer 
function Footer()  {

    const date = new Date()
    const year = date.getFullYear()

    return(
        <>
        
        <div className="  " id="owner-footer-div">{/* owner div */}
        <div id="footer-container" className=" text-slate-300 bg-slate-600 bg-opacity-50">
            <div id="breef-footer-div"> {/* breef about div */}
            <big className=" md:text-center text-slate-100">ABOUT US</big>
            <blockquote>

            Escape the ordinary and experience the extraordinary at Delicacies Hotel, the only hotel in town that offers affordable products, services and goods.

            Indulge in unparalleled luxury and comfort at Delicacies Hotel, where every detail is meticulously crafted to surpass your expectations.

            Unwind and rejuvenate in our tranquil oasis, where personalized service and exceptional amenities await you
            </blockquote>
            </div>
            <p id="dash"></p>
            <div id="opening-hour-div">{/* opening hours div */}
                <big className=" text-slate-100">OPENING HOURS</big>
                <span>Monday: Closed</span>
                <span>Tue-Wed : 9:Am - 10PM</span>
                <span>Thu-Fri : 9:Am - 10PM</span>
                <span>Sat-Sun : 5:PM - 10PM</span>
            </div>
            <p className="md:h-1" id="dash"></p>
            <div id="subscrite-footer-div">{/* subscribe div */}
                <big className=" md:text-center p-3  text-slate-100">SUBSCRIBE</big>
                <input placeholder="Email ..." className=" outline-transparent text-ellipsis rounded-sm sm:w-1/2 md:p-3 justify-center align-middle mr-auto ml-auto w-full bg-slate-700 test-slate-100" type="email" />
                <button className=" hover:bg-slate-700 w-full sm:w-1/2 mr-auto ml-auto justify-center align-middle md:p-3 rounded-sm bg-orange-900 ">SUBSCRIBE</button>
            </div>
            <p className=" p-0" id="dash"></p>
            <div id="social-footer-div">{/* social icons div */}
            <FaFacebook className=" text-blue-700 bg-slate-100 rounded-full" />
            <FaTwitter className=" text-pink-600 bg-slate-100 rounded-md" />
            <FaLinkedin className=" text-blue-700 bg-slate-100 rounded-full" />
            <IoLogoGoogleplus className=" text-yellow-400  rounded-full" />
            <FaInstagram className=" text-pink-600 bg-slate-900 bg-opacity-15 rounded-full" />
            </div>
            
        

            </div>
        

        </div>

        <div className=" pl-1 pr-1 text-center bg-slate-800 top-0 text-slate-100">{/* developers footer div */}
            <blockquote className=" text-center justify-center align-middle inline-flex">All Rights Reserved. &#169; {year} Delicacies Hotel. Design by : Brian Njuguna</blockquote>
        </div>
        
        
        </>
    )
}