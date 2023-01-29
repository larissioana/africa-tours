
//Styles
import styled from "styled-components";
//Data
import { links,socialLinks } from "../data";


const Footer=()=>{
    return(
        <Wrapper>
         <footer>
            {links.map(link=>{
                const{id,href,text}=link;
                return <div key={id} className="links">
                <ul>
                    <li>
                        <a href={href}>{text}</a>
                    </li>
                </ul>
                </div>
            })}
          </footer>
         <div className="social-links">
         {socialLinks.map(link=>{
                const{id,href,icon}=link;
                return <div key={id} className="social-links">
                   <a href={href} target="_blank" rel='noreferrer'>{icon}</a>
                </div>
            })}
         </div>
        </Wrapper>
    )
};
export default Footer;
const Wrapper=styled.div`
    margin:5rem auto 0rem auto;
    position:fixed;
    bottom:0;
    background:#D6D2D2;
    width:100%;
    z-index:10;
    footer{
  
        min-height:9vh;
        display:flex;
        justify-content:center;
        align-items: center;
        flex-wrap: wrap;
        .links{
            display:flex;
        }
        li{
            padding-left:2rem;
        }
        a{
            font-size:clamp(.9rem,2vw,1.1rem);
            color:#535050;
            &:hover{
            color:#9f9797;
           }
          
        }
    }

        .social-links{
           height:2.5rem;
           display:flex;
           justify-content: center;
           align-items: center;
         
           a{
            color:#535050;
            font-size:clamp(1.2rem,2vw,1.7rem);
            padding-left:1rem;
           }
        }
           
        
`