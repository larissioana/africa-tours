import styled from "styled-components"

export const Wrapper=styled.div`
    margin:0rem auto 2rem auto;
    display:grid;
    grid-template-columns: repeat(auto-fill,minmax(400px,1fr));
    gap:2rem;
    place-items: center;
    
.tours{
    min-width:30%;
    height:34rem;
    margin:0rem 1rem;
    background:#e7e3e3;
    color:#1a1919;
    overflow:hidden;
    border-radius:.5rem;
    transition:.3s ease-in;
    position:relative;
    a{
        color:#1a1919;
        padding:0rem 1rem;
    }
    &:hover{
           
           transform:translateY(-7px)
         
       }
    img{
       
        width:100%;
        height:20rem;
        object-fit: cover;
       
     }
   
    h3{
        text-align: center;
        margin-bottom:1rem;
        margin-top:.5rem;
        text-transform: capitalize;
        font-size:clamp(1rem,2vw,1.1rem);
    }
    p,h4{
        padding:0rem 1rem;
        font-size:clamp(.9rem,2vw,1rem);
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