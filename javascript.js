let btn = document.createElement("button");
btn.innerText = "Lord Rama was here";
console.log(btn);
let nick = document.querySelector("body");
console.log(nick);
nick.prepend(btn);
btn.onclick = () => {
    nick.style.backgroundColor ="black";
}
 



    

