import React,{useEffect, useState} from 'react'
import data from '../inputData.json'
import { InputField, inputFields,Button } from './utils'

export  const Education = ({func}:any) => {

const [value,setValue] = useState ({ course:"",university:"",date:"",description:"" })
const [add,setAdd] = useState<string[]> ([]);
const Education_Data_Reference : any = data.Education_Data_Referece;


const onChangeHandler = (input: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue({ ...value, [input] :e.currentTarget.value})
 }

 useEffect( ()=>{
    func(value)
  },[value])


  const handleClickAdd = () =>{
    setAdd(add =>[...add, 'item'])
}

const handleClickRem = () =>{
  setAdd(item => item.filter((_, index) => index !==0))
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


    {add.map((item:string) => {

return <div  key={item}> 
        {Education_Data_Reference.map((item:inputFields ) => {
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
