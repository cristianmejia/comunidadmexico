# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$('[data-action="like"]').bind 'ajax:success', ->
  $(this).closest('[data-action="unlike"]').show()
  $('[data-action="votes"]').html ($(this).attr('data-votes') + 1)
  $(this).hide()
  return
$('[data-action="unlike"]').bind 'ajax:success', ->
  $(this).closest('[data-action="like"]').show()
  $('[data-action="votes"]').html $(this).attr('data-votes')
  $(this).hide()
  return