//Styles
import styled from "styled-components";
//Data
import {saharaNight,wildLife } from "../destinations";
import {useState,useEffect} from 'react';


const Destinations=()=>{

const[currentImage1,setCurrentImage1]=useState(null);
const[currentImage2,setCurrentImage2]=useState(null);


useEffect(()=>{
    const time=setInterval(()=>{
        setCurrentImage1(saharaNight[Math.floor(Math.random()* saharaNight.length)])
    },3000)
    return()=>clearInterval(time);
},[]);

useEffect(()=>{
    const time=setInterval(()=>{
        setCurrentImage2(wildLife[Math.floor(Math.random()* wildLife.length)])
    },2000)
    return()=>clearInterval(time);
},[]);


    return(
        <Wrapper id='destinations'>
            <h1>Discover places to go</h1>
            <div className='container'>
            <div className="destinations-container">
            <a href="#safari">
            <img src={currentImage2} alt='Safari Jungle'/>
            </a>
            <h2>Experience The Wild Life</h2>
            </div>
            <div className="destinations-container">
            <a href="#morocco">
            <img src={currentImage1} alt='Golden Hour in Sahara Desert'/>
            </a>
            <h2>Sahara Desert</h2>
            </div>
            </div>
        </Wrapper>
    )
};
export default Destinations;

const Wrapper=styled.div`
     margin:5rem auto 10rem auto;
    h1{
        text-align: center;
        margin-bottom:1rem;
        margin-top:.5rem;
        text-transform: capitalize;
        font-size:clamp(1.3rem,3vw,2.1rem);
        font-family: "Anton",sans-serif;
        margin-bottom:4rem;
    }
    .container{
     display:flex;
     justify-content: center;
     align-items: center;
     flex-wrap: wrap;
     gap:2rem;
    .destinations-container{
        h2{
        text-align: center;
        font-size:clamp(.9rem,2vw,1rem);
        margin-top:1rem;
        letter-spacing:  .1rem;
    }
        img{
            border-radius:.5rem;
            width:30rem;
            height:20rem;
            object-fit: cover;
        
        }
    }
   
}
@media (max-width:500px){
       
        .destinations-container{
            padding:0;
            gap:4rem;
           img{
            max-width:20rem;
          
            margin-bottom:1rem;
           
           }
           h2{
            margin-bottom:1rem;
           }
         }
        
    }
 `