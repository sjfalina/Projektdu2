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
    return repeatedNumbers;
}
