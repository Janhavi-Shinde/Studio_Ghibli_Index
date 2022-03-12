const films = document.getElementById("films")
const filmList = document.getElementById('film-list');
const logo = document.getElementById('logo');
const searchBar = document.getElementById('searchBar');

let state;
// let filmNames;
async function fetchAPIdata() {
    try {
        const response = await fetch("https://ghibliapi.herokuapp.com/films")
        const data = await response.json();
        state = data 
        //  filmNames = state.title 
        //  films.innerHTML = renderFilms().join(" ");
        boxedFilms();
        searchResultFilms(state);
        
    } catch (error) {
        console.error(error)  //understand what .error means here
    }
}
fetchAPIdata();  //Read IIFE. can you swap this with an IIFE??

function boxedFilms () { 
    state.forEach(movie => {
                 // Here we are creating a div for each film, and giving it a class of block
    const box = document.createElement('div') 
    box.setAttribute('class', 'box' ) 
                        //Here we give each block a title with the film's name
    const h2 = document.createElement('h2')
    h2.innerHTML = movie.title


    const information = document.createElement('p')
    information.innerHTML = `${movie.description}`
    movie.description = movie.description.substring(0,300)

    box.appendChild(h2)
    box.appendChild(information)
    films.appendChild(box)
}) } 

searchBar.addEventListener("keydown", (e) => {
    // console.log(e.target.value);
    const searchString = e.target.value.toLowerCase();
    const filteredTitles = state.filter((state) => { 
        return (state.title.toLowerCase().includes(searchString) || 
                state.director.toLowerCase().includes(searchString))
                
    });
    // console.log(filteredTitles);
    searchResultFilms(filteredTitles);
});