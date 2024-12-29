namespace SpriteKind {
    export const Gas = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Dart2`, mySprite, 100, 100)
    mySprite.startEffect(effects.ashes, 100)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Gas, function (sprite, otherSprite) {
    statusbar.value = 100
    otherSprite.destroy()
})
statusbars.onZero(StatusBarKind.Energy, function (status) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
})
let myEnemy: Sprite = null
let myFuel: Sprite = null
let projectile: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`Galaxy0`)
scroller.scrollBackgroundWithSpeed(-50, -50)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . 2 2 2 2 2 . . . . . 
    . . . . . . 2 f . f 2 . . . . . 
    . . . . . . 2 . a . 2 . . . . . 
    . . . . . . 2 . a . 2 . . . . . 
    . . . . . 2 2 f . f 2 . . . . . 
    . . . . . 2 2 f f f 2 2 2 . . . 
    . . . . 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . 2 f . f 2 . . . . . . 
    . . . . . 2 . a . 2 . . . . . . 
    . . . . . 2 . a . 2 . . . . . . 
    . . . . 2 2 f . f 2 . . . . . . 
    . . . . 2 2 f f f 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 . . . . 
    . . . . . . f f . . . . . . . . 
    . . . . . 5 5 5 5 . . . . . . . 
    . . . . . 5 5 5 5 . . . . . . . 
    . . . . 5 5 5 5 5 5 . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . 2 f . f 2 . . . . . . 
    . . . . . 2 . a . 2 . . . . . . 
    . . . . . 2 . a . 2 . . . . . . 
    . . . . 2 2 f . f 2 . . . . . . 
    . . . . 2 2 f f f 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 . . . . 
    . . . . . . f f . . . . . . . . 
    . . . . . 5 5 5 5 . . . . . . . 
    . . . . . 5 5 5 5 . . . . . . . 
    . . . 5 5 5 5 5 5 5 5 . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . 2 f . f 2 . . . . . . 
    . . . . . 2 . a . 2 . . . . . . 
    . . . . . 2 . a . 2 . . . . . . 
    . . . . 2 2 f . f 2 . . . . . . 
    . . . . 2 2 f f f 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 . . . . 
    . . . . . . f f . . . . . . . . 
    . . . . . 5 5 5 5 . . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . 5 5 5 5 5 5 5 5 . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . 2 f . f 2 . . . . . . 
    . . . . . 2 . a . 2 . . . . . . 
    . . . . . 2 . a . 2 . . . . . . 
    . . . . 2 2 f . f 2 . . . . . . 
    . . . . 2 2 f f f 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 . . . . 
    . . . . . . f f . . . . . . . . 
    . . . . 5 5 5 5 5 . . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . 5 5 5 5 5 5 5 5 . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . 2 f . f 2 . . . . . . 
    . . . . . 2 . a . 2 . . . . . . 
    . . . . . 2 . a . 2 . . . . . . 
    . . . . 2 2 f . f 2 . . . . . . 
    . . . . 2 2 f f f 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 . . . . 
    . . . . . . f f . . . . . . . . 
    . . . . . 5 5 5 5 . . . . . . . 
    . . . . . 5 5 5 5 . . . . . . . 
    . . . . 5 5 5 5 5 5 . . . . . . 
    `],
500,
true
)
statusbar = statusbars.create(20, 4, StatusBarKind.Energy)
statusbar.attachToSprite(mySprite, 0, 0)
let enemySpeed = 50
game.onUpdateInterval(5000, function () {
    myFuel = sprites.createProjectileFromSide(assets.image`Fuel`, 50, 50)
    myFuel.x = randint(5, 155)
    myFuel.setKind(SpriteKind.Gas)
})
game.onUpdateInterval(1000, function () {
    myEnemy = sprites.createProjectileFromSprite(assets.image`Spider`, myEnemy, 50, 50)
    myEnemy.x = randint(5, 155)
    myEnemy.setKind(SpriteKind.Enemy)
    animation.runImageAnimation(
    myEnemy,
    assets.animation`Flying Spider`,
    100,
    false
    )
})
forever(function () {
    music.play(music.createSong(hex`0078000408030200001c00010a006400f4016400000400000000000000000000000000050000047a0000000400011d04000800011d08000c0001200c001000012010001400012214001800012418001c0001221c002000011e20002400011d28002c00011d2c003000011e30003400012034003800012438003c0001223c004000012444004800012248004c0001204c005000011b5400580002202558005c0002202207001c00020a006400f4016400000400000000000000000000000000000000037f0000000400010a04000800010a08000c00010d0c001000011110001400011114001800011218001c0001111c002000010d20002400010f24002800010c28002c00010d2c003000010d30003400010d34003800010d3c004000010c40004400010c48004c00020a0d50005400010c54005800010c58005c00010d5c0060000114`), music.PlaybackMode.UntilDone)
})
game.onUpdateInterval(500, function () {
    statusbar.value += -1
})
