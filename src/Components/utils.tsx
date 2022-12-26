import { type } from "@testing-library/user-event/dist/type"
import {ChangeEventHandler, MouseEventHandler } from "react"

export interface inputFields {
  id?:number,
  name: string  ,
  type: string,
  classNameLabel?: string,
  classname : string,
  classnameInput:string,
  placeholder?:string,
  value?:string,
  onChange?:ChangeEventHandler<HTMLInputElement> ,
  change?:string, 
}
export interface Buttons{
  type: 'submit' | 'reset' | 'button'
  className:string,
  name:string,
  onClick?:MouseEventHandler<HTMLButtonElement>  ,
  onSubmit?:ChangeEventHandler<HTMLInputElement>
}
export type peronalDetailType = {
  name:string,
  title:string,
  email:string,
  phone:number,
  city:string,
  about: string,
}

export interface workExpType  {
  map?: Function,
  company:string,
  position:string,
  start:string,
  end:string,
  description:string
}
export type educationType = { 
  map:Function,
  university:string,
  course:string,
  date:number,
  descriptionEdu:string
}

export  function InputField({type,name,classNameLabel,classnameInput,placeholder,value,onChange,classname }:inputFields) {
 
//  const {type,name,classNameLabel,classnameInput,placeholder,value,onChange,classname }= props
   
  return (
    <div className={classname}>
      <label className={classNameLabel}>{name}</label>
      
     <input
       className={classnameInput}
       type={type}
       name={name}
       placeholder={placeholder}
       value={value}
       onChange={onChange}
      />
    </div>
  )
}


export  function Button ({type,className,name,onClick,onSubmit}:Buttons) {
  // const {type,className,name,onClick} = props
    return (
      <button
         type={type} 
         className={className} 
         onClick={onClick}
        >
          {name} 
      </button>
    )
  }
