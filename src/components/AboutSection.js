//Data
import { AboutSectionOne } from "../data";
//Styles
import styled from "styled-components";


const AboutSection=()=>{
  
    const text='The world we live in is full of surprises, and one life often seems insufficient to mark on the map everything we want. If your heart beats in a holiday rhythm and you live for adventure, you are in the right place. Opt for an exotic tour circuit and visit the most spectacular tourist destinations around the world. Tanzania, Kenya, Morocco, Sahara desert are just some of the destinations where you will spend unique, unforgettable moments! Regardless of your choice, we guarantee that you will not regret the experience for a second. Arm yourself with energy and the desire for vacation and live to the fullest every moment spent in an exotic circuit.';
    return(
        <Wrapper id='about'>
         <div className="about-desc">
            <h1>Find your freedom this summer in the wild life &<br/> in the Sahara Desert</h1>
           <p>{text}</p>
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