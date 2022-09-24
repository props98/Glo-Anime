'use strict';

function modal() {
    let modal = document.querySelector('.search-model');
    let modalBtn = document.querySelector('.icon_search');
    let modalClose = modal.querySelector('.search-close-switch');

    modalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
    });

    modalClose.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'none';
    });
}

modal();

