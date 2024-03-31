
import React, {useState} from 'react';


const Mathematics = () =>{  
   
    const[userAnswer1, setAnswer1] = useState('');
    const[userAnswer2, setAnswer2] = useState('');
    const[userAnswer3, setAnswer3] = useState('');
    const[feedback1,setfeedback1] = useState('');
    const[feedback2,setfeedback2] = useState('');
    const[feedback3,setfeedback3] = useState('');
    const[feedback1Color,setfeedback1Color] = useState('');
    const[feedback2Color,setfeedback2Color] = useState('');
    const[feedback3Color,setfeedback3Color] = useState('');


   
        function checkMathAnswer(num1,num2,operator,userAnswer){
            let correctAnswer;

            switch (operator){
                case '+':
                    correctAnswer = parseInt(num1) + parseInt(num2);
                    break;
                case '-':
                    correctAnswer = parseInt(num1) - parseInt(num2);
                    break;
                case '*':
                    correctAnswer = parseInt(num1) * parseInt(num2);
                    break;    
                case '/':
                    correctAnswer = parseInt(num1) / parseInt(num2);
                    break;
            }

            if (parseInt(userAnswer) === correctAnswer){
                return'Correct';
                
            }else{
                return 'Incorrect';
            }

        }

        function handleSubmit1(event){
            //event.preventDefault();
            const result = checkMathAnswer(2,2,'+',userAnswer1);
            if( result === 'Correct')
            {
                setfeedback1Color('Green');
            }else{
                setfeedback1Color('Red');
            }
            setfeedback1(result);
            
        }
        function handleSubmit2(event){
            //event.preventDefault();
            const result = checkMathAnswer(6,2,'+',userAnswer2);
            if( result === 'Correct')
            {
                setfeedback2Color('Green');
            }else{
                setfeedback2Color('Red');
            }
            setfeedback2(result);
        }
        function handleSubmit3(event){
           // event.preventDefault();
            const result = checkMathAnswer(14,2,'+',userAnswer3);
            if( result === 'Correct')
            {
                setfeedback3Color('Green');
                
            }else{
                setfeedback3Color('Red');
            }
            setfeedback3(result);

        }


        return(
            
            <div id="questions">
                <h2>Question 1</h2>
                <div className="question">
                    <p> What is 2 + 2?</p>
                    <input
                    type="text"
                    value={userAnswer1}
                    onChange={(e) => setAnswer1(e.target.value) }
                    placeholder='Enter Your Answer for question 1'/>
                    <button type="submit" onClick={(e) => handleSubmit1()}>Submit</button>
                    <span Style = {{ color:feedback1Color}}>    {feedback1}</span>
                </div>
            
           
                <h2>Question 2</h2>
                <div className="question">
                    <p> What is 6 + 2?</p>
                    <input
                    type="text"
                    value={userAnswer2}
                    onChange={(e) => setAnswer2(e.target.value) }
                    placeholder='Enter Your Answer for question 1'/>
                    <button type="submit" onClick={(e) => handleSubmit2()}>Submit</button>
                    <span
                    style={{ color:feedback2Color}} >   {feedback2}</span>
                </div>
           
                <h2>Question 3</h2>
                <div className="question">
                    <p> What is 14 + 20?</p>
                    <input
                    type="text"
                    value={userAnswer3}
                    onChange={(e) => setAnswer3(e.target.value) }
                    placeholder='Enter Your Answer for question 1'/>
                    <button type="submit" onClick={(e) => handleSubmit3()}>Submit</button>
                    <span Style = {{color:feedback3Color}}>   {feedback3}</span>
                </div>
            
        </div>

        );

    }


export default Mathematics;