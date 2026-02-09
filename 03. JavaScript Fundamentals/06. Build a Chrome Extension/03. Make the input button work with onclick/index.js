// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button

const btn = document.getElementById("input-btn");

btn.addEventListener("click",()=>{
    const p = document.createElement('p');
    p.innerText = "Hi there!";
    document.body.appendChild(p);
})