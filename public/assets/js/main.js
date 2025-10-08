(() => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".site-nav");
    const body = document.body;

    if (menuToggle && navigation) {
        menuToggle.addEventListener("click", () => {
            const isOpen = navigation.classList.toggle("is-open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
            body.classList.toggle("nav-open", isOpen);
        });

        navigation.addEventListener("click", (event) => {
            if (event.target instanceof HTMLElement && event.target.tagName === "A") {
                navigation.classList.remove("is-open");
                menuToggle.setAttribute("aria-expanded", "false");
                body.classList.remove("nav-open");
            }
        });
    }

    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear().toString();
    }
})();
