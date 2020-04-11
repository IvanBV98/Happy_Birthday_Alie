// console.log(window.innerWidth);
// console.log(window.innerHeight);

// Запрос ключа доступа

let security = document.querySelector('.security');
login = prompt('Введите логин');
while (login != 'Alie704') {
    alert('Доступ запрещён');
    security.style.display = 'block';
    login = prompt('Введите логин');
}
alert('Доступ разрешён');
security.style.display = 'none';

// Слайдер

let past = document.querySelector('.past'),
    next = document.querySelector('.next'),
    button = document.querySelector('.dbutton'),
    images = document.querySelectorAll('.image'),
    active = document.querySelector('.active'),
    fody = document.querySelector('.fody'),
    i = 0,
    e;


button = document.addEventListener('click', function () {
    otmena(e);
})
function otmena(e) {
    let evt = e ? e : window.event;
    (evt.preventDefault) ? evt.preventDefault() : evt.returnValue = false;
    return false;
}
let before = past.addEventListener('click', function () {
    images[i].classList.toggle("active");
    if (i > 0) i = i - 1;
    else i = 54;
    images[i].classList.toggle("active");
})
let after = next.addEventListener('click', function () {
    images[i].classList.toggle("active");
    if (i < 54) i = i + 1;
    else i = 0;
    images[i].classList.toggle("active");
})