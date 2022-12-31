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
                // photos constants
const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const img3 = document.querySelector('.img3')
const img4 = document.querySelector('.img4')
                // text constant
const text1 = document.querySelector('.commander')
const text2 = document.querySelector('.mission-specialist')
const text3 = document.querySelector('.pilot')
const text4 = document.querySelector('.flight-engineer')
                // buttons constants
const buton1 = document.querySelector('.button1')
const buton2 = document.querySelector('.button2')
const buton3 = document.querySelector('.button3')
const buton4 = document.querySelector('.button4')


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

// Crew button 1

function button1() {
    img1.classList.replace('inactive' , 'active');
    img2.classList.replace('active' , 'inactive');
    img3.classList.replace('active' , 'inactive');
    img4.classList.replace('active' , 'inactive');

    text1.classList.replace('inactive' , 'active');
    text2.classList.replace('active' , 'inactive');
    text3.classList.replace('active' , 'inactive');
    text4.classList.replace('active' , 'inactive');

    buton1.classList.replace('inactive' , 'active');
    buton2.classList.replace('active' , 'inactive');
    buton3.classList.replace('active' , 'inactive');
    buton4.classList.replace('active' , 'inactive');
}

// Crew button 2

function button2() {
    img1.classList.replace('active' , 'inactive');
    img2.classList.replace('inactive' , 'active');
    img3.classList.replace('active' , 'inactive');
    img4.classList.replace('active' , 'inactive');

    text1.classList.replace('active' , 'inactive');
    text2.classList.replace('inactive' , 'active');
    text3.classList.replace('active' , 'inactive');
    text4.classList.replace('active' , 'inactive');

    buton1.classList.replace('active' , 'inactive');
    buton2.classList.replace('inactive' , 'active');
    buton3.classList.replace('active' , 'inactive');
    buton4.classList.replace('active' , 'inactive');
}

// Crew button 3

function button3() {
    img1.classList.replace('active' , 'inactive');
    img2.classList.replace('active' , 'inactive');
    img3.classList.replace('inactive' , 'active');
    img4.classList.replace('active' , 'inactive');

    text1.classList.replace('active' , 'inactive');
    text2.classList.replace('active' , 'inactive');
    text3.classList.replace('inactive' , 'active');
    text4.classList.replace('active' , 'inactive');

    buton1.classList.replace('active' , 'inactive');
    buton2.classList.replace('active' , 'inactive');
    buton3.classList.replace('inactive' , 'active');
    buton4.classList.replace('active' , 'inactive');
}

// Crew button 4

function button4() {
    img1.classList.replace('active' , 'inactive');
    img2.classList.replace('active' , 'inactive');
    img3.classList.replace('active' , 'inactive');
    img4.classList.replace('inactive' , 'active');

    text1.classList.replace('active' , 'inactive');
    text2.classList.replace('active' , 'inactive');
    text3.classList.replace('active' , 'inactive');
    text4.classList.replace('inactive' , 'active');

    buton1.classList.replace('active' , 'inactive');
    buton2.classList.replace('active' , 'inactive');
    buton3.classList.replace('active' , 'inactive');
    buton4.classList.replace('inactive' , 'active');
}