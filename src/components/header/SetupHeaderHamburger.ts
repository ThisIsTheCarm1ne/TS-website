export default function setupHamburgerMenu() {
    const hamburgerBtn = document.getElementById('hamburgerBtn') as HTMLButtonElement;
    const hamburgerLinks = document.getElementById('hamburgerLinks') as HTMLElement;

    if (!hamburgerBtn || !hamburgerLinks) {
        console.error("Hamburger menu elements are missing.");
        return;
    }

    hamburgerBtn.addEventListener('click', () => {
        const isExpanded = hamburgerLinks.style.display === "flex";

        if (!isExpanded) {
            hamburgerLinks.style.display = "flex";
        } else {
            hamburgerLinks.style.display = "none";
        }
    });
}
