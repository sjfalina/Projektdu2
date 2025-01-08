createControlElements();
createRandomNumbers(howInput.value);

const addUpDiv = document.createElement("div");
creator.appendChild(addUpDiv);
const addUpText = document.createElement("p");
const addInput = document.createElement("input");
addInput.value = 179;
const findCellsButton = document.createElement("button");
creator.appendChild(addUpText);
creator.appendChild(addInput);
creator.appendChild(findCellsButton);

addUpText.textContent = "Add up to: ";
findCellsButton.textContent = "Find Cells that Add Up";

findCellsButton.addEventListener("click", function () {
    for (let node of numbers.childNodes) {
        node.classList.remove("mark");
    }
    let found = false;
    for (let node1 of numbers.childNodes) {
        let n1value = parseFloat(node1.textContent);
        for (let node2 of numbers.childNodes) {
            let n2value = parseFloat(node2.textContent);
            if (n1value + n2value == addInput.value) {
                node1.classList.add("mark");
                node2.classList.add("mark");
                found = true;
                break;
            }
            if (found) {
                break;
            }
        }
    }
})