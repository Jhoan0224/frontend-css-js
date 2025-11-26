
class NavbarHome extends HTMLElement{
    constructor() {
        super();
        // this.attachShadow({mode: "open"});
    }
    
    connectedCallback() {
        this.innerHTML = `
            <div>
                Poner reloj acqui
            </div>
        `;
    }

}
customElements.define("navbar-home", NavbarHome);