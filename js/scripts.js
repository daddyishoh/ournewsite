// const loginName = document.querySelector("#loginName");
// const checkName = document.querySelector("#check");
// const loginAuth = document.querySelector(".loginAuth");
// const content = document.querySelector(".content");

// // checkName.addEventListener("click", auth);

// function auth() {
//     if (loginName.value.toLowerCase() == "goodgirl") {
//         showPage();
//     } else{
//         return;
//     }
// }

// function showPage() {
//     loginAuth.style.display = "none";
//     content.style.display = "block";,
// }

// punishment section
const punishments = [
    "Spank yourself",
    "Put ice in your asshole",
    "Drink water until you pee your pants",
    "Put ice in your privates",
    "Naked workout",
    "Play with your privates and asshole all day without cumming",
    "Stand in the corner naked"
]

const punishmentButton = document.querySelector(".punishment-btn")
punishmentButton.addEventListener("click", getPunishment);
const punishText = document.querySelector(".punishText");

function getPunishment() {
    punishment = punishments[Math.floor(Math.random()*punishments.length)];
    punishText.innerHTML = punishment;
}
