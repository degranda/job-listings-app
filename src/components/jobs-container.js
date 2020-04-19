import { data } from '../data.js';
import './job-card.js';


class jobsContainer extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open'});

        this.data = data;
        console.log(data);
        this.render();
    }
    
    render() {
        this.shadowRoot.innerHTML = this.getTemplate();
    }
    handleData() {
        return `
            ${data.map((info) => `
                <job-card logo='${info.logo}'
                    company='${info.company}'
                    position='${info.position}'
                    postedAt='${info.postedAt}'
                    contract='${info.contract}'
                    location='${info.location}'
                    skills=${info.languages}>
                </job-card>
            `).join('')}
        `; 
    }
    getTemplate() {
        return `
            ${this.handleData()}
            ${this.getStyles()}
        `;
    }
    getStyles() {
        return `
            <style>
                :host {
                    display: block;
                    max-width: 980px;
                    margin: 0 auto;
                    margin-top: 50px;
                }
                job-card {
                    margin-bottom: 35px;
                }
            </style>
        `;
    }
    
}

customElements.define('jobs-container', jobsContainer);