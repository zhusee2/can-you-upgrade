#= require ./data
#= require ./screen
#= require ./screen_set

{ScreenSet, Screen} = window.AppData

class ScreenManager
  constructor: (@node) ->
    return unless @node.length

    @screenSet = new ScreenSet


window.AppData.manager = new ScreenManager($('.hero-section'))
