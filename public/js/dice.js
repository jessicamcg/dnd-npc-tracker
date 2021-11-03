const { DiceRoller, DiceRoll } = require('rpg-dice-roller');
// import { DiceRoll } from 'rpg-dice-roller';
// const numberOfRolls = document.querySelector('.rolls').value;
// const dice = document.querySelector('.die').value;
// const dice_button = document.querySelector('.dice-roller_button')
// const results = document.querySelector('.results')


const rollDice = (number, type) => {
    console.log('hey');
    const numberStr = number.toString()
    const roll = new DiceRoll(`${numberStr}d${type}`)
    console.log(roll.output)
    // results.innerHTML = roll.output;
}

// dice_button.addEventListener('click', rollDice(numberOfRolls,dice));

rollDice(5,"12")