# 8-1-project-2

## Description

Character Tracker for dungeon masters playing Dungeons & Dragons. This application lets you log in and store an assortment of basic NPC info that you can quickly pull up and access during a game. You can also quickly auto generate and update old characters at the press of a button.

## Deployment

Live [link](https://dnd-dm-character-tracker.herokuapp.com/) on Heroku

## Resources

### Images

-   [Unsplash](https://unsplash.com/)
-   [Shutterstock](https://www.shutterstock.com/home)

### Frameworks

-   [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/)

## Instructions

1. Change .env.EXAMPLE from placeholders to your mysql username and password.

## Further Development

### Username Validation

-   Unique username validation works but user feedback for error cannot differeniate from server issue or non-unique username. Error needs to be parsed in the backend to send appropriate error response.

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