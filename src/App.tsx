import { PersonalDetails } from './Components/PersonalDetails';
import { WorkExperience } from './Components/WorkExperience';
import { Education } from './Components/Education';
import Img from './Components/Img';
import Navbar from './Components/Navbar';
import { Button,peronalDetailType,workExpType,educationType} from './Components/utils';
import Cvready  from './Components/Cvready';
import { useState } from 'react'
import PrintProvider,{Print,NoPrint} from 'react-easy-print'

function App() {

   const [peronalDetail,setPersonal] = useState<peronalDetailType>();
   const [workExp,setWorExp] = useState<workExpType>();
   const [workExpAdd,setWorExpAdd] = useState<workExpType>();
   const [education,setEdu] = useState<educationType>();
   const [eduAdd,setEduAdd] = useState<educationType>();
   const [submit,setSubmit] = useState<boolean>(false);  
   const [image,setImg] = useState()

   
  const handleSubmit = (e:React.ChangeEvent<EventTarget>) => {
      e.preventDefault();
      if(!peronalDetail!.name){
       return alert('name is required')
      }else{ return setSubmit(true) }
     
  }

//-------------------------------------


//-------------------------------------


  return (
    <>
    <PrintProvider>
       <NoPrint>
      <Navbar/>
     
      { !submit?   <div className='container p-4 '>

            <div className='row g-3 pt-5'>

                <h1><p>Personal Details</p></h1>
                <PersonalDetails
                setPersonal={setPersonal}
                /> 
                 <Img setImage = {setImg}/>
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
       

       : <Print name='CV'>
        <div className='container p-5 mt-4'>
          
          
         <Cvready
          img= {image}
          personalDetail = {peronalDetail!}
          workExperience = {workExp!}
          workExpAdd = {workExpAdd!}
          education = {education!}
          eduAdd = {eduAdd!}
         /> 
        
          
        </div>
         </Print>
      } 
        </NoPrint>
      </PrintProvider>
    </>
   

  );
}

export default App;

