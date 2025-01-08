function homeLink() {
    let home = document.createElement("a");
    home.setAttribute("href", "../index.html");
    document.getElementById("top").appendChild(home);
    home.textContent = "Home";
}

function createControlElements() {
    let howManyDiv = document.createElement("div");
    creator.appendChild(howManyDiv);
    howMany.textContent = "How many numbers in the grid?";
    howMany.style.display = "inline";
    howMany.style.marginRight = "10px";
    howManyDiv.appendChild(howMany);
    howManyDiv.appendChild(howInput);
    createButton.textContent = "Create";
    howManyDiv.appendChild(createButton);

    howManyDiv.style.margin = "10px";

    howInput.value = 95;

}

function getRandomNumber() {
    return Math.floor(100 * Math.random());
}

function createRandomNumbers(amount) {
    for (let i = 0; i < amount; i++) {
        let number = getRandomNumber();
        let div = document.createElement("div");
        div.classList.add("numberDiv")
        div.textContent = number;
        numbers.appendChild(div);
    }
}

const createButton = document.createElement("button")
const howInput = document.createElement("input");
const howMany = document.createElement("p");
const controls = document.getElementById("controls");
const numbers = document.getElementById("numbers");
const creator = document.getElementById("creator");

createButton.addEventListener("click", function () {
    numbers.innerHTML = "";
    createRandomNumbers(howInput.value);

});

homeLink();
createControlElements();
createRandomNumbers(howInput.value);