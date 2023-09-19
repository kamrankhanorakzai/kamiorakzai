let v1 = document.querySelector('.b1tn');
let v2 = document.querySelector('.b2tn');
let v3 = document.querySelector('.js');
let v4 = document.querySelector('.ri-facebook-circle-line');
let v5 = document.querySelector('.ri-instagram-line');
let v6 = document.querySelector('.ri-twitter-fill');
let v7 = document.querySelector('.ri-youtube-fill');

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

v4.addEventListener('click', function() {
    v4.style.color = 'blue';
    v4.style.transition = '2s';
    setTimeout(() => {
        v4.style.color = 'white';
        v4.style.transition = '1s';
    }, 1000);
});

v5.addEventListener('click', function() {
    v5.style.color = 'orange';
    v5.style.transition = '2s';
    setTimeout(() => {
        v5.style.color = 'white';
        v5.style.transition = '1s';
    }, 1000);
});

v6.addEventListener('click', function() {
    v6.style.color = '#00acee';
    v6.style.transition = '2s';
    setTimeout(() => {
        v6.style.color = 'white';
        v6.style.transition = '1s';
    }, 1000);
});

v7.addEventListener('click', function() {
    v7.style.color = 'red';
    v7.style.transition = '2s';
    setTimeout(() => {
        v7.style.color = 'white';
        v7.style.transition = '1s';
    }, 1000);
})
