'use strict';

function bgElements() {
    let elements = document.querySelectorAll('.set-bg');

    // console.log(elements);
    // for (let i = 0; i < elements.length; i++) {
    //     let src = elements[i].dataset.setbg;
    //     elements[i].style.backgroundImage = `url('${src}')`;
    // }

    elements.forEach((element) => {
        element.style.backgroundImage = `url('${element.dataset.setbg}')`;
    });

    //* Фильтрация массива методом filter
    // const array = [1, 2, 3, 4, 5];
    // const newArray = array.filter((item) => {
    //     return item <= 3;
    // });
    // console.log(newArray);

    //* Сортировка массива и объекта методом Sort
    // const array = [5, 6, 3, 7, 2];
    // const arrayObj = [
    //     {
    //         id: 3,
    //         value: 100
    //     },
    //     {
    //         id: 2,
    //         value: 300
    //     },
    //     {
    //         id: 1,
    //         value: 200
    //     }
    // ];
    // const newArraySort = arrayObj.sort((a, b) => {
    //     return a.id - b.id;
    // });
    // console.log(newArraySort);
}

bgElements();