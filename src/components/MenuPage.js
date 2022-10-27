class MenuPage {

    mainContent = function(){
        const content = document.querySelector("#content")
        const el = document.createElement("div")
        const p = document.createElement("p")

        el.className = "main-content"
        p.textContent = "Our Menu"

        content.appendChild(el)
    }

}
const MenuP = new MenuPage();
export default MenuP;