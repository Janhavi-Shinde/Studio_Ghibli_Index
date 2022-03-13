const films = document.getElementById("films")
const filmList = document.getElementById('film-list');
const logo = document.getElementById('logo');
const searchBar = document.getElementById('searchBar');
const filmPoster = document.getElementsByClassName('filmPoster');
const buttons = document.getElementsByClassName('carousel-button');
const bannerList = document.getElementsByTagName('bannerList');

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
        bannerArrayFunction(state);
                                // ?unnecessary// 
                                retrievingBanners(state);
                                // ?unnecessary// 
    } catch (error) {
        console.error(error)  //understand what .error means here
    }
}
fetchAPIdata();  //Read IIFE. can you swap this with an IIFE??

// function renderFilms () {
//     console.log("Rendered Films: ", state)
//     return state.map((film) => {
//             return `<div class= box>
//             <h2 class=title> ${film.title} </h2>`
//           })}


// buttons.forEach(button => {
//     button.addEventListener("click", ()=>{
//         //all u want to do here is just swap to the next image
//         const offset = 
//     })
// })




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

const searchResultFilms = (films) => {
    const htmlString = films
        .map((films) => {
            return ` 
            <li class ="films-list">
                	<h2>${films.title}</h2>
                    <h4>Directed by ${films.director}</h4> 
                    <img class="filmPoster" src="${films.image}" onclick= "onClick('${films.description}')"/> 
            </li>`;
        })
        .join(''); // why did we do this? ?Because .map returns a new array, with the commas and spaces. (doubleCheck alberts vid - sample project- to see exmaple and his explanation) 
        filmList.innerHTML = htmlString;
};

// filmPoster.addEventListener("click", onclick);    IF I UNCOMMENT THIS, THE SEARCH FUNCTION WILL NOT WORK

function onClick (info) {
    alert(`Description: ${info}`)  // put description in h4 tag?
}


// CALLBACK func in <img:     => alert(<p>Description: ${films.description}</p>)
// (e) => { 
//     alert(`<p>${films.description}</p>`)}


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

const bannerArrayFunction = (picture) => {
    const listOfBannerImages = picture
        .map((picture) => {
            return`
            <li class="banner-list">
                <img class="bannerImage" src="${picture.movie_banner}" alt="${picture.title}"/>     
            </li>`;
    })
        .join(''); 
        bannerList.innerHTML = listOfBannerImages;
    //consider adding a after/before pseudoElement to have the name of the respective movie, showing up in the corner?//
            console.log(listOfBannerImages)
        }; //listOfBannerImages contains the (joined)array of banner images in the list tags





                        // ?unnecessary// 
                        const retrievingBanners = (picture) => {
                                const filmBanners = picture.map((picture) =>{
                                        return picture.movie_banner;
                                })
                                // console.log(filmBanners);
                        }
                        // ?unnecessary// 



    






        
    


  