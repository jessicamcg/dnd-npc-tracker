const { DiceRoller, DiceRoll } = require('rpg-dice-roller');

// function rolldice(typeofdice, numberofrolls){
//     const dice = typeofdice
//     const rolls = numberofrolls
//     // const modify = modifier
//     const rollsasstring = rolls.toString()

//     const fulldiceroll = rollsasstring.concat(dice);
//     // const modifieddice = fulldiceroll.concat(modify);

//     const roll = new DiceRoller(fulldiceroll)
//     const roll2 = new DiceRoller('4d10')
//     // const rollwmod = new DiceRoll(modifieddice)
//     return roll2;
// }
// const roll = new DiceRoll('4d6')
// console.log(typeof roll.output)

// const roll = new DiceRoll(`${#NumberOfDice}d${NumberofSides}`)
// displayBox.textContent = roll

const rollDice = (number, type) => {
    const roll = new DiceRoll(`${number}d${type}`)
    console.log(roll.output)
}

rollDice("4","6")