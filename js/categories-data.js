'use strict';

function categoriesData() {

    function renderGanreList(ganres) {
        const dropDownBlock = document.querySelector('.header__menu .dropdown');

        ganres.forEach(ganre => {
            dropDownBlock.insertAdjacentHTML('beforeend', `
                <li><a href="./categories.html?ganre=${ganre}">${ganre}</a></li>
            `)
        })
    }

    function renderAnimeList(arr, ganres) {
        const wrapper = document.querySelector('.product-page .col-lg-8');

        ganres.forEach((ganre) => {
            const productBlock = document.createElement('div');
            const listBlock = document.createElement('div');
            const list = arr.filter(item => item.tags.includes(ganre));
            


            listBlock.classList.add('row');
            productBlock.classList.add('mb-5');

            productBlock.insertAdjacentHTML('beforeend', `
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-8">
                        <div class="section-title">
                            <h4>${ganre}</h4>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4">
                        <div class="btn__all">
                            <a href="/categories.html?ganre=${ganre}" class="primary-btn">View All <span class="arrow_right"></span></a>
                        </div>
                    </div>
                </div>
            `)

            list.forEach(item => {
                const tagsBlock = document.createElement('ul');

                item.tags.forEach(tag => {
                    tagsBlock.insertAdjacentHTML('beforeend', `
                        <li>${tag}</li>
                    `)
                });

                listBlock.insertAdjacentHTML('beforeend', `
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="product__item">
                            <div class="product__item__pic set-bg" data-setbg="${item.image}">
                                <div class="ep">${item.rating} / 10</div>
                                <div class="view"><i class="fa fa-eye"></i>${item.views}</div>
                            </div>
                            <div class="product__item__text">
                                <ul>
                                    ${tagsBlock.outerHTML}
                                </ul>
                                <h5><a href="/anime-details.html?itemId=${item.id}">${item.title}</a></h5>
                            </div>
                        </div>
                    </div>
                `)
            })

            productBlock.append(listBlock);

            console.log(wrapper);
            wrapper.append(productBlock);

            wrapper.querySelectorAll('.set-bg').forEach((element) => {
                element.style.backgroundImage = `url('${element.dataset.setbg}')`;
            });
        })
    }

    function renderTopAnime(arr) {
        const wrapper = document.querySelector('.filter__gallery');

        //* Очищение карточки перебора
        // wrapper.innerHTML = '';

        arr.forEach((item) => {
            wrapper.insertAdjacentHTML('beforeend', `
                <div class="product__sidebar__view__item set-bg mix" data-setbg="${item.image}">
                    <div class="ep">${item.rating} / 10</div>
                    <div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
                    <h5> 
                        <a href="/anime-details.html"> ${item.title}</a>
                    </h5>
                </div>
            `)
        });

        wrapper.querySelectorAll('.set-bg').forEach((element) => {
            element.style.backgroundImage = `url('${element.dataset.setbg}')`;
        });
        
    }

    fetch('./db.json')
        .then((response) => response.json())
        .then((data) => {
            const anime = data.anime;
            const genres = new Set();
            const ganreParams = new URLSearchParams(window.location.search).get('ganre');

            // console.log(ganreParams);

            anime.sort((a, b) => {
                return b.views - a.views;
            });

            anime.forEach((item) => {
                genres.add(item.ganre);
            });

            renderTopAnime(anime.slice(0, 5));

            if (ganreParams) {
                // console.log(ganreParams);
                renderAnimeList(data.anime, [ganreParams]);
            } else {
                renderAnimeList(data.anime, genres);
            };

            renderGanreList(genres);
        });
};

categoriesData();