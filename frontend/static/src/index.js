import React from 'react';
import ReactDOM from 'react-dom';
import { browserRouter, Routes, Route, BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login'
import Register from './components/Register'
import MyFavoriteRecipes from './components/MyFavoriteRecipes'
import MyRecipies from './components/MyRecipes'
import PopularRecipes from './components/PopularRecipes'
import PublicRecipes from './components/PublicRecipes'
import RecipeForm from './components/RecipeForm'
import IngredientList from './components/IngredientList'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
        <Route path='' element={<PopularRecipes/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/> 
          <Route path='favorite' element={<MyFavoriteRecipes/>}/>
          <Route path='pantry' element={<IngredientList/>}/>
          <Route path='myrecipes' element={<MyRecipies/>}/>
          <Route path='public' element={<PublicRecipes/>}/>
          <Route path='popular' element={<PopularRecipes/>}/>
          <Route path='create' element={<RecipeForm/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
