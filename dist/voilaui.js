
//menu
function toggleMobileMenu() {
    const mainMenu = document.getElementById('mainMenu');
    const menuIcon = document.getElementById('menuIcon');

    mainMenu.classList.toggle('hidden');

    // Toggle between icons
    if (mainMenu.classList.contains('hidden')) {
        menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />';
    } else {
        menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />';
    }
}

function closeOtherDropdowns(currentDropdownId) {
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach((dropdown) => {
        if (dropdown.id !== currentDropdownId) {
            dropdown.classList.add('hidden');
        }
    });
}

document.getElementById('dropdownToggle').addEventListener('click', function () {
    var dropdownMenu = document.getElementById('dropdownMenu');
    closeOtherDropdowns('dropdownMenu');
    dropdownMenu.classList.toggle('hidden');
});

document.getElementById('dropdownToggle1').addEventListener('click', function () {
    var dropdownMenu1 = document.getElementById('dropdownMenu1');
    closeOtherDropdowns('dropdownMenu1');
    dropdownMenu1.classList.toggle('hidden');
});

document.getElementById('dropdownToggle2').addEventListener('click', function () {
    var dropdownMenu2 = document.getElementById('dropdownMenu2');
    closeOtherDropdowns('dropdownMenu2');
    dropdownMenu2.classList.toggle('hidden');
});

// Close the dropdowns when clicking outside of them
document.addEventListener('click', function (event) {
    var dropdownMenu = document.getElementById('dropdownMenu');
    var dropdownToggle = document.getElementById('dropdownToggle');

    if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add('hidden');
    }

    var dropdownMenu1 = document.getElementById('dropdownMenu1');
    var dropdownToggle1 = document.getElementById('dropdownToggle1');

    if (!dropdownToggle1.contains(event.target) && !dropdownMenu1.contains(event.target)) {
        dropdownMenu1.classList.add('hidden');
    }

    var dropdownMenu2 = document.getElementById('dropdownMenu2');
    var dropdownToggle2 = document.getElementById('dropdownToggle2');

    if (!dropdownToggle2.contains(event.target) && !dropdownMenu2.contains(event.target)) {
        dropdownMenu2.classList.add('hidden');
    }
});

// modal
document.addEventListener('click', function (event) {
    const target = event.target;

    // Open popup when trigger button is clicked
    if (target.hasAttribute('data-popup')) {
        const popupId = target.getAttribute('data-popup');
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.classList.remove('hidden');
        }
    }

    // Close popup when close button is clicked
    if (target.hasAttribute('data-popup-close')) {
        const popupId = target.getAttribute('data-popup-close');
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.classList.add('hidden');
        }
    }

});

/** 
 * Accordion script to handle multiple accordions 
 * that have class name accordion 
*/
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;

        // Close all other panels
        let allPanels = document.getElementsByClassName("panel");
        for (let j = 0; j < allPanels.length; j++) {
            if (allPanels[j] !== panel) {
                allPanels[j].style.display = "none";
                // Remove "active" class from other buttons
                acc[j].classList.remove("active");
                // Reset the icon for other buttons
                resetIcon(acc[j]);
            }
        }

        if (panel.style.display === "block") {
            panel.style.display = "none";
            resetIcon(this);
        } else {
            panel.style.display = "block";
            toggleIcon(this);
        }

    });
}

function resetIcon(element) {
    let icon = element.querySelector('.icon');
    if (icon) {
        icon.innerHTML = '+';
    }
}

function toggleIcon(element) {
    let icon = element.querySelector('.icon');
    if (icon) {
        icon.innerHTML = '-';
    }
}

// scroll to top
window.addEventListener('scroll', function () {
    var scrollToTopButton = document.getElementById('scrollToTop');
    if (window.scrollY > 200) {
        scrollToTopButton.classList.remove('opacity-0');
    } else {
        scrollToTopButton.classList.add('opacity-0');
    }
});

document.getElementById('scrollToTop').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});