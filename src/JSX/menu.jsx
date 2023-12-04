import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import '../CSS/menu.css'

 import Myimg from '../assets/images/img-01.jpg'


import files from '../FILES/MenuContent.json'
import { parse, stringify } from "postcss";

export default Menu 
function  Menu() {
    const [Choice, setChoice] = useState("all")
    const [choiceImg, setImg] = useState ('../assets/images/img-01.jpg')

const content_menu_div = document.getElementById('content-menu-div')
    useLayoutEffect(() => {
      var blank = ''
     
      const content_menu_div = document.getElementById('content-menu-div')
 
        if(Choice == 'all') {
            console.log(Myimg)
            
            content_menu_div.innerHTML = ''
            files.map((info) => 
            content_menu_div.innerHTML += 
            `<div id='menu-mapped-div'>

            <div id='menu-mapped-img-div'>
            <img src=${info.img} alt="item image" />
            </div>
            <div  id='menu-mapped-content-div'>
                <big>${info.details.title}</big>
                <span>${info.details.desctiption}</span>
                <span>${info.details.cost}</span>
            </div>
            </div>`
        )
        }
        else if(Choice != 'all'){
            content_menu_div.innerHTML = ''
            files.map((info) => {
                var image = info.img
               
            if(Choice == info.category){
                
                content_menu_div.innerHTML += 
                `<div id='menu-mapped-div'>

                <div classname='' id='menu-mapped-img-div'>
                    <img src=${info.img} alt="item image" />
                </div>
                <div classname=''   id='menu-mapped-content-div'>
                    <big>${info.details.title}</big>
                    <span>${info.details.desctiption}</span>
                    <span>${info.details.cost}</span>
                </div>
                </div>`
            }

            } )
        }


    },[Choice])
    

    return (
        <>
        
        <div id="owning-menu-div" className=" bg-slate-50">{/* owning div */}

        <div id="heading-menu-div">{/* heading div */}
                <big className=" ">Special Menu</big>
                <span className=" sm:text-lg text-base">Choose your taste !</span>
        </div>

        <div className=" sm:text-lg" id="choice-menu-div">{/* choice div */}
        <button onClick={() => setChoice("all")}>ALL</button>
        <button onClick={() => setChoice("drink")}>DRINKS</button>
        <button onClick={() => setChoice("lunch")}>LUNCH</button>
        <button onClick={() => setChoice("dinner")}>DINNER</button>

        </div>
       

        <div ref={content_menu_div} id="content-menu-div">{/* content div */}
            
        </div>

        </div>
        </>
    )
}