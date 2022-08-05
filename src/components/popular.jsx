import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Popular() { 

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    },[]);


     //`https://api.spoonacular.com/recipes/?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
const getPopular = async () => {
    const api = await fetch("https://api.spoonacular.com/recipes/random?apiKey=4e895de474d7442f85711b1492c4edf8&number=9");
    const data = await api.json();
    setPopular(data.recipes)
    
};


 return <div>

 {popular.map((recipe) => {
    return(
       <Wrapper>
        <h3>Popular Picks</h3>

        <Splide>

        {popular.map((recipe) => {
            return(
                <Card>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt="recipe.title"  />
                </Card>
            );
        })}
        </Splide>
       </Wrapper>
    );
 })}

 </div>;
}


const Wrapper = styled.div
`margin: 4rem 0rem`;

const Card = styled.div
`min-height: 25rem;
border-radius: 2rem;
overflow: hidden;

img{
    border-radius: 2rem;
}


`;

export default Popular;