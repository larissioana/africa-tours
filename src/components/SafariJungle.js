//Data
import { tours } from "../data";
//Icons
import {BsSuitHeartFill} from 'react-icons/bs';
//Styles
import { Wrapper } from "../styles";
import { useState } from "react";
import styled from "styled-components";


const SafariJungle=()=>{
    const[safariTours,setSafariTours]=useState(tours);
    const removeTour=(id)=>{
    const newTours=safariTours.filter((tour)=>tour.id !==id);
    setSafariTours(newTours)
    };
 
    if(safariTours.length===0){
        return(
            <NoTour className="no-tour">
            <h2>No Tours Left.</h2>
           
            </NoTour>
        )
    }

    return(
        <>
        <Wrapper id="safari" className="container">
        
        {safariTours.map(tour=>{
                const{id,
                    image,
                    title,
                    reviews,
                    description,
                    price,
                    location,wishlist}=tour;
                return<div className="tours" key={id}>
                 
                    <div className="img-tours">
                    </div>
                 <img src={image} alt={title}/>
                {wishlist &&
                <BsSuitHeartFill className="wishlist"/>
                
                }
                 <h3>{title}</h3>
                 <h4 className="location">{location}</h4>
                 <p><b>{price}</b></p>
                 <p><b>Destinations:</b> {description}</p>
                 <p>{reviews}</p>
                 <button onClick={()=>removeTour(id)}>Not Interested</button>
                 </div>
                
            })}
        </Wrapper>
      
        </>
        
    )
};
export default SafariJungle;
 const NoTour=styled.div`
    display:grid;
    place-items: center;
    margin-bottom:5rem;
    button{
        padding:1rem 2rem;
        background:#c06d6d;
        border:1px solid #f1ecec;
        color:#f1ecec;
        text-transform: uppercase;
        letter-spacing:  .1rem;
        cursor:pointer;
    }
    h2{
        margin-bottom:2rem;
    }
 `