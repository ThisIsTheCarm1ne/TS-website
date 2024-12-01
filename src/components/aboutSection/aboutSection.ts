import aboutSectionImage from "/aboutSectionImage.png?url";
import aboutSectionImage1 from "/aboutSectionImage1.png?url";
import aboutSectionImage2 from "/aboutSectionImage2.png?url";

import classes from "./AboutSection.module.css";

export default function AboutSection() {
    return `
        <section class="${classes.section}">
            <div>
                <h1 class="${classes.header}">Lorem Ipsum is simply dummy</h1>
                <p class="${classes.paragraph}">
                    Welcome to Burger Bliss, where we take your cravings to a whole new level!
                    Our<br> mouthwatering burgers are made from 100% beef and are served on freshly baked<br> buns.
                </p>
                <div id="dropdownCollection" class="${classes.dropdownCollection}">
                    ${[...Array(4)].map((_, i) => `
                        <div class="dropdown-item">
                            <button id="dropdownBtn" class="${classes.dropdownBTN}"  data-index="${i}">
                                Заголовок элемента. Устанавливает и стилизует переключатель элемента
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="svgIcon">
                                    <g clip-path="url(#clip0_65_3664)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.06977 8.76947C6.36266 8.47658 6.83753 8.47658 7.13043 8.76947L12.0001 13.6391L16.8698 8.76947C17.1627 8.47658 17.6375 8.47658 17.9304 8.76947C18.2233 9.06237 18.2233 9.53724 17.9304 9.83013L12.5304 15.2301C12.2375 15.523 11.7627 15.523 11.4698 15.2301L6.06977 9.83013C5.77687 9.53724 5.77687 9.06237 6.06977 8.76947Z" fill="#353535"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_65_3664">
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="${classes.imgContainer}">
                <div class="${classes.imgSmallContainer}">
                    <img src="${aboutSectionImage2}" />
                    <img src="${aboutSectionImage1}" />          
                </div>
                <img src="${aboutSectionImage}" />
            </div>
        </section>
    `;
}