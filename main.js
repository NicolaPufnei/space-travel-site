//  Navigation constants

const menu_btn = document.querySelector('.hamburger-button')
const mobile_menu = document.querySelector('.nav-list')

// Planet cards constants

                // text constant
const planets = document.querySelectorAll('.planet')
const moon = document.querySelector('.moon')
const mars = document.querySelector('.mars')
const europa = document.querySelector('.europa')
const titan = document.querySelector('.titan')
                // photos constants
const moon_photo = document.querySelector('.moon-photo')
const mars_photo = document.querySelector('.mars-photo')
const europa_photo = document.querySelector('.europa-photo')
const titan_photo = document.querySelector('.titan-photo')
                // button costants
const moon_button = document.querySelector('.moon-button')
const mars_button = document.querySelector('.mars-button')
const europa_button = document.querySelector('.europa-button')
const titan_button = document.querySelector('.titan-button')

// Hamburger menu function

menu_btn.addEventListener('click' , () => {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

// Moon selector function

function moonButton() {
    moon.classList.replace('inactive' , 'active');
    mars.classList.replace('active' , 'inactive');
    titan.classList.replace('active' , 'inactive');
    europa.classList.replace('active' , 'inactive');

    moon_photo.classList.replace('inactive' , 'active');
    mars_photo.classList.replace('active' , 'inactive');
    titan_photo.classList.replace('active' , 'inactive');
    europa_photo.classList.replace('active' , 'inactive');

    moon_button.classList.replace('inactive' , 'active');
    mars_button.classList.replace('active' , 'inactive');
    titan_button.classList.replace('active' , 'inactive');
    europa_button.classList.replace('active' , 'inactive');
}

//  Mars selector function

function marsButton() {
    moon.classList.replace('active' , 'inactive');
    mars.classList.replace('inactive' , 'active');
    titan.classList.replace('active' , 'inactive');
    europa.classList.replace('active' , 'inactive');

    moon_photo.classList.replace('active' , 'inactive');
    mars_photo.classList.replace('inactive' , 'active');
    titan_photo.classList.replace('active' , 'inactive');
    europa_photo.classList.replace('active' , 'inactive');

    moon_button.classList.replace('active' , 'inactive');
    mars_button.classList.replace('inactive' , 'active');
    titan_button.classList.replace('active' , 'inactive');
    europa_button.classList.replace('active' , 'inactive');
}

// Europa selector function

function europaButton() {
    moon.classList.replace('active' , 'inactive');
    mars.classList.replace('active' , 'inactive');
    titan.classList.replace('active' , 'inactive');
    europa.classList.replace('inactive' , 'active');

    moon_photo.classList.replace('active' , 'inactive');
    mars_photo.classList.replace('active' , 'inactive');
    titan_photo.classList.replace('active' , 'inactive');
    europa_photo.classList.replace('inactive' , 'active');

    moon_button.classList.replace('active' , 'inactive');
    mars_button.classList.replace('active' , 'inactive');
    titan_button.classList.replace('active' , 'inactive');
    europa_button.classList.replace('inactive' , 'active');

}

// Titan selector function

function titanButton() {
    moon.classList.replace('active' , 'inactive');
    mars.classList.replace('active' , 'inactive');
    titan.classList.replace('inactive' , 'active');
    europa.classList.replace('active' , 'inactive');

    moon_photo.classList.replace('active' , 'inactive');
    mars_photo.classList.replace('active' , 'inactive');
    titan_photo.classList.replace('inactive' , 'active');
    europa_photo.classList.replace('active' , 'inactive');

    moon_button.classList.replace('active' , 'inactive');
    mars_button.classList.replace('active' , 'inactive');
    titan_button.classList.replace('inactive' , 'active');
    europa_button.classList.replace('active' , 'inactive');
}