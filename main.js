const input = document.querySelector("#userInput");
const btn = document.querySelector("#btn");
const form = document.querySelector("#form");

// Add click listener to button
form.addEventListener("submit", validateEmail);
btn.addEventListener("keydown", clickEnter);

//Creating a box msg
let msg = document.createElement("div");
msg.style.position = "absolute";
msg.style.bottom = "-0.5rem";
msg.style.width = "100%";
msg.style.textAlign = "center";

//function to validate email
function validateEmail(e) {
    e.preventDefault();
    msg.remove();
    form.appendChild(msg);

    //regex for email validation 
    const regexEmail = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;

    //if email is correct
    if (regexEmail.test(input.value)) {
        msg.style.color = "#54E6AF";
        msg.innerText = "Hurray! Your access has been granted";
        input.value = "";
        return true;
    } else {
        msg.style.color = "#FB3E3E";
        msg.innerText = "Oops! Please check your email"
        return false;
    }
}

function clickEnter(e) {
    if (e.keyCode === 13) {
        validateEmail();
    }
}