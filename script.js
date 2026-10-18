const button = document.getElementById("greetButton");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "Hello! Thanks for visiting my portfolio.";
});