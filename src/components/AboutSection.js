//Data
import { AboutSectionOne } from "../data";
import { useState } from "react";
//Styles
import styled from "styled-components";


const AboutSection=()=>{
    const[showMore,setShowMore]=useState(false);
    const text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa sed elementum tempus. Malesuada fames ac turpis egestas maecenas pharetra. Cursus eget nunc scelerisque viverra mauris in. Ultricies integer quis auctor elit sed vulputate. Odio ut enim blandit volutpat maecenas volutpat. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Orci eu lobortis elementum nibh tellus molestie nunc non. Non blandit massa enim nec dui nunc mattis enim ut.';
    return(
        <Wrapper id='about'>
         <div className="about-desc">
            <h1>Find your freedom this summer in the wild life &<br/> in the Sahara Desert</h1>
           <p>
            {`${showMore? text: text.substring(0,50)}`}
            {text}</p>
           <button onClick={()=>setShowMore(!showMore)}>{showMore? 'Less':'More'}</button>
           </div>
           <h1>The Africa Experience</h1>
           <div className="container">
            {AboutSectionOne.map(element=>{
                    const{id,image,title,href,icon}=element;
                    return<div className='about-info' key={id}>
                        <a href={href}>
                            <img src={image} alt={title}/>
                        </a>
                        <div className="flex">
                            <h3>{title}</h3>
                            <p>{icon}</p>
                        </div>
                    </div>
                })}
            </div>
         
        </Wrapper>
    )
};
export default AboutSection;
const Wrapper=styled.div`
    margin:2rem auto 10rem auto;
  
    .about-desc{
    padding:0rem 1rem;
    display:grid;
    place-items:center;
   
    h1{
    font-family: "Anton",sans-serif;
    font-size:clamp(1.3rem,2vw,1.9rem);
    letter-spacing:  .1rem;
    text-align: center;
    text-transform: uppercase;
   }
   p{
   max-width:50rem;
   margin-top:2rem;
   line-height:1.6rem;
   
   }
   button{
    margin-top:1rem;
    padding:1rem 3.5rem;
    border:2px solid #ebebeb;
    background:#3a3636;
    color:#ebebeb;
    cursor:pointer;
   
    &:hover{
        opacity:.8;
    }
   }
    }
 
    h1{
        font-family: "Anton",sans-serif;
        font-size:clamp(1.3rem,3vw,2.5rem);
        letter-spacing:  .1rem;
        text-align: center;
        margin:8rem auto 3rem auto;
       }
    .container{
        display:flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap:2rem;
        .about-info{
            &:hover{
                transform: translateY(-8px);
            }
        }
    
        img{
        width:15rem;
        height:15rem;
        object-fit: cover;
       

     }
     .flex{
        display:flex;
        padding-left:1rem;
        margin-top:.5rem;
        
        h3{
            font-size:clamp(.9rem,2vw,1.1rem);
            text-align: center;
            margin-right:1rem;
           
        }
    }
    
    }

    
    @media (max-width:500px){
        margin-top:8rem;
        img{
            width:19rem;
        }
        button{
            right:5rem;
        }
    }

`