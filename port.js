let v1 = document.querySelector('.b1tn');
let v2 = document.querySelector('.b2tn');
let v3 = document.querySelector('.js');


v1.addEventListener('click', function() {
    v1.style.backgroundColor = 'white';
    v1.style.borderStyle = 'solid';
    v1.style.transition = '2s';
setTimeout(() => {
    v1.style.backgroundColor = 'orange';
    v1.style.borderStyle = 'none';
    v1.style.transition = '2s';
}, 2000);
});

v2.addEventListener('click', function() {
    v2.style.backgroundColor = 'orange';
    v2.style.transition = '2s';
    setTimeout(() => {
        v2.style.backgroundColor = 'white';
        v2.style.borderStyle = 'solid';
        v2.style.transition = '1s';
    }, 1000);
});

v3.addEventListener('click', function() {
    v3.style.backgroundColor = 'orange';
    v3.style.color='black'
    v3.style.transition = '2s';
    setTimeout(() => {
        v3.style.backgroundColor = 'white';
        v3.style.borderStyle = 'solid';
        v3.style.transition = '1s';
    }, 1000);
});

