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
const sumOfText = document.createElement("div");
sumOfText.textContent = "Sum of all:"
sumOfText.style.display = "inline";
const sumOfAllDiv = document.createElement("div");
sumOfAllDiv.id = "sumOfAll"
creator.appendChild(sumOfAllDiv);
sumOfAllDiv.appendChild(sumOfText);

const sumBox = document.createElement("div");
sumBox.style.border = "1px solid black";
sumBox.style.width = "80px";
sumBox.style.margin = "5px";
sumBox.style.textAlign = "center";
sumBox.style.display = "inline-block";
sumOfAllDiv.appendChild(sumBox);

sumBox.textContent = sumOfAll();

createButton.addEventListener("click", function () {
    sumBox.textContent = sumOfAll();
});