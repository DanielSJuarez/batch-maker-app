import Cookies, { attributes } from 'js-cookie';

function IngredientDetail({ name, brand, price, id, setIngredient, ingredient }) {
    const handleError = (err) => {
        console.log(err);
    }

    const deleteIngredient = async (id) => {

        const options = {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            },
        }

        const response = await fetch(`/api/v1/ingredients/${id}/user/`, options).catch(handleError);

        if (!response.ok) {
            throw new Error('Network response was not OK');
        }

        const ingredientAfterDelete = ingredient.filter(ingredient => {
            return ingredient.id !== id
        });
        setIngredient(ingredientAfterDelete)
    }

    return (
        <div>
            <p>{name}</p>
            <p>{brand}</p>
            <p>{price}</p>
            <button type='button' onClick={() => deleteIngredient(id)}>-</button>
            <button type='button'>+</button>
        </div>
    )

}

export default IngredientDetail