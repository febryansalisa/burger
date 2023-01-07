import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import './script.js';
 
// const hero = document.querySelector('.hero');
const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  mainContent: document.querySelector('#mainContent'),
});