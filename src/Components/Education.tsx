import React,{useEffect, useState} from 'react'
import data from '../inputData.json'
import { InputField, inputFields } from './utils'

export  const Education = ({func}:any) => {

const [value,setValue] = useState ({ course:"",university:"",date:"",description:"" })
const Education_Data_Referece : any = data.Education_Data_Referece;


const onChangeHandler = (input: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue({ ...value, [input] :e.currentTarget.value})
 }

 useEffect( ()=>{
    func(value)
  },[value])

  return (
    <>
    {Education_Data_Referece.map((item:inputFields ) =>{
const {id,name,type,classNameLabel,classname,classnameInput,placeholder,value,change} = item
      return  <InputField
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
