/* ==========================================
   🚀 MAXREACH MASTER THEME ENGINE
   ========================================== */


   /* ==========================================
   🚀 MAXREACH MASTER THEME ENGINE (FIXED)
   ========================================== */

// 1. Page load hote hi Storage se mode check karke apply karo
document.addEventListener('DOMContentLoaded', () => {
    const isNight = localStorage.getItem('nightMode') === 'true';
    const themeIcon = document.getElementById('themeIcon');
    
    if (isNight) {
        document.body.classList.add('night-mode');
        if (themeIcon) themeIcon.innerText = 'light_mode'; // Icon change
    } else {
        document.body.classList.remove('night-mode');
        if (themeIcon) themeIcon.innerText = 'dark_mode'; // Icon change
    }
});

// 2. Toggle function (Jo button click par kaam karega)
function toggleTheme() {
    document.body.classList.toggle('night-mode');
    const isNightNow = document.body.classList.contains('night-mode');
    
    // Memory mein save karo
    localStorage.setItem('nightMode', isNightNow);
    
    // Icon update karo
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
        themeIcon.innerText = isNightNow ? 'light_mode' : 'dark_mode';
    }
}

/* --- Baaki ka Mobile Menu Logic niche continue rahega --- */
   
// 2. Mobile Menu & Overlay Logic
function toggleMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const navOverlay = document.getElementById('navOverlay');
    const body = document.body;

    mobileNav.classList.toggle('open');
    navOverlay.classList.toggle('show');
    
    // Scroll lock taaki menu khule hone par piche ka page na hile
    body.classList.toggle('scroll-lock');
}

// 3. Mobile Sub-menu (Dropdown) Logic
function toggleMobileDropdown(triggerElement) {
    const submenu = triggerElement.nextElementSibling;
    const allSubmenus = document.querySelectorAll('.mobile-submenu');
    const allIcons = document.querySelectorAll('.drop-icon-mobile');
    const currentIcon = triggerElement.querySelector('.drop-icon-mobile');

    // Dusre saare open submenus ko band karne ke liye
    allSubmenus.forEach(sub => {
        if (sub !== submenu) {
            sub.classList.remove('active');
        }
    });

    // Icon rotation logic
    allIcons.forEach(icon => {
        if (icon !== currentIcon) {
            icon.style.transform = "rotate(0deg)";
        }
    });

    // Current submenu toggle
    if (submenu.classList.contains('active')) {
        submenu.classList.remove('active');
        if (currentIcon) currentIcon.style.transform = "rotate(0deg)";
    } else {
        submenu.classList.add('active');
        if (currentIcon) currentIcon.style.transform = "rotate(180deg)";
    }
}


function setMobileHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setMobileHeight);
window.addEventListener('load', setMobileHeight);
setMobileHeight();


// 4. Scroll to Top Logic
window.addEventListener("scroll", function () {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add("show");
        } else {
            scrollTopBtn.classList.remove("show");
        }
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

