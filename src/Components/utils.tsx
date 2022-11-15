
export interface inputFields {
  id?:number,
  name: string,
  type:string,
  classNameLabel:string,
  classname : string,
  classnameInput:string,
  placeholder:string,
  value:string,
  onChange:any,
  change?:string,

}
interface Buttons{
  type:any,
  className:string,
  name:string,
  onClick?:any,
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


export  function Button({type,className,name,onClick}:Buttons) {
  // const {type,className,name,onClick} = props
    return (
      <button
        type={type} 
        className={className} 
        onClick={onClick}>
          {name} 
          </button>
    )
  }
