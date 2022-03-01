import { useState, useEffect } from 'react'
import Cookies from 'js-cookie';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";


function Header(props) {

    const handleError = (err) => {
        console.log(err);
      }

    // useEffect(() => {
    //     const getIsAdmin = async () => {
    //         const response = await fetch('/rest-auth/user/').catch(handleError);
    //         if (!response.ok) {
    //             throw new Error('Netword response was not OK!')
    //         } else {
    //             const data = await response.json();
    //             if (data.is_superuser == true)
    //                 props.setAdmin(true)
    //         }
    //     }
    //     getIsAdmin();
    // }, []);

    const handleLogout = async event => {
        event.preventDefault();

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
        }

        const response = await fetch('/rest-auth/logout/', options).catch(
            handleError
        )

        const data = await response.json();
        Cookies.remove('Authorization', `Token ${data.key}`);
        props.setAuth(false);
    }


    const visitor = (
        <ul className='row header mx-0'>
            <li className='col'>
                <h2>Batch Maker</h2>
            </li>
            <li className='col navLinkButton mx-0'>
                <Link className='navLinks' to='/login'>Login</Link>
            </li>
            <li className='col navLinkButton mx-0'>
                <Link className='navLinks' to='/register'>Create Account</Link>
            </li>
        </ul>
    )

    const user = (
        <ul className='row header mx-0'>
            <li className='col'>
                <h2>Batch Maker</h2>
            </li>
            <li className='col navLinkButton mx-0'>
                <button className='logout' type='button' name='logout' onClick={handleLogout}>Sign Out</button>
            </li>
        </ul>
    )

    return (
        <nav>
            {props.auth ? user : visitor}
        </nav>
    )
}
export default Header