(() => {
    const yearNodes = document.querySelectorAll('#year');
    yearNodes.forEach((node) => {
        node.textContent = new Date().getFullYear();
    });

    const header = document.querySelector('.site-header');
    if (header) {
        const toggleHeader = () => {
            header.classList.toggle('scrolled', window.scrollY > 8);
        };
        toggleHeader();
        window.addEventListener('scroll', toggleHeader, { passive: true });
    }

    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) {
        return;
    }

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.16 });

        revealElements.forEach((el) => observer.observe(el));
        return;
    }

    revealElements.forEach((el) => el.classList.add('show'));
})();
