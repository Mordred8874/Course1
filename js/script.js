'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const promoAdv = document.querySelectorAll(".promo__adv img"),
        poster = document.querySelector(".promo__bg"),
        genre = poster.querySelector('.promo__genre'),
        movielist = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        var newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            crateMovieList(movieDB.movies, movielist);
        }

        e.target.reset();
    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };



    const makeChanges = () => {
        genre.textContent = 'Драма';

        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };


    const sortArr = (arr) => {
        arr.sort();
    };




    function crateMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
        </li>
        `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                crateMovieList(films, parent);
            });
        });
    }

    makeChanges();
    crateMovieList(movieDB.movies, movielist);
    deleteAdv(promoAdv);
});