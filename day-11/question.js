const quizDB = [
  {
  
  question: "Q1: What does HTML stand for?",
  
    a:"Hyper Text Preprocessor",
    b:"Hyper Text Markup Language",
    C:"Hyper Text Multiple Language",
    d:"Hyper Tool Multi Language",
    ans: "ans2",

  
},
  {
  
  question: " Q2:What does CSS stand for?",
  
    a: "Common Style Sheet",
     b: "Colorful Style Sheet",
     C:"Computer Style Sheet",
    d:"Cascading Style Sheet",
    ans: "ans4",

  
},
  {

  question: " Q3:What does PHP stand for?",

    a: "Hypertext Preprocessor",
     b:"Hypertext Programming",
     c:"Hypertext Preprogramming",
     d:"Hometext Preprocessor",
    ans: "ans1",

  
},
  {
  
  question: " Q4:What does SQL stand for?",
    a:"Stylish Question Language",
    b:"Stylesheet Query Language",
     c:"Statement Question Language",
     d:"Structured Query Language",
    ans: "ans4",

  
},
  {
  
  question: " Q5:What does XML stand for?",
  
    a:"eXtensible Markup Language",
    b:"eXecutable Multiple Language",
    c:"eXTra Multi-Program Language",
    d:"eXamine Multiple Language",
    ans: "ans1",

  
  }
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const  option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelector('.answer')
let questionCount =0;
const loadQuestion = ()=> {
  const questionList = quizDB[questionCount];
   question.innerText = questionList.question;
   option1.innerText = questionList.a;
   option2.innerText = questionList.a;
   option3.innerText = questionList.c;
   option4.innerText = questionList.d;

}
loadQuestion();
const getcheckAnswer = ()=>{
  let answer; 
  if(curAnsElem.checked){
    answer = curAnsElem.id;
  }
  return answer;
}
submit.addEventListener('click',()=>{
  const checkAnswer = getCheckAnswer();
  console.log(checkedAnswer);
  if(checkedAnswer= quizDB[questionCount].ans){
    score++;
  };
  questionCount++;
  if(questionCount<quizDB.length){
    loadQuestion();
  }
  else{
    showscore.innerHTML =<h3> you scored $(score)/${quizDB.length}</h3>
    <button class = "btn" onclick = "location.reload()"></button>
  }

})