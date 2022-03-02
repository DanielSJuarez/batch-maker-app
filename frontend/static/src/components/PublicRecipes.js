import { useState, useEffect } from 'react'
import RecipeDetail from './RecipeDetail'

function PublicRecipes() {
    const [recipe, setRecipes] = useState(null)
    // const [addReci, setAddStep] = useState(false)

    const handleError = (err) => {
        console.log(err);
    }

    useEffect(() => {
        const getRecipeSteps = async () => {
            const response = await fetch('/api/v1/recipes/').catch(handleError);

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

    const recipeFilterList = recipe.filter(recipe => (
        recipe.status === 'PUB'
    ))

    const recipeFilterMap = recipeFilterList.map(recipe => (
        <RecipeDetail key={recipe.id} {...recipe} />
    ))

    return (
        <div>
            {recipeFilterMap}
        </div>
    )

}

export default PublicRecipes