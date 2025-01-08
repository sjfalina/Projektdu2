const fillButton = document.createElement("button");
fillButton.textContent = "Fill cleared";
creator.appendChild(fillButton);

numbers.addEventListener("click", function (e) {
    if (e.target.className == "numberDiv") {
        e.target.classList.add("mark");
        e.target.textContent = "";
    }
});

fillButton.addEventListener("click", function () {
    for (let div of numbers.childNodes) {
        if (div.className.includes("mark")) {
            div.textContent = getRandomNumber();
            div.classList.remove("mark");
        }
    }

});