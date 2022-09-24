'use strict';

function bgElements() {
    let elements = document.querySelectorAll('.set-bg');

    // console.log(elements);
    for (let i = 0; i < elements.length; i++) {
        // console.dir(elements[i]);
        let src = elements[i].dataset.setbg;

        elements[i].style.backgroundImage = `url('${src}')`;
        // console.log(src);
    }
};

bgElements();