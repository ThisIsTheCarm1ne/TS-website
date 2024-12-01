import classes from "./FunnyNumbers.module.css"

export default function FunnyNumbers() {
    return `
        <section class="${classes.section}">
            <div>
                <h1 class="${classes.header}">24+</h1>
                <p>Прицепа выпускаем каждый месяц</p>
            </div>
            <div>
                <h1 class="${classes.header}">17км<sup>2</sup></h1>
                <p>Общая площадь производства</p>
            </div>
            <div>
                <h1 class="${classes.header}">+95%</h1>
                <p>Клиентов довольны покупкой</p>
            </div>
        </section>
    `;
}