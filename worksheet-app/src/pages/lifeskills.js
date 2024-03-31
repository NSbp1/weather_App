import React, {useState} from 'react';

const Lifeskills = () =>{
    const[userAnswer1, setAnswer1] = useState('');
    const[userAnswer2, setAnswer2] = useState('');
    const[userAnswer3, setAnswer3] = useState('');
    const[feedback1,setfeedback1] = useState('');
    const[feedback2,setfeedback2] = useState('');
    const[feedback3,setfeedback3] = useState('');
    const[feedback1Color,setfeedback1Color] = useState('');
    const[feedback2Color,setfeedback2Color] = useState('');
    const[feedback3Color,setfeedback3Color] = useState('');

    function handleSubmit1(event){
        
        if(userAnswer1 === '2')
        {
            setfeedback1Color('Green');
            setfeedback1('Correct');
        }else{
            setfeedback1Color('Red');
            setfeedback1('Incorrect');
        }
        
        
    }

    function handleSubmit2(event){
        
        if( userAnswer2 === '3')
        {  setfeedback2Color('Green');
        setfeedback2('Correct');
        }else{
            setfeedback2Color('Red');
            setfeedback2('Incorrect');
        }
        
    }
    function handleSubmit3(event){
        if( userAnswer3 === '3')
        {
            setfeedback3Color('Green');
            setfeedback3('Correct');
            
        }else{
            setfeedback3Color('Red');
            setfeedback3('Incorrect');
        }
   

    }



    return(

<div id="question">
    <div className="question">
        <p>  Why is it important to brush your teeth?</p>
        <p>1.to save water </p>
	<p>2.to keep them clean</p>
	<p>3.to finish the brush</p>
    <input
                    type="text"
                    value={userAnswer1}
                    onChange={(e) => setAnswer1(e.target.value) }
                    placeholder='Enter Your Answer for question 1'/>
	
    <button type="submit" onClick={(e) => handleSubmit1()}>Submit</button>
                    <span Style = {{ color:feedback1Color}}>    {feedback1}</span>
       
    </div>


    <div className="question">
        <p> which one is a fruit?</p>
	<p>1.chicken, 2.milk, 3.orange, 4.spinach</p>
    <input
                    type="text"
                    value={userAnswer2}
                    onChange={(e) => setAnswer2(e.target.value) }
                    placeholder='Enter Your Answer for question 1'/>
	
    <button type="submit" onClick={(e) => handleSubmit2()}>Submit</button>
                    <span Style = {{ color:feedback2Color}}>    {feedback2}</span>
       
    </div>

 
    <div className="question">
        <p> why do we wash our hands?</p>
	<p>1.to eat</p>
	<p>2.to drink water</p>
	<p>3.to keep clean</p>
    <input
                    type="text"
                    value={userAnswer3}
                    onChange={(e) => setAnswer3(e.target.value) }
                    placeholder='Enter Your Answer for question 1'/>
	
    <button type="submit" onClick={(e) => handleSubmit3()}>Submit</button>
                    <span Style = {{ color:feedback3Color}}>    {feedback3}</span>
       
    </div>
  </div>
    );


}

export default Lifeskills;