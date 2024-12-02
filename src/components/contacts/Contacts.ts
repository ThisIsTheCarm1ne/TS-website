import mapImage from "/map.png?url";

import classes from "./Contacts.module.css";

export default function Contacts() {
    return `
        <section class="${classes.section}">
            <img src="${mapImage}" />
            <form class="${classes.form}" id="form">
                <div>
                    <h1 class="${classes.contactsHeader}">Контакты</h1>
                    <p>Свяжитесь с нами</p>
                </div>
                    <div class="${classes.inputContainers}">
                        <div class="${classes.inlineInputContainers}">
                            <div class="${classes.inputContainer}">
                                <label for="name">Имя Фамилия Отчество</label>
                                <input type="text" name="name" placeholder="Константинопольский Константин Константинович">
                            </div>
                            <div class="${classes.inputContainer}">
                                <label for="email">Электронная почта</label>
                                <input type="email" name="email" placeholder="input value" id="email">
                            </div>                   
                        </div>
                        <div class="${classes.inlineInputContainers}">
                            <div class="${classes.inputContainer}">
                                <label for="password">Пароль</label>
                                <input type="password" name="password" placeholder="Введите пароль" id="passwordInput">
                                <div class="${classes.passwordCheckContainer}">
                                    <div class="${classes.passwordCheck}" id="passwordCheck"></div>
                                    <div class="${classes.passwordCheck}" id="passwordCheck1"></div>
                                    <div class="${classes.passwordCheck}" id="passwordCheck2"></div>
                                    <div class="${classes.passwordCheck}" id="passwordCheck3"></div>
                                </div>
                                <p class="${classes.passwordCheckHint}">
                                    Password strength
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_107_2962)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.45877 2.09995L5.47992 2.09995H10.5199L10.5411 2.09995C11.0272 2.09994 11.4223 2.09994 11.7429 2.12613C12.0739 2.15318 12.3693 2.21064 12.6441 2.35063C13.0769 2.57114 13.4287 2.92299 13.6492 3.35577C13.7892 3.63052 13.8467 3.92592 13.8737 4.25699C13.8999 4.57759 13.8999 4.9727 13.8999 5.45879V5.47995V10.5199V10.5411C13.8999 11.0272 13.8999 11.4223 13.8737 11.7429C13.8467 12.074 13.7892 12.3694 13.6492 12.6441C13.4287 13.0769 13.0769 13.4288 12.6441 13.6493C12.3693 13.7893 12.0739 13.8467 11.7429 13.8738C11.4223 13.9 11.0272 13.9 10.5411 13.8999H10.5199H5.47991H5.45876C4.97267 13.9 4.57756 13.9 4.25696 13.8738C3.92589 13.8467 3.63049 13.7893 3.35574 13.6493C2.92296 13.4288 2.57111 13.0769 2.3506 12.6441C2.21061 12.3694 2.15315 12.074 2.1261 11.7429C2.0999 11.4223 2.09991 11.0272 2.09991 10.5411L2.09991 10.5199V5.47995L2.09991 5.4588C2.09991 4.9727 2.0999 4.57759 2.1261 4.25699C2.15315 3.92592 2.21061 3.63052 2.3506 3.35577C2.57111 2.92299 2.92296 2.57114 3.35574 2.35063C3.63049 2.21064 3.92589 2.15318 4.25696 2.12613C4.57756 2.09994 4.97267 2.09994 5.45877 2.09995ZM4.33839 3.12281C4.06916 3.14481 3.92001 3.18544 3.80973 3.24164C3.56512 3.36627 3.36624 3.56515 3.24161 3.80976C3.18541 3.92004 3.14478 4.06919 3.12278 4.33843C3.1003 4.6135 3.09991 4.96765 3.09991 5.47995V10.5199C3.09991 11.0322 3.1003 11.3864 3.12278 11.6615C3.14478 11.9307 3.18541 12.0798 3.24161 12.1901C3.36624 12.4347 3.56512 12.6336 3.80973 12.7583C3.92001 12.8144 4.06916 12.8551 4.33839 12.8771C4.61346 12.8996 4.96762 12.8999 5.47991 12.8999H10.5199C11.0322 12.8999 11.3864 12.8996 11.6614 12.8771C11.9307 12.8551 12.0798 12.8144 12.1901 12.7583C12.4347 12.6336 12.6336 12.4347 12.7582 12.1901C12.8144 12.0798 12.8551 11.9307 12.8771 11.6615C12.8995 11.3864 12.8999 11.0322 12.8999 10.5199V5.47995C12.8999 4.96765 12.8995 4.6135 12.8771 4.33843C12.8551 4.06919 12.8144 3.92004 12.7582 3.80976C12.6336 3.56515 12.4347 3.36627 12.1901 3.24164C12.0798 3.18544 11.9307 3.14481 11.6614 3.12281C11.3864 3.10033 11.0322 3.09995 10.5199 3.09995H5.47992C4.96762 3.09995 4.61346 3.10033 4.33839 3.12281ZM7.49992 5.59995C7.49992 5.3238 7.72377 5.09995 7.99992 5.09995H8.00592C8.28206 5.09995 8.50592 5.3238 8.50592 5.59995C8.50592 5.87609 8.28206 6.09995 8.00592 6.09995H7.99992C7.72377 6.09995 7.49992 5.87609 7.49992 5.59995ZM7.99992 7.49995C8.27606 7.49995 8.49992 7.7238 8.49992 7.99995V10.3999C8.49992 10.6761 8.27606 10.8999 7.99992 10.8999C7.72377 10.8999 7.49992 10.6761 7.49992 10.3999V7.99995C7.49992 7.7238 7.72377 7.49995 7.99992 7.49995Z" fill="#8E8E8E"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_107_2962">
                                                <rect width="16" height="16" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </p>
                            </div>
                            <div class="${classes.inputContainer}">
                                <label for="phone-number">Номер телефона</label>
                                <input type="text" name="phone-number" placeholder="+7 (___) ___-__-__">
                            </div>                   
                        </div>
                    </div>
                    <div class="${classes.inputContainer}">
                        <label for="contact-textarea" class="${classes.labelTextArea}">Сообщение</label>
                        <textarea id="contact-textarea" class="${classes.textArea}" placeholder="Введите описательный текст для обратной связи"></textarea>   
                        <div>
                            <input type="checkbox" name="policy-agremeent" class="${classes.checkboxPolicyAgreement}">
                            <label for="policy-agremeent" class="${classes.checkboxLabel}">
                                Я согласен(а) с <a>Политикой конфиденциальности</a> и <a>Правилами обработки персональных данных</a>
                            </label>
                        </div>           
                    </div>
                <button class="cta-btn">Отправить заявку</button>
            </form>
        </section>
    `;
}