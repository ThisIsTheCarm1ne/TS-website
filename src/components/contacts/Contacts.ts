import mapImage from "/map.png?url";

import classes from "./Contacts.module.css";

export default function Contacts() {
    return `
        <section class="${classes.section}">
            <img src="${mapImage}" />
            <form class="${classes.form}" id="form">
                <div>
                    <h1>Контакты</h1>
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
                                <div class="${classes.passwordCheck}" id="passwordCheck"></div>
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
                    </div>
                <button class="cta-btn">Отправить заявку</button>
            </form>
        </section>
    `;
}