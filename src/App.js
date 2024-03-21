import {useState} from 'react'
import './App.css';
const messages=[
  "Learn Raect",
  "Apply for job",
  "Invest your new Income"
]

function App() {
  const [step, setStep] = useState(1);
  let [isOpen, setIsopen] = useState(true)

  function handelNext(){
    if(step < 3 ){   
        setStep(s => s + 1)
    }   
  }
  function handelPrevious(){
    if(step > 1 ){
    setStep( s => s - 1)
    }
  }
  
  

  return (  
    <>
        <button className='btn' onClick={()=>setIsopen(!isOpen)}>&times;</button>
        {isOpen && (

          <div className="steps">
              <div className='numbers'>
                  <div className={ step >= 1 ? 'active' : ""}>1</div>
                  <div className={ step >= 2 ? 'active' : ""}>2</div>
                  <div className={ step >= 3 ? 'active' : ""}>3</div>
              </div>
              <p className='message'>step {step}: { messages[step - 1]}</p>
              <div className='buttons'>
                <button onClick={handelPrevious}>Previous</button>
                <button onClick={ handelNext}>Next</button>
  
              </div>
          </div>
        )}
    
    </>
  );
}

export default App;
