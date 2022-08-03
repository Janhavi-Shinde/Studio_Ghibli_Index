const heartIcon = document.getElementById('heartcIcon');
const likerContainer = document.getElementById('likerContainer');


document.addEventListener('DOMContentLoaded', ()=> { 
    console.log('dom has loaded');
})





function liker (){ 
    if(heartIcon.className ==='fa-regular fa-heart') {
        heartIcon.classList.replace('fa-regular', 'fa-solid')
    } else { 
        heartIcon.classList.replace('fa-solid', 'fa-regular')
    }
}












// function liker (){
//     if(likerContainer.style.backgroundColor === '#fff'){ 
//         likerContainer.style.backgroundColor === '#ff0000'  
//      }
//         else if (likerContainer.style.backgroundColor === '#ff0000'){
//             likerContainer.style.backgroundColor === '#fff' 
//         }
// }