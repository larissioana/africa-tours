//Styles
import styled from "styled-components";
//Img
import image from '../images/north-africa.jpg';
import image1 from '../images/south-africa.jpg';
import desert from '../images/desert.mp4';
import safari from '../images/safari.mp4';
//State
import { useState } from "react";


const AboutUs=()=>{
    const[toggle,setToggle]=useState(true);
    const[toggle2,setToggle2]=useState(true);
   
    return(
        <Wrapper>
         <div className="explore">
            <div className="explore-container">
            {toggle? (
         <img src={image1} alt="Safari Jungle"/>
            ) : (
         <video autoPlay playsInline muted loop  src={safari}/>
           ) }
        <button onClick={()=>setToggle(!toggle)}>
        {toggle? 'Explore':'Go Back'}
        </button>
        <h2>Safari Jungle</h2>
        </div>
        <div className="explore-container">
        {toggle2? (
         <img src={image} alt="Sahara Desert"/>
            ) : (
         <video autoPlay playsInline muted loop src={desert}/>
           ) }
        <button onClick={()=>setToggle2(!toggle2)}>
            {toggle2? 'Explore':'Go Back'}
            </button>
        <h2>Sahara Desert</h2>
         </div>
         </div>
        </Wrapper>
    )
};
export default AboutUs;
const Wrapper=styled.div`
margin:5rem auto;
.explore{
       
       display:flex;
       justify-content:center;
       align-items: center;
       gap:5rem;
       flex-wrap: wrap;
       
       
       img,video{
           width:30rem;
           height:15rem;
           object-fit: cover;
           border-radius: 1rem;
           &:hover{
               transform:translateY(-7px);
           }
           
       }
     
       h2{
           font-size:clamp(1rem,2vw,1.2rem);
       }
        button{
       padding:1rem 3rem;
       background:rgba(0,0,0,0.5);
       font-size:clamp(.7rem,2vw,1.2rem);
       letter-spacing:  .1rem;
       position:absolute;
       bottom:6rem;
       right:8rem;
       color:white;
       cursor:pointer;
       
   }

   .explore-container{
       display:grid;
       place-items: center;
       gap:1rem;
       position:relative;
       
   }
   @media (max-width:500px){
       margin-top:8rem;
       img,video{
           width:19rem;
       }
       button{
           right:5rem;
       }
   }
}
`