document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu Functionality
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Automatically close the mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Image Slider Functionality
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.slider-dots');

    // This is the variable that caused the error. It is now declared only once.
    let currentSlide = 0;

    // Check if slider elements exist on the page before running the code
    if (slides.length > 0) {
        const totalSlides = slides.length;

        // Create dots for the slider
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.dataset.slide = i;
            dotsContainer.appendChild(dot);
        }

        const dots = document.querySelectorAll('.dot');

        function updateSlider() {
            slides.forEach((slide, index) => {
                slide.classList.remove('active');
                if (index === currentSlide) {
                    slide.classList.add('active');
                }
            });

            dots.forEach((dot, index) => {
                dot.classList.remove('active');
                if (index === currentSlide) {
                    dot.classList.add('active');
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlider();
        }

        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                currentSlide = parseInt(dot.dataset.slide);
                updateSlider();
            });
        });

        updateSlider(); // Initial update to show the first slide
    }

    // Demo Tabs Functionality
    const demoTabs = document.querySelectorAll('.demo-tab');
    const demoPanels = document.querySelectorAll('.demo-panel');

    if (demoTabs.length > 0 && demoPanels.length > 0) {
        demoTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetPanel = document.getElementById(tab.dataset.target);

                demoTabs.forEach(t => t.classList.remove('active'));
                demoPanels.forEach(p => p.classList.remove('active'));

                tab.classList.add('active');
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            });
        });
    }

    // FAQ Accordion Functionality
    const faqItems = document.querySelectorAll('.faq-item');

    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });
    }
});
