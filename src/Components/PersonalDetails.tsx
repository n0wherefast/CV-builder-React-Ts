import { InputField , inputFields} from './utils'
import data from '../inputData.json'
import React, { useEffect, useState } from 'react'

interface funct {
  setPersonal:Function
}



export const PersonalDetails = ({setPersonal}:funct) => {

  const [value,setValue] = useState
   ({
      name:"",
      title:"",
      email:"",
      phone:"",
      city:"",
      about:"",
   })

  const Personal_Detail_Data_Reference:inputFields[] = data.Personal_Detail_Data_Reference

    
useEffect( ()=>{
 setPersonal(value)
 },[setPersonal,value])


  const onChangeHandler = (input: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
   setValue({ ...value, [input] : e.currentTarget.value})
  }
  
  return (
 
   <>
   {Personal_Detail_Data_Reference.map((item:inputFields ) =>{
      const {id,name,type,classNameLabel,classname,classnameInput,placeholder,value,change} = item
    return   <InputField
           key={id}
           name={name}
           type={type}
           classNameLabel={classNameLabel}
           classname={classname}
           classnameInput={classnameInput}
           placeholder={placeholder}
           value={value}
           onChange={onChangeHandler(change!)}
           />
   })}
  

   
     </>
     
   
 
  )
}
