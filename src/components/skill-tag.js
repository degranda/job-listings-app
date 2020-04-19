
class skillTag extends HTMLElement {

    constructor() {
        super(); 

        this.attachShadow({ mode: 'open' });

        this.render();
    }
    render() {
        this.shadowRoot.innerHTML = this.getTemplate()
    }
    getTemplate() {
        return `
            <div>
                <span><slot></slot></span>
            </div>
            ${this.getStyles()}
        `; 
    }
    getStyles() {
        return `
            <style>
                :host {
                    display: flex;
                }
                div {
                    min-width: 70px;
                    max-width: 100px;
                    height: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 5px;
                    background: hsl(180, 14%, 90%);
                    color: hsl(180, 29%, 50%);
                    cursor: pointer
                }
                div:hover {
                    background: hsl(180, 29%, 50%);
                    color: hsl(180, 14%, 90%);
                }
                span {
                    padding: 3px 10px;
                }
            </style>
        `;
    }
}

customElements.define('skill-tag', skillTag);