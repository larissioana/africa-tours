//Styles
import styled from "styled-components";
//Images
import bg from '../images/bg.jpg';

const Home=()=>{
   
    return(
        <Wrapper id='home'>
            <div className="container">
                <img className="home-bg"src={bg} alt='Sahara Desert'/>
            </div>
        </Wrapper>
    )
};
export default Home;


const Wrapper=styled.div`
 margin:0rem 0rem 0rem 0rem;
 min-height:90vh;
 position:relative;
 .home-bg{
    width:100%;
    height:100vh;
    object-fit: cover;
 
}

`;
