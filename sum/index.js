createControlElements();
createRandomNumbers(howInput.value);

function sumOfAll() {
    let sum = 0;
    for (let number of numbers.childNodes) {
        let value = parseFloat(number.textContent)
        sum += value;
    }
    return sum;
}
function addMarked(target) {
    let sum = parseFloat(sumOfMarkedBox.value) || 0;
    let newAdd = parseFloat(target.textContent);

    if (!isNaN(newAdd)) {
        sum += newAdd;
    }
    return sum;

}


const sumOfText = document.createElement("div");
sumOfText.textContent = "Sum of all:"
sumOfText.style.display = "inline";
const sumOfAllDiv = document.createElement("div");
sumOfAllDiv.id = "sumOfAll"
creator.appendChild(sumOfAllDiv);
sumOfAllDiv.appendChild(sumOfText);

const sumBox = document.createElement("div");
sumBox.classList.add("inputBox");
sumOfAllDiv.appendChild(sumBox);

sumBox.textContent = sumOfAll();

const sumOfMarked = document.createElement("div");
creator.appendChild(sumOfMarked);
const sumOfMarkedText = document.createElement("div");
sumOfMarkedText.classList.add("text");
sumOfMarkedText.style.display = "inline";
sumOfMarkedText.textContent = "Sum of marked:";
sumOfMarked.appendChild(sumOfMarkedText);

const sumOfMarkedBox = document.createElement("input");
sumOfMarkedBox.placeholder = "-";
sumOfMarkedBox.classList.add("inputBox");
sumOfMarked.appendChild(sumOfMarkedBox);

const resetSumButton = document.createElement("button");
resetSumButton.textContent = "Reset";
resetSumButton.style.margin = "2px 5px";
sumOfMarked.appendChild(resetSumButton);

createButton.addEventListener("click", function () {
    sumBox.textContent = sumOfAll();
});

numbers.addEventListener("click", function (e) {
    e.target.classList.add("mark");
    sumOfMarkedBox.value = addMarked(e.target);

});

resetSumButton.addEventListener("click", function () {
    for (let div of numbers.childNodes) {
        div.classList.remove("mark");
    }
    sumOfMarkedBox.value = null;
}
)


