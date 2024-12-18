import mapImage from "/map.png?url";

import classes from "./Contacts.module.css";

export default function Contacts() {
    return `
        <section class="${classes.section}">
            <img src="${mapImage}" alt="map of Saint-Petersburg, Russia" />
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
                                <div class="${classes.passwordInputWrapper}">
                                    <input type="password" name="password" placeholder="Введите пароль" id="passwordInput">
                                    <button class="${classes.togglePasswordButton}" type="button" id="togglePassword">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_107_2813)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.67183 4.49823C3.94905 4.19046 4.42328 4.16571 4.73104 4.44293L7.8768 7.27654C7.92474 7.31031 7.96916 7.35006 8.00885 7.39549L10.6627 9.78602C10.6675 9.79021 10.6722 9.79447 10.6769 9.7988L14.3261 13.0859C14.3308 13.09 14.3355 13.0943 14.3402 13.0986L16.9879 15.4836C17.0435 15.5213 17.0947 15.567 17.1394 15.6201L20.2732 18.4429C20.581 18.7202 20.6058 19.1944 20.3285 19.5022C20.0513 19.8099 19.5771 19.8347 19.2693 19.5574L16.4631 17.0296C15.2087 17.7102 13.7127 18.1946 12.0002 18.1946C7.19199 18.1946 4.10288 14.396 3.11393 12.9854C3.10702 12.9756 3.09989 12.9655 3.09259 12.9551C2.99236 12.8131 2.8596 12.625 2.79187 12.3588C2.73627 12.1403 2.73629 11.8599 2.79192 11.6413L3.51874 11.8263L2.79192 11.6413C2.85969 11.3751 2.99282 11.1865 3.09332 11.0442C3.10067 11.0338 3.10786 11.0236 3.11482 11.0137C3.63582 10.2708 4.68786 8.93825 6.22466 7.80716L3.72712 5.55745C3.41936 5.28022 3.3946 4.80599 3.67183 4.49823ZM7.366 8.83525C5.87698 9.86451 4.84468 11.1595 4.34292 11.8749C4.3123 11.9186 4.2907 11.9494 4.27263 11.9762C4.26628 11.9857 4.26105 11.9936 4.25675 12.0002C4.26096 12.0067 4.26605 12.0144 4.27223 12.0235C4.29018 12.0502 4.31164 12.0808 4.34214 12.1243C5.29667 13.4858 7.99248 16.6946 12.0002 16.6946C13.213 16.6946 14.3046 16.4026 15.268 15.9532L13.7784 14.6114C13.2596 14.9126 12.6483 15.0835 12.0002 15.0835C10.231 15.0835 8.65981 13.7749 8.65981 12.0002C8.65981 11.4183 8.83394 10.8799 9.12874 10.4231L7.366 8.83525ZM10.2729 11.4538C10.1988 11.6265 10.1598 11.8109 10.1598 12.0002C10.1598 12.8028 10.9081 13.5835 12.0002 13.5835C12.1952 13.5835 12.3816 13.5575 12.5556 13.5099L10.2729 11.4538ZM12.0002 7.30575C11.6611 7.30575 11.3321 7.32854 11.0134 7.37098C10.6028 7.42567 10.2257 7.13715 10.171 6.72656C10.1163 6.31597 10.4048 5.93879 10.8154 5.88411C11.1985 5.83309 11.5936 5.80575 12.0002 5.80575C16.8084 5.80575 19.8975 9.60441 20.8864 11.0149C20.8933 11.0248 20.9005 11.0349 20.9078 11.0452C21.008 11.1873 21.1408 11.3754 21.2085 11.6416C21.2641 11.8601 21.2641 12.1406 21.2084 12.3591C21.1406 12.6254 21.0073 12.8142 20.9066 12.9568C20.8993 12.9672 20.892 12.9774 20.885 12.9874C20.6105 13.3788 20.1945 13.9254 19.6437 14.5178C19.3617 14.8212 18.8872 14.8385 18.5838 14.5565C18.2804 14.2745 18.2631 13.8 18.5451 13.4966C19.0403 12.9638 19.4137 12.4729 19.657 12.1261C19.6877 12.0823 19.7094 12.0514 19.7275 12.0245C19.734 12.0149 19.7393 12.0069 19.7436 12.0002C19.7394 11.9937 19.7343 11.986 19.7281 11.9768C19.7102 11.9502 19.6887 11.9196 19.6582 11.8761C18.7037 10.5146 16.0079 7.30575 12.0002 7.30575Z" fill="#B3B3B3"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_107_2813">
                                                    <rect width="24" height="24" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                </div>
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