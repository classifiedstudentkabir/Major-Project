// nav.js - mobile menu toggle with enhanced functionality
(() => {
    const toggle = document.getElementById("mobile-menu-toggle");
    const nav = document.querySelector(".main-nav");

    if (!toggle || !nav) return;

    // Toggle mobile menu
    const toggleMenu = () => {
        const isOpen = nav.classList.toggle("is-open");
        toggle.classList.toggle("is-active");
        toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");

        // Toggle display for mobile
        if (window.innerWidth <= 767) {
            nav.style.display = isOpen ? "block" : "none";
            // Lock body scroll
            document.body.style.overflow = isOpen ? 'hidden' : '';
        }
    };

    // Click handler for toggle button
    toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    // Touch event for better mobile support
    toggle.addEventListener("touchstart", (e) => {
        e.preventDefault();
        toggleMenu();
    }, { passive: false });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
        if (nav.classList.contains("is-open") && !nav.contains(e.target) && e.target !== toggle) {
            toggleMenu();
        }
    });

    // Handle dropdown toggles on mobile
    const dropdowns = document.querySelectorAll(".main-nav .dropdown");

    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector("a");
        const menu = dropdown.querySelector(".dropdown-menu");

        if (!link || !menu) return;

        // Prevent default link behavior on mobile when clicking dropdown toggle
        link.addEventListener("click", (e) => {
            if (window.innerWidth <= 767) {
                e.preventDefault();

                // Close other dropdowns
                dropdowns.forEach(other => {
                    if (other !== dropdown) {
                        other.classList.remove("is-open");
                    }
                });

                // Toggle this dropdown
                dropdown.classList.toggle("is-open");
            }
        });
    });

    // Close menu on window resize if switching to desktop
    window.addEventListener("resize", () => {
        if (window.innerWidth > 767) {
            nav.classList.remove("is-open");
            toggle.classList.remove("is-active");
            toggle.setAttribute("aria-expanded", "false");
            nav.style.display = "";
            document.body.style.overflow = ""; // Unlock scroll
        }
    });

    // Keyboard accessibility - ESC to close menu
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && nav.classList.contains("is-open")) {
            toggleMenu();
            toggle.focus();
        }
    });
})();
