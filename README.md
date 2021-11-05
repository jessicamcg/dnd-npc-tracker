# 8-1-project-2

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Character Tracker for dungeon masters playing Dungeons & Dragons. This application lets you log in and store an assortment of basic NPC info that you can quickly pull up and access during a game. You can also quickly auto generate and update old characters at the press of a button.

## Deployment

Live [link](https://dnd-dm-character-tracker.herokuapp.com/) on Heroku

## Demo

![Gif showing character creation, viewing, and updating. Also shows dice roller functionality.](./public/images/project-2-dnd-char-tracker.gif)

## Contributors

-   [jasonluxie](https://github.com/jasonluxie)
-   [jessicamcg](https://github.com/jessicamcg)
-   [BossyLemon0](https://github.com/BossyLemon0)

## Resources

### Images

-   [Unsplash](https://unsplash.com/)
-   [Shutterstock](https://www.shutterstock.com/home)

### Frameworks

-   [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/)

## Development Instructions

1. Change .env.EXAMPLE from placeholders to your mysql username and password.
1. Rename .env.EXAMPLE file to .env
1. Create and seed database

### Package Installation

```
npm i
```

If missing package.json

```
npm i bcrypt
npm i connect-session-sequelize
npm i dotenv
npm i express
npm i express-handlebars
npm i express-session
npm i mysql2
npm i rpg-dice-roller
npm i sequelize
```

## Further Development

### Username Validation

-   Unique username validation works but user feedback for error cannot differentiate from server issue or non-unique username. Error needs to be parsed in the backend to send appropriate error response.

### Character Sheet

-   HP can be calculated and then displayed on character sheets based off class, level, and constitution.
-   Racial and class bonuses added to attribute modifiers
-   Input field for gender
-   Area to select avatar and picture
-   Armor class selection based off armor type
-   Inventory management
-   Location input field
-   More specific character identifiers rather than a catch all of notes

### Card Manipulation

-   Sorting cards by race, class, stats
-   Filtering cards by race, class, stats
-   Filtering by session or game
-   Character deletion or death
