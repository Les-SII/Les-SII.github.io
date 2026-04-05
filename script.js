document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('mainHeader');
    const menuToggle = document.getElementById('menuToggle');
    const siteNav = document.getElementById('siteNav');
    
    const scrollThreshold = 100;

    const checkScroll = () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
            siteNav.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    };

    menuToggle.addEventListener('click', () => {
        siteNav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    window.addEventListener('scroll', checkScroll, { passive: true });
    
    siteNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            siteNav.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    checkScroll();
});