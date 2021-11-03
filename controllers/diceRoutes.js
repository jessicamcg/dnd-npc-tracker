const { DiceRoll } = require("rpg-dice-roller");
const router = require("express").Router();

const rollDice = (number, type) => {
    const numberStr = number.toString();
    const roll = new DiceRoll(`${numberStr}d${type}`);
    return roll.output;
};

const randomDice = (number, type) => {
    const numberStr = number.toString();
    const roll = new DiceRoll(`${numberStr}d${type}`);
    return roll.rolls;
};

// route = dice/:number/:type
router.post("/:number/:type", async (req, res) => {
    try {
        res.status(200).json(rollDice(req.params.number, req.params.type));
    } catch (err) {
        res.status(500).json("Jason is dumb");
    }
});

router.post("/random/:number/:type", async (req, res) => {
    try {
        res.status(200).json(randomDice(req.params.number, req.params.type));
    } catch (err) {
        res.status(500).json("Jason is dumb");
    }
});
module.exports = router
