/* ==========================================
   🚀 MAXREACH MASTER THEME ENGINE
   ========================================== */




   
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





let wolfTimer;

function triggerWolfMagic() {
    console.log("Zen Mode Active - MaxReach");
    const overlay = document.getElementById('wolfOverlay');
    if (!overlay) return;

    // 1. Immersive Reveal
    overlay.style.display = 'flex';
    setTimeout(() => {
        overlay.classList.add('active');
        document.body.classList.add('overlay-open');
        document.body.style.overflow = 'hidden'; // Scroll lock
    }, 10);

    // 2. 15 Seconds Auto-Hide Timer
    clearTimeout(wolfTimer);
    wolfTimer = setTimeout(() => {
        closeWolfNote();
    }, 15000); // 15 Seconds dismissal
}

function closeWolfNote() {
    const overlay = document.getElementById('wolfOverlay');
    const wolfLogo = document.getElementById('wolfLogo');

    if (!overlay) return;

    // 3. Fade out animations
    overlay.classList.remove('active');
    clearTimeout(wolfTimer); // Cancel timer if manually closed
    
    setTimeout(() => {
        overlay.style.display = 'none';
        document.body.classList.remove('overlay-open');
        document.body.style.overflow = ''; // Restore scroll

        // 4. Logo Rotation Magic after note closes
        if (wolfLogo) {
            wolfLogo.classList.add('rotate-wolf');
            
            // Remove class after animation to allow reuse
            setTimeout(() => {
                wolfLogo.classList.remove('rotate-wolf');
            }, 1000);
        }
        
    }, 600); // overlay transition time
}