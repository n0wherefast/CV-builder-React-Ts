import { it } from 'node:test'
import React from 'react'
import {Button,peronalDetailType,workExpType,educationType} from './utils'
import PrintProvider,{Print,NoPrint} from 'react-easy-print'


interface dataInpunts { 
    personalDetail: peronalDetailType,
    workExperience:workExpType,
    workExpAdd:workExpType,
    education:educationType,
    eduAdd:educationType,
    img:any
  }

export default function Cvready(props:dataInpunts) {


          const { personalDetail,workExperience,education,workExpAdd,eduAdd,img} = props
          const {name,title,email,phone,city,about} = personalDetail
          const{company,position,start,end,description} = workExperience
          const{university,course,date,descriptionEdu} = education
          
    
          
         const wExpAdd = workExpAdd.map!((item:workExpType,index:number)=>{
          const {company,position,start,end,description} = item
           return <div key={index}>
              <h1 className='border-bottom border-top ps-2 pt-2 pb-1 row'>Work Experience</h1>
              <h5>Company</h5>
              <p>{company} </p>   
              <h5>Position</h5>
              <p>{position} </p>
              <div className=' d-inline-flex align-self-center'>
                <div></div>
              <h5>Start:</h5> {start}<h5>End:</h5> <p>{end}</p>
              </div>
              <h5>Description</h5>
              <p>{description}</p>
            </div>
            })

        const edu = eduAdd.map((item:educationType,index:number)=>{
          const {university,course,date,descriptionEdu} =item
            return  <div key = {index}>
          <h1 className='border-bottom border-top mt-3 ps-2 pt-2 pb-1 row'>Education</h1>
          <h5>University</h5>
          <p>{university} </p>
          <h5>Course</h5>
          <p>{course}</p>
          <div className=' d-inline-flex align-self-center'>
          <h5>Date:</h5> <p>{date}</p>
          </div>
          <h5>Description</h5>
          <p>{descriptionEdu}</p>
        </div>
            })
          
        

  return (
    <PrintProvider>
      <NoPrint>
       <Print name='Cv' >
    <div className='row border mb-4 ' >

      <div className='col-4 w-100'>
         <div className=' m-5 w-50'>
        <img src={img} className="card-img-top " alt="..."/>
        </div>
        <div className='m-2 '>
          <h1>{name}</h1>
        </div>
        <div className='m-2'>
          <h4>{title}</h4>
        </div>
       
        <div className='row  border-bottom border-top  '>
            <h3 className='border-bottom pt-1 mt-1 pb-2 '>Personal Details</h3>
            <h4>Email</h4>
            <p >{email}</p>
            <h4>Phone</h4>
            <p>{phone}</p>            
            <h4>City</h4>
            <p>{city}</p>
            <h4>About Me</h4>
            <p>{about}</p>
        </div>
      </div>
      <div className=' col-12'>
        <div>
          <h1 className='border-bottom ps-2 pt-2 pb-1 row'>Work Experience</h1>
          <h5>Company</h5>
          <p>{company} </p>   
          <h5>Position</h5>
          <p>{position} </p>
          <div className=' d-inline-flex align-self-center'>
            <div></div>
          <h5>Start:</h5> {start}<h5>End:</h5> <p>{end}</p>
          </div>
          <h5>Description</h5>
          <p>{description}</p>
        </div>
             {wExpAdd}
        <div>
          <h1 className='border-bottom border-top mt-3 ps-2 pt-2 pb-1 row'>Education</h1>
          <h5>University</h5>
          <p>{university} </p>
          <h5>Course</h5>
          <p>{course}</p>
          <div className=' d-inline-flex align-self-center'>
          <h5>Date:</h5> <p>{date}</p>
          </div>
          <h5>Description</h5>
          <p>{descriptionEdu}</p>
        </div>
        {edu}
        
        
    
      </div>
    
    </div> 
   </Print>
     <NoPrint>
     <Button
      type={"submit"}
      className={"btn btn-outline-success d-grid gap-2 col-4 mx-auto"}
      name={"Print/Pdf"}
      onClick={()=>window.print()}
      />
      </NoPrint>
      </NoPrint>
      </PrintProvider>
  )
}
