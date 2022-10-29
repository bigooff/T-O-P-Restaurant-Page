class ContactPage {

    mainContent = function(){
        const content = document.querySelector("#content")
        const el = document.createElement("div")
        const p = document.createElement("h6")
        el.className = "main-content"
        p.textContent = "Contact Details"
        content.appendChild(el)
        

        const contact = document.createElement("div")
        contact.classList = "contact-container"
        el.appendChild(contact)
        contact.appendChild(p)
        const phone = create("p","phone-number")
        const email = create("p","email")
        const loc = create("p","location")
        phone.textContent = "Phone number: 6994235994"
        email.textContent = "Email: pizzaplace@email.com"
        loc.textContent = "Location: Pizzaplace Avenue 46 St"
        contact.appendChild(phone)
        contact.appendChild(email)
        contact.appendChild(loc)
    }

}



function create(element,className){
    const temp = document.createElement(element)
    temp.classList = className
    return temp;
}


const ContactP = new ContactPage();
export default ContactP;