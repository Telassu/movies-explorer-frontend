//работа фильтра по короткометражкам
const filterDuration = (movies) =>
  movies.filter((movie) => movie.duration <= 40);


//работа поисковика
const filterMovies = (arr, query) =>
  arr.filter(
    (el) => el.nameRU.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );


export { filterDuration, filterMovies }