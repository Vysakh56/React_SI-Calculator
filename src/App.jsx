import './App.css'
import {TextField,Stack,Button} from '@mui/material';
import {useState} from 'react';

function App() {

  const [principle, setPrinciple] = useStte(0)
  const [rate,setRate] =useState(0)
  const [year, setYear] =useState(0)
  const [interest, setInterest] = useState(0)

  const flexCenter = 'd-flex justify-content-center align-items-center';

  const handleCalculate =(e)=>{
    e.preventDefault();
    console.log("Output");
    }


  return (
    <div style={{minHeight:'100vh',width:'100%'}} className={`${flexCenter} bg-dark`}>
      <div style={{width:'600px'}}className='bg-light rounded p-5 '>
        <h1 className={flexCenter}>Simple Interest Calculator</h1>
        <p className={flexCenter}>Calculate your simple interest</p>
        <div className={`${flexCenter} flex-column text-light  bg-warning shadow p-3 rounded`}>
            <h1>₹ 1000</h1>
            <p className='fw-bolder'>Total Simple Interest </p>
        </div>
        <form className="mt-5">
          <div className="mt-3">
           <TextField className='w-100' id="filled-basic" label="Principle Amount" variant="filled" />
          </div>

          <div className="mt-3">
           <TextField className='w-100' id="filled-basic" label="Rate of Interest(p.a) %" variant="filled" />
          </div>

          <div className="mt-3">
           <TextField className='w-100' id="filled-basic" label="Time Period (Yr)" variant="filled" />
          </div>

          <Stack direction="row" spacing={2} style={{margin:"10px"}}>
            <Button type="submit" onClick={handleCalculate} style={{width:"50%", height:"70px"}} className='bg-dark' variant="contained">Calculate</Button>
            <Button style={{width:"50%", height:"70px"}} variant="outlined">Reset</Button>
          </Stack>

        </form>
        </div>
    </div>
  )
}

export default App
