//Data
import { toursMorroco } from "../data";
//Icons
import {BsSuitHeartFill} from 'react-icons/bs';
//Styles
import { Wrapper } from "../styles";
import {useState} from 'react';
import styled from "styled-components";

const Morocco=()=>{
    const [moroccoTours,setMoroccoTours]=useState(toursMorroco);
    return(
        <div id="morocco">
        <h2 className="title">{moroccoTours.length} incredibile moroccan experiences.</h2>
        <Wrapper className="container">
            {moroccoTours.map(tour=>{
                const{id,
                    image,
                    title,
                    reviews,
                    description,
                    price,
                    location,wishlist}=tour;
                return <div className="tours" key={id}>
                    <div className="img-tours">
                    </div>
                 <img src={image} alt={title}/>
                 {wishlist &&
                <BsSuitHeartFill className="wishlist"/>
                 }
                 <h3>{title}</h3>
                 <h4 className="location">{location}</h4>
                 <p>{price}</p>
                 <p><b>Destinations:</b> {description}</p>
                 <p>{reviews}</p>
                 </div>
                
            })}
        </Wrapper>
        </div>
    )
};
export default Morocco;


