// $(document).ready(function(){
//     setTimeout(function(){
//      $('#popUpMain').css('display','block'); }, 1000);
// });
   
// $('.submitId').click(function(){
//     $('#popUpMain').css('display','none');
// });

const popup = document.querySelector('#popUpMain');
const close = document.querySelector('.closes');
const submitid = document.querySelector('.submitId');

window.onload = function(){
    setTimeout(function(){
        popup.style.display = "block";
        //Add some time delay to show popup
    }, 1000)
}
close.addEventListener('click', () => {
    popup.style.display = "none";
});

// window.onload = function(){
//     setTimeout(function(){
//         popup.style.display = "block";
//         //Add some time delay to show popup
//     }, 3000)
// }
// close.addEventListener('click', () => {
//     popup.style.display = "none";
// });