function IngredientDetail({name, brand, price}) {

    return (
        <div>
            <p>{name}</p>
            <p>{brand}</p>
            <p>{price}</p>
            <button  type='button'>-</button>
            <button  type='button'>+</button>
        </div>
    )

}

export default IngredientDetail