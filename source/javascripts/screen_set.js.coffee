#= require ./data
#= require ./screen

{Screen} = window.AppData

class ScreenSet
  constructor: ->
    @initRandomArray()

  initRandomArray: ->
    baseArray = window.AppData.screens.slice(0)
    window.knuthShuffle(baseArray)
    @screensArray = baseArray

  pop: ->
    if screenData = @screensArray.pop()
      return Screen._createFromTemplate(screenData)
    else
      @initRandomArray()
      return @pop()

window.AppData.ScreenSet = ScreenSet
