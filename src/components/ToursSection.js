import Tours from "./Tours";
import SafariJungle from "./SafariJungle";
import styled from "styled-components";
import image from '../images/bg-home.jpg';
import { useState } from "react";


const ToursSection=()=>{
    const[explore,setExplore]=useState(false);
    return(
        <div>
        <Tours/>
        <Text>
        <h4 className="subtitle">Explore more of the natural wonders in Africa</h4>
        <button onClick={()=>setExplore(!explore)}>Explore</button>
        </Text>
        {explore &&(
        <Container className="container">
        <SafariJungle/>
        </Container>
    )}
        </div>
    )
};
export default ToursSection;
const Container=styled.div`
  background:linear-gradient(
      to bottom,rgba(0,0,0,0)
      41%,rgba(0,0,0,0.2)
      100%
  ),
  url(${image});
  background-size:100%,cover;
  height:110vh;
  background-repeat: no-repeat;
`;

const Text=styled.div`
    text-align: center;
    margin-top:4rem;
    h4{
        font-size:clamp(1.7rem,2vw,2.4rem);
        font-family:"Anton",sans-serif;
        color:#444141;
    }
    button{
        padding:1rem 4rem;
        font-size:clamp(.9rem,2vw,1rem);
        background:none;
        border:2px solid #444141;
        margin:3rem auto;
        cursor:pointer;
        color:#444141;
        &:hover{
            background:#2a2929;
            opacity:.8;
            color:white;
            transition:all .7s ease-in;
            
        }
    }
`