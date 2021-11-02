const characterView = async (id) => {
    const characterName = document.querySelector("#character-name");
    const strength = document.querySelector("#strength");
    const dexterity = document.querySelector("#dexterity");
    const constitution = document.querySelector("#constitution");
    const intelligence = document.querySelector("#intelligence");
    const wisdom = document.querySelector("#wisdom");
    const charisma = document.querySelector("#charisma");
    const notes = document.querySelector("#notes");

    const response = await fetch(`/api/character/${id}`, {
        method: "GET",
    });
    if (response) {
        characterName.setAttribute("value", response.name);
        switch (response.race) {
            case "Dragonborn":
                const dragonborn = document.querySelector("#Dragonborn");
                dragonborn.setAttribute("selected", "");
                break;
            case "Dwarf":
                const dwarf = document.querySelector("#Dwarf");
                dwarf.setAttribute("selected", "");
                break;
            case "Elf":
                const elf = document.querySelector("#Elf");
                elf.setAttribute("selected", "");
                break;
            case "Gnome":
                const gnome = document.querySelector("#Gnome");
                gnome.setAttribute("selected", "");
                break;
            case "Half-Elf":
                const halfElf = document.querySelector("#Half-Elf");
                halfElf.setAttribute("selected", "");
                break;
            case "Halfling":
                const halfing = document.querySelector("#Halfing");
                halfing.setAttribute("selected", "");
                break;
            case "Half-Orc":
                const halfOrc = document.querySelector("#Half-Orc");
                halfOrc.setAttribute("selected", "");
                break;
            case "Human":
                const human = document.querySelector("#Human");
                human.setAttribute("selected", "");
                break;
            case "Tiefling":
                const tiefling = document.querySelector("#Tiefling");
                tiefling.setAttribute("selected", "");
                break;
        }
        if (response.met_party == true) {
            const yes = document.querySelector("#met-party_yes");
            yes.setAttribute("selected", "");
        }
        switch (response.class) {
            case "Barbarian":
                const barbarian = document.querySelector("#Barbarian");
                barbarian.setAttribute("selected", "");
                break;
            case "Bard":
                const bard = document.querySelector("#Bard");
                bard.setAttribute("selected", "");
                break;
            case "Cleric":
                const cleric = document.querySelector("#Cleric");
                cleric.setAttribute("selected", "");
                break;
            case "Druid":
                const druid = document.querySelector("#Druid");
                druid.setAttribute("selected", "");
                break;
            case "Fighter":
                const fighter = document.querySelector("#Fighter");
                fighter.setAttribute("selected", "");
                break;
            case "Monk":
                const monk = document.querySelector("#Monk");
                monk.setAttribute("selected", "");
                break;
            case "Paladin":
                const paladin = document.querySelector("#Paladin");
                paladin.setAttribute("selected", "");
                break;
            case "Ranger":
                const ranger = document.querySelector("#Ranger");
                ranger.setAttribute("selected", "");
                break;
            case "Rogue":
                const rogue = document.querySelector("#Rogue");
                rogue.setAttribute("selected", "");
                break;
            case "Sorceror":
                const sorceror = document.querySelector("#Sorceror");
                sorceror.setAttribute("selected", "");
                break;
            case "Warlock":
                const warlock = document.querySelector("#Warlock");
                warlock.setAttribute("selected", "");
                break;
            case "Wizard":
                const wizard = document.querySelector("#Wizard");
                wizard.setAttribute("selected", "");
                break;
            default:
                const noClass = document.querySelector("#no-class");
                noClass.setAttribute("selected", "");
                break;
        }
        notes.textContent = response.notes;
        strength.setAttribute("value", response.stat.strength);
        dexterity.setAttribute("value", response.stat.dexterity);
        constitution.setAttribute("value", response.stat.constitution);
        intelligence.setAttribute("value", response.stat.intelligence);
        wisdom.setAttribute("value", response.stat.wisdom);
        charisma.setAttribute("value", response.stat.charisma);
    }
};

const windowArr = window.location.pathname.split('/');
const windowID = windowArr[windowArr.length-1]
console.log(windowID);
characterView(windowID);

// const characterUpdate = async (event, id) => {
//     event.preventDefault();
//     const characterName = document
//         .querySelector("#character-name")
//         .value.trim();
//     const characterRace = document.querySelector("#race-select");
//     const characterMetParty = document.querySelector("#character-met-party");
//     const characterClass = document.querySelector("#character-class");
//     const strength = document.querySelector("#strength");
//     const dexterity = document.querySelector("#dexterity");
//     const constitution = document.querySelector("#constitution");
//     const intelligence = document.querySelector("#intelligence");
//     const wisdom = document.querySelector("#wisdom");
//     const charisma = document.querySelector("#charisma");
//     const notes = document.querySelector("#notes").value.trim();

//     const response = await fetch(`api/character/${id}`, {
//         method: "PUT",
//         body: JSON.stringify({
//             characterName,
//             characterRace,
//             characterMetParty,
//             characterClass,
//             strength,
//             dexterity,
//             constitution,
//             intelligence,
//             wisdom,
//             charisma,
//             notes,
//         }),
//         headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//         document.location.replace(`character/${id}`);
//     } else {
//         alert("Something went wrong updating the character");
//     }
// };
