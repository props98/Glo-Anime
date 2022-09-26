const mainData = () => {

    function renderAnimeList(arr, genre) {
        console.log(arr);
        console.log(genre);
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
        })

}
mainData();