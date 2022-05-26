const Fbutt = document.querySelector("#Fbutt");
const message = document.querySelector("#message");
Fbutt.addEventListener("click", function(){
    message.innerHTML="<h1>Zdarowa</h1>"
});
const message2=document.querySelector("#message2");
function superr() {
    message2.innerHTML="<h1>ZdarowaV.2</h1>";
}
let wynik=document.getElementById("wynik");
function sh0() {
    let wartosc = document.getElementById("scroll").value;
    wynik.innerHTML = wartosc;
}