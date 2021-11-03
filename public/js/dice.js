const dice_button = document.querySelector('.dice-roller-button')
const results = document.querySelector('.results')


async function getEL(){
const numberOfRolls = await document.querySelector('.rolls').value;
const dice = await document.querySelector('.die').value;

const response = await fetch(`dice/${numberOfRolls}/${dice}`, {
    method: "POST",
    body: JSON.stringify({
        numOfRolls: numberOfRolls,
        Die: dice,
    }),
    headers: { "Content-Type": "application/json" },
})
const rolly = await response.json();
if (rolly) {
    console.log(rolly)
    results.innerHTML = rolly;
    
} else {
    console.log(response)
    alert("dice roll failed");
};

}

dice_button.addEventListener('click', getEL);