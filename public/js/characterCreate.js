const characterCreate = async (event) => {
    event.preventDefault();
    // console.log('click');
    const characterName = document.querySelector("#character-name").value.trim();
    const characterRace = document.querySelector("#race-select").value.trim();
    const characterMetParty = document.querySelector("#character-met-party").value.trim();
    const characterClass = document.querySelector("#character-class").value.trim();
    const strength = document.querySelector("#strength").value.trim();
    const dexterity = document.querySelector("#dexterity").value.trim();
    const constitution = document.querySelector("#constitution").value.trim();
    const intelligence = document.querySelector("#intelligence").value.trim();
    const wisdom = document.querySelector("#wisdom").value.trim();
    const charisma = document.querySelector("#charisma").value.trim();
    const notes = document.querySelector("#notes").value.trim();

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
