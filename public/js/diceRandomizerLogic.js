const characterStatRandomizer = async () => {
    let statArr = [];
    for (let i = 0; i < 6; i++) {
        const response = await fetch("dice/4/6", {
            method: "POST",
        });
        let singleArr = [];
        const responseParsed = await response.json();
        if (responseParsed) {
            for (let j = 0; j < responseParsed.rolls.length; j++) {
                singleArr.push(response.rolls[j].value);
            }
            let sortedArr = singleArr.sort((a, b) => a - b);
            sortedArr.shift();
            let sum = 0;
            for (let k = 0; k < sortedArr.length; k++) {
                sum = sum + sortedArr[k];
            }
            statArr.push(sum)
        }
    } console.log(statArr)
};

characterStatRandomizer();
