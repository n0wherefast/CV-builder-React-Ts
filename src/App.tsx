import { PersonalDetails } from './Components/PersonalDetails';
import { WorkExperience } from './Components/WorkExperience';
import { Education } from './Components/Education';
import Navbar from './Components/Navbar';
import { Button } from './Components/utils';
import Cvready from './Components/Cvready';
import {  useEffect, useState } from 'react';

function App() {

   const [peronalDetail,setPersonal] = useState<any>();
   const [workExp,setWorExp] = useState<any>();
   const [workExpAdd,setWorExpAdd] = useState<any>();
   const [education,setEdu] = useState<any>();
   const [eduAdd,setEduAdd] = useState<any>();
   const [submit,setSubmit] = useState<boolean>(false); 


useEffect(()=>{ 
 
},[])
   
  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if(!peronalDetail.name){
        alert('name is required')
      }else{ setSubmit(true) }
     
  }

//-------------------------------------

//-------------------------------------


  return (
    <>
      <Navbar/>
        <div className='container p-4 '>

            <div className='row g-3 pt-5'>

                <h1><p>Personal Details</p></h1>
                <PersonalDetails
                setPersonal={setPersonal}
                /> 

                <h1><p>Work Experience</p></h1>
                <WorkExperience
                setWorExp={setWorExp}
                setWorExpAdd={setWorExpAdd}
                />
                
                <h1><p>Education</p></h1>
                <Education
                setEdu={setEdu}
                setEduAdd = {setEduAdd}
                />
                <Button
                  type={"submit"}
                  className={"btn btn-outline-success d-grid gap-2 col-4 mx-auto"}
                  name={"Submit"}
                  onClick={handleSubmit}
                  />

            </div> 
            
          
        </div>
        <div className='container  mt-4 pb-5'>
          
         { submit? <Cvready
          personalDetail ={peronalDetail}
          workExperience = {workExp}
          workExpAdd = {workExpAdd}
          education = {education}
          eduAdd = {eduAdd}
          /> : null}
        </div>
             
    </>
   

  );
}

export default App;

// ToDo:




// input image 
// check type
// ToDo
