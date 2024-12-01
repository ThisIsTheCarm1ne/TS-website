export default function cookiesPopupHandler(popupId: string, closeBtnId: string) {
    const popup = document.getElementById(popupId) as HTMLButtonElement;
    const closeButton = document.getElementById(closeBtnId) as HTMLButtonElement;

    closeButton.addEventListener('click', () => {
        popup.style.opacity = "0";
        popup.classList.add('hidden');
        // Optionally remove popup from DOM after the fade-out is complete
        setTimeout(() => {
            popup.remove();
        }, 500); // The timeout should match the fade-out duration
    });
}