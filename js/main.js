$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('.button'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function() {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function() {
    modal.toggleClass('modal--visible');
  });
      $(document).keyup(function (event) {
        if (event.key === "Escape") {
            modal.removeClass('modal--visible');
        }
    });
    $(document).click(function (event) {
        if ($(event.target).is('.modal')) {
            modal.toggleClass('modal--visible');
        }
    });
});
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

});
