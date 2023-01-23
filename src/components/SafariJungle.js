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
                 </div>
                
            })}
        </Wrapper>
      
        </>
        
    )
};
export default SafariJungle;
