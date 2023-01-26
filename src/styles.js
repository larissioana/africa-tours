import styled from "styled-components"

export const Wrapper=styled.div`
    margin:0rem auto 2rem auto;
    display: grid;
    gap: 2rem;
    grid-auto-flow: column;
    grid-auto-columns: 25rem;
    overflow-x: auto;
    scroll-behavior: smooth;
    overscroll-behavior-inline: contain;
    scrollbar-color: rgba(224, 224, 223,.8) rgba(122, 81, 84,.4);
    scrollbar-width:thin;
  
.tours{
    min-width:20%;
    height:27rem;
    margin:2rem 1rem;
    backdrop-filter: blur(25px);
    color:#fff7f7;
    overflow:hidden;
    border-radius:.5rem;
    transition:.3s ease-in;
    position:relative;
    padding-bottom:4rem;
    a{
        color:#1a1919;
        padding:0rem 1rem;
    }
    &:hover{
           
           transform:translateY(-7px)
         
       }
    img{
       
        width:100%;
        height:15rem;
        object-fit: cover;
       
     }
   
    h3{
        text-align: center;
        margin-bottom:1rem;
        margin-top:.5rem;
        text-transform: capitalize;
        font-size:clamp(1rem,2vw,1.1rem);
        color:#fff7f7;
    }
    p,h4{
        padding:0rem 1rem;
        font-size:clamp(.9rem,2vw,1rem);
        color:#fff7f7;
    }
    h4{
        margin-bottom:.5rem;
       
    }
    p{
        margin-bottom:.5rem;
        

    }
  .wishlist{
    position:absolute;
    top:2rem;
    right:2rem;
    font-size:1.5rem;
    color:#ebebeb;
   
  }
  button{
    margin-left:1rem;
    margin-bottom:.7rem;
    padding:.5rem;
    cursor:pointer;
    background:#2c2b2b;
    color:#ebebeb;
    border:1px solid #1a1919;
    
  }
    
  
}

@media (max-width:400px){
        display:grid;
        place-items: center;
        padding:0rem;
        justify-content: center;
    .tours{
        width:20rem;
   
  
       
    }
   }
   @media (max-width:370px){
    display:grid;
    place-items: center;

    justify-content: center;
    .tours{
        width:20rem;
     
      
    }
   }
  

`