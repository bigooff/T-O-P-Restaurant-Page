import "./css/style.css"
import "./css/card.css"
import MP from "./components/MainPage";
import MenuP from "./components/MenuPage";
import ContactP from "./components/ContactPage";


document.addEventListener("DOMContentLoaded",hydrateContent(MP.header,MP.mainContent,MP.footer))
const navBtns = document.querySelectorAll(".menu, .home, .contact");


navBtns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        const mainContent = document.querySelector(".main-content"); 
        switch (btn.textContent) {
            case "Home":
                if(mainContent){mainContent.remove()}
                hydrateContent(MP.mainContent);
                break;

            case "Menu":
                if(mainContent){mainContent.remove()}
                hydrateContent(MenuP.mainContent);
                break;

            case "Contact":
                if(mainContent){mainContent.remove()}
                hydrateContent(ContactP.mainContent)
                break;

            default: console.error("Something went wrong index")
        }
    })
})


function hydrateContent(...components){
    components.forEach((component)=>{
        component();
    })
}


