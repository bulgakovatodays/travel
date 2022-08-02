console.log("1. Task: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/travel/travel-part3.md \n 3. Deploy: https://rolling-scopes-school.github.io/bulgakovatodays-JSFEPRESCHOOL2022Q2/travel/ \n 4. Done 26.07.22 / deadline 26.07.22 \n  5. Score: 80 / 100 \n Слайдер +40 (-10 баллов за отсутсвие кружочков) \n Попап + 20 (не показывается мобильная версия и нет алерта) \n Дополнительный функционал +20 (Нажатие на кнопку Register на Login попапе меняет разметку попапа)");

/* БУРГЕР-МЕНЮ: */

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu_body');

(function () {
    burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
    menu.classList.toggle('menu_body_active');
  });
}());

(function () {
  menu.querySelectorAll('.point_navig').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('burger_active');
      menu.classList.remove('menu_body_active');
    });
  })
}());


/* ------------- СЛАЙДЕР --------------- */
console.log(document.documentElement.clientWidth);

let offset;
const sliderLine = document.querySelector('.container_destinations');

if (document.documentElement.clientWidth > 390) {
  offset = -1393;
  const buttonLeft = document.querySelector('.action-right');
  buttonLeft.addEventListener('click', function() {
    console.log('Начальное значение:' + offset);
    offset = offset - 852;
    if (offset < -3096) { 
      offset = -541;
    };
    sliderLine.style.left = offset + 'px';
    console.log('=> Left: ' + offset + 'px');
  });

  const buttonRight = document.querySelector('.action-left');
  buttonRight.addEventListener('click', function() {
    console.log('Начальное значение:' + offset);
    offset += 852;
    if (offset > -540) { 
      offset = -2245;
    };
    sliderLine.style.left = offset + 'px';
    console.log('<= Left: ' + offset + 'px');
  });
}

if (document.documentElement.clientWidth <= 390) {
  offset = -372;
  const buttonLeft = document.querySelector('.action-right');
  buttonLeft.addEventListener('click', function() {
    console.log('Начальное значение:' + offset);
    offset = offset - 372;
    if (offset < -1489) { 
      offset = -744;
    };
    sliderLine.style.left = offset + 'px';
    console.log('=> Right: ' + offset + 'px');
  });

  const buttonRight = document.querySelector('.action-left');
  buttonRight.addEventListener('click', function() {
    console.log('Начальное значение:' + offset);
    offset = offset + 372;
    if (offset > 5) { 
      offset = -744;
    };
    sliderLine.style.left = offset + 'px';
    console.log('<= Left: ' + offset + 'px');
  });
}  

  /* ------------ РАБОТА МЕНЮ: ------------ */

const anchors = document.querySelectorAll('a[href*="#"')
anchors.forEach(anchor => {
  anchor.addEventListener('click', event => {
    event.preventDefault();
    const blockID = anchor.getAttribute('href').substring(1);
    console.log(blockID);
    if (blockID !== 'Account') {
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        popUp.classList.toggle('popUp_active');
      };
  });
});

  /* -------------POP UP -------------- */

const login = document.querySelector('.button_login');
const register = document.querySelector('.register-popup');
const loginPopup = document.querySelector('.login-popup');

const popUp = document.querySelector('.popUp');
const SignPop = document.querySelector('.SignPop');
const popupBG1 = document.querySelector('.popup-bg1');
const popupBG2 = document.querySelector('.popup-bg2');

/* открытие первого поп-апа по логину: */
(function () {
    login.addEventListener('click', () => {
      popUp.classList.add('popUp_active');
      popupBG1.classList.add('popup-bg1_active');
    });
}());

/* закрытие первого попапа по клику вне него:  */
(function () {
  popupBG1.addEventListener('click', () => {
    popUp.classList.remove('popUp_active');
    popupBG1.classList.remove('popup-bg1_active');
  });
}());

/* открытие второго поп-апа из дива регистрации: */
(function () {
  register.addEventListener('click', () => {
    popUp.classList.remove('popUp_active');
    popupBG1.classList.remove('popup-bg1_active');
    SignPop.classList.add('SignPop_active');
    popupBG2.classList.add('popup-bg2_active');
  });
}());

/* закрытие второго попапа по клику вне него:  */
(function () {
  popupBG2.addEventListener('click', () => {
    SignPop.classList.remove('SignPop_active');
    popupBG2.classList.remove('popup-bg2_active');
  });
}());

/* открытие первого поп-апа из второго: */
(function () {
  loginPopup.addEventListener('click', () => {
    popUp.classList.add('popUp_active');
    popupBG1.classList.add('popup-bg1_active');
    SignPop.classList.remove('SignPop_active');
    popupBG2.classList.remove('popup-bg2_active');
  });
}());

/* вывод текта в алерт: */
const publishs = document.querySelectorAll('.button-pop');
const email = document.getElementById('e-mail').value;
const password = document.getElementById('password').value;
publishs.forEach(publish => {
  publish.addEventListener('click', () => {
    popUp.classList.remove('popUp_active');
    popupBG1.classList.remove('popup-bg1_active');
    SignPop.classList.remove('SignPop_active');
    popupBG2.classList.remove('popup-bg2_active');
    alert(`E-mail: ${email} \nPassword: ${password}`);
  });
});
