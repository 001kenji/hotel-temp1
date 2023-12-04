import React from "react";
import '../CSS/about.css'
import aboutImg from '../assets/images/about-img.jpg'
export default About 

function About () {


    return (
        <>
        {/* first owning div */}
        <div id='first-owning-div'>
            <div id="first-about-card-div">  {/* first div contenet */}

                <div className=" bg-amber-800 top-1 bg-opacity-16 sm:bg-opacity-20" id="about-image-div">  {/* image div */}
                    <img src={aboutImg} alt="" />
                </div>
                <div id="first-content-div" className="  mr-2 ml-2 justify-center text-center align-middle">  {/* first content div */}
                    <blockquote>
                        <big className=" font-bold sm:text-3xl">Welcome to  </big>
                        <span className=" text-amber-500 sm:text-2xl font-semibold">Delicacies Hotel</span>
                    </blockquote>
                    <blockquote className="grid font-serif" >
                        <span className=" text-2xl sm:text-2xl font-semibold">History</span>
                        <span className=" p-2 bg-slate-800 sm:text-xl bg-opacity-30 rounded-sm">
                            In 1768, visionary hotelier John Jones opened his
                            doors in Exeter, England, to weary travelers seeking
                            rest and respite. His establishment, aptly named "The New
                            Inn," marked the dawn of a new era in hospitality, 
                            pioneering the concept of a modern hotel. With its 
                            comfortable accommodations, attentive service, and 
                            emphasis on guest satisfaction, The New Inn set the
                                standard for future hotels worldwide. From humble 
                                beginnings, Jones's vision transformed the industry,
                                paving the way for a network of 
                            welcoming havens for travelers around the globe.</span>
                    </blockquote>

                    <button className=" m-3 sm:text-xl bg-transparent text-amber-700">RESERVATION</button>
                </div>

            </div>
        </div>

        <div id="second-owning-div">  {/* second owning div */}

            
            
        </div>
        <div className=" text-slate-100  bg-fixed bg-cover  " id='second-bg-div'> {/* bg div */}
                <div id="second-content-div">  {/* secont div content */}
                <blockquote className="grid sm:text-lg text-base font-semibold text-left gap-2">
                " If you're not the one cooking, stay out of the way and compliment the chef. "

                <span> Michael Strahan</span>
                </blockquote>
            </div>
        </div>
        </>
    )
}