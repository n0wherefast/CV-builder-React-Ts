import React,{useEffect, useState} from 'react'
import data from '../inputData.json'
import { InputField, inputFields,Button } from './utils'

export  const Education = ({setEdu,setEduAdd}:any) => {

const [value,setValue] = useState<object> ({ course:"",university:"",date:"",description:"" })
const [val,setVal] = useState ([]);
const Education_Data_Reference : any = data.Education_Data_Referece;


const onChangeHandler = (input: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue({...value,[input] : e.currentTarget.value})  
 }
 
 useEffect( ()=>{
     setEdu(value)
     setEduAdd(val)
  },[setEdu ,value,setEduAdd,val])


  const handleClickAdd = () =>{
    const add:any = [...val,[]]
    setVal(add)
}

const handleClickRem = () =>{
  setVal(item => item.filter((_, index) => index !==0))
}

const onChangeHand = (event:any,i:any,input:string) => {
  const inputData:any = [...val]
  inputData[i][input]=event.target.value;
  setVal(inputData)
 
 }


  return (
    <>
    {Education_Data_Reference.map((item:inputFields ) =>{
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

   <div className='classname'>
       <Button className={"btn btn-outline-success m-2"} onClick={handleClickAdd} type={"button"} name={"Add"}/>
    </div>


    { val.map((data:any,i:any)=>{
   
     return  <React.Fragment key={i}>
       {Education_Data_Reference.map((item:any) => {
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
