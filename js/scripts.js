const loginName = document.querySelector("#loginName");
const checkName = document.querySelector("#check");
const loginAuth = document.querySelector(".loginAuth");
const content = document.querySelector(".content");

// checkName.addEventListener("click", auth);

function auth() {
    if (loginName.value.toLowerCase() == "goodgirl") {
        showPage();
    } else{
        return;
    }
}

function showPage() {
    loginAuth.style.display = "none";
    content.style.display = "block";
}