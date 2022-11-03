const quoteText = document.querySelector(".quote"),
quoteauthor = document.querySelector(".name"),
soundbtn = document.querySelector(".sound"),
copybtn = document.querySelector(".copy"),
twitterbtn = document.querySelector(".twitter"),

quotebtn=document.querySelector("button");

function randomQuote(){
    quotebtn.classList.add("loading");
    quotebtn.innerText="Loading Quote....";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        quoteText.innerText = result.content;
        quoteauthor.innerText = result.author;
        quotebtn.innerText="Next Quote";
        quotebtn.classList.remove("loading");
        
    });

}
function soundchk(){
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText}       ${quoteauthor.innerText}`);
    speechSynthesis.speak(utterance);
}
function copychk(){
    navigator.clipboard.writeText(quoteText.innerText)
}
function twitterchk(){
    let tweeturl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweeturl,"_blank");
}



soundbtn.addEventListener("click",soundchk);
copybtn.addEventListener("click",copychk);
twitterbtn.addEventListener("click",twitterchk);
quotebtn.addEventListener("click",randomQuote);