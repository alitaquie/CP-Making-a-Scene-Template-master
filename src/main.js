// Code Practice: Making a Scene
// Name: Mohammad Taquie
// Date: 1/21/24

"use strict"

let config = {
    type: Phaser.AUTO,
    render:{
        pixelArt: true
    },
    scene: [MainMenu, Play]
}

let game = new Phaser.Game(config)
