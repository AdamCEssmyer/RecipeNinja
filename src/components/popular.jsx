import { useEffect, useState } from "react";



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
        <div>
            <p>{recipe.title}</p>
        </div>
    );
 })}

 </div>;
}

export default Popular;