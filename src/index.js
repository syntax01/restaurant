import createPageHome from './page_home.js';
import createPageMenu from './page_menu.js';
import './style.css';

console.log('createPageHome');
createPageHome();
createNavEvents();

function createNavEvents() {
    const div_content = document.querySelector('#content');
    const nav_a = document.querySelectorAll('.nav > a');
    nav_a.forEach(el => el.addEventListener('click', () => {
        const el_text = el.textContent;
        switch(el_text) {
            case 'Home':
                console.log('HHOOMMEE');
                div_content.innerHTML = null;
                createPageHome();
                createNavEvents();
                break;
            case 'Menu':
                console.log('MMEENNUU');
                div_content.innerHTML = null;
                createPageMenu();
                createNavEvents();
                break;
            case 'Contact':
                console.log('CCOONNTTAACCTT');
                break;
        }
    }))
}