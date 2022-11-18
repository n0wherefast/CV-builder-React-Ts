import { PersonalDetails } from './Components/PersonalDetails';
import { WorkExperience } from './Components/WorkExperience';
import { Education } from './Components/Education';
import Navbar from './Components/Navbar';
import { Button } from './Components/utils';
import Cvready from './Components/Cvready';
// import './App.css';
import {  useEffect, useState } from 'react';

function App() {

   const [value,setValue] = useState<any>();
   const [workExp,setWorExp] = useState<any>();
   const [education,setEdu] = useState<any>();
   const [submit,setSubmit] = useState<boolean>(false); 


  const pullData = (data:object) => {
     setValue(data)
  }

  const pullDataExp = (data:object) => {
     setWorExp(data)
  }
  const pullDataEdu = (data:object) => {
     setEdu(data)
  }
console.log(workExp)

useEffect(()=>{
 
  
},[value])
   
  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      console.log(value, workExp,education.course)
      
  }

  return (
    <>
        {/* <Navbar/> */}
        <div className='container p-3'>

            {/* <form className='row g-3'>

                <h1><p>Personal Details</p></h1>
                <PersonalDetails
                func={pullData}
                /> 
                <h1><p>Work Experience</p></h1>
                <WorkExperience
                func={pullDataExp}
                />
                <h1><p>Education</p></h1>
                <Education
                func={pullDataEdu}
                />
                <Button
                  type={"submit"}
                  className={"btn btn-outline-success d-grid gap-2 col-4 mx-auto"}
                  name={"Submit"}
                  onClick={handleSubmit}
                  />

            </form> */}
           
           <Cvready/>
        </div>
        
    </>
   

  );
}

export default App;
