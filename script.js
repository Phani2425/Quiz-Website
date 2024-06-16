// declaring question and answers

const quizQuestions = [
   {
     question: "What does 'let' keyword do in JavaScript?",
     options: [
       "Declares a variable that is function-scoped",
       "Declares a variable that is block-scoped",
       "Declares a constant variable",
       "Declares a variable that is globally-scoped"
     ],
     correctAnswerIndex: 1
   },
   {
     question: "Which company developed JavaScript?",
     options: [
       "Microsoft",
       "Mozilla",
       "Netscape",
       "Google"
     ],
     correctAnswerIndex: 2
   },
   {
     question: "What is the purpose of the 'this' keyword in JavaScript?",
     options: [
       "It refers to the current function",
       "It refers to the global object",
       "It refers to the object from which it was called",
       "It refers to the previous object"
     ],
     correctAnswerIndex: 2
   },
   {
     question: "What is the output of 'typeof null' in JavaScript?",
     options: [
       "'null'",
       "'object'",
       "'undefined'",
       "'number'"
     ],
     correctAnswerIndex: 1
   },
   {
     question: "Which of the following is a JavaScript framework?",
     options: [
       "Laravel",
       "Django",
       "React",
       "Spring"
     ],
     correctAnswerIndex: 2
   },
   {
     question: "What is 'hoisting' in JavaScript?",
     options: [
       "A variable declared after it has been used",
       "A function that is called before it is declared",
       "Both variable and function declarations are moved to the top",
       "None of the above"
     ],
     correctAnswerIndex: 2
   },
   {
     question: "What is the output of '2 + '2'' in JavaScript?",
     options: [
       "'22'",
       "4",
       "NaN",
       "'Error'"
     ],
     correctAnswerIndex: 0
   },
   {
     question: "Which method converts a JSON string to a JavaScript object?",
     options: [
       "JSON.parse()",
       "JSON.stringify()",
       "JSON.convert()",
       "JSON.toObject()"
     ],
     correctAnswerIndex: 0
   },
   {
     question: "What is the use of 'isNaN' function?",
     options: [
       "To check if a value is a number",
       "To check if a value is not a number",
       "To check if a value is null",
       "To check if a value is an object"
     ],
     correctAnswerIndex: 1
   },
   {
     question: "What does 'strict mode' do in JavaScript?",
     options: [
       "Makes the code run faster",
       "Enforces stricter parsing and error handling",
       "Allows undeclared variables",
       "None of the above"
     ],
     correctAnswerIndex: 1
   },
   {
     question: "Which built-in method returns the character at a specified index?",
     options: [
       "characterAt()",
       "getCharAt()",
       "charAt()",
       "None of the above"
     ],
     correctAnswerIndex: 2
   },
   {
     question: "Which of the following is not a reserved word in JavaScript?",
     options: [
       "interface",
       "throws",
       "program",
       "short"
     ],
     correctAnswerIndex: 2
   },
   {
     question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
     options: [
       "<script name='xxx.js'>",
       "<script href='xxx.js'>",
       "<script src='xxx.js'>",
       "<script link='xxx.js'>"
     ],
     correctAnswerIndex: 2
   },
   {
     question: "How do you write 'Hello World' in an alert box?",
     options: [
       "alertBox('Hello World');",
       "msgBox('Hello World');",
       "alert('Hello World');",
       "msg('Hello World');"
     ],
     correctAnswerIndex: 2
   },
   {
     question: "How do you create a function in JavaScript?",
     options: [
       "function myFunction()",
       "function:myFunction()",
       "function = myFunction()",
       "def myFunction()"
     ],
     correctAnswerIndex: 0
   },
   {
     question: "How do you call a function named 'myFunction'?",
     options: [
       "call myFunction()",
       "call function myFunction()",
       "myFunction()",
       "Call.myFunction()"
     ],
     correctAnswerIndex: 2
   },
   {
     question: "How to write an IF statement in JavaScript?",
     options: [
       "if i = 5 then",
       "if i == 5 then",
       "if (i == 5)",
       "if i = 5"
     ],
     correctAnswerIndex: 2
   },
   {
     question: "Which event occurs when the user clicks on an HTML element?",
     options: [
       "onchange",
       "onclick",
       "onmouseclick",
       "onmouseover"
     ],
     correctAnswerIndex: 1
   },
   {
     question: "How do you declare a JavaScript variable?",
     options: [
       "var carName;",
       "variable carName;",
       "v carName;",
       "None of the above"
     ],
     correctAnswerIndex: 0
   },
   {
     question: "Which operator is used to assign a value to a variable?",
     options: [
       "*",
       "-",
       "=",
       "x"
     ],
     correctAnswerIndex: 2
   }
 ];

 let score=0;
 let currQuestion=0;

 const quizbox=document.querySelector('.quiz');
 const question=document.querySelector('#quest');
 const options=document.querySelectorAll('#options li label');


 displayQuiz();
 
 // Example function to log the questions and options
 function displayQuiz() {
   question.textContent=`${currQuestion+1} : ${quizQuestions[currQuestion].question}`;
   let optionArray=quizQuestions[currQuestion].options;
   for(let i=0;i<4;i++){
      options[i].textContent=optionArray[i];
   }
 }
 
 // Display the quiz
 displayQuiz(quizQuestions);


//  function to check wheather the clicked answer is correct or not
const optioninput=document.querySelectorAll('#options li input');
var clickedindex;
function isCorrect(){
   
   for(let i=0;i<optioninput.length;i++){
      if(optioninput[i].checked){
         clickedindex=i;
         if(clickedindex==quizQuestions[currQuestion].correctAnswerIndex){
            return true;
         }
         else{
            return false;
         }
      }
   }
}


 const submit=document.querySelector('#submit');
 const scorecard=document.querySelector('.scorecard');
 const scorehead=document.querySelector('#scorehead');
 submit.addEventListener('click',()=>{
   //score will be counted
   if(isCorrect()==true){
      score++;
     
      console.log(score);
   }

   //removing the chek
   optioninput[clickedindex].checked=false;
   
   //question will change
   if(currQuestion<quizQuestions.length-1){
      currQuestion++;
   displayQuiz();
   }
   else{
      // overal score will be visible
      quizbox.classList.toggle('hidden');
      scorecard.classList.toggle('hidden');
      scorehead.innerText=`🏆 Your Score : ${score}/${quizQuestions.length} correct Answers`;

   }
 })

 const playagain=document.querySelector('#play-again');
 playagain.addEventListener('click',()=>{
   quizbox.classList.toggle('hidden');
      scorecard.classList.toggle('hidden');
      window.location.reload(true);
 })


 