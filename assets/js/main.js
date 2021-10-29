let inp = document.getElementById('inp');
let but = document.getElementById('but');
let lastSec = document.getElementById('lastSec');

function submitE() {
    console.log(inp.value);
    lastSec.innerHTML = ('🥳<article><h1>YOUR EMAIL HAS BEEN CONFIRMED.</h1><H1>THANKS FOR SUBSCRIBING!</H1><P>Now we just need to confirm your email address - please click the link in the email we sent you.Thanks!</P><a href="index.html">BACK TO DESIGNERCHALLENGE.COM</a>  </article>') ;
    lastSec.classList.add('confirmed');
};

{/* <button>BACK TO DESIGNERCHALLENGE.COM</button> */}