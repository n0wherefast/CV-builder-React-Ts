import React,{ useEffect, useState} from 'react'
import data from '../inputData.json'
import { InputField, inputFields } from './utils'

export const WorkExperience = ({func}:any) => {


  const [value,setValue] = useState ({ company:"",position:"",start:"",end:"",description:"" })

  useEffect( ()=>{
    func(value)
  },[value])

const Work_Experience_Data_Reference : any = data.Work_Experience_Data_Reference;


const onChangeHandler = (input: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue({ ...value, [input] :e.currentTarget.value})
 }

  return (
    <>
    {Work_Experience_Data_Reference.map((item:inputFields ) =>{
       const {id,name,type,classNameLabel,classname,classnameInput,placeholder,value,change} = item
       return <InputField
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
