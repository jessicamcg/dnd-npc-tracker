const characterRandomizer = async () => {
    let statArr = [];
    for (let i = 0; i < 6; i++) {
        const response = await fetch("dice/random/4/6", {
            method: "POST",
        });
        // console.log(response)
        let singleArr = [];
        const responseParsed = await response.json();
        if (responseParsed) {
            for (let j = 0; j < responseParsed[0].rolls.length; j++) {
                singleArr.push(responseParsed[0].rolls[j].value);
            }
            let sortedArr = singleArr.sort((a, b) => a - b);
            sortedArr.shift();
            let sum = 0;
            for (let k = 0; k < sortedArr.length; k++) {
                sum = sum + sortedArr[k];
            }
        }
        console.log("finalArr:", statArr);
        const strength = document.querySelector("#strength");
        const dexterity = document.querySelector("#dexterity");
        const constitution = document.querySelector("#constitution");
        const intelligence = document.querySelector("#intelligence");
        const wisdom = document.querySelector("#wisdom");
        const charisma = document.querySelector("#charisma");

        strength.setAttribute("value", statArr[0]);
        dexterity.setAttribute("value", statArr[1]);
        constitution.setAttribute("value", statArr[2]);
        intelligence.setAttribute("value", statArr[3]);
        wisdom.setAttribute("value", statArr[4]);
        charisma.setAttribute("value", statArr[5]);
    }
};
document
    .querySelector(".character-creation-form_randomizer")
    .addEventListener("click", characterRandomizer);
