let past = document.querySelector('.past'),
    next = document.querySelector('.next'),
    currentSlide = 0,
    image = document.querySelector('.next'),
    i = 0,
    e;
var imageClasses = image.classList;
for (i = 0; i <= 54; i++) {
    image[i] = document.querySelector('.image'+i);
}

button = document.addEventListener('click', function () {
    otmena(e);
})
function otmena(e) {
    let evt = e ? e : window.event;
    (evt.preventDefault) ? evt.preventDefault() : evt.returnValue = false;
    return false;
}
let before = past.addEventListener('click', function () {
    pastSlide();
})
let after = next.addEventListener('click', function () {
    if (i < 54) i = i + 1;
    else i = 0;
    console.log(i);
})

function pastSlide() {
    console.log(image.classList)
    image[i].classList.toggle("active");
    if (i > 0) i = i - 1;
    else i = 54;
    image[i].classList.toggle("active");
}