// Menu toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Scroll sections active link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });

    // Sticky header
    const header = document.querySelector('header');
    header.classList.toggle('sticky', scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');    
});


ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .testimonials-box, .contact form', {original:'bottom'});

/*------Scroll reveal-------*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .testimonials-box, .contact form', {origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right' });

/*-------typed js-------*/
const typed = new Typed('.multiple-text',{
    strings: ['reduce garbage', 'Food loverreducing landfill waste', 'mitigating greenhouse gas emissions', 'promoting sustainable gardening and reducing the need for chemical fertilizers and pesticides'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:1000,
    loop:true
});

