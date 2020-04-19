import './app-header.js';
import './jobs-container.js';


class myApp extends HTMLElement{
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.render();
    }
    render() {
        this.shadowRoot.innerHTML = this.getTemplate();
    }
    getTemplate() {
        return `
            <app-header></app-header>
            <jobs-container></jobs-container>
            ${this.getStyles()}
        `;
    }
    getStyles() {
        return `
            <style>
                :host {
                    display: block;
                }
            </style>
        `;
    }
}

customElements.define('my-app', myApp);