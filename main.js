// function button1(){
   
//     var txt=document.getElementById("text").value;
    
//     if(txt==""){
//         alert("Please enter a value");
//     }
//     else if(txt=="good" || tex){
//         document.getElementById("h2").innerHTML="Good Vibe";
//     }
   
// }

function decline(){
    alert("Question Declined");
}

let questions = [
   "how old are you",
   "what is your name",
   "are you happy right now",
   "what is your profession",
   "are you a programmer",
   
]

function accept(){
   let question = document.querySelector("#inputs").value;
   question = question.toLowerCase();
   if(questions.includes(question)) window.alert("Your question accepted Chief");
   else window.alert("Your question is rejected Chief");
}