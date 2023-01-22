//Components
import SafariJungle from "./SafariJungle";
import Morocco from "./Morocco";
//Styles
import styled from "styled-components";


const Tours=()=>{
    return(
        <Wrapper id='tours'>
        <h1>African Vacation Tours</h1>
        <SafariJungle/>
        <Morocco/>
        </Wrapper>
    )
};
export default Tours;
 const Wrapper=styled.div`
     h1{
    font-family: "Anton",sans-serif;
    font-size:clamp(1.3rem,3vw,2.6rem);
    letter-spacing:  .1rem;
    text-align: center;
    text-transform: uppercase;
    margin:5rem auto;
}
 `
