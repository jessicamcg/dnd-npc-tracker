const numberOfRolls = document.querySelector('.rolls');
const dice = document.querySelector('.die').value;
const dice_button = document.querySelector('.dice-roller_button')


dice_button.addEventListener('click', response);


const response = await fetch(`dice/:number/:type`, {
    method: "POST",
    body: JSON.stringify({
        numOfRolls: numberOfRolls,
        Die: dice,
    })
});
