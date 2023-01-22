//Styles
import styled from "styled-components";
//Image
import image from '../images/giraffe-bg1.png';
import { useState} from 'react';
import{Navigate} from 'react-router-dom';

const Contact=()=>{
  
const [formData,setFormData]=useState({
    name:'',
    email:'',
    message:''
});
const [navigate,setNavigate]=useState(false);
if(navigate){
    return <Navigate to={'#home'}/>
}

    function handleChange(e){
        setFormData(prevFormData=>{
            return{
                ...prevFormData,
                [e.target.name]:[e.target.value]
            }
        })
    };
    function handleSubmit(e){
        e.preventDefault()
        setFormData('');
        setNavigate(true);
    };

    
    return(
        <Wrapper id="contact">
         <div className="container">
            <div className="left">
            <h2>Contact Us</h2>
            <img src={image} alt='giraffe'/>
          </div>
          <div className="right">
         <form>
            <label htmlFor="name">Name & Surname</label>
            <input required onChange={handleChange} value={formData.name} type="text" name='name' id='name' placeholder="Name & Surname"/>
            <label htmlFor="email">Email</label>
            <input required onChange={handleChange} value={formData.email} type="text" name='email' id='email' placeholder="Email" />
            <textarea required onChange={handleChange} value={formData.message} name="message"  rows='10' placeholder="Message"></textarea>
            <button onSubmit={handleSubmit} type='submit'>SEND</button>
         </form>
         </div>
        </div>
   
        </Wrapper>
    )
};
export default Contact;

const Wrapper=styled.div`
margin:2rem auto 12rem auto;
.container{
    display:flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    padding:0rem 4rem;
}
    h2{
        font-family: "Anton",sans-serif;
        letter-spacing: .1rem;
        text-align: center;
        margin-top:5rem;
        font-size:clamp(1.6rem,3vw,2.6rem);
    }
    img{
        width:30rem;
        transform:rotateZ(90deg);
    }
    
    .left,.right{
       flex:1;
    }
    form{
        display:grid;
        width:35rem;
   
        input{
            margin-bottom:1rem;
            padding:1rem;
            background:#d6d2d2;
            border:none;
            &:hover{
                opacity:.6;
            }
       
            &:focus{
                outline: none;
            }
            &::placeholder{
               font-size:.8rem;
               color:#353535;
            }
        }
        label{
            text-indent:.6rem;
            margin-bottom:.5rem;
        }
    }
    textarea{
        padding-left:1rem;
        font-size:.9rem;
        background:#d6d2d2;
        border:none;
        font-size:.8rem;
        color:#353535;
        &:focus{
            outline: none;
            resize:none;
        }
        &::placeholder{
               font-size:.8rem;
               color:#353535;
               margin-top:.5rem;
            }
        &:hover{
              opacity:.6;
        }
        
    }
    button{
        margin-top:1rem;
        border:none;
        background:#d6d2d2;
        padding:1rem 2rem;
        color:#6c6b6b;
        cursor:pointer;
        font-weight: bold;
        &:hover{
            opacity:.6;
        }
    }
    @media (max-width:578px){
        form{
            width:20rem;
        }
        img{
            width:20rem;
        }
    }
    @media (max-width:326px){
        form{
            width:18rem;
            padding:.5rem 2rem;
          
           
        }
    }
`