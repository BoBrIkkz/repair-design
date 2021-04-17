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
    const swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');
  next.css('left',prev.width() + 15 + bullets.width() + 15)
  bullets.css('left', prev.width() + 15)
});
