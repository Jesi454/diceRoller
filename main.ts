function rollAnim () {
    sides[randint(0, 5)].showImage(0)
    basic.pause(50)
}
function createImages () {
    _1Side = images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    _2Side = images.createImage(`
        . . . . .
        . # . . .
        . . . . .
        . . . # .
        . . . . .
        `)
    _3Side = images.createImage(`
        # . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . #
        `)
    _4Side = images.createImage(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . . . .
        `)
    _5Side = images.createImage(`
        # . . . #
        . . . . .
        . . # . .
        . . . . .
        # . . . #
        `)
    _6Side = images.createImage(`
        . # . # .
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        `)
    sides = [
    _1Side,
    _2Side,
    _3Side,
    _4Side,
    _5Side,
    _6Side
    ]
}
input.onGesture(Gesture.Shake, function () {
    chosenSide = randint(0, 5)
    for (let index = 0; index < randint(8, 25); index++) {
        rollAnim()
    }
    sides[chosenSide].showImage(0)
})
let chosenSide = 0
let _6Side: Image = null
let _5Side: Image = null
let _4Side: Image = null
let _3Side: Image = null
let _2Side: Image = null
let _1Side: Image = null
let sides: Image[] = []
createImages()
