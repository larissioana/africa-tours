
//Styles
import styled from "styled-components";
//Data
import { links } from "../data";
import{HiOutlineMenuAlt2} from 'react-icons/hi';

import { useState } from "react";

const Nav=()=>{
    const[isOpen,setIsOpen]=useState(false);
    return(
        <Wrapper>
         <nav>
         <div className="nav-header">
         <button className="nav-toggle" onClick={()=>setIsOpen(!isOpen)}>
         <HiOutlineMenuAlt2/>
        </button>
        <div className={`${isOpen? 'links-container show-container':
        'links-container'}`}>
        <ul className="links">
            {links.map((link)=>{
                const{id,href,text}=link;
                return <li key={id}>
                  <a href={href}>
                    {text}
                  </a>
                </li>
            })}
        </ul>
        </div>
                   
         </div>
         </nav>
        </Wrapper>
    )
};
export default Nav;
const Wrapper=styled.div`

nav{

width:100%;
height:5rem;
position:fixed;
top:0;
z-index:10;

.nav-header{
    position:relative;
    button{
    border:none;
    background:none;
    font-size:2.9rem;
    cursor:pointer;
    color:#464343;
    position:absolute;
    top:.5rem;
    left:2rem;
   
   }
   
    .links-container{
        position:absolute;
        top:5rem;
        left:0;
        background:#D6D2D2;
        height:75vh;
        padding:4rem 5rem;
        border-top:2px solid #3f3d3d;
        border-right:2px solid #3f3d3d;
        border-bottom:2px solid #3f3d3d;
        transform:translateX(-500%);
        transition:all .5s ease-in-out;
        z-index:10;
        a{
            font-size:clamp(.9rem,2vw,1.2rem);
            color:#3e3a3a;
           &:hover{
            color:#9f9797;
           }
          
        }
        li{
            padding:2rem 0rem;
            
        }
    }
    .show-container{
        transform: translateX(0%);
        
    }
   }
  
}



  
`