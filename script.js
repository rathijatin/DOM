// selection of elements 
var a = document.querySelector("h1");
console.log(a);

// chaning HTML

var b = document.querySelector("h2");
b.innerHTML = "rathidon sabse khatarnak"

// Changing CSS
var c = document.querySelector("h2");
c.style.backgroundColor = "pink";

//event listener 
var d = document.querySelector("h1")

d.addEventListener("click", function(){
    d.innerhtml = "mein badal gya"
    d.style.backgroundColor = "yellow"
})

