import data from '../inputData.json'
import React, {useState,useEffect} from 'react'


function Img({setImage}:any):JSX.Element {

    const[img,setImg] = useState<File | null>();
    const [preview,setPreview] = useState<string | null>()  
    const {name,type,classNameLabel,classname,classnameInput,placeholder}  = data.Image[0];
  
useEffect(()=>{
  if(img){
    const reader = new FileReader();
    reader.onload = () =>{
      setPreview(reader.result as string)
    }
    reader.readAsDataURL(img);
  } else {setPreview(null)}
  setImage(preview)

},[img, preview, setImage])


const imageHandler = (e:any) =>{
  const file = e.target.files![0]
            if(file && file.type.substr(0, 5) === "image") {
              setImg(file);
            } else {
              setImg(null)
            }
}


  return (
    <>
     <div className={classname}>
      <label className={classNameLabel}>{name}</label>
      
     <input
       className={classnameInput}
       type={type}
       name={name}
       accept="image/*"
       placeholder={placeholder}
       onChange= {imageHandler}
      />
    </div>
    </>
  )
}

export default Img
