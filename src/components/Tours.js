//Components
import SafariJungle from "./SafariJungle";
import Morocco from "./Morocco";
//Styles
import styled from "styled-components";
import image from '../images/merzouga.jpg';

const Tours=()=>{
    return(
        <Wrapper id='tours'>
        <h1>African Vacation Tours</h1>
        <Morocco/>
        {/* <SafariJungle/> */}
        </Wrapper>
    )
};
export default Tours;
 const Wrapper=styled.div`
 .title{
    text-align: center;
    margin-top:-2rem;
    padding-bottom:-3rem;
    font-size:clamp(1.3rem,2vw,2.5rem);
    font-family: "Anton",sans-serif;
 }
 background:linear-gradient(
      to bottom,rgba(0,0,0,0)
      41%,rgba(0,0,0,0.2)
      100%
  ),
  url(${image});
  background-size:100%,cover;
  height:50rem;
  background-repeat: no-repeat;
     h1{
    font-family: "Anton",sans-serif;
    font-size:clamp(1.3rem,3vw,2.6rem);
    letter-spacing:  .1rem;
    text-align: center;
    text-transform: uppercase;
    margin:5rem auto;
    padding-top:1rem;
}
 `
