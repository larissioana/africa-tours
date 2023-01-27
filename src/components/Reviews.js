import {useState,useEffect} from 'react';
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import {FaQuoteRight} from 'react-icons/fa';
import { reviews } from '../reviews';
import styled from 'styled-components';
import { Title } from './NextAdventure';

const Reviews=()=>{
    const[people,setPeople]=useState(reviews);
    const[index,setIndex]=useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
          setIndex(lastIndex);
        }
        if (index > lastIndex) {
          setIndex(0);
        }
      }, [index, people]);
    
      useEffect(() => {
        let slider = setInterval(() => {
          setIndex(index + 1);
        }, 3000);
        return () => {
          clearInterval(slider);
        };
      }, [index]);
    return(
      <>
      <Title className="title">
        <h3>Reviews</h3>
      </Title>
        <Wrapper id='reviews'>
        <section className='section'>
        <div className="section-center">
        {people.map((person,personIndex)=>{
            const{id,name,image,info}=person;
           
          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }
            return(
                <article className={position} key={id}>
                    <img src={image} alt={name}/>
                    <h3>{name}</h3>
                    <p>{info}</p>
                    <FaQuoteRight className='icon'/>
                </article>
            )
        })}
        <button className='prev' onClick={()=>setIndex(index -1)}>
            <FiChevronLeft/>
        </button>
        <button className='next' onClick={()=>setIndex(index +1)}>
            <FiChevronRight/>
        </button>
        </div>
        </section>
        
        </Wrapper>
        </>
    )
};
export default Reviews;
const Wrapper=styled.div`
     width: 90vw;
     margin: 5rem auto 0rem auto;
  
    h2{
    text-align: center;
    font-family: 'Anton',sans-serif;
    font-size:clamp(1.2rem,2vw,2rem);
    }
   
    .section{
        width:95vw;
    }
    .section-center{
        margin:0 auto;
        margin-top:3rem;
        width:80vw;
        height:40rem;
        max-width:800px;
        text-align: center;
        position:relative;
        display: flex;
        overflow: hidden;
    }
    article{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        opacity:0;
        img{
            clip-path: circle();
            width:16rem;
        }
        h3{
            margin-bottom:1rem;
            font-size:clamp(1rem,2vw,1.2rem);
        }
        p{
            max-width: 35rem;
            margin: 0 auto;
            margin-top: 1rem;
            line-height: 1.7rem;
            font-size:clamp(.8rem,2vw,.9rem);
        }
        .icon{
            font-size: 2rem;
            margin-top: 1rem;
            color: #545151;
        }
    }
    article.activeSlide {
    opacity: 1;
    transform: translateX(0);
}
    article.lastSlide {
    transform: translateX(-100%);
}
    article.nextSlide {
    transform: translateX(100%);
}
    .prev, .next{
    position: absolute;
    top: 7rem;
    transform: translateY(-50%);
    width: 2.25rem;
    height: 2.25rem;
    display: grid;
    place-items: center;
    font-size: 1.6rem;
    background:#545151;
    color:white;
    border:none;
  cursor: pointer;
    }
    .prev{
        left:0;
    }
    .next{
        right:0;
    }

    @media (max-width:396px){
      margin:0rem auto;
      height:34rem;
      img{
        max-width:10rem;
      }
      .next,.prev{
        width:1.5rem;
        height:1.5rem;
      }
    }
`