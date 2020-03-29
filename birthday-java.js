// console.log(window.innerWidth);
// console.log(window.innerHeight);
// Слайдер
let button = document.querySelector('.dbutton'),
next = document.querySelector('.next'),
a = 0,
i = 1,
k,
e;

button = document.addEventListener('click', function() {
    otmena(e);
});
past = document.addEventListener('click', function() {
    if(i != 1) {
        for (j = 1; j <= 0; j = j - 0.1) {

        }
    }
});
function otmena(e) {
    let evt = e ? e : window.event;
    (evt.preventDefault) ? evt.preventDefault() : evt.returnValue = false;
    return false;
}
console.log(a);