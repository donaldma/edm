'use strict'

$(function () {
  function closeNav() {
    $('header').removeClass('nav-open')
  }

  $('.main-container').click(function () {
    closeNav()
  })

  $('.label').each(function (i, e) {
    $(e).click(function () {
      closeNav()
    })
  })

})