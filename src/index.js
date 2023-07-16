import "./style.scss";
import home from './homepage';

const body = document.querySelector('body');
const footer = document.createElement('footer');
const header = document.createElement('header');

body.prepend(header);
body.append(footer);

home();

