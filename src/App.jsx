import React, { useState } from 'react'
import {FaTimes,FaBars } from 'react-icons/fa';

function App() { 

    const messages = [
        "Learn React ⚛️",
        "Invest your new income 🤑",
        "Master JavaScript 📜",
        "Contribute to open-source projects 🌍",
        "Build your portfolio website 🌐",
        "Network with industry professionals 🤝",
        "Learn backend development with Node.js 🖧",
        "Ace technical interviews 🎯",
        "Apply for jobs 💼"
      ];

      const [step,setStep] = useState(0);
      const [close,setClose] = useState(true)
     

      
      function handleNext(){
        if(step < messages.length -1 ){
            setStep((s) => s + 1 );
            
        }
       
      }
      function handlePrevious(){
        if(step > 0 ){
            setStep((s) => s - 1);
          
            
        }
      }



      console.log(step);


  return (
   <>
        <button className='close'>
            {
                close ?  <FaTimes onClick={() => setClose(!close)} />
                 : <FaBars onClick={() => setClose(!close)}  />
            }
        </button>
   
   {
        close && (
            <div className="steps">

      {/*  Hard coding staf 

      <div className="numbers">
        <div className={step >= 0 ? 'active step-1' : 'step-1'}>1</div>
        <div className={step >= 1 ? 'active step-2' : 'step-1'}>2</div>
        <div className={step >= 2 ? 'active step-3' : 'step-1'}>3</div>
      </div>
      <p className="message">{messages[step]}</p> 
      */}

          <div className='numbers'> 
      {
        messages.map((_, index) => (  
                <div className='numbers' key={index}>
                    <div
                    className={`step ${index <= step ? 'active' : ''}`}>
                        {index+1}
                    </div>
                    </div>
                ))}
                </div>

        <p className="message">{messages[step]}</p>

      <div className="buttons">
        <button className="previous" onClick={handlePrevious} disabled = {step === 0}>Previous</button>
        <button className="next" onClick={handleNext} disabled = {step === (messages.length -1)}>Next</button>
      </div>
    </div>
        )
        
    }

   </>
  )
}

export default App
