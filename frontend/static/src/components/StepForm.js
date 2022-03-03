import { useState, useEffect } from 'react';
import Cookies, { attributes } from 'js-cookie';
import Form from 'react-bootstrap/Form'

function StepForm({setAddStep}) {

    const [stepName, setStepName] = useState('');
    const [amount, setAmount] = useState('')
    const [ingredient, setIngedient] = useState('')
    const [directions, setDirections] = useState('')
    const [measure, setMeasure] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        const newStep = {
            step_name: stepName,
            directions: directions,
            ingredient: ingredient,
            amount_measure: amount,
            measure: measure,
            recipe: 1,
        }
    
        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: JSON.stringify(newStep)
        }

        fetch('/api/v1/recipes/1/step/', options);
        e.target.reset()
        setAmount('');
        setStepName('');
        setIngedient('');
        setDirections('');
        setMeasure('');
    }

    return (
        <div className='formPlacholder'>
            <form onSubmit={handleSubmit}>
                <div className='col'>
                    <input className='inputField' type='text' name='stepName' placeholder='Step Name' onChange={(e) => setStepName(e.target.value)} value={stepName}/>
                </div>
                <div className='col'>
                    <input className='inputField' type='number' name='amountMeasure' placeholder='Amount' onChange={(e) => setAmount(e.target.value)} value={amount}/>
                </div>
                <Form.Select aria-label="Default select example" onChange={(e) => setMeasure(e.target.value)}>
                    <option value="UNT">Unit-Type</option>
                    <option value="OUC">Ounces</option>
                    <option value="LBS">Pounds</option>
                    <option value="CUP">Cups</option>
                    <option value="GRM">Grams</option>
                </Form.Select>
                <div className='col'>
                    <input className='inputField' type='text' name='ingredient' placeholder='Ingredient' onChange={(e) => setIngedient(e.target.value)} value={ingredient}/>
                </div>
                <button  type='button'>-</button>
                <button  type='button'>+</button>
                <div className='col'>
                    <input className='inputField' type='text' name='directions' placeholder='What directions go with this step?' onChange={(e) => setDirections(e.target.value)} value={directions}/>
                </div>
                <button type='submit' onClick={()=> setAddStep(false)}>Save</button>
                <button type='submit'>Add Another Step</button>
            </form >
        </div >
    )

}

export default StepForm