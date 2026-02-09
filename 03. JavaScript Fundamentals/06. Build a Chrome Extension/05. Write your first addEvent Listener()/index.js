// 1. Grab the box from the DOM and store it in a variable
// 2. Add a click event listener to the box 
// 3. Log out "I want to open the box!" when it's clicked

const box = document.getElementById("box");
box.addEventListener("click",()=>{
    let p = document.createElement('p');
    p.innerText = "I want to open the box!";
    document.body.appendChild(p);
})