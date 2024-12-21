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
removeCreator.appendChild(newInput);
const removeButton = document.createElement("button");
removeButton.textContent = "Remove";
removeCreator.appendChild(removeButton);
const removeInput = document.createElement("input");
removeCreator.appendChild(removeInput);

createRandomNumbers(howInput.value);

