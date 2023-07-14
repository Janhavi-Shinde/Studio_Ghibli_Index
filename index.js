const films = document.getElementById("films")
const filmList = document.getElementById('film-list');
const logo = document.getElementById('logo');
const searchBar = document.getElementById('searchBar');
const filmPoster = document.getElementsByClassName('filmPoster');
const buttons = document.getElementsByClassName('carousel-button');
const bannerList = document.getElementById('bannerList');
const overlay = document.getElementsByClassName('overlay');
const showModalBtn = document.getElementsByClassName('showModalBtn');
const closeModalBtn = document.getElementsByClassName('closeModalBtn');
const descriptionParagraph = document.getElementById('descriptionParagraph');
const backToTop = document.querySelector('footer');



// Alert: Unavailable API Disclaimer:

// alert("Hello Viewer! \nThe Studio Ghibli API that I used for this application is currently unavailable. While we wait for the API creator to fix up the bugs and get it back up and running, please do check out my code walkthrough for this project instead: https://flip.com/s/ccBeiiFHW9tp. \n \nIt's no Howl's Moving Castle, but I do explain how I made this application and what it looks like when the API works. I look forward to sharing this application with you soon! :) \n - Janhavi ");
 
let state;
// let filmNames;


//FETCHING API DATA
async function fetchAPIdata() {
    try {
        const response = await fetch("https://ghibli.rest/films")
        const data = await response.json();
        state = data

        boxedFilms();
        searchResultFilms(state);

        console.log(bannerArrayFunction(state)); 
        loop(bannerArrayFunction);
        // ?unnecessary// 
        // retrievingBanners(state);
        // ?unnecessary// 
    } catch (error) {
        console.error(error)
    }
}
fetchAPIdata();




// FILMS + THEIR DESCRIPTIONS
function boxedFilms() {
    state.forEach(movie => {

        const box = document.createElement('div')
        box.setAttribute('class', 'box')

        const h2 = document.createElement('h2')
        h2.innerHTML = movie.title


        const information = document.createElement('p')
        information.innerHTML = `${movie.description}`


        box.appendChild(h2)
        box.appendChild(information)
        films.appendChild(box)
    })
}

                      // SEARCH BAR: 

// EVENT LISTENER
searchBar.addEventListener("keydown", (e) => {
    console.log(e.target.value);
    const searchString = e.target.value.toLowerCase();
    const filteredTitles = state.filter((state) => {
        return (state.title.toLowerCase().includes(searchString) ||
            state.director.toLowerCase().includes(searchString))

    });
    // console.log(filteredTitles);
    searchResultFilms(filteredTitles);
});


// DISPLAY OF FILMS RETURNED FROM THE SEARCH
const searchResultFilms = (films) => {
    const htmlString = films
        .map((films) => {
            return ` 
            <li class ="films-list">
                	<h2>${films.title}</h2>
                    <h4>Directed by: <br> ${films.director}</h4> 
                    <img class="filmPoster" src="${films.image}" />
                    <button class="showModalBtn" onclick="onClick(event)" value="${films.description}"> Description </button>       
                    <div id="containerForHeartIcon" >
                        <i onclick="toggler(event)" id="heartIcon" class="fa-regular fa-heart"> </i>
                    </div>                   
            </li>`;
        })
        .join('');
    filmList.innerHTML = htmlString;
};

//Like Button

function toggler(event) {
    const target = event.target;
    // console.log(target)
    if (target.classList.contains("fa-regular")) {
        target.classList.replace('fa-regular', 'fa-solid');

    } else {
        target.classList.replace('fa-solid', 'fa-regular');
    }
}


// MODAL
function onClick(event) {
    const target = event.target;
    overlay[0].classList.toggle('hidden');
    descriptionParagraph.innerHTML = target.value;
}



closeModalBtn[0].addEventListener("click", (e) => {
    console.log(e.target.value);
    overlay[0].classList.toggle('hidden');
})





backToTop.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
})


const bannerArrayFunction = (picture) => {
    const listOfBannerImages = picture
        .map((picture) => {
            return `
            <li class="banner-list">
                <img src="${picture.movie_banner}" alt="${picture.title}"/>     
            </li>`;
        })
          return listOfBannerImages; 

    //   bannerList.innerHTML = listOfBannerImages;
    //consider adding a after/before pseudoElement to have the name of the respective movie, showing up in the corner?//
    // console.log(listOfBannerImages)
}; //listOfBannerImages contains the (joined)array of banner images in the list tags

function loop (listOfBannerImages) {
    for (let i= 0; i < listOfBannerImages.length; i++) { 
             
    }
}




// ?unnecessary// 
const retrievingBanners = (picture) => {
    const filmBanners = picture.map((picture) => {
        return picture.movie_banner;
    })
    // console.log(filmBanners);
}
                        // ?unnecessary//














