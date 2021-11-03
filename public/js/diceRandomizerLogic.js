const characterRandomizer = async () => {
    let statArr = [];
    for (let i = 0; i < 6; i++) {
        const response = await fetch("dice/random/4/6", {
            method: "POST",
        });
        // console.log(response)
        let singleArr = [];
        const responseParsed = await response.json();
        console.log(responseParsed);
        console.log(responseParsed[0].rolls[0].value);
        if (responseParsed) {
            for (let j = 0; j < responseParsed[0].rolls.length; j++) {
                singleArr.push(responseParsed[0].rolls[j].value);
            }
            console.log("singleArr:", singleArr);
            let sortedArr = singleArr.sort((a, b) => a - b);
            console.log("sortedArr:", sortedArr);
            sortedArr.shift();
            console.log("shifted sortedArr:", sortedArr);
            let sum = 0;
            for (let k = 0; k < sortedArr.length; k++) {
                sum = sum + sortedArr[k];
            }
            statArr.push(sum);
        }
    }
    console.log("finalArr:", statArr);
};

document
    .querySelector(".character-creation-form_randomizer")
    .addEventListener("click", characterRandomizer);
