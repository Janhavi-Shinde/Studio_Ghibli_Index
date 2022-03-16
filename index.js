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
const descriptionParagraph = document.getElementsByClassName('descriptionParagraph');
const backToTop = document.querySelector('footer');
const likedIcon = document.getElementsByClassName('.likedIcon');
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
                    <img class="filmPoster" src="${films.image}" />
                    <button class="showModalBtn" onclick="onClick(event)" value="${films.description}"> Description </button>                          
            </li>`;
        })
        .join(''); 
       filmList.innerHTML = htmlString;
};

//Like Icon
// likedIcon.addEventListener("click", (e)=>{ 
// console.log(e.target);
// likedIcon[0].classList.toggle('hidden');}
// )

// <div class="Icon"> <img id="likeIcon" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Love_or_Heart_transparent.png" alt= "likeIcon"/> 
                    //     <div class="Icon">
                    //         <img class="likedIcon" src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Heart_coraz%C3%B3n.svg" alt="likedIcon"/>
                    //     </div>
                    // <div>  

// MODAL
function onClick (event) {
    const target = event.target;
    overlay[0].classList.toggle('hidden');
    descriptionParagraph[0].innerHTML = target.value; 
}



closeModalBtn[0].addEventListener("click", (e) => {
    console.log(e.target.value);
    overlay[0].classList.toggle('hidden');
})





backToTop.addEventListener("click", ()=> { 
    document.documentElement.scrollTop = 0;
})





























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



    






        
    


  