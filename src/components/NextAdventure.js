//Styles
import styled from "styled-components";
//Data
import { adventure } from "../data";
import { useState } from "react";

const NextAdventure=()=>{
    const[value,setValue]=useState(1);
    const{id,image,title,info}=adventure[value];

    return(
       <>
       <Title className="title">
           <h3>Discover your next adventure.<br/>
                Africa has an abundance of sight-seeing and activities.
            </h3>
       </Title>
        <Wrapper>
     
        <div className="btn-container">
                {
                    adventure.map((item,index)=>{
                        return<button key={item.id} onClick={()=>setValue(index)}
                        className={`title-btn ${index===value && 'active-btn'}` }>
                            {item.title}
                        </button>
                    })
                }
            </div>
        <div className="container" id='activities'>
       
        
        <img src={image} alt={title}/>
        <p>{info}</p>
        </div>
       
        </Wrapper>
        </>
    )
};
export default NextAdventure;

export const Title=styled.div`
h3{
    margin-top:7rem;
    text-align: center;
    font-family: "Anton",sans-serif;
    font-size:clamp(1.7rem,2vw,2rem);
    line-height:3rem;
}
   

`
const Wrapper=styled.div`
    margin:6rem auto;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding:0rem 4rem;
   h3{
    font-family: "Anton",sans-serif;
    font-size:clamp(1.3rem,2vw,2rem);
    text-align: center;
    line-height:3.4rem;
    margin-bottom:5rem;
   }
    .container{
        margin-top:5rem;
        display:grid;
        place-items: center;
        
    
    h4{
        font-size:clamp(1rem,2vw,1.8rem);
        margin-bottom:1rem;
    }
    p{
        font-size:clamp(.8rem,2vw,1rem);
        max-width:500px;
        margin-top:1.5rem;
        line-height:1.6rem;
    }
    
 
        img{
            width:30rem;
            height:20rem;
            object-fit: cover;
            border-radius: 3rem;
         }
        }
        .btn-container,.container{
            flex:1;
        }
        .btn-container{
            display:grid;
            margin-top:3rem;
          
            button{
                cursor:pointer;
                border:none;
                padding-bottom:1.5rem;
                background:none;
                padding-left:3rem;
                font-size:clamp(.8rem,2vw,.9rem);
                letter-spacing:  .1rem;
            }
            .active-btn{
           
            color: #9f8d8d;
              
                
            }
        }
         @media (max-width:475px){
         
      .container{
     width:100%;
     padding:0rem 0rem;
     justify-content: center;
        p{
            width:100%;
        }
        img{
           width:20rem;
      }
      }
      .btn-container{
        justify-content: center;
        margin-right:2rem;
      }
    }
    @media (max-width:345px){
       .container{
        img{
            width:17rem;
            height:15rem;
        }
       }
    }
    
   
`