import './homeStyle.css';
import './menuStyle.css';
import { createContact,createHomePage,createMenu } from './components';

const homeButton = document.querySelector("#home").addEventListener("click", () =>{
    createHomePage();
});

const menuButton = document.querySelector("#menu").addEventListener("click", () =>{
    createMenu();
});