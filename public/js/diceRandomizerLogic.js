const getRandom = (max) => {
    return Math.floor(Math.random() * max);
};
const nameRandomizer = () => {
    const firstName = ["Jindo", "Trias", "Myverna", "Ara", "Olerin"];
    const lastName = ["Enol", "Shemrinan", "Lulnar", "Adrar", "Nollason"];
    const fullName =
        firstName[getRandom(firstName.length - 1)] +
        " " +
        lastName[getRandom(lastName.length - 1)];
    return fullName;
};
const raceRandomizer = () => {
    let raceNumber = getRandom(9);
    switch (raceNumber) {
        case 0:
            const dragonborn = document.querySelector("#Dragonborn");
            dragonborn.setAttribute("selected", "");
            break;
        case 1:
            const dwarf = document.querySelector("#Dwarf");
            dwarf.setAttribute("selected", "");
            break;
        case 2:
            const elf = document.querySelector("#Elf");
            elf.setAttribute("selected", "");
            break;
        case 3:
            const gnome = document.querySelector("#Gnome");
            gnome.setAttribute("selected", "");
            break;
        case 4:
            const halfElf = document.querySelector("#Half-Elf");
            halfElf.setAttribute("selected", "");
            break;
        case 5:
            const halfling = document.querySelector("#Halfling");
            halfling.setAttribute("selected", "");
            break;
        case 6:
            const halfOrc = document.querySelector("#Half-Orc");
            halfOrc.setAttribute("selected", "");
            break;
        case 7:
            const human = document.querySelector("#Human");
            human.setAttribute("selected", "");
            break;
        case 8:
            const tiefling = document.querySelector("#Tiefling");
            tiefling.setAttribute("selected", "");
            break;
    }
};
const classRandomizer = () => {
    let classNumber = getRandom(11);
    switch (classNumber) {
        case 0:
            const barbarian = document.querySelector("#Barbarian");
            barbarian.setAttribute("selected", "");
            break;
        case 1:
            const bard = document.querySelector("#Bard");
            bard.setAttribute("selected", "");
            break;
        case 2:
            const cleric = document.querySelector("#Cleric");
            cleric.setAttribute("selected", "");
            break;
        case 3:
            const druid = document.querySelector("#Druid");
            druid.setAttribute("selected", "");
            break;
        case 4:
            const fighter = document.querySelector("#Fighter");
            fighter.setAttribute("selected", "");
            break;
        case 5:
            const monk = document.querySelector("#Monk");
            monk.setAttribute("selected", "");
            break;
        case 6:
            const paladin = document.querySelector("#Paladin");
            paladin.setAttribute("selected", "");
            break;
        case 7:
            const ranger = document.querySelector("#Ranger");
            ranger.setAttribute("selected", "");
            break;
        case 8:
            const rogue = document.querySelector("#Rogue");
            rogue.setAttribute("selected", "");
            break;
        case 9:
            const sorceror = document.querySelector("#Sorceror");
            sorceror.setAttribute("selected", "");
            break;
        case 10:
            const warlock = document.querySelector("#Warlock");
            warlock.setAttribute("selected", "");
            break;
        case 11:
            const wizard = document.querySelector("#Wizard");
            wizard.setAttribute("selected", "");
            break;
    }
};
const characterRandomizer = async () => {
    let statArr = [];
    for (let i = 0; i < 6; i++) {
        const response = await fetch("dice/random/4/6", {
            method: "POST",
        });
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
            statArr.push(sum);
        }
    }
    const characterName = document.querySelector("#character-name");
    const strength = document.querySelector("#strength");
    const dexterity = document.querySelector("#dexterity");
    const constitution = document.querySelector("#constitution");
    const intelligence = document.querySelector("#intelligence");
    const wisdom = document.querySelector("#wisdom");
    const charisma = document.querySelector("#charisma");
    let fullName = nameRandomizer();
    raceRandomizer();
    classRandomizer();
    characterName.setAttribute("value", fullName);
    strength.setAttribute("value", statArr[0]);
    dexterity.setAttribute("value", statArr[1]);
    constitution.setAttribute("value", statArr[2]);
    intelligence.setAttribute("value", statArr[3]);
    wisdom.setAttribute("value", statArr[4]);
    charisma.setAttribute("value", statArr[5]);
};
document
    .querySelector(".character-creation-form_randomizer")
    .addEventListener("click", characterRandomizer);
