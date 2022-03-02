import { useState, useEffect } from 'react';
import Cookies, { attributes } from 'js-cookie';
import Form from 'react-bootstrap/Form'

function IngredientForm() {

    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState(0)


    const handleNameInput = e => {
        const addName = e.target.value;
        setName(addName)
    }

    const handleBrandInput = e => {
        const addBrand = e.target.value;
        setBrand(addBrand)
    }

    const handlePriceInput = e => {
        const addPrice = e.target.value;
        setPrice(addPrice)
    }
 


    const handleSubmit = e => {
        e.preventDefault();
        const newIngredient = {
            name: name,
            brand: brand,
            price: price
        }
        

        const options = {
            method: 'POST',
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: JSON.stringify(newIngredient)
        }

        fetch('/api/v1/ingredient/user/', options);
        setName('');
        setBrand('');
        setPrice(0);
    }

    return (
        <div className='formPlacholder'>
            <form onSubmit={handleSubmit}>
                <div className='col'>
                    <input className='inputField' type='text' name='name' placeholder='Name' onChange={handleNameInput} value={name}/>
                </div>
                <div className='col'>
                    <input className='inputField' type='text' name='brand' placeholder='Brand' onChange={handleBrandInput} value={brand}/>
                </div>
                <div className='col'>
                    <input className='inputField' type='text' name='price' placeholder='Price' onChange={handlePriceInput} value={price}/>
                </div>
                <button  type='button'>Add Another Ingredent</button>
            </form>
        </div >
    )

}

export default IngredientForm