'use strict';

let preloder = document.querySelector('.preloder');

// console.log(preloder);

preloder.classList.add('active');

setTimeout(() => {
    preloder.classList.remove('active');
}, 500);

