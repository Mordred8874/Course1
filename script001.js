// for(let i = 0;i < 2;i++){
//     const a = prompt('Один из последнихпросмотренных фильмов?', ''),
//           b = prompt('На сколько оцениваете его?', '');
         
//     if (a != null && b != null && a != '' && b != '' && a.length<50){
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('Error');
//         i--;
//     }

//      personalMovieDB.movies[a] = b;
// }
"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы ужепосмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// var i = 0;
// do {
//         const a = prompt('Один из последнихпросмотренных фильмов?', ''),
//               b = prompt('На сколько оцениваете его?', '');
             
//         if (a != null && b != null && a != '' && b != '' && a.length<50){
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('Error');
//             i--;
//         }
    
//          personalMovieDB.movies[a] = b;
//          i++;
//     } while(i<2);



var i = 0;
while (i<2) {
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
     i++;
}



if (personalMovieDB.count<10){
    console.log('Просмотрено мало фильмов');
} else if (personalMovieDB.count>=10 && personalMovieDB.count<30){
    console.log('Вы классический кинозритель');
}else if (personalMovieDB.count>=30){
    console.log('Вы киноман');
}else {
    console.log('Error');
}

console.log(personalMovieDB);