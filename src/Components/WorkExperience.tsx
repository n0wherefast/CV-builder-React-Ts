import React,{ useEffect, useState} from 'react'
import data from '../inputData.json'
import { InputField, inputFields,Button } from './utils'

export const WorkExperience = ({setWorExp,setWorExpAdd}: any ) => {


  const [value,setValue] = useState<any> ({company:'',position:'',start:'',end:'',description:''})
  const [val,setVal] = useState ([])
  const Work_Experience_Data_Reference : any = data.Work_Experience_Data_Reference;

  useEffect( ()=> {
   setWorExp(value)
   setWorExpAdd(val)
  },[setWorExp,value,val,setWorExpAdd ])

const handleClickAdd = () => {
    const add:any =[...val,[]]
    setVal(add)
}

const handleClickRem = () => {
  setVal(item => item.filter((_, index) => index !==0)) 
}

const onChangeHandler = (input: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue({...value,[input] : e.currentTarget.value})  
 }

const onChangeHand = (event:any,i:any,input:string) => {
  const inputData:any = [...val]
  inputData[i][input]=event.target.value;
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


    { val.map((data:any,i:any,index:any)=>{
     
      return  <React.Fragment key={index}>
        {Work_Experience_Data_Reference.map((item:any) => {
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
               onChange={(e:any)=>onChangeHand(e,i,change)}
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

