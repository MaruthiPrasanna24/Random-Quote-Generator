let quotelist=[
    {
        quote:"The only way to do great work is to love what you do. ❤️" ,
        author:"Steve Jobs"
    },
    {
        quote:"In the end, we will remember not the words of our enemies, but the silence of our friends. 🤝",
        author:'Martin Luther King Jr.'
    },
    {
        quote:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. 🌍" ,
        author:"Ralph Waldo Emerson"
    },
    {
        quote:"Life is what happens when you're busy making other plans.📅" ,
        author:"John Lennon"
    },
    {
        quote:"The best way to predict the future is to create it.🔮", 
        author:"Peter Drucker"
    },
    {
        quote:"Success is not final, failure is not fatal: It is the courage to continue that counts.💪 ",
        author:"Winston Churchill"
    },
    {
        quote:"What lies behind us and what lies before us are tiny matters compared to what lies within us. 💖", 
        author:"Ralph Waldo Emerson"
    },
    {
        quote:"The future belongs to those who believe in the beauty of their dreams. ✨",
        author:"Eleanor Roosevelt"
    },
    {
        quote:"You must be the change you wish to see in the world.🌱",
        author:"Mahatma Gandhi"
    },
    {
        quote:"Why so serious? 😈",
        author:"Heath Ledger"
    },
    {
        quote:"Directing is about capturing emotions. 🎭",
        author:"Trivikram Srinivas"
    },
    {
        quote:"A good film is a visual poem.📽️", 
        author:"Ram Gopal Varma"
    },
    {
        quote:"The heart of a film is its script.✍️", 
        author:"Naga Ashwin"
    },
    {
        quote:"You don’t get to choose how you’re going to die. You only get to decide how you’re going to live now.🌌 ",
        author:"Christopher Nolan"
    },
]
 let quotes=document.getElementById('quote')
 let author=document.getElementById('author')
 let container=document.querySelector("quote")

 document.getElementById("button").onclick=function(){
    let i=Math.floor(Math.random()*quotelist.length)
    quotes.innerHTML=quotelist[i].quote
    author.innerHTML="--"+" "+quotelist[i].author
 }
 function bgchange(){
    let num='0123456789abcdef'
let hash='#'
for(i=0;i<6;i++){
    let index=Math.floor(Math.random()*16)
    hash=hash+num[index]
}
document.querySelector("button").style.color=hash
}
setInterval(bgchange,1000)