const fillButton = document.createElement("button");
fillButton.textContent = "Fill cleared";
creator.appendChild(fillButton);

numbers.addEventListener("mouseover", function (e) {
    if (e.target.className == "numberDiv") {
        e.target.style.backgroundColor = "skyblue";
    } else if (e.target.className.includes("markRed")) {
        e.target.style.backgroundColor = "orange";
    }
})

numbers.addEventListener("mouseout", function (e) {
    e.target.style.backgroundColor = "";
})

numbers.addEventListener("click", function (e) {
    if (e.target.className == "numberDiv") {
        e.target.classList.add("markRed");
        e.target.textContent = "";
    } else if (e.target.className.includes("markRed")) {
        e.target.textContent = getRandomNumber();
        e.target.classList.remove("markRed");
    }
});



fillButton.addEventListener("click", function () {
    for (let div of numbers.childNodes) {
        if (div.className.includes("markRed")) {
            div.textContent = getRandomNumber();
            div.classList.remove("markRed");
        }
    }

});