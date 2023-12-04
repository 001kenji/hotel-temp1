import React, { useState } from "react";
import '../CSS/home.css'
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { FaRegDotCircle } from "react-icons/fa";




import slide1 from '../assets/images/slider-01.jpg'
import slide2 from '../assets/images/slider-02.jpg'
import slide3 from '../assets/images/slider-03.jpg'
export default Home 
function Home() {
const [Bg , setBg] = useState(slide1)
    const Bgvariances = [slide1,slide2,slide3]

const Bgstyler = {
    backgroundImage : `url(${Bg})`
}

function BgSetter(props) {
    if(props  == 'back' ) {
       // console.log('back')
        if(Bg == slide1) {
            setBg(slide3)
        }else if( Bg == slide2){
            setBg(slide1)
        }else if(Bg == slide3){
            setBg(slide2)
        }
    }
    else if(props  == 'front' ) {
       // console.log('front')
        if(Bg == slide1) {
            setBg(slide2)
        }else if( Bg == slide2){
            setBg(slide3)
        }else if(Bg == slide3){
            setBg(slide1)
        }
    }

}
const indicator1 = {
    color : Bg == slide1 ? 'yellow' : 'white'
}
const indicator2 = {
    color : Bg == slide2 ? 'yellow' : 'white'
}
const indicator3 = {
    color : Bg == slide3 ? 'yellow' : 'white'
}
    return (
        <>
        
        <div style={Bgstyler} className="" id="owning-home-div">{/* owning div */}

        <IoMdArrowDropleftCircle onClick={() => BgSetter('back')} size={60} className=" bg-slate-900 rounded-md p-1 bg-opacity-30 ml-2 text-yellow-500 " />



        <div className=" bg-slate-800 bg-opacity-25 rounded-sm text-black" id="content-home-div">{/* content div */}
            <big className=" font-bold text-2xl sm:text-4xl text-slate-100">Welcome To</big>
                
            <big className=" font-bold sm:text-2xl text-slate-100">Delicacies Hotel</big>
            <blockquote className=" font-semibold sm:text-xl text-slate-100">
                See how your users experience your website in realtime or view
                trends to see any changes in performance over time.
            </blockquote>
            <button className=" hover:bg-amber-600 focus:bg-amber-600 text-slate-100">RESERVATION</button>
        </div>
        
        <IoMdArrowDroprightCircle onClick={() => BgSetter('front')} className=" bg-slate-900 rounded-md p-1 bg-opacity-30  text-yellow-500 mr-2" size={60} />
        
        
        </div>
        <div id="indicator-home-div">
        <FaRegDotCircle style={indicator1} /> 
        <FaRegDotCircle style={indicator2} />
        <FaRegDotCircle style={indicator3} />

        </div>
        </>
    )
}