const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navBar = document.getElementsByClassName('navbar')[0];
const centerText = document.getElementsByClassName('centertextmobile')[0];
const gallery = document.getElementsByClassName('gallerycontainer') [0];

toggleButton.addEventListener('click', () => {
    navBar.classList.toggle('active');
    centerText.classList.toggle('active');

})