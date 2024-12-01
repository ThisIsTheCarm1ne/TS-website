import classes from "./AboutSection.module.css";

export default function setupSlidingOutText(buttonId: string, svgIconId: string) {
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    dropdownItems.forEach((item) => {
        const button = item.querySelector(`#${buttonId}`);
        const svgIcon = item.querySelector(`#${svgIconId}`);

        if (!button) {
            console.log("No Button :(")
            return null;
        }

        if (!svgIcon) {
            console.log("No svg icon :(")
            return null;
        }

        // Create the text container (initially hidden)
        const textContainer = document.createElement('div');
        textContainer.textContent = 'Определяет контентную часть для каждого элемента аккордеона. Часть контента, которая раскрывается при нажатии на заголовок.';
        textContainer.style.height = '0';
        textContainer.style.width = '816px';
        textContainer.style.overflow = 'hidden';
        textContainer.style.opacity = '0';
        textContainer.style.transition = 'height 0.3s ease, opacity 0.2s ease';
        textContainer.className = `${classes.dropDownTextContainer}`;

        // Append button and text container to the body
        //document.getElementById("dropdownCollection").appendChild(textContainer);
        item.appendChild(textContainer);

        // Add click event to toggle the sliding text
        button.addEventListener('click', () => {
            const isExpanded = textContainer.style.height === '0px' || textContainer.style.height === '';

            if (isExpanded) {
                textContainer.style.height = '50px';
                textContainer.style.opacity = '1';

                button.style.borderBottomRightRadius = '0'
                button.style.borderBottomLeftRadius = '0'
            } else {
                textContainer.style.height = '0';
                textContainer.style.opacity = '0';

                button.style.borderBottomRightRadius = '8px'
                button.style.borderBottomLeftRadius = '8px'
            }

            svgIcon.style.transition = 'transform 0.3s ease';
            svgIcon.style.transform = isExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    });
}