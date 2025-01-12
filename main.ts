input.onButtonPressed(Button.A, function () {
    cuteBot.turnleft()
    music.play(music.createSoundExpression(WaveShape.Square, 5000, 1, 255, 255, 3307, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    cuteBot.turnright()
    music.play(music.createSoundExpression(WaveShape.Square, 5000, 0, 255, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    cuteBot.backforward()
    music.play(music.createSoundExpression(WaveShape.Noise, 5000, 1, 255, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    cuteBot.forward()
    music.play(music.createSoundExpression(WaveShape.Noise, 5000, 0, 255, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
basic.showLeds(`
    . # . # .
    . # . # .
    . . # . .
    # # # # #
    . # # # .
    `)
music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.LoopingInBackground)
