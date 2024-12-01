import classes from "./landingSection.module.css";

import landingSectionImage from "/landingSectionImage.png?url";

export default function LandingSection() {
    return`
        <section class="${classes.landingSection}">
            <div class="${classes.text}">
                <h1 class="${classes.headerMain} ${classes.headerHighlighted}">Производим и продаём</h1>
                <h1 class="${classes.headerMain}">прицепную технику</h1>
                <p class="${classes.textP}">
                    <i>Собственное производство</i> на территории Санкт-Петербурга 
                    с передовыми<br>технологиями в сфере производства прицепной техники. Делаем качественно<br>с 1999 года.
                </p>
                <h3 class="${classes.listHeader}"><b>Качественно и бесперебойно производим:</b></h3>
                <ul class="${classes.list}">
                    <li>
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="12" width="12" height="2" rx="1" fill="#EB5A0A"/>
                        </svg>
                        Прицепы
                    </li>
                    <li>
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="12" width="12" height="2" rx="1" fill="#EB5A0A"/>
                        </svg>
                        Полуприцепы
                    </li>
                    <li>
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="12" width="12" height="2" rx="1" fill="#EB5A0A"/>
                        </svg>
                        Контейнеры
                    </li>
                    <li>
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="12" width="12" height="2" rx="1" fill="#EB5A0A"/>
                        </svg>
                        Прицепные оси
                    </li>
                </ul>
                <button class="cta-btn" style="width: 173px; height: 56px;">Заказать звонок</button>
            </div>
            <img
                src="${landingSectionImage}"
                class="${classes.img}" 
                alt="Landing Image" 
            />
        </section>
    `;
}