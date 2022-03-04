import { useState, useEffect } from 'react'
import IngredientDetail from './IngredientDetail'
import IngredientForm from './IngredientForm'

function IngredientList() {
    const [ingredient, setIngredient] = useState(null)
    const [addIngredient, setAddIngredient] = useState(false)

    const handleError = (err) => {
        console.log(err);
    }

    useEffect(() => {
        const getIngredents = async () => {
            const response = await fetch('/api/v1/ingredients/user/').catch(handleError);

            if (!response.ok) {
                throw new Error('Netword response was not OK!')
            } else {
                const data = await response.json();
                setIngredient(data);
            }
        }
        getIngredents();
    }, []);

    if (!ingredient) {
        return <div>Fetching data....</div>
    }

    const ingredientList = ingredient.map(ingredient => (
        <IngredientDetail key={ingredient.id} {...ingredient} setIngredient={setIngredient} ingredient={ingredient}/>
    ))

    const newIngredientButton = (
        <button type='button' onClick={()=> setAddIngredient(true)} >Add Ingredient</button>
    )

    return (
        <div>
            {ingredientList}    
            {addIngredient ? <IngredientForm setIngredient={setIngredient} ingredient={ingredient}/> : newIngredientButton}
        </div>
    )

}

export default IngredientList