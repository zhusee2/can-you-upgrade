NEXT = 'screen-next'
ACTIVE = 'screen-active'
LEAVING = 'screen-leaving'

class Screen
  constructor: (@node, @settings={}) ->
    return unless @node.length
    @node.attr('class', 'hero-screen screen-next')
    @updateContent()

  updateContent: ->
    @node.addClass("type-#{@settings.type}")

    @node.find('.hero-title').text(@settings.title)
    @node.find('.hero-subtitle').text(@settings.subtitle)

    @node.find('.hero-attribution > a').text(@settings.attr)
    @node.find('.hero-attribution > a').attr('href', @settings.link)

  enter: ->
    @node.removeClass(NEXT).addClass(ACTIVE)

  leave: (callback) ->
    @node.removeClass(ACTIVE).addClass(LEAVING)
    @node.one $.support.transition, -> callback?()
    @node.emulateTransitionEnd(600)

  destroy: ->
    @node.remove()

window.AppData.Screen = Screen
