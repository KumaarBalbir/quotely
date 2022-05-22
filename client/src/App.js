
import './App.css';
import NavBar from './components/NavBar';
import {routes} from './Routes';
import {useRoutes} from 'react-router';

function App() {
  const element=useRoutes(routes);
  return (
    <div className="App">
     {/* <Login/> */}
     {/* <Signup/> */}
     {/* <Profile/> */}
     {/* <CreatQuote/> */}
     <NavBar/>
    {element}
    </div>
  );
}

export default App;
