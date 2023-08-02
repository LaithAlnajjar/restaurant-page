import "./style.scss";
import home from './homepage';
import menu from './menu';

const body = document.querySelector('body');
const footer = document.createElement('footer');
const header = document.createElement('header');
const content = document.querySelector('#content');

body.prepend(header);
body.append(footer);

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

linkList.append(homeLink);
linkList.append(menuLink);
linkList.append(contactLink);

links.append(linkList);



home();

content.textContent = "";
menu();

