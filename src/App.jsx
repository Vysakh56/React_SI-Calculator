import './App.css'
import {TextField,Stack,Button} from '@mui/material';
import {useState} from 'react';

function App() {



  const [principle, setPrinciple] = useState(0)
  const [rate,setRate] =useState(0)
  const [year, setYear] =useState(0)
  const [interest, setInterest] = useState(0)

  const [isPrincipleInvalid,setIsPrincipleInvalid] = useState(false)
  const [isRateInvalid,setIsRateInvalid] = useState(false)
  const [isYearInvalid,setIsYearInvalid] = useState(false)
// input validation function
const validateInput =(inputTag) =>{
  // object destructring 
  const {name,value} = inputTag
  // console.log(name,value);
  // console.log(!!value.match(/^\d*\.?\d+$/))

  if(name=="principle"){
    setPrinciple(value)
    !!value.match(/^\d*\.?\d+$/) ? setIsPrincipleInvalid(false) : setIsPrincipleInvalid(true)
  }
  else if(name=="rate"){
    setRate(value)
    !!value.match(/^\d*\.?\d+$/) ? setIsRateInvalid(false) : setIsRateInvalid(true)
  }
  else if(name=="year"){
    setYear(value)
    !!value.match(/^\d*\.?\d+$/) ? setIsYearInvalid(false) : setIsYearInvalid(true)
  }
}

  const flexCenter = 'd-flex justify-content-center align-items-center';

  const handleCalculate =(e)=>{
    e.preventDefault();
    console.log("Inside handleCalculate function");
    if(principle && rate && year){
      setInterest(principle*rate*year/100)
    }
    else{
      alert("Please fill the form completely")
    }
    }

    const handleReset =()=>
    {
      setPrinciple(0)
      setRate(0)
      setYear(0)
      setInterest(0)
      setIsPrincipleInvalid(false)
      setIsRateInvalid(false)
      setIsYearInvalid(false)
    }


  return (
    <div style={{minHeight:'100vh',width:'100%'}} className={`${flexCenter} bg-dark`}>
      <div style={{width:'600px'}}className='bg-light rounded p-5 '>
        <h1 className={flexCenter}>Simple Interest Calculator</h1>
        <p className={flexCenter}>Calculate your simple interest</p>
        <div className={`${flexCenter} flex-column text-light  bg-warning shadow p-3 rounded`}>
            <h1>₹ {interest}</h1>
            <p className='fw-bolder'>Total Simple Interest </p>
        </div>
        <form className="mt-5">
          <div className="mt-3">
           <TextField value ={principle || ""} onChange={e=>validateInput(e.target)} name="principle" className='w-100' id="filled-basic1" label="Principle Amount" variant="filled" />
          </div>
          {
            isPrincipleInvalid &&
            <div className="mb-3 text-danger fw-bolder">Invalid Principle Amount</div>
          }

          <div className="mt-3">
           <TextField value ={rate || ""} onChange={e=>validateInput(e.target)} name="rate" className='w-100' id="filled-basic2" label="Rate of Interest(p.a) %" variant="filled" />
          </div>
          {
             isRateInvalid &&
             <div className="mb-3 text-danger fw-bolder">Invalid Rate</div>
          }

          <div className="mt-3">
           <TextField value ={year || ""} onChange={e=>validateInput(e.target)} name="year" className='w-100' id="filled-basic3" label="Time Period (Yr)" variant="filled" />
          </div>
          {
            isYearInvalid &&
            <div className="mb-3 text-danger fw-bolder">Invalid Year</div>
          }


          <Stack direction="row" spacing={2} style={{margin:"10px"}}>
            <Button disabled={isPrincipleInvalid || isRateInvalid || isYearInvalid} type="submit" onClick={handleCalculate} style={{width:"50%", height:"70px"}} className='bg-dark' variant="contained">Calculate</Button>
            <Button onClick={handleReset} style={{width:"50%", height:"70px"}} variant="outlined">Reset</Button>
          </Stack>

        </form>
        </div>
    </div>
  )
}

export default App
