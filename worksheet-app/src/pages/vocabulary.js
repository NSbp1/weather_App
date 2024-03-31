import React, {useState} from 'react';


const Vocabulary = () =>{
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
        console.log(userAnswer2);
        if( userAnswer2 === '1')
        {  setfeedback2Color('Green');
        setfeedback2('Correct');
        }else{
            setfeedback2Color('Red');
            setfeedback2('Incorrect');
        }
        
    }
    function handleSubmit3(event){
        if( userAnswer3 === '5')
        {
            setfeedback3Color('Green');
            setfeedback3('Correct');
            
        }else{
            setfeedback3Color('Red');
            setfeedback3('Incorrect');
        }
   

    }

    return(

   <div id = "questions"> 
    <p>enter only the number</p>
             <div className="question">
                    <p> Which country are we in?</p>
	                <p>1.Nigeria </p>
	                <p>2.South Africa</p>
	                <p>3.Zimbabwe</p>
                    <input
                    type="text"
                    value={userAnswer1}
                    onChange={(e) => setAnswer1(e.target.value) }
                    placeholder='Enter Your Answer for question 1'/>
                    <button type="submit" onClick={(e) => handleSubmit1()}>Submit</button>
                    <span Style = {{ color:feedback1Color}}>    {feedback1}</span>

                     <span id="vocabularyAnswerFeedback1"></span>
              </div>


 
            <div className="question">
                <p> who is our president?</p>
            	<p>1.C Ramaphosa </p>
	            <p>2.J Malema</p>
            	<p>3.E Motshekga</p>
                <input
                    type="text"
                    value={userAnswer2}
                    onChange={(e) => setAnswer2(e.target.value) }
                    placeholder='Enter Your Answer for question 1'/>
                <button type="submit" onClick={(e) => handleSubmit2()}>Submit</button>
                <span Style = {{ color:feedback2Color}}>    {feedback2}</span>
               <span id="vocabularyAnswerFeedback2"></span>
          </div>



 
    <div className="question">
        <p> Which one does not belong to the big five?</p>
	<p>1.lion </p>
	<p>2.buffalo</p>
	<p>3.rhino</p>
	<p>4.elaphants </p>
	<p>5.springbok</p>
    <input
                    type="text"
                    value={userAnswer3}
                    onChange={(e) => setAnswer3(e.target.value) }
                    placeholder='Enter Your Answer for question 1'/>
	
    <button type="submit" onClick={(e) => handleSubmit3()}>Submit</button>
                    <span Style = {{ color:feedback3Color}}>    {feedback3}</span>
        <span id="vocabularyAnswerFeedback3"></span>
    </div>
      
</div>


    );
}

export default Vocabulary;