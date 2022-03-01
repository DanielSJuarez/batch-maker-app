import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import RecipeDetail from './RecipeDetail'

function MyRecipes() {
    const [recipe, setRecipes] = useState(null)
    // const [addReci, setAddStep] = useState(false)

    const handleError = (err) => {
        console.log(err);
    }

    useEffect(() => {
        const getRecipeSteps = async () => {
            const response = await fetch('/api/v1/recipes/user').catch(handleError);

            if (!response.ok) {
                throw new Error('Netword response was not OK!')
            } else {
                const data = await response.json();
                setRecipes(data);
            }
        }
        getRecipeSteps();
    }, []);

    if (!recipe) {
        return <div>Fetching data....</div>
    }

    const recipeList = recipe.map(recipe => (
        <RecipeDetail key={recipe.id} {...recipe} />
    ))


    return (
        <>
            <div>
                <Link to='/create'>+ Add Recipie</Link>
            </div>
            <div>
                {recipeList}
            </div>
        </>
    )

}

export default MyRecipes
