const removeCreator = document.createElement("div");
removeCreator.classList.add("centered");
creator.appendChild(removeCreator);
const newRandomButton = document.createElement("button");
newRandomButton.textContent = "New random number";
newRandomButton.classList.add("button");
removeCreator.appendChild(newRandomButton);
const newInput = document.createElement("input");
newInput.placeholder = "-";
newInput.classList.add("inputBox");
removeCreator.appendChild(newInput);
const removeButton = document.createElement("button");
removeButton.textContent = "Remove";
removeButton.classList.add("button");
removeCreator.appendChild(removeButton);
const removeInput = document.createElement("input");
removeInput.placeholder = "-";
removeInput.classList.add("inputBox");
removeInput.id = "removed";
removeCreator.appendChild(removeInput);

newRandomButton.addEventListener("click", function () {
    newInput.value = getRandomNumber();

    for (let div of numbers.childNodes) {
        div.classList.remove("markOrange");
        if (div.textContent == newInput.value) {
            div.classList.add("markOrange")
        }
    }
})

removeButton.addEventListener("click", function () {
    let counter = 0;
    for (let div of numbers.childNodes) {
        if (div.textContent == newInput.value) {
            counter++;
            div.style.backgroundColor = "red";
            div.textContent = "X";
        }
    }
    if (counter == 0) {
        removeInput.value = "Nothing to remove";

    } else {
        removeInput.value = `${newInput.value} was removed ${counter} times`;

    }
})