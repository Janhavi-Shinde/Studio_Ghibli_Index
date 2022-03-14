const films = document.getElementById("films")
const filmList = document.getElementById('film-list');
const logo = document.getElementById('logo');
const searchBar = document.getElementById('searchBar');
const filmPoster = document.getElementsByClassName('filmPoster');
const buttons = document.getElementsByClassName('carousel-button');
const bannerList = document.getElementsByTagName('bannerList');
const overlay = document.getElementsByClassName('overlay');
const showModalBtn = document.getElementsByClassName('showModalBtn');
const closeModalBtn = document.getElementsByClassName('closeModalBtn');

let state;
// let filmNames;


//FETCHING API DATA
async function fetchAPIdata() {
    try {
        const response = await fetch("https://ghibliapi.herokuapp.com/films")
        const data = await response.json();
        state = data 
        
        boxedFilms();
        searchResultFilms(state);
        // bannerArrayFunction(state);
                                // ?unnecessary// 
                                    	        // retrievingBanners(state);
                                // ?unnecessary// 
    } catch (error) {
        console.error(error)  
    }
}
fetchAPIdata();  




// FILMS + THEIR DESCRIPTIONS
function boxedFilms () { 
    state.forEach(movie => {
    
    const box = document.createElement('div') 
    box.setAttribute('class', 'box' ) 
                    
    const h2 = document.createElement('h2')
    h2.innerHTML = movie.title


    const information = document.createElement('p')
    information.innerHTML = `${movie.description}`
    movie.description = movie.description.substring(0,300)

    box.appendChild(h2)
    box.appendChild(information)
    films.appendChild(box)
}) } 

// SEARCH BAR: 

            // EVENT LISTENER
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


            // DISPLAY OF FILMS RETURNED FROM THE SEARCH
const searchResultFilms = (films) => {
    const htmlString = films
        .map((films) => {
            return ` 
            <li class ="films-list">
                	<h2>${films.title}</h2>
                    <h4>Directed by ${films.director}</h4> 
                    <img class="filmPoster" src="${films.image}" onclick= "onClick('${films.description}')"/>
                    <button class="showModalBtn"> Description </button>
                            
            </li>`;
        })
        .join(''); 
       filmList.innerHTML = htmlString;
};


// MODAL

for (const button of showModalBtn) {    //because since showModalBtn is a class, it returns HTMLcollection which is array
    button.addEventListener("click", (e)=> {
        console.log(e.target.value);
        for (const overlay of overlay) { overlay.style.display = "block"};
    })}
            
    //         <div class="overlay">
    //             <div class="modal">
    //                 <p class="descriptionParagraph"> Respective Movie Description</p>
    //                 <button class="closeModalBtn">Close Modal</button>
    //             </div>
    //         </div>
    //      `
    //     })    }

 
    

for (const button of closeModalBtn) { 
    button.addEventListener("click", (e)=> {
    console.log(e.target.value);
    overlay.style.display = "none";
})}

// filmPoster.addEventListener("click", onclick);    IF I UNCOMMENT THIS, THE SEARCH FUNCTION WILL NOT WORK

// function modalOnClick () => {

// }


function onClick (info) {
    alert(`Description: ${info}`)  // put description in h4 tag?
}


// CALLBACK func in <img:     => alert(<p>Description: ${films.description}</p>)
// (e) => { 
//     alert(`<p>${films.description}</p>`)}

























// buttons.forEach(button => {
//     button.addEventListener("click", ()=>{
//         //all u want to do here is just swap to the next image
//         const offset = 
//     })
// })
const bannerArrayFunction = (picture) => {
    const listOfBannerImages = picture
        .map((picture) => {
            return`
            <li class="banner-list">
                <img src="${picture.movie_banner}" alt="${picture.title}"/>     
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



    






        
    


  