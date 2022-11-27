import { PersonalDetails } from './Components/PersonalDetails';
import { WorkExperience } from './Components/WorkExperience';
import { Education } from './Components/Education';
import Navbar from './Components/Navbar';
import { Button } from './Components/utils';
import Cvready from './Components/Cvready';
// import './App.css';
import {  useEffect, useState } from 'react';

function App() {

   const [peronalDetail,setPersonal] = useState<any>();
   const [workExp,setWorExp] = useState<any>([]);
   const [education,setEdu] = useState<any>();
   const [submit,setSubmit] = useState<boolean>(false); 




//------------------PROV-------------
console.log(workExp)  


//----------------PROV----------------

useEffect(()=>{ 
 
},[])
   
  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setSubmit(true) 
  }

//-------------------------------------

//-------------------------------------


  return (
    <>
        <Navbar/>
        <div className='container p-4 '>

            <form className='row g-3 pt-5'>

                <h1><p>Personal Details</p></h1>
                <PersonalDetails
                setPersonal={setPersonal}
        
                /> 
                <h1><p>Work Experience</p></h1>
                <WorkExperience
                setWorExp={setWorExp}
                />
                <h1><p>Education</p></h1>
                <Education
                setEdu={setEdu}
                />
                <Button
                  type={"submit"}
                  className={"btn btn-outline-success d-grid gap-2 col-4 mx-auto"}
                  name={"Submit"}
                  onClick={handleSubmit}
                  />

            </form> 
            
          
        </div>
        <div className='container  mt-4 pb-5'>
          
         { submit? <Cvready
          name = {peronalDetail.name}
          title = {peronalDetail.title}
          email = {peronalDetail.email}
          phone = {peronalDetail.phone}
          city = {peronalDetail.city}
          about = {peronalDetail.about}

          company = {workExp.company}
          description = {workExp.description}
          position = {workExp.position}
          start = {workExp.start}
          end = {workExp.end}

          course = {education.course}
          university = {education.university}
          date = {education.date}
          descriptionEdu = {education.descriptionEdu}

          /> : null}
        </div>
        
        
    </>
   

  );
}

export default App;
