import { NavLink } from 'react-router-dom';
function RecipeNavBar() {

    return (
        <div className="row">
            <ul>
                <li>
                    <NavLink to='/myrecipes'>My Recipes</NavLink>
                </li>
                <li>
                    <NavLink to='/public'>Public Recipes</NavLink>
                </li>
                <li>
                    <NavLink to='/popular'>Popular Recipes</NavLink>
                </li>
                <li>
                    <NavLink to='/favorite'>My Favorit Recipes</NavLink>
                </li>
                <li>
                    <NavLink to='/pantry'>My Pantry</NavLink>
                </li>
            </ul>
        </div>
    )

}

export default RecipeNavBar