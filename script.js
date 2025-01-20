const quotes=[{
    quote:"The only way to do great work is to love what you do.",
    writer:'-John Lenon'
},{
    quote:"Life is not a problem to be solved, but a reality to be experienced.",
     writer:'-Soren kierkegaard'
},{
    quote:"There is only one thing that makes a dream impossible to achieve:The fear of failure.",
     writer:'-Paulo Coelho'
},{
   quote:"Many of the greatachievements of the world were accomplished by tired and discouraged.",
   writer:'-Benjamain Franklin'
},{
    quote:"Arise! Awake! and stop not until the goal is reached.",
    writer:'-Swami Vivekananda'

},]

let btn=document.querySelector("#Qbtn");
let quote=document.querySelector(".quote");
let writer=document.querySelector(".writer");

btn.addEventListener("click",function(){
    let random=Math.floor(Math.random() * quotes.length);
    quote.innerHTML=quotes[random].quote;
    writer.innerHTML=quotes[random].writer;
})