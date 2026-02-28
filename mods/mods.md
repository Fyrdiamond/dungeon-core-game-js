# Mods
## The /mods/ folder
This game is centered around its modloader, to make both modding and developing easier.

/mods/core/ contains the "base game"; everything needed for the player to become a dungeon core fighting off adventurers in an incremental game.

Technically speaking, you could remove the core directory and be left with just a modloader, to which you can add your own game.

## How to mod this game
So you want to mod my game.

Go ahead! it's as easy as 1, 2, 3:

1. Create a new folder inside /mods/ with a mod.js file containing a class as the default export.
2. Add any other files or folders with whatever javascript you'd like, to be imported by your class.

Okay I lied, it's as easy as 1, 2.

## How to write mod.js
To write mod.js you're going to need a class with a constructor. I'm calling mine `Mod`, but the name doesn't technically matter.

```
export default class Mod {
    constructor(manager) {
        // your code here!
    }
}
```

That's it!

You do still have to connect your mod to the game, but this is the bare minimum for you to not have errors.

You can reference the `ModManager` API for how to connect different parts of your mod to the game.

## How to run a modded game
You may have noticed this game runs on a webpage. In order to run a modded game, you have to host your own webpage for it to run on—my personal recommendation is to do so locally, but you can also host it somewhere like itch.io or github pages among others.

To host it locally (using Node):

1. [Install Node](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2. run `npx http-server /path/to/game -o` in your terminal

The game should automatically open in http://127.0.0.1:8080, or you can access it from http://localhost:8080 in any web browser.
