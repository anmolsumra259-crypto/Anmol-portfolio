const text="Student Leader | Innovator | Entrepreneur";

let i=0;

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);
i++;

setTimeout(typing,80);

}

}

typing();



const darkBtn=document.getElementById("darkBtn");

darkBtn.onclick=function(){

document.body.classList.toggle("dark");

}