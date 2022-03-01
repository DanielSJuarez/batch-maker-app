import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate()
  // const [auth, setAuth] = useState(!!Cookies.get('Authorization'));

  return (
    <div className="App">
        I am the app
    </div>
  );
}

export default App;
