import React, { useMemo, useState } from "react";
import '../CSS/review.css'
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import reviewData from '../FILES/reviews.json'
export default Review 
function Review() {
    const [viewNum, setViewNum] = useState(4)
const [viewOn, setViewOn] = useState({
    part : '',
    number : 0
})
const reviewDataMapper = reviewData.map((details) => 
    <div id="mapped-review-div">
        <img src="" alt="customers image" />
        <big className=" font-semibold">{details.name}</big>
        <span>{details.occupation}</span>
        <textarea disabled>{details.review}</textarea>
    </div>
    ) 

function ScrollLeft() {
var data = document.querySelector('#carousel-display-div')
var mapData = document.querySelector('mapped-review-div')
console.log(data.clientWidth)
    data.scrollBy(302,302)
   
}
function ScrollRight() {
    var data = document.querySelector('#carousel-display-div')
    data.scrollBy(-302,302)
}




    return(
        <>
       
        <div id="owning-review-div">{/* owning div */}

        <div id="heading-review-div">{/* heading div */}
            <big className=" ">Customer Reviews</big>
            <span>What our client say </span>

        </div>
        <div id="carousel-div">{/* carlosel div */}
           <IoMdArrowDropleftCircle onClick={ScrollRight} id="icon"   size={35} className=" bg-slate-900 rounded-md p-1 bg-opacity-30 ml-2 text-yellow-500 " />
           <div id="carousel-display-div">
                {reviewDataMapper}
           </div>

            <IoMdArrowDroprightCircle onClick={ScrollLeft} id="icon"   className=" w-8 bg-slate-900 rounded-md p-1 bg-opacity-30  text-yellow-500 mr-2" size={35} />
         
        </div>
        
        </div>
        





        



        </>
    )
}


