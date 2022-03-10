//  <3   PLEASE UNDERSTAND THE X2 THEN METHODS 
// let state;

// .then (response => response.json())
// .then (data => {state = data})
// console.log(state);

async function fetchStudioGhibliFilms() {
    try {
        const response = await fetch("https://ghibliapi.herokuapp.com/films")
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
    }
}
fetchStudioGhibliFilms();



    
    //response.json())
// .then (json => console.log(json));

// const data = json; 
// const movieHMC = data[0];


