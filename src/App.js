import './App.css';
import { useState } from  "react"

function App (){

 const [lowerLimit,setLowerLimit] = useState("")
 const [upperLimit,setUpperLimit] = useState("")
const  [generateNum, setGenerateNum] = useState(0)

   const handleGenerate =(e)=>{
     const min = Number(lowerLimit)
     const max = Number(upperLimit)

     if(max > min) {
      const number = Math.floor(Math.random() * (max-min)  + min)
      setGenerateNum(number)
     }
   }


   const handleLowInput = (e) => {
     const lowValue = e.target.value
     setLowerLimit(lowValue)
     console.log("lower",typeof(lowValue))

   }

   const handleUpInput = (e) => {
    const UpValue = e.target.value
    setUpperLimit(UpValue)
    console.log("upper",typeof(UpValue))

   }
 
   const handleClear = () =>{
      setGenerateNum(0) 
      setUpperLimit(0)
      setLowerLimit(0)
  }

  return(
    <div>
      <h3  className="App">Create a project to generate a random number.</h3>
       <h1>{generateNum}</h1>

       <div className="main">
     <label htmlFor="">Lower</label>
     <input onChange={handleLowInput} type={lowerLimit} />
  
     <label htmlFor="">Upper</label>
    <input onChange={handleUpInput}  type={upperLimit}/>
    
       </div>
       <div className='btn'>
       <button onClick={handleGenerate} className='green'>Generate</button>
       <button onClick={handleClear} className='gray'>Clear</button>
       </div>
    </div>
  )
}



export default App;
