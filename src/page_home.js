import img_src_bee from './img/bee.svg';
import img_src_hive from './img/hive.svg';

export default function createPageHome() {

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
    h1_title.textContent = `Beary's Breakfast Bar`;
    div_title.append(img_bee1, h1_title, img_bee2);

    const div_blurb = document.createElement('div');
    div_blurb.classList.add('blurb');
    const img_hive = new Image();
    img_hive.src = img_src_hive;
    const blurb_p = document.createElement('p');
    blurb_p.textContent = `Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.`;
    const blurb_h3 = document.createElement('h3');
    blurb_h3.textContent = 'Goldilocks';
    div_blurb.append(img_hive, blurb_p, blurb_h3);

    const div_hours = document.createElement('div');
    div_hours.classList.add('hours');
    const hours_h1 = document.createElement('h1');
    hours_h1.textContent = 'Hours';
    const hours_ul = document.createElement('ul');
    const hours_li_sun = document.createElement('li');
    hours_li_sun.textContent = 'Sunday: 8am - 8pm';
    const hours_li_mon = document.createElement('li');
    hours_li_mon.textContent = 'Monday: 6am - 6pm';
    const hours_li_tue = document.createElement('li');
    hours_li_tue.textContent = 'Sunday: 6am - 6pm';
    const hours_li_wed = document.createElement('li');
    hours_li_wed.textContent = 'Sunday: 6am - 6pm';
    const hours_li_thr = document.createElement('li');
    hours_li_thr.textContent = 'Sunday: 6am - 10pm';
    const hours_li_fri = document.createElement('li');
    hours_li_fri.textContent = 'Sunday: 6am - 10pm';
    const hours_li_sat = document.createElement('li');
    hours_li_sat.textContent = 'Sunday: 8am - 10pm';
    hours_ul.append(hours_li_sun, hours_li_mon, hours_li_tue, hours_li_wed, hours_li_thr, hours_li_fri, hours_li_sat);
    div_hours.append(hours_h1, hours_ul);

    const div_location = document.createElement('div');
    div_location.classList.add('location');
    const location_h1 = document.createElement('h1');
    location_h1.textContent = 'Location'
    const location_p = document.createElement('p');
    location_p.textContent = '123 Forest Drive, Forestville, Maine';
    div_location.append(location_h1, location_p);

    div_page_home.append(div_title, div_blurb, div_hours, div_location);

};