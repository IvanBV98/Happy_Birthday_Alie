// console.log(window.innerWidth);
// console.log(window.innerHeight);
// Слайдер
let button = document.querySelector('.past'), a = 0, e;
button = document.addEventListener('click', function() {
    otmena(e);
    if (a == 0) {
        a = 1;
    }
    else {
        a = 0;
    }
});
function otmena(e) {
    let evt = e ? e : window.event;
    (evt.preventDefault) ? evt.preventDefault() : evt.returnValue = false;
    return false;
}
console.log(a);