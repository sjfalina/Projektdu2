const removeCreator = document.createElement("div");
removeCreator.classList.add("remove")
removeCreator.style.display = "flex";
removeCreator.style.gap = "5px";
creator.appendChild(removeCreator);
const newRandomButton = document.createElement("button");
newRandomButton.textContent = "New random number";
removeCreator.appendChild(newRandomButton);
const newInput = document.createElement("input");
newInput.style.marginRight = "5px";
newInput.placeholder = "-";
removeCreator.appendChild(newInput);
const removeButton = document.createElement("button");
removeButton.textContent = "Remove";
removeCreator.appendChild(removeButton);
const removeInput = document.createElement("input");
removeInput.placeholder = "-";
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