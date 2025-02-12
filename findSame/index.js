const findSameDiv = document.createElement("div");
findSameDiv.classList.add("centered");
creator.appendChild(findSameDiv);
const findText = document.createElement("p");
findSameDiv.appendChild(findText);
const resetButton = document.createElement("button");
resetButton.classList.add("button");
resetButton.textContent = "Reset";
findSameDiv.appendChild(resetButton);

const startMessage = "Click on a number to find copies";
findText.textContent = startMessage;

numbers.addEventListener("click", function (e) {
    if (e.target.className == "numberDiv") {
        e.target.classList.add("markGreen");
        let counter = 0;
        for (let node of numbers.childNodes) {
            if (node.textContent == e.target.textContent) {
                node.classList.add("markGreen");
                counter++;
            } else {
                node.classList.remove("markGreen");
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
        if (node.classList.contains("markGreen")) {
            node.classList.remove("markGreen");
        }
    }
    findText.textContent = startMessage;
})