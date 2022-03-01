import { Outlet, useNavigate } from 'react-router-dom';
import {useState} from 'react'
import Cookies from 'js-cookie';
import './App.css';
import Header from './components/Header';
import RecipeNavBar from './components/RecipeNavBar';

function App() {
  const navigate = useNavigate()
  const [auth, setAuth] = useState(!!Cookies.get('Authorization'));

  return (
    <div className="App">
      <Header auth={auth} setAuth={setAuth} navigate={navigate}/>
      <RecipeNavBar/>
      <Outlet context={[auth, setAuth, navigate]}/>
    </div>
  );
}

export default App;
