import { InputField , inputFields} from './utils'
import data from '../inputData.json'
import React, { useState } from 'react'


export const PersonalDetails = () => {

   const [value,setValue] = useState<object>
   ({
      name:"",
      title:"",
      email:"",
      phone:"",
      city:"",
      about:"",
   })
 
  let Personal_Detail_Data_Reference:any = data.Personal_Detail_Data_Reference
  console.log( value)
  
   
  
//   interface inputFields {
//      id: number,
//      name: string,
//      type:string,
//      classNameLabel:string,
//      Classname : string,
//      classnameInput:string,
//      placeholder:string,
//      value:string,
//      onChange():void,
//   }

  const onChangeHandler = (input: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
   setValue({ ...value, [input] :e.currentTarget.value})
  }
  
  return (
 
   <>
   {Personal_Detail_Data_Reference.map((item:inputFields ) =>(
       <InputField
           key={item.id}
           name={item.name}
           type={item.type}
           classNameLabel={item.classNameLabel}
           Classname={item.Classname}
           classnameInput={item.classnameInput}
           placeholder={item.placeholder}
           value={item.value}
           onChange={onChangeHandler(item.change!)}
           />
     ))}
     </>
     
   
 
  )
}
