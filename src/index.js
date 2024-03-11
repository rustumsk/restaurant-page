import './homeStyle.css';
import './menuStyle.css';
import './contactStyle.css';
import { createContact,createHomePage,createMenu} from './components';

createHomePage();

const homeButton = document.querySelector("#home").addEventListener("click", () =>{
    createHomePage();
});

const menuButton = document.querySelector("#menu").addEventListener("click", () =>{
    createMenu();
});

const contactButton = document.querySelector("#contact").addEventListener("click", () =>{
    createContact();
});