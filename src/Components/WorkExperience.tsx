import React,{ useEffect, useState} from 'react'
import data from '../inputData.json'
import { InputField, inputFields,Button } from './utils'

export const WorkExperience = ({setWorExp}: any ) => {

  const [value,setValue] = useState<any> ({company:'',position:'',start:'',end:'',description:''})
  const [add,setAdd] = useState<string[]> ([]);
  const Work_Experience_Data_Reference : any = data.Work_Experience_Data_Reference;

  useEffect( ()=> {
   setWorExp(value)
  },[setWorExp,value])

const handleClickAdd = () => {
    setAdd(add =>[...add, 'item'])
}

const handleClickRem = () => {
  setAdd(item => item.filter((_, index) => index !==0))
}
console.log()
const onChangeHandler = (input: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue( { ...value, [input] :e.currentTarget.value})
 
}

// 
  return (
    <>
    { Work_Experience_Data_Reference.map((item:inputFields ) => {
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
    
    { <div className='classname'>
       <Button className={"btn btn-outline-success m-2"} onClick={handleClickAdd} type={"button"} name={"Add"}/>
    </div> }

  {add.map((item:string,index:number ) => {
      
     return <div key={index} >  
        {Work_Experience_Data_Reference.map((item:inputFields  ) => {

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

        <div className='classname'>
          <Button className={"btn btn-outline-success m-2"} onClick={handleClickAdd} type={"button"} name={"Add"}/>
          <Button className={"btn btn-outline-danger"} onClick={handleClickRem} type={"button"} name={"Remove"}/>
        </div> 
      </div>

  })} 

      </>
  )
}

