import './App.css';
import { LandingPage } from './Pages/LandingPage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Login } from './Pages/Login';
import { Verification } from './Pages/SignUp/Verification/Verification';
import { UserAuthContextProvider } from './Context/authContext';

function App() {
  return (
    <Router>
      <div className="App">
      <UserAuthContextProvider>
        <Routes>
          <Route path='/' element={ <LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/verification' element={<Verification />} />
        </Routes>
      </UserAuthContextProvider>


        
      </div>
    </Router>
  );
}

export default App;
