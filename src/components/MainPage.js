class MainPage {

    header = function(){
        const content = document.querySelector("#content")
        const el = document.createElement("div")
        const nav = document.createElement("div")
        const p = document.createElement("p")

        nav.className = "nav"
        el.className = "header"
        p.textContent = "Logo!"
        for(let i = 0; i < 3; i++){
            const a = document.createElement("a")
            switch(i){
                case 0:
                    a.className = "home"
                    a.textContent = "Home"
                    nav.appendChild(a)
                break;

                case 1:
                    a.className = "contact"
                    a.textContent = "Contact"
                    nav.appendChild(a)
                break;

                case 2:
                    a.className = "menu"
                    a.textContent = "Menu"
                    nav.appendChild(a)
                break;

                default: console.error("Something went wrong mainpage");  
            }
        }
        content.appendChild(el)
        el.appendChild(p)
        el.appendChild(nav)
    }

    mainContent = function(){
        const content = document.querySelector("#content")
        const el = document.createElement("div")
        const p = document.createElement("p")
        const img = new Image()

        p.textContent = "This is the new and amazing pizza place restaurant house  where you can try the best pizzas in the whole world and beyond"
        img.className = "fireplace"
        el.className = "main-content"
        img.src = "../src/imgs/pizza.jpg"

        content.appendChild(el)
        el.appendChild(img)
        el.appendChild(p)
    }

    footer = function(){
        const content = document.querySelector("#content")
        const el = document.createElement("div")
        const p = document.createElement("p")
        const credits = document.createElement("a")

        el.className = "footer"
        p.textContent = "Copyright @ bigooff"
        credits.textContent = "Image by stockking on Freepik"
        credits.href = "https://www.freepik.com/free-photo/side-view-pizza-with-salami-ham-green-peppers-tomatoes-black-olives-cheese-table_7747717.htm#query=pizza&position=31&from_view=search&track=sph";
        content.appendChild(el)
        el.appendChild(credits)
        el.appendChild(p)
    }

}

const MP = new MainPage();
export default MP;