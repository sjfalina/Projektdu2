createControlElements();


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

createRandomNumbers(howInput.value);

newRandomButton.addEventListener("click", function () {
    newInput.value = getRandomNumber();

    for (let div of numbers.childNodes) {
        div.classList.remove("mark");
        if (div.textContent == newInput.value) {
            div.classList.add("mark")
        }
    }
})