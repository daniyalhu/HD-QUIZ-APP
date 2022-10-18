const questions =[{
    'que': "Which of the following is a markup langauge?",
    'a': "HTML",
    'b': "CSS",
    'c': "JAVASCRIPT",
    'd': "PHP",
    'Correct': "a"
},
{
    'que': "What year was javascript lunched?",
    'a': "1996",
    'b': "1995",
    'c': "1994",
    'd': "none of above",
    'Correct': "b"
},
{
    'que': "What does CSS stand for?",
    'a': "Cypertext markup langauge",
    'b': "Cascading style sheet",
    'c': "Jason object notation",
    'd': "Halicopter terminal motoroboats",
    'Correct': "b",
}
]
let index = 0;
const quesBox = document.getElementById("quesBox")
const loadQuestion = () => {
    const data = questions[index]
    console.log(data)
  quesBox.innerText = data.que;
}














// let index = 0;
// const quesBox = document.getElementById("quesBox")
// const loadQuestion = () => {
// const data = questions[index]
// console.log(data)
// quesBox.innerText = '${data.que}';
// }

// //Inital call
// loadQuestion();