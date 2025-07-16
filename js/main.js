document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = {
        'pixako-technologies-section': document.getElementById('pixako-technologies-section'),
        'left-sidebar-content': document.getElementById('left-sidebar-content'),
        'right-sidebar-content': document.getElementById('right-sidebar-content'),
        'no-sidebar-content': document.getElementById('no-sidebar-content'),
        'third-section': document.getElementById('third-section')
    };

    function showSection(sectionToShow) {
        Object.values(sections).forEach(section => {
            if (section) section.style.display = 'none';
        });

        if (sectionToShow) {
            sectionToShow.style.display = 'block';
        }

        if (sectionToShow === sections['left-sidebar-content'] ||
            sectionToShow === sections['right-sidebar-content']) {
            if (sections['third-section']) sections['third-section'].style.display = 'none';
        } else if (sectionToShow === sections['no-sidebar-content']) {
            if (sections['third-section']) sections['third-section'].style.display = 'none';
        } else {
            if (sections['third-section']) sections['third-section'].style.display = 'block';
        }

    }

    showSection(sections['pixako-technologies-section']);

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = sections[targetId];

            if (targetSection) {
                event.preventDefault(); // Only prevent default if we're handling it
                showSection(targetSection);

                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    window.addEventListener('scroll', function () {
        const navOverlay = document.querySelector('.nav-bg-overlay');
        if (window.scrollY > 100) {
            navOverlay.classList.add('scrolled');
        } else {
            navOverlay.classList.remove('scrolled');
        }
    });

    const goTopBtn = document.getElementById("goTopBtn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            goTopBtn.classList.remove("d-none");
        } else {
            goTopBtn.classList.add("d-none");
        }
    });

    goTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});