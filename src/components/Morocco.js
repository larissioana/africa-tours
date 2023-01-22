//Data
import { toursMorroco } from "../data";
//Icons
import {BsSuitHeartFill} from 'react-icons/bs';
//Styles
import { Wrapper } from "../styles";
import {useState} from 'react';


const Morocco=()=>{
    const [moroccoTours,setMoroccoTours]=useState(toursMorroco);
    const removeTour=(id)=>{
        const newTours=moroccoTours.filter((tour)=> tour.id !==id);
        setMoroccoTours(newTours);
    }
    
    return(
        <div id="morocco">
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
                 <button onClick={()=>removeTour(id)}>Not Interested</button>
                 </div>
                
            })}
        </Wrapper>
        </div>
    )
};
export default Morocco;