import { useState, useEffect } from 'react'
import RecipeDetail from './RecipeDetail'

function RecipeList() {
    const [recipe, setRecipes] = useState(null)

    const handleError = (err) => {
        console.log(err);
    }

    useEffect(() => {
        const getRecipeSteps = async () => {
            const response = await fetch('/api/v1/recipie/').catch(handleError);

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
        <div>
            {recipeList}
        </div>
    )

}

export default RecipeList