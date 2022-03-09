// function getData() {
//     const response = await fetch('https://ghibliapi.herokuapp.com/films');
//     const data = await response.json();
//   }

//   var data = JSON.parse(this.response)

// data.forEach(movie => {
//   // Log each movie's title
//   console.log(movie.title)
// })


// const getMovieData = () => {
// 'https://ghibliapi.herokuapp.com/films'};
// fetch('https://ghibliapi.herokuapp.com/films') 
// .then (response => response.json())
// .then (data => console.log(data))


// const getAPI = async () => {
//     const response = await fetch('https://ghibliapi.herokuapp.com/films');
//     const data = await response.json();
//     return data
// };
// getAPI()
// .then(data => console.log('resolved:', data));

fetch('https://ghibliapi.herokuapp.com/films') 
.then (response => response.json())
.then (json => console.log(json));

