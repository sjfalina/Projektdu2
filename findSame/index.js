createControlElements();
createRandomNumbers(howInput.value);

const findSameDiv = document.createElement("div");
creator.appendChild(findSameDiv);
const findText = document.createElement("p");
findSameDiv.appendChild(findText);
const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
findSameDiv.appendChild(resetButton);

const startMessage = "Click on a number to find copies";
findText.textContent = startMessage;

numbers.addEventListener("click", function (e) {
    if (e.target.className == "numberDiv") {
        e.target.classList.add("mark");
        let counter = 1;
        for (let node of numbers.childNodes) {
            if (node.textContent == e.target.textContent) {
                node.classList.add("mark");
                counter++;
            } else {
                node.classList.remove("mark");
            }
        }
        if (counter == 1) {
            findText.textContent = `${counter} copy of ${e.target.textContent}`;
        } else {
            findText.textContent = `${counter} copies of ${e.target.textContent}`;
        }
    }
}
)

resetButton.addEventListener("click", function () {
    for (let node of numbers.childNodes) {
        if (node.classList.contains("mark")) {
            node.classList.remove("mark");
        }
    }
    findText.textContent = startMessage;
})