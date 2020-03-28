// console.log(window.innerWidth);
// console.log(window.innerHeight);
// Слайдер
let button = document.querySelector('.dbutton'),
past = document.querySelector('.past'),
a = 0,
e;
button = document.addEventListener('click', function() {
    otmena(e);
    return(a);
});
past = document.addEventListener('click', function() {
    a = a + 1;
});
function otmena(e) {
    let evt = e ? e : window.event;
    (evt.preventDefault) ? evt.preventDefault() : evt.returnValue = false;
    return false;
}
console.log(a);