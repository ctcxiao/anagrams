function calculate(input) {
    let inputArray = Array.from(input);

    if (inputArray.length === 1) {
        return inputArray;
    }

    let elementToChoose = inputArray.pop();
    let lastResult = calculate(inputArray);

    let result = [];
    for (let i = 0; i < lastResult.length; i++) {
        let lastResultEle = lastResult[i];
        for (let j = 0; j <= lastResultEle.length; j++) {
            let tempResult = Array.from(lastResultEle);
            tempResult.splice(j, 0, elementToChoose).join("");
            result.push(tempResult);
        }
    }
    return result;
}

function main(input) {
    let result = calculate(input);

    if (result.length === 1){
        return result.join("");
    }

    return result.map(value => value.join("")).join(" ");
}

module.exports = {
    main,
}