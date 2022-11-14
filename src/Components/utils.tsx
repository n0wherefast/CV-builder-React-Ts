
export interface inputFields {
  id?:number,
  name: string,
  type:string,
  classNameLabel:string,
  Classname : string,
  classnameInput:string,
  placeholder:string,
  value:string,
  onChange:any,
  change?:string,

}

export  function InputField(props:inputFields) {
  return (
    <div className={props.Classname}>
      <label className={props.classNameLabel}>{props.name}</label>
      
      <input
       className={props.classnameInput}
       type={props.type}
       name={props.name}
       placeholder={props.placeholder}
       value={props.value}
       onChange={props.onChange}
    
        />
    </div>
  )
}


export  function button() {
    return (
      <div>
        
      </div>
    )
  }
