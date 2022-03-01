import StepList from "./StepList"

function RecipeDetail({creator, recipe_name, cook_temp, cook_time, yield_name, yield_quantity}) {

    return (
        <div>
            <h2>{recipe_name}</h2>
            <p>{creator}</p>
            <section>
                <p>Cook Time {cook_time} minutes</p>
                <p>Cook Temp {cook_temp} degrees</p>
            </section>
            <section>
                <p>{yield_quantity} {yield_name}</p>
                <button type="button">Adjust</button>
            </section>
            <section>
                <StepList/>
            </section>
        <button type="button">Edit this Recipe</button>
        </div>
    )

}

export default RecipeDetail