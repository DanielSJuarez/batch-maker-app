import StepList from "./StepList"
import {useState} from 'react'

function RecipeDetail({creator, recipe_name, cook_temp, cook_time, yield_name, yield_quantity, id}) {
    const [adjust, setAdjust] = useState(false);
    const [calculate, setCalculate] = useState(1);
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (calculate < 1) {
            alert('Warning! 0 or less, will result in badly cooked food')
        } else {
            setAdjust(false);  
        }  
    }

    const adjustButton = (
        <button type="button" onClick={() => setAdjust(true)}>Adjust</button>
    )

    const adjustField = (
        <form onSubmit={handleSubmit}> 
            <input className='adjust' type='number' onChange={(e)=> setCalculate(e.target.value)} value={calculate} required/>
            <button type="submit">Update</button>
        </form>
    )

    return (
        <div>
            <h2>{recipe_name}</h2>
            <p>{creator}</p>
            <section>
                <p>Cook Time {cook_time} minutes</p>
                <p>Cook Temp {cook_temp} degrees</p>
            </section>
            <section>
                <p>{yield_quantity * calculate} {yield_name}</p>
            {adjust ? adjustField : adjustButton}
            </section>
            <section>
                <StepList calculate={calculate} id={id}/>
            </section>
        <button type="button">Edit this Recipe</button>
        </div>
    )

}

export default RecipeDetail