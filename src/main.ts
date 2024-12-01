import './style.css'
import {setupCounter} from './counter.ts'
import Header from "./components/header/header.ts";
import setupHeaderPopup from "./components/header/SetupHeaderPopup.ts";
import LandingSection from "./components/landingSection/landingSection.ts";
import AboutSection from "./components/aboutSection/aboutSection.ts";
import Companies from "./components/companies/Companies.ts";
import FunnyNumbers from "./components/funnyNumbers/FunnyNumbers.ts";
import Contacts from "./components/contacts/Contacts.ts";
import Footer from "./components/footer/Footer.ts";
import CookiesPopup from "./components/cookiesPopup/CookiesPopup.ts";
import cookiesPopupHandler from "./components/cookiesPopup/CookiesPopupHandler.ts";
import setupSlidingOutText from "./components/aboutSection/aboutSectionHandler.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${Header()}
    ${LandingSection()}
    ${AboutSection()}
    ${Companies()}
    ${FunnyNumbers()}
    ${Contacts()}
    ${Footer()}
    ${CookiesPopup()}
`

setupHeaderPopup("btnProduction", ["Prod Link 1", "Prod Link 2", "Prod Link 3"]);
setupHeaderPopup("btnService", ["Service Link 1", "Service Link 2", "Service Link 3"]);
setupHeaderPopup("btnAbout", ["About Link 1", "About Link 2", "About Link 3"]);

setupSlidingOutText("dropdownBtn", "svgIcon");

cookiesPopupHandler("cookiesPopup", "closeCookiesButton");

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
