const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");

const syncHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 16);
};

navToggle?.addEventListener("click", () => {
    nav?.classList.toggle("is-open");
});

nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("is-open"));
});

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });
