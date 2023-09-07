import img_src_bee from './img/bee.svg';

export default function createPageMenu() {

    const div_content = document.querySelector('#content');

    const div_nav = document.createElement('div');
    div_nav.classList.add('nav');
    div_content.append(div_nav);
    
    const a_home = document.createElement('a');
    const a_menu = document.createElement('a');
    const a_contact = document.createElement('a');
    a_home.textContent = 'Home';
    a_menu.textContent = 'Menu';
    a_contact.textContent = 'Contact';
    div_nav.append(a_home, a_menu, a_contact);

    const div_page_home = document.createElement('div');
    div_page_home.classList.add('page-home');
    div_content.append(div_page_home);

    const div_title = document.createElement('div');
    div_title.classList.add('title');
    const img_bee1 = new Image();
    img_bee1.src = img_src_bee;
    const img_bee2 = new Image();
    img_bee2.src = img_src_bee;
    const h1_title = document.createElement('h1');
    h1_title.textContent = `Breakfast Bar Menu`;
    div_title.append(img_bee1, h1_title, img_bee2);

    const div_blurb = document.createElement('div');
    div_blurb.classList.add('blurb');
    const blurb_h1 = document.createElement('h1');
    blurb_h1.textContent = 'Chicken Pot Pie';
    const img_hive = new Image();
    img_hive.src = '../src/img/hive.svg';
    const blurb_p = document.createElement('p');
    blurb_p.textContent = 'fsadkjf;lsjf adsfdsafsaf fjasdfjdsfjasf fjksadjfsa fkfjksad fsafdjsafdk fjsadfksajfsdf asdfjsdfsafkj sadf';
    div_blurb.append(img_hive, blurb_h1, blurb_p);

    div_page_home.append(div_title, div_blurb);

};