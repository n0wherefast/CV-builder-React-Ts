import React,{ SetStateAction, useEffect, useState} from 'react'
import data from '../inputData.json'
import { InputField, inputFields,Button,workExpType } from './utils'

interface funct {
  setWorExp:Function,
  setWorExpAdd:Function
}

export const WorkExperience = ({setWorExp,setWorExpAdd}: funct ) => {


  const [value,setValue] = useState<workExpType> ({company:'',position:'',start:'',end:'',description:''})
  const [val,setVal] = useState<object[]> ([])
  const Work_Experience_Data_Reference : inputFields[]= data.Work_Experience_Data_Reference;

  useEffect( ()=> {
   setWorExp(value)
   setWorExpAdd(val)
  },[setWorExp,value,val,setWorExpAdd ])

const handleClickAdd = () => {
    const add:SetStateAction<object[]> =[...val,[]]
    setVal(add)
}

const handleClickRem = () => {
  setVal(item => item.filter((_, index) => index !==0)) 
}

const onChangeHandler = (input: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue({...value,[input] : e.currentTarget.value})  
 }

const onChangeHand = (e:React.ChangeEvent<HTMLInputElement>,i:number,input:string) => {
  const inputData:any = [...val]
  inputData[i][input] = e.target!.value;
  setVal(inputData) 
 }

// 
  return (
    <>
    { Work_Experience_Data_Reference.map((item:inputFields  ) => {
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
  }) 
  }
    
    { <div className='classname'>
        <Button className={"btn btn-outline-success m-2"} onClick={handleClickAdd} type={"button"} name={"Add"}/>
    </div> }


    { val.map((item:object,i:number,index:object[])=>{
     
      return  <React.Fragment key={i}>
        {Work_Experience_Data_Reference.map((item:inputFields) => {
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
               onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onChangeHand(e,i,change!)}
       />
     }) }
     <div className='classname'>
                            <Button className={"btn btn-outline-success m-2"} onClick={handleClickAdd} type={"button"} name={"Add"}/>
                            <Button className={"btn btn-outline-danger"} onClick={handleClickRem} type={"button"} name={"Remove"}/>
                          </div> 
      </React.Fragment>
      

    })
    
  }

   </>
  )
}

