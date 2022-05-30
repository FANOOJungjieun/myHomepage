const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#nav_logo');

//display mobile menu

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// show active menu when scrolling

const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const noticeMenu = document.querySelector('#notice-page');
    const worksMenu = document.querySelector('#works-page');
    const addressMenu = document.querySelector('#address-page');

    let scrollPos = window.scrollY

    //adds highlight class to my menu items

    if(window.innerWidth > 960 && scrollPos < 600) {
        noticeMenu.classList.add('highlight')
        worksMenu.classList.remove('highlight')
        return
    } else if(window.innerWidth > 960 && scrollPos <1400) {
        worksMenu.classList.add('highlight')
        noticeMenu.classList.remove('highlight')
        addressMenu.classList.remove('highlight')
        return
    } else if(window.innerWidth > 960 && scrollPos <2345) {
        addressMenu.classList.add('highlight')
        worksMenu.classList.remove('highlight')
        return
    } 

    if((elem&&window.innerWidth<960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight')
    }
};


window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

// cloase mobile menu when cliking on a menu item

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)