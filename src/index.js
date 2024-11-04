import "./styles.css";
import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

loadHome();

const homeBtn = document.querySelector('#home');
homeBtn.addEventListener('click', loadHome);

const menuBtn = document.querySelector('#menu');
menuBtn.addEventListener('click', loadMenu);

const aboutBtn = document.querySelector('#about');
aboutBtn.addEventListener('click', loadAbout);
