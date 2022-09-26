const mainData = () => {
    
    function renderGanreList(ganres) {
        const dropDownBlock = document.querySelector('.header__menu .dropdown');
        
        dropDownBlock.innerHTML = '';

        ganres.forEach(ganre => {
            dropDownBlock.insertAdjacentHTML('afterbegin', `
                <li><a href="./categories.html?ganre=${ganre}">${ganre}</a></li>
            `)
        })
    }

    function renderAnimeList(arr, ganres) {
        const wrapper = document.querySelector('.product .col-lg-8');
        
        wrapper.innerHTML = '';

        ganres.forEach((ganre) => {
            const productBlock = document.createElement('div');
            const listBlock = document.createElement('div');
            const list = arr.filter(item => item.ganre === ganre);
            

            listBlock.classList.add('row');
            productBlock.classList.add('mb-5');

            productBlock.insertAdjacentHTML('afterbegin', `
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
                    tagsBlock.insertAdjacentHTML('afterbegin', `
                        <li>${tag}</li>
                    `)
                });
                
                // console.dir(tagsBlock);

                listBlock.insertAdjacentHTML('afterbegin', `
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
            wrapper.append(productBlock);

            wrapper.querySelectorAll('.set-bg').forEach((element) => {
                element.style.backgroundImage = `url('${element.dataset.setbg}')`;
            });
        })
    }

    function renderTopAnime(arr) {
        const wrapper = document.querySelector('.filter__gallery');
        // console.log(wrapper);
        //* Очищение карточки перебора
        wrapper.innerHTML = '';

        arr.forEach((item) => {
            // console.log(item);
            wrapper.insertAdjacentHTML('afterbegin', `
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
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const anime = data.anime;
            const genres = new Set();

            anime.sort((a, b) => {
                return b.views - a.views;
            });
        
            renderTopAnime(anime.slice(0, 5))

            anime.forEach((item) => {
                genres.add(item.ganre);
            })

            renderAnimeList(data.anime, genres)
            renderGanreList(genres)
        })

}
mainData();