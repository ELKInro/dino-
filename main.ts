input.onButtonPressed(Button.A, function () {
    PIES_DINO.change(LedSpriteProperty.Y, -1)
    CABEZA_DINO.change(LedSpriteProperty.Y, -1)
    basic.pause(1000)
    PIES_DINO.change(LedSpriteProperty.Y, 1)
    CABEZA_DINO.change(LedSpriteProperty.Y, 1)
})
function CACTUS2 () {
    CACTUS = game.createSprite(4, 3)
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
        CACTUS.change(LedSpriteProperty.X, -1)
        if (CACTUS.isTouching(PIES_DINO)) {
            basic.showIcon(IconNames.Sad)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerDown), music.PlaybackMode.InBackground)
            CACTUS2()
        }
    }
}
let CACTUS: game.LedSprite = null
let CABEZA_DINO: game.LedSprite = null
let PIES_DINO: game.LedSprite = null
PIES_DINO = game.createSprite(0, 3)
CABEZA_DINO = game.createSprite(0, 2)
let CAMINO = game.createSprite(4, 4)
CAMINO = game.createSprite(3, 4)
CAMINO = game.createSprite(2, 4)
CAMINO = game.createSprite(1, 4)
CAMINO = game.createSprite(0, 4)
CACTUS2()
basic.forever(function () {
    if (CACTUS.isTouchingEdge()) {
        basic.pause(1000)
        CACTUS.delete()
        CACTUS2()
    }
})
