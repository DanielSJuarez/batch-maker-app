import { useState, useEffect } from 'react';
import Cookies, { attributes } from 'js-cookie';
import StepForm from './StepForm';

function RecipeForm() {

    const [addImage, setAddImage] = useState(null);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [summary, setSummary] = useState('');
    const [preview, setPreview] = useState('');
    const [phase, setPhase] = useState('')
    const [status, setStatus] =  useState('');
    const [step, setStep] = useState(false)


    const handleTitleInput = e => {
        const addTitle = e.target.value;
        setTitle(addTitle)
    }

    const handleTextInput = e => {
        const addText = e.target.value;
        setText(addText)
    }

    const handleSummaryInput = e => {
        const addSummary = e.target.value;
        setSummary(addSummary)
    }

    const handleImage = e => {

        const file = e.target.files[0];
        setAddImage(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result)
        }
        reader.readAsDataURL(file);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title)
        formData.append('text', text)
        formData.append('summary', summary)
        formData.append('image', addImage);
        formData.append('phase', phase);

        const options = {
            method: 'POST',
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: formData,
        }

        fetch('/api/v1/articles/user/', options);
        e.target.reset()
        setTitle('');
        setText('');
        setSummary('');
        setPreview('');
        setPhase('');
        setAddImage('');
    }

    const stepForm = (
        <StepForm/>
    )

    const stepButton = (
        <button  type='button' onClick={()=> setStep(true)}>Add Step</button>
    )

    return (
        <div className='formPlacholder'>
            <p>New Recipe</p>
            <form onSubmit={handleSubmit}>
                <div className='col'>
                    <input className='inputField' type='text' name='recipeName' placeholder='Recipe Name' onChange={handleTitleInput} value={title}/>
                </div>
                <div className='col'>
                    <input className='inputField' type='file' name='recipeImage' onChange={handleImage}/>
                    {preview && <img src={preview} alt='' />}
                </div>
                <div>
                    <p>This recipe will make</p>
                    <div classname='col'>
                        <input className='inputField' type='text' name='yield_name' placeholder='Amount' onChange={handleSummaryInput} value={summary}/>
                    </div>
                    <div classname='col'>
                        <input className='inputField' type='text' name='yield_quantity' placeholder='cookies, loaves, etc' onChange={handleSummaryInput} value={summary}/>
                    </div>
                </div>
                <div>
                    <p>Make it Public</p>
                    <input type="radio" name="private" value={status}/>
                </div>
                <div classname='col'>
                    <input className='inputField' type='text' name='prepTime' placeholder='Prep Time' onChange={handleSummaryInput} value={summary}/>
                </div>
                <div className='col'>
                    <input className='inputField' type='text' name='cookTemp' placeholder='Cook Temp' onChange={handleTextInput} value={text}/>
                </div>
                <div>
                    {step ? stepForm : stepButton}
                </div>
                <div className='col'>
                    <input className='inputField' type='text' name='note' placeholder='Notes' onChange={handleTextInput} value={text}/>
                </div>
                <button type='submit'>Save the Recipe!</button>
            </form>
        </div>
    )

}

export default RecipeForm