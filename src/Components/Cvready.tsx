import { it } from 'node:test'
import React from 'react'
interface dataInpunts {
 

  personalDetail: any,
  workExperience:any,
  workExpAdd:any,
  education:any,
  eduAdd:any,

  
}

export default function Cvready(props:dataInpunts ) {
  console.log(typeof props.workExperience)

          const { personalDetail,workExperience,education,workExpAdd,eduAdd} = props
          const {name,title,email,phone,city,about,image} = personalDetail
          const{company,position,start,end,description} = workExperience
          const{university,course,date,descriptionEdu} = education

         
         const wExpAdd = workExpAdd.map((item:any,index:any)=>{
          const {company,position,start,end,description} = item
           return <div key={index}>
              <h1 className='border ps-2 pt-2 pb-1 row'>Work Experience</h1>
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

        const edu = eduAdd.map((item:any,index:any)=>{
          const {university,course,date,descriptionEdu} =item
            return  <div key = {index}>
          <h1 className='border mt-3 ps-2 pt-2 pb-1 row'>Education</h1>
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
    <div className='row border ratio-1x2' >

      <div className=' border col-4'>
        <div className='m-2'>
          <h1>{name}</h1>
        </div>
        <div className='m-2'>
          <h4>{title}</h4>
        </div>
        <div className='m-4'>
        <img src={image} className="card-img-top" alt="..."/>
        </div>
        <div className='row  border  '>
            <h3 className=' pt-1 mt-1 pb-2 '>Personal Details</h3>
            <h4>Email</h4>
            <p>{email}</p>
            <h4>Phone</h4>
            <p>{phone}</p>            
            <h4>City</h4>
            <p>{city}</p>
            <h4>About Me</h4>
            <p>{about}</p>
        </div>
      </div>
      <div className=' col-8'>
        <div>
          <h1 className='border ps-2 pt-2 pb-1 row'>Work Experience</h1>
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
          <h1 className='border mt-3 ps-2 pt-2 pb-1 row'>Education</h1>
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
  )
}
