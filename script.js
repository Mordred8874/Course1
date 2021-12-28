'use strict';

let numberOfFilms;

function start (){
    numberOfFilms = +prompt('Сколько фильмов вы ужепосмотрели?', ''); 

 while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt('Сколько фильмов вы ужепосмотрели?', ''); 
 }

}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms(){
    for(let i = 0;i < 2;i++){
        const a = prompt('Один из последнихпросмотренных фильмов?', ''),
              b = prompt('На сколько оцениваете его?', '');
             
        if (a != null && b != null && a != '' && b != '' && a.length<50){
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('Error');
            i--;
        }
    
         personalMovieDB.movies[a] = b;
    }
}

// rememberMyFilms();


function detectPersonalLVL(){
    if (personalMovieDB.count<10){
        console.log('Просмотрено мало фильмов');
    } else if (personalMovieDB.count>=10 && personalMovieDB.count<30){
        console.log('Вы классический кинозритель');
    }else if (personalMovieDB.count>=30){
        console.log('Вы киноман');
    }else {
        console.log('Error');
    } 
}
// detectPersonalLVL();

function ShowMyDB (hidden){
if (!hidden) {
   console.log(personalMovieDB);
}
}

ShowMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <=3; i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под нормером ${i}`);
    }
}

writeYourGenres();



