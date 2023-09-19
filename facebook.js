const v4Elements = document.querySelectorAll('.ri-facebook-circle-line');
const v5Elements = document.querySelectorAll('.ri-instagram-line');
const v6Elements = document.querySelectorAll('.ri-twitter-fill');
const v7Elements = document.querySelectorAll('.ri-youtube-fill');


// v5.addEventListener('click', function() {
//     v5.style.color = 'orange';
//     v5.style.transition = '2s';
//     setTimeout(() => {
//         v5.style.color = 'white';
//         v5.style.transition = '1s';
//     }, 1000);
// });

// v6.addEventListener('click', function() {
//     v6.style.color = '#00acee';
//     v6.style.transition = '2s';
//     setTimeout(() => {
//         v6.style.color = 'white';
//         v6.style.transition = '1s';
//     }, 1000);
// });

// v7.addEventListener('click', function() {
//     v7.style.color = 'red';
//     v7.style.transition = '2s';
//     setTimeout(() => {
//         v7.style.color = 'white';
//         v7.style.transition = '1s';
//     }, 1000);
// })
// addClickEvent(v5, 'orange', '2s');
// addClickEvent(v6, '#00acee', '2s');
// addClickEvent(v7, 'red', '2s');
function addClickEventToElements(elements, initialColor, transitionDuration) {
    elements.forEach((element) => {
        element.addEventListener('click', function() {
            element.style.color = initialColor;
       
            element.style.transition = transitionDuration;
            setTimeout(() => {
                element.style.color = 'white';
                element.style.transition = '1s';
            }, 1000);
        });
    });
}

// Usage
addClickEventToElements(v4Elements, 'blue', '1s');
addClickEventToElements(v5Elements, 'orange', '1s');
addClickEventToElements(v6Elements, '#00acee', '1s');
addClickEventToElements(v7Elements, 'red', '1s');
