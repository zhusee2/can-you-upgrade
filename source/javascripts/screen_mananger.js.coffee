#= require ./data
#= require ./screen
#= require ./screen_set

{ScreenSet, Screen} = window.AppData

class ScreenManager
  constructor: (@node) ->
    return unless @node.length

    $defaultScreen = @node.find('.screen-default')
    Screen._setTemplate($defaultScreen)
    $defaultScreen.addClass('screen-active')

    @screenSet = new ScreenSet
    @activeScreen = new Screen($defaultScreen)
    @getNextScreen()

    @bindEvents()

  swapScreen: ->
    @activeScreen.leave =>
      @activeScreen.destroy()
      @nextScreen.enter()

      @activeScreen = @nextScreen
      @getNextScreen()

  getNextScreen: ->
    screen = @screenSet.pop()

    if @activeScreen.isType(screen.getType())
      screen = @screenSet.pop()

    @nextScreen = screen
    @node.append(screen.node)

  bindEvents: ->
    @node.on 'click', '.random-button', => @swapScreen()



window.AppData.manager = new ScreenManager($('.hero-section'))
