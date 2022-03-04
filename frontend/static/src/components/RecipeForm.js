import { useState, useEffect } from 'react';
import Cookies, { attributes } from 'js-cookie';
import StepForm from './StepForm';
import { useOutletContext } from "react-router-dom";


function RecipeForm() {
    const [auth, setAuth, navigate] = useOutletContext();

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState('');
    const [recipeName, setRecipeName] = useState('');
    const [yieldName, setYieldName] = useState('');
    const [yieldQuantity, setYieldQuantity] = useState('');
    const [status, setStatus] = useState('PRV');
    const [cookTime, setCookTime] = useState('');
    const [cookTemp, setCookTemp] = useState('');
    const [notes, setNotes] = useState('');

    const handleImage = e => {

        const file = e.target.files[0];
        setImage(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result)
        }
        reader.readAsDataURL(file);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('recipe_name', recipeName);
        formData.append('cook_temp', cookTemp);
        formData.append('cook_time', cookTime);
        formData.append('status', status);
        formData.append('image', image);
        formData.append('notes', notes);
        formData.append('yield_name', yieldName);
        formData.append('yield_quantity', yieldQuantity);

        const options = {
            method: 'POST',
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: formData,
        }

        fetch('/api/v1/recipes/user/', options);
        e.target.reset()
        setPreview('');
        setStatus('PRV');
        setImage('');
        setRecipeName('');
        setYieldName('');
        setYieldQuantity('');
        setCookTime('');
        setCookTemp('');
        setNotes('');
        navigate('/myrecipes')
    }


    return (
        <div className='formPlacholder'>
            <p>New Recipe</p>
            <form onSubmit={handleSubmit}>
                <div className='col'>
                    <input className='inputField' type='text' name='recipeName' placeholder='Recipe Name' onChange={(e) => setRecipeName(e.target.value)} value={recipeName}/>
                </div>
                <div className='col'>
                    <input className='inputField' type='file' name='recipeImage' onChange={handleImage}/>
                    {preview && <img src={preview} alt='' />}
                </div>
                <div>
                    <p>This recipe will make</p>
                    <div classname='col'>
                        <input className='inputField' type='number' name='yield_quantity' placeholder='Amount' onChange={(e) => setYieldQuantity(e.target.value)} value={yieldQuantity}/>
                    </div>
                    <div classname='col'>
                        <input className='inputField' type='text' name='yield_name' placeholder='cookies, loaves, etc' onChange={(e) => setYieldName(e.target.value)} value={yieldName}/>
                    </div>
                </div>
                <div>
                    <p>Make it Public</p>
                    <input type="radio" name="private" value={status} onChange={(e) => setStatus('PUB')}/>
                </div>
                <div classname='col'>
                    <input className='inputField' type='number' name='cookTime' placeholder='Cook Time' onChange={(e) => setCookTime(e.target.value)} value={cookTime}/>
                </div>
                <div className='col'>
                    <input className='inputField' type='number' name='cookTemp' placeholder='Cook Temp' onChange={(e) => setCookTemp(e.target.value)} value={cookTemp}/>
                </div>
                <div>
                    <StepForm/>
                </div>
                <div className='col'>
                    <input className='inputField' type='text' name='note' placeholder='Notes' onChange={(e) => setNotes(e.target.value)} value={notes}/>
                </div>
                <button type='submit'>Save the Recipe!</button>
            </form>
        </div>
    )

}

export default RecipeForm