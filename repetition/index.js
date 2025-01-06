createControlElements();
createRandomNumbers(howInput.value);

function checkRepeats() {

    let repeatedNumbers = [];
    let repeats = 0;
    for (let i = 1; i < 100; i++) {
        let counter = 0;
        for (let number of numbers.childNodes) {
            if (i == number.textContent) {
                counter++;
            }
        }
        if (counter == repeats) {
            repeatedNumbers.push(i);
        } else if (counter > repeats) {
            repeats = counter;
            repeatedNumbers = [i];
        }

    }
    return { repeatedNumbers, repeats }
}

const mostRepsText = document.createElement("p");
mostRepsText.textContent = "Most repeated number(s):";
mostRepsText.style.display = "inline";
creator.appendChild(mostRepsText);
const mostReps = document.createElement("div");
mostReps.style.width = "200px";
mostReps.style.height = "50px";
mostReps.style.padding = "8px";
mostReps.style.margin = "3px";
mostReps.style.border = "1px solid black";
mostReps.style.display = "inline";
creator.appendChild(mostReps);
const result = checkRepeats();

if (result.repeats > 1) {
    const output = `${result.repeatedNumbers.join(", ")} (Repeated ${result.repeats} times)`;
    mostReps.textContent = output;
    for (let number of result.repeatedNumbers) {
        for (let node of numbers.childNodes) {
            if (number == node.textContent) {
                node.classList.add("mark");
            }
        }
    }
}
