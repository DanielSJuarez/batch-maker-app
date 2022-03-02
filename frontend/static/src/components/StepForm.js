import { useState, useEffect } from 'react';
import Cookies, { attributes } from 'js-cookie';
import Form from 'react-bootstrap/Form'

function StepForm() {

    const [addImage, setAddImage] = useState(null);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [summary, setSummary] = useState('');
    const [preview, setPreview] = useState('');
    const [phase, setPhase] = useState('')
    const [status, setStatus] = useState('');

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

    return (
        <div className='formPlacholder'>
            <form onSubmit={handleSubmit}>
                <div className='col'>
                    <input className='inputField' type='text' name='stepName' placeholder='Step Name' onChange={handleTitleInput} value={title}/>
                </div>
                <div className='col'>
                    <input className='inputField' type='text' name='amountMeasure' placeholder='Amount' onChange={handleTitleInput} value={title}/>
                </div>
                <Form.Select aria-label="Default select example">
                    <option value="UNT">Unit-Type</option>
                    <option value="OUC">Ounces</option>
                    <option value="LBS">Pounds</option>
                    <option value="CUP">Cups</option>
                    <option value="GRM">Grams</option>
                </Form.Select>
                <div className='col'>
                    <input className='inputField' type='text' name='ingredient' placeholder='Ingredient' onChange={handleTitleInput} value={title}/>
                </div>
                <button  type='button'>-</button>
                <button  type='button'>+</button>
                <div className='col'>
                    <input className='inputField' type='text' name='directions' placeholder='What directions go with this step?' onChange={handleTextInput} value={text}/>
                </div>
                <button  type='button'>Add Another Step</button>
            </form >
        </div >
    )

}

export default StepForm