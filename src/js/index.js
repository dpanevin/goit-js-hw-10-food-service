import '../sass/main.scss';

import menuData from "../data/menu.json";

import templateMenu from "../partials/menu.hbs";

import storage from "./storage.js";

const menuMarkup = templateMenu(menuData);
const menuListEl = document.querySelector('.js-menu');
const themeToggleEl = document.getElementById('theme-switch-toggle');
const bodyEl = document.body;

menuListEl.innerHTML = menuMarkup;

checkTheme()
changeTheme()

themeToggleEl.addEventListener('change', changeTheme)

function checkTheme() {
    themeToggleEl.checked = storage.load('darkTheme') ? JSON.parse(storage.load('darkTheme')) : false;
}

function changeTheme() {
if (themeToggleEl.checked) {
    bodyEl.classList.remove('light-theme');
    bodyEl.classList.add('dark-theme');

    storage.save('darkTheme', 'true');
} else {
    bodyEl.classList.remove('dark-theme');
    bodyEl.classList.add('light-theme');

    storage.save('darkTheme', 'false');
}
}

