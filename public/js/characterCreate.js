const characterCreate = async (event) => {
    event.preventDefault();
    const characterName = document
        .querySelector("#character-name")
        .value.trim();
    const characterRace = document.querySelector("#race-select").value.trim();
    const characterMetParty = document.querySelector("#character-met-party");
    const characterClass = document.querySelector("#character-class");
    const strength = document.querySelector("#strength");
    const dexterity = document.querySelector("#dexterity");
    const constitution = document.querySelector("#constitution");
    const intelligence = document.querySelector("#intelligence");
    const wisdom = document.querySelector("#wisdom");
    const charisma = document.querySelector("#charisma");
    const notes = document.querySelector("#notes");

    if (characterName && characterRace && characterMetParty) {
        const response = await fetch("/api/character", {
            method: "POST",
            body: JSON.stringify({
                characterName,
                characterRace,
                characterMetParty,
                characterClass,
                strength,
                dexterity,
                constitution,
                intelligence,
                wisdom,
                charisma,
                notes,
            }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/");
        } else {
            alert("Character creation failed");
        }
    }
};

document
    .querySelector("#character-creation-form")
    .addEventListener("submit", characterCreate);
