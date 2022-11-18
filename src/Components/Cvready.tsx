import React from 'react'

export default function Cvready() {
  return (
    <div className='row ' >

      <div className=' bg-primary col-4'>
        <div className='m-2'>
          <h1>Nome</h1>
          <h1>Cognome</h1>
        </div>
        <div className='m-2'>
          <h4>Professione</h4>
        </div>
        <div className='m-4'>
        <img src="https://www.mrw.it/img/cope/0iwkf4_1609360688.jpg" className="card-img-top" alt="..."/>
        </div>
        <div className='row  bg-primary  '>
            <h3 className='bg-info pt-1 mt-1 pb-2 '>Personal Details</h3>
            <h4>Email</h4>
            <p>qwerty@Bmail.com</p>
            <h4>Phone</h4>
            <p>1234-1234</p>            
            <h4>City</h4>
            <p>Milan</p>
            <h4>About Me</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Voluptates at doloremque recusandae sunt porro itaque dolores
                fugiat doloribus! Enim,
            </p>
        </div>
      </div>
      <div className=' bg-info  col-8'>
        <div>
          <h1 className='bg-primary  ps-2 pt-2 pb-1 row'>Work Experience</h1>
          <h5>Company</h5>
          <p>Lorem ipsum dolor sit, </p>
          <h5>Position</h5>
          <p>Lorem ipsum dolor sit, </p>
          <div className=' d-inline-flex align-self-center'>
          <h5>Start:</h5> 12/34/1234000 <h5>End:</h5> <p>12/34/1234000</p>
          </div>
          <h5>Description</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Autem fuga expedita exercitationem debitis nobis aperiam, 
             rem maiores laboriosam saepe quo earum sapiente id eaque,
             reprehenderit quisquam voluptates labore ipsa ad?</p>
        </div>

        <div>
          <h1 className='bg-primary mt-3 ps-2 pt-2 pb-1 row'>Education</h1>
          <h5>University</h5>
          <p>Lorem ipsum dolor sit, </p>
          <h5>Course</h5>
          <p>Lorem ipsum dolor sit, </p>
          <div className=' d-inline-flex align-self-center'>
          <h5>Date:</h5> <p>12/34/1234000</p>
          </div>
          <h5>Description</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Autem fuga expedita exercitationem debitis nobis aperiam, 
             rem maiores laboriosam saepe quo earum sapiente id eaque,
             reprehenderit quisquam voluptates labore ipsa ad?
          </p>
        </div>
        

      </div>
      
    </div>
  )
}
