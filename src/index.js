import "./style.scss";
import home from './homepage';
import menu from './menu';
import contact from './contact';

const body = document.querySelector('body');
const header = document.createElement('header');
const content = document.querySelector('#content');

body.prepend(header);

const links = document.createElement('div');
links.classList.add('links');
const logo = document.createElement('div');
logo.classList.add('logo');

logo.textContent = "Rise & Dine";

header.append(logo);
header.append(links);

const linkList = document.createElement('ul');
const homeLink = document.createElement('li');
const menuLink = document.createElement('li');
const contactLink = document.createElement('li');

homeLink.textContent = "Home";
menuLink.textContent = "Menu";
contactLink.textContent = "Contact";

homeLink.addEventListener("click", e => {
    content.textContent = "";
    home();
});

menuLink.addEventListener("click", e => {
    content.textContent = "";
    menu();
});

contactLink.addEventListener("click", e => {
    content.textContent = "";
    contact();
});


linkList.append(homeLink);
linkList.append(menuLink);
linkList.append(contactLink);

links.append(linkList);


home();



