class MenuPage {

    mainContent = function(){
        const content = document.querySelector("#content")
        const el = document.createElement("div")
        const h6 = document.createElement("h6")

        el.className = "main-content"
        h6.textContent = "Our Menu"
        const menu = document.createElement("div")
        menu.className = "card-container"
        // Cards creator
        const cardGrid = document.createElement("div")
        cardGrid.classList = "cards-grid"
        
        for (let i = 0; i < 4; i++) {
            const card = document.createElement("div")
            const cardInfo = document.createElement("p")
            const dish = document.createElement("h1")
            card.classList = "card"
            
            cardGrid.appendChild(card)
            switch (i) {
                case 0:
                    dish.textContent = "Margarita"
                    cardInfo.textContent = "The recommended choice for new customers."
                    card.appendChild(dish)
                    card.appendChild(cardInfo)
                    break;
                    case 1:
                    dish.textContent = "BBQ & Chicken"
                    cardInfo.textContent = "This one will blow your mind!"
                    card.appendChild(dish)
                    card.appendChild(cardInfo)
                    break;
                    case 2:
                    dish.textContent = "Special"
                    cardInfo.textContent = "A good old time classic."
                    card.appendChild(dish)
                    card.appendChild(cardInfo)
                    break;
                    case 3:
                    dish.textContent = "Cheese Lover"
                    cardInfo.textContent = "The title says it all..."
                    card.appendChild(dish)
                    card.appendChild(cardInfo)
                    break;
            
                default: console.error("Something went wrong in card making")
                    break;
            }
        
        }

        content.appendChild(el)
        el.appendChild(menu)
        menu.appendChild(h6)
        menu.appendChild(cardGrid)
    }

}



const MenuP = new MenuPage();
export default MenuP;