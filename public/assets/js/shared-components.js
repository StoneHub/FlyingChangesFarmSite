/**
 * Shared Header and Footer Component
 * Injects the same header and footer into every page for consistency.
 */

const SITE_CONFIG = {
    name: "Flying Changes Farm",
    navLinks: [
        { text: "Stay Here", href: "camp.html" },
        { text: "Airfield", href: "pinnacle.html" },
        { text: "Stone Developer Hub", href: "apps.html" },
        { text: "About", href: "index.html#about" },
        { text: "Contact", href: "index.html#contact" }
    ]
};

function createHeader() {
    const header = document.createElement('header');
    header.className = 'site-header';

    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    const navItems = SITE_CONFIG.navLinks.map(link => {
        const isActive = currentPath === link.href;
        // Handle anchor links for active state if needed, but simple exact match for now
        return `<a href="${link.href}" ${isActive ? 'aria-current="page"' : ''}>${link.text}</a>`;
    }).join('');

    header.innerHTML = `
        <div class="container header-inner">
            <a class="branding" href="index.html">
                <span aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.92 8.78a1 1 0 0 0-.82-.78l-4.21-.61-1.89-3.82a1 1 0 0 0-1.8 0L10.31 7.4l-4.21.61a1 1 0 0 0-.82.78 1 1 0 0 0 .29 1L8 13.06l-.72 4.19a1 1 0 0 0 1.45 1L12 16.77l3.27 1.72a1 1 0 0 0 1.45-1l-.72-4.19 3.45-3.28a1 1 0 0 0 .29-1z"/>
                    </svg>
                </span>
                <span>${SITE_CONFIG.name}</span>
            </a>
            <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Menu</span>
            </button>
            <nav class="site-nav" id="primary-navigation" aria-label="Primary">
                ${navItems}
            </nav>
        </div>
    `;
    return header;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.id = 'contact';

    footer.innerHTML = `
        <div class="container footer-grid">
            <div>
                <h3>${SITE_CONFIG.name}</h3>
                <p>438 Pumpkintown Rd, Marietta, SC 29661.</p>
                <p>Email to coordinate stays, flights, or collaboration.</p>
            </div>
            <div>
                <h4>Connect</h4>
                <div class="footer-nav">
                    <a href="mailto:flyingchangesfarm438@gmail.com">flyingchangesfarm438@gmail.com</a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">YouTube</a>
                </div>
            </div>
            <div>
                <h4>Quick links</h4>
                <div class="footer-nav">
                    <a href="camp.html">Stay Here</a>
                    <a href="pinnacle.html">Airfield</a>
                    <a href="apps.html">Stone Developer Hub</a>
                    <a href="index.html#about">About</a>
                </div>
            </div>
        </div>
        <p class="footer-meta">© <span id="year">${new Date().getFullYear()}</span> ${SITE_CONFIG.name} · Built in South Carolina.</p>
    `;
    return footer;
}

function initSharedComponents() {
    // Remove existing static headers/footers if they exist (to prevent duplicates during transition)
    const existingHeader = document.querySelector('header.site-header');
    if (existingHeader) existingHeader.remove();

    const existingFooter = document.querySelector('footer.site-footer');
    if (existingFooter) existingFooter.remove();

    // Insert new components
    document.body.prepend(createHeader());
    document.body.append(createFooter());

    // Re-initialize menu toggle since we replaced the DOM
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.site-nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            nav.classList.toggle('is-open');
        });
    }
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSharedComponents);
} else {
    initSharedComponents();
}
