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

function compareNumbers(a, b) {
    return a - b;
}

function notInPlace() {
    let inPlace = [];
    let numbersNotInPlace = [];
    for (let node of numbers.childNodes) {
        if (!inPlace.includes(node.textContent)) {
            inPlace.push(parseFloat(node.textContent));
        }
    }
    inPlace.sort(compareNumbers)
    for (let i = 0; i < 100; i++) {
        if (!inPlace.includes(i)) {
            numbersNotInPlace.push(i);
        }
    }
    return numbersNotInPlace;
}



const mostReps = document.getElementById("mostReps");
mostReps.id = "reps";
const result = checkRepeats();

if (result.repeats > 1) {
    const output = `${result.repeatedNumbers.join(", ")} (Repeated ${result.repeats} times)`;
    mostReps.textContent = output;
    for (let number of result.repeatedNumbers) {
        for (let node of numbers.childNodes) {
            if (number == node.textContent) {
                node.classList.add("markBlue");
            }
        }
    }
}


const notInResult = notInPlace();
const notInPlaceBox = document.getElementById("notInPlace")
notInPlaceBox.classList.add("inputBox");
notInPlaceBox.textContent = `${notInResult.join(", ")}`
notInPlaceBox.style.maxHeight = "fit-content";


