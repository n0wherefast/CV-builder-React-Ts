import React from 'react'
interface dataInpunts {
  name:string ,
  title : string,
  email : string,
  phone : number,
  city : string,
  about : string,
  company : string,
  description : string,
  position : string,
  start : number,
  end : number,
  course : string,
  university : string,
  date :number,
  descriptionEdu : string,
  
}

export default function Cvready(props:dataInpunts ) {
  const {
          name,
          title,
          email,
          phone,
          city,
          about,
          company,
          description,
          position,
          start,
          end,
          course,
          university,
          date,
          descriptionEdu,  } = props

  return (
    <div className='row ' >

      <div className=' bg-primary col-4'>
        <div className='m-2'>
          <h1>{name}</h1>
        </div>
        <div className='m-2'>
          <h4>{title}</h4>
        </div>
        <div className='m-4'>
        <img src="https://www.mrw.it/img/cope/0iwkf4_1609360688.jpg" className="card-img-top" alt="..."/>
        </div>
        <div className='row  bg-primary  '>
            <h3 className='bg-info pt-1 mt-1 pb-2 '>Personal Details</h3>
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
      <div className=' bg-info  col-8'>
        <div>
          <h1 className='bg-primary  ps-2 pt-2 pb-1 row'>Work Experience</h1>
          <h5>Company</h5>
          <p>{company} </p>
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

        <div>
          <h1 className='bg-primary mt-3 ps-2 pt-2 pb-1 row'>Education</h1>
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
        

      </div>
      
    </div>
  )
}
