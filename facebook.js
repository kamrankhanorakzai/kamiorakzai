const v4Elements = document.querySelectorAll('.ri-facebook-circle-line');
const v5Elements = document.querySelectorAll('.ri-instagram-line');
const v6Elements = document.querySelectorAll('.ri-twitter-fill');
const v7Elements = document.querySelectorAll('.ri-youtube-fill');



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
