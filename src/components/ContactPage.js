import { create } from "./Utils"

class ContactPage {

    mainContent = function(){
        const content = document.querySelector("#content")
        const el = create("div","main-content")
        const p = document.createElement("h6")
        p.textContent = "Contact Details"
        content.appendChild(el)
        
        const contact = create("div","contact-container")
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





const ContactP = new ContactPage();
export default ContactP;