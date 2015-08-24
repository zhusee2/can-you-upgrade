NEXT = 'screen-next'
ACTIVE = 'screen-active'
LEAVING = 'screen-leaving'

class Screen
  @_setTemplate: ($node) ->
    @_$template = $node.clone() if $node.length

  @_createFromTemplate: (options={}) ->
    new Screen(@_$template.clone(), options)

  constructor: (@node, @settings) ->
    return unless @node.length and @settings
    @node.attr('class', 'hero-screen screen-next')
    @updateContent()

  updateContent: ->
    @node.addClass("type-#{@settings.type}")

    @node.find('.hero-title').text(@settings.title)
    @node.find('.hero-subtitle').text(@settings.subtitle)

    @node.find('.hero-attribution > a').text(@settings.attr)
    @node.find('.hero-attribution > a').attr('href', @settings.link)

  getType: ->
    @settings.type

  isType: (typeName) ->
    @node.hasClass("type-#{typeName}")

  enter: ->
    @node.removeClass(NEXT).addClass(ACTIVE)

  leave: (callback) ->
    @node.removeClass(ACTIVE).addClass(LEAVING)
    @node.one $.support.transition.end, -> callback?()
    @node.emulateTransitionEnd(600)

  destroy: ->
    @node.remove()

window.AppData.Screen = Screen
