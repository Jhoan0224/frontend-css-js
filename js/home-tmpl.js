

class NavbarHome extends HTMLElement{
    constructor() {
        super();
        // this.attachShadow({mode: "open"});
    }
    
    connectedCallback() {
        this.innerHTML = `
            <div class="navbar-tmpl">
                <a href="/index.html" class="btn-go-home">Go to Home</a>
                <img src="../media/moon-navbar.jpg" />
                Poner reloj acqui
            </div>
        `;
    }

}
customElements.define("navbar-home", NavbarHome);