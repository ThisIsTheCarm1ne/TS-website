import classes from "./header.module.css";

export default function setupHeaderPopup(buttonId: string, links: string[]){
    const button = document.getElementById(buttonId) as HTMLButtonElement;

    if (!button) return;

    // Create popup element
    const popup = document.createElement("div");
    popup.className = `${classes.popup}`;
    popup.style.display = "none";
    popup.innerHTML = `
    <ul class="${classes.list}">
      ${links.map((link) => `
        <li>
            <a href="#">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_75_869)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.22278 2.12343C6.54916 1.49662 8.04858 1.33693 9.47722 1.67033C10.9059 2.00374 12.1797 2.81062 13.0916 3.95979C14.0036 5.10895 14.4999 6.53281 14.5 7.99984V7.99987V8.59987C14.5 9.20987 14.2577 9.79488 13.8264 10.2262C13.395 10.6576 12.81 10.8999 12.2 10.8999C11.59 10.8999 11.005 10.6576 10.5737 10.2262C10.4514 10.1039 10.3443 9.96929 10.2536 9.82522C9.7219 10.4808 8.90989 10.8999 8.00001 10.8999C6.39838 10.8999 5.10001 9.6015 5.10001 7.99987C5.10001 6.39825 6.39838 5.09987 8.00001 5.09987C8.72677 5.09987 9.3911 5.36721 9.90001 5.80892V5.59987C9.90001 5.32373 10.1239 5.09987 10.4 5.09987C10.6761 5.09987 10.9 5.32373 10.9 5.59987V7.99987V8.59987C10.9 8.94465 11.037 9.27531 11.2808 9.51911C11.5246 9.76291 11.8552 9.89987 12.2 9.89987C12.5448 9.89987 12.8754 9.76291 13.1192 9.51911C13.363 9.27531 13.5 8.94465 13.5 8.59987V7.9999C13.5 7.99989 13.5 7.99988 13.5 7.99987C13.4999 6.75855 13.0799 5.55376 12.3083 4.5814C11.5367 3.60903 10.4588 2.92628 9.24996 2.64417C8.04111 2.36206 6.77237 2.49718 5.65005 3.02756C4.52772 3.55793 3.61782 4.45238 3.0683 5.56545C2.51877 6.67852 2.36194 7.94476 2.6233 9.15827C2.88466 10.3718 3.54884 11.4612 4.50785 12.2494C5.46686 13.0375 6.66429 13.4781 7.90544 13.4994C9.14659 13.5208 10.3585 13.1216 11.344 12.3669C11.5632 12.199 11.8771 12.2406 12.045 12.4599C12.2129 12.6791 12.1712 12.9929 11.952 13.1608C10.7873 14.0528 9.35506 14.5245 7.88825 14.4993C6.42144 14.4741 5.00629 13.9534 3.87292 13.0219C2.73954 12.0904 1.9546 10.803 1.64572 9.36882C1.33683 7.93467 1.52218 6.43821 2.17162 5.12276C2.82106 3.80731 3.8964 2.75024 5.22278 2.12343ZM9.90001 7.99987C9.90001 6.95053 9.04935 6.09987 8.00001 6.09987C6.95067 6.09987 6.10001 6.95053 6.10001 7.99987C6.10001 9.04921 6.95067 9.89987 8.00001 9.89987C9.04935 9.89987 9.90001 9.04921 9.90001 7.99987Z" fill="#555555"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_75_869">
                            <rect width="16" height="16" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                ${link}
            </a>
        </li>`).join("")}
    </ul>
  `;

    // Add the popup to the DOM
    const popupContainer = document.getElementById("popupContainer")!;
    popupContainer.appendChild(popup);

    // Show/hide popup on button click
    button.addEventListener("click", () => {
        const isVisible = popup.style.display === "block";
        document.querySelectorAll("div[popup-instance]").forEach((p) => {
            (p as HTMLElement).style.display = "none"; // Close other popups
        });

        popup.style.display = isVisible ? "none" : "block";
        console.log(isVisible);

        if (!isVisible) {
            const rect = button.getBoundingClientRect();
            popup.style.top = `${rect.top-80 + window.scrollY}px`;
            popup.style.left = `${rect.left + window.scrollX}px`;
        }
    });

    document.addEventListener("click", (event) => {
        if (popup.style.display === "block" && !popup.contains(event.target as Node) && event.target !== button) {
            popup.style.display = "none"
        }
    });
}