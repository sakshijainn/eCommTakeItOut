import React,{useState} from 'react'
import sample from "./videos/video1.mp4";

import './HomeComp.css';


function HomeComp() {
   
    return (
        <>
        <div>
         
            <div className='hero-container'>
            <video className='videoTag' autoPlay loop muted>
        <source src={sample} type='video/mp4' />
    </video>
            <h1>Voice Your Heart Out!</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
             <button>SignUp</button>
            <button > Start Shopping  <i class="fa fa-shopping-bag" aria-hidden="true"></i></button>
               
            
            </div>
           
          </div>
         
        </div>
        </>
        

        
    )
    
}


export default HomeComp;
