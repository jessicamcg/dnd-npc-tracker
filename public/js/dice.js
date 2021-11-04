const diceRoller = async () => {
    const resultLabel = document.querySelector(".dice-roller_newest");
    const resultsBox = document.querySelector(".results");
    const numberofDice = await document.querySelector(".dice-roller_number")
        .value;
    const typeofDice = await document.querySelector(".dice-roller_type").value;
    const rollResultHolder = document.createElement("li");
    rollResultHolder.className = "list-group-item";
    if (numberofDice && numberofDice <= 100) {
        const response = await fetch(`dice/${numberofDice}/${typeofDice}`, {
            method: "POST",
        });
        const diceResult = await response.json();
        if (resultLabel.classList.contains("no-rolls")) {
            resultLabel.classList.remove("no-rolls");
            resultLabel.classList.add("has-rolls");
        }
        if (resultsBox.childElementCount > 10) {
            resultsBox.removeChild(resultsBox.lastChild);
        }
        if (diceResult) {
            rollResultHolder.textContent = diceResult;
            resultsBox.prepend(rollResultHolder);
        } else {
            alert("Roll failed, there seems to be an issue.");
        }
    } else {
        alert("You must roll more than 0 dice or 100 dice or less")
    }
};
const diceButton = document.querySelector(".dice-roller-button");
diceButton.addEventListener("click", diceRoller);
