$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      modalSuc = $('.modal__succsess'),
      closeBtn = $('.modal__close');
      closeSuc = $('.modal__succsess__button');

  modalBtn.on('click', function() {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function() {
    modal.removeClass('modal--visible');
  });
    closeSuc.on('click', function() {
    modalSuc.removeClass('modal__succsess--visible');
  });
      $(document).keyup(function (event) {
        if (event.key === "Escape") {
            modal.removeClass('modal--visible');
        }
    });
    $(document).click(function (event) {
        if ($(event.target).is('.modal')) {
            modal.removeClass('modal--visible');
        }
    });
          $(document).keyup(function (event) {
        if (event.key === "Escape") {
            modalSuc.removeClass('modal__succsess--visible');
        }
    });
    $(document).click(function (event) {
        if ($(event.target).is('.modal__succsess')) {
            modalSuc.removeClass('modal__succsess--visible');
        }
    });

    // slider

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


  // WOW
  new WOW().init();

  // Валидация

  $('.modal__form').validate({
    errorClass: "invalid",
     rules: {
    modalUserName: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    modalUserPhone: {
      required: true,
      minlength: 10
    },
    modalUserEmail: {
      required: true,
      email: true
    },
  },
  messages: {
    modalUserName: {
      required: "Заполните поле",
      minlength: "Имя не должно быть короче двух букв",
      maxlength: "Имя не должно быть таким длинным"
    },
    modalUserPhone: {
      required: "Заполните поле",
      minlength: "Заполните номер полностью"
    },
    modalUserEmail: {
      required: "Заполните поле",
      email: "Введите корректный Email"
    }
  },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          modalSuc.toggleClass('modal__succsess--visible');
          }
      });
  }
  });



  // Маски
  $('[type=tel]').mask("+7 (000) 000-00-00", {placeholder: "+7 (999) 888-77-66"});


ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [47.244716, 39.723186],
            zoom: 18,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Наш офис'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-marker.png',
            // Размеры метки.
            iconImageSize: [24, 24]

        })
    myMap.geoObjects
        .add(myPlacemark);
});
    // при прокрутке окна (window)
    $('.scrollup').fadeOut();
    $(window).scroll(function() {
      // если пользователь прокрутил страницу более чем на 200px
      if ($(this).scrollTop()>500) {
        // то сделать кнопку scrollup видимой
        $('.scrollup').fadeIn();
      }
      // иначе скрыть кнопку scrollup
      else {
        $('.scrollup').fadeOut();
      }
    });
  var player;
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '465',
      width: '100%',
      videoId: '0ly25OYC45M',
      events: {
        'onReady': videoPlay,
      }
    });
  })

  function videoPlay(event) {
    event.target.playVideo();
  }

});
