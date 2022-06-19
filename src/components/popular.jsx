import { useEffect } from "react";


function Popular() { 

    useEffect(() => {
        getPopular();
    },[]);

const getPopular = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random=${process.env.REACT_APP_API_KEY}&number8`);
    const data = await api.json();
    console.log(data);
}


 return <div>Popular</div>
}

export default Popular