const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const dropdownBTN = document.getElementsByClassName('dropdown');
toggleButton.addEventListener('click',function(){
    for(var i=0; i<dropdownBTN.length; i++)
    dropdownBTN[i].classList.toggle('active')
})

// function openNav() {
//     document.getElementById("mySidebar").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
// }

// function closeNav() {
//     document.getElementById("mySidebar").style.width = "0";
//     document.getElementById("main").style.marginLeft = "0";
// }