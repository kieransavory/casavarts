const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navBar = document.getElementsByClassName('navbar')[0];
const portfolioLink = document.getElementsByClassName('worklink')[0];

toggleButton.addEventListener('click', () => {
    navBar.classList.toggle('active');
    portfolioLink.classList.toggle('active');

})