input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . .
        . . # . .
        . . # . .
        . . . # #
        . . . . #
        `)
    music.playMelody("C5 B A G F E D C ", 120)
})
basic.forever(function () {
	
})
