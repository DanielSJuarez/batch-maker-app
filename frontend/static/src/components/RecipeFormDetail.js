import StepList from "./StepList"
import { useState } from 'react'

function RecipeFormDetail({ creator, recipe_name, cook_temp, cook_time, yield_name, yield_quantity, id }) {
    const [adjust, setAdjust] = useState(false);
    const [calculate, setCalculate] = useState(1);
    const [isEdit, setIsEdit] = useState(false)

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
            <input className='adjust' type='number' onChange={(e) => setCalculate(e.target.value)} value={calculate} required />
            <button type="submit">Update</button>
        </form>
    )

    const editMode = (
        <>
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
                <StepList calculate={calculate} id={id} />
            </section>
        </div>
        {/* <form onSubmit={handleSubmit}>
            <div className='col'>
                <input className='inputField' type='text' name='recipeName' placeholder='Recipe Name' onChange={(e) => setRecipeName(e.target.value)} value={recipeName} />
            </div>
            <div className='col'>
                <input className='inputField' type='file' name='recipeImage' onChange={handleImage} />
                {preview && <img src={preview} alt='' />}
            </div>
            <div>
                <p>This recipe will make</p>
                <div classname='col'>
                    <input className='inputField' type='number' name='yield_quantity' placeholder='Amount' onChange={(e) => setYieldQuantity(e.target.value)} value={yieldQuantity} />
                </div>
                <div classname='col'>
                    <input className='inputField' type='text' name='yield_name' placeholder='cookies, loaves, etc' onChange={(e) => setYieldName(e.target.value)} value={yieldName} />
                </div>
            </div>
            <div>
                <p>Make it Public</p>
                <input type="radio" name="private" value={status} onChange={(e) => setStatus('PUB')} />
            </div>
            <div classname='col'>
                <input className='inputField' type='number' name='cookTime' placeholder='Cook Time' onChange={(e) => setCookTime(e.target.value)} value={cookTime} />
            </div>
            <div className='col'>
                <input className='inputField' type='number' name='cookTemp' placeholder='Cook Temp' onChange={(e) => setCookTemp(e.target.value)} value={cookTemp} />
            </div>
            <div>
                <StepForm />
            </div>
            <div className='col'>
                <input className='inputField' type='text' name='note' placeholder='Notes' onChange={(e) => setNotes(e.target.value)} value={notes} />
            </div>
            <button type='submit' onClick={() => setIsEdit(false)}>Save the Recipe!</button>
        </form> */}
        </>
    )

    const displayMode = (
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
                <StepList calculate={calculate} id={id} />
            </section>
            <button type="button" onClick={() => setIsEdit(true)}>Edit this Recipe</button>
        </div>
    )



    return (
        // <div>
        //     <h2>{recipe_name}</h2>
        //     <p>{creator}</p>
        //     <section>
        //         <p>Cook Time {cook_time} minutes</p>
        //         <p>Cook Temp {cook_temp} degrees</p>
        //     </section>
        //     <section>
        //         <p>{yield_quantity * calculate} {yield_name}</p>
        //         {adjust ? adjustField : adjustButton}
        //     </section>
        //     <section>
        //         <StepList calculate={calculate} id={id} />
        //     </section>
        //     <button type="button" onClick={() => editRecipe(id)}>Edit this Recipe</button>
        // </div>
        <div>
            {isEdit ? editMode : displayMode}
        </div>
    )

}

export default RecipeFormDetail