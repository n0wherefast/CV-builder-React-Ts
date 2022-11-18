import { InputField , inputFields} from './utils'
import data from '../inputData.json'
import React, { useEffect, useState } from 'react'


export const PersonalDetails = ({func}:any) => {

  const [value,setValue] = useState
   ({
      name:"",
      title:"",
      email:"",
      phone:"",
      city:"",
      about:"",
   })



  let Personal_Detail_Data_Reference:any = data.Personal_Detail_Data_Reference
    
  useEffect( ()=>{
   func(value)
 },[value])

 

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
