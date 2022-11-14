import { PersonalDetails } from './Components/PersonalDetails';
import Navbar from './Components/Navbar';
import './App.css';

function App() {
  return (
    <>
        <Navbar/>
        <div className='container'>
            <form className='row g-3'>
              <h1><p>Personal Details</p></h1>
              <PersonalDetails/>
            </form>
        </div>
        
    </>
   

  );
}

export default App;
