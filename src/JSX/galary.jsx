import React from "react";
import '../CSS/galary.css'


import gallary1 from '../assets/images/gallery-img-01.jpg'
import gallary2 from '../assets/images/gallery-img-02.jpg'
import gallary3 from '../assets/images/gallery-img-03.jpg'
import gallary4 from '../assets/images/gallery-img-04.jpg'
import gallary5 from '../assets/images/gallery-img-05.jpg'
import gallary6 from '../assets/images/gallery-img-06.jpg'
export default Gallary 

function Gallary() {


    return (
        <>
        
        <div className=" bg-slate-100" id="owning-gallary-div">{/* owning div */}

        <div id="heading-gallary-div">{/* headind-gallary div */}
            <big className="sm:text-2xl font-bold">Gallary</big>
            <span className=" sm:text-xl">The taste of tommorow start with us !</span>
        </div>

        <div id="gallary-div">{/* gallary-div */}
        <div id="bigG"><img  src={gallary1} alt="" /></div>
        <div id="gallary-div-1">
            <img src={gallary2} alt="" />
            <img src={gallary3} alt="" />
            <img src={gallary4} alt="" />
            <img src={gallary5} alt="" />
        </div>  
        <div  id="bigG"><img src={gallary6} alt="" /></div> 
            
        
        

        </div>

        
        </div>
        
        </>
    )
}