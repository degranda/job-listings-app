import { data } from '../data.js';
import './skill-tag.js';

class jobCard extends HTMLElement { 
    constructor() {
        super();
        
        this.attachShadow({ mode: 'open' });
        
    }
    static get observedAttributes() {
        return ['logo','company','position','postedAt','contract','location', 'skills'];
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        if(attr === 'logo') {
            this.logo = newVal;
        }
        if(attr === 'company') {
            this.company = newVal;
        }
        if(attr === 'position') {
            this.position = newVal;
        }
        if(attr === 'postedAt') {
            this.postedAt = newVal;
        }
        if(attr === 'contract') {
            this.contract = newVal;
        }
        if(attr === 'location') {
            this.location = newVal;
        }
        if(attr === 'skills') {
            this.skills = newVal.split(',');
        }
    }
    render() {
        this.shadowRoot.innerHTML = this.getTemplate();
    }
    getTemplate() {
        return `
            <section>
                <div class="job-photo">
                    <img class="photo" src="${this.logo}"/>
                </div>
                <div class="job-description">
                    <div class="job-description_company">
                        <p>${this.company}</p>
                    </div>
                    <div class="job-description_position">
                        <h2>${this.position}</h2>
                    </div>
                    <div class="job-description_info">
                        <span>${this.postedAt === undefined ? "1d ago" : this.postedAt}</span>
                        <span>${this.contract}</span>
                        <span>${this.location}</span>
                    </div>
                </div>
                <div class="job-skills">
                    ${this.skills.map((skill) => `
                        <skill-tag skill=${skill}>
                            <span>${skill}</span>
                        </skill-tag>
                    `).join('')}
                </div>
            </section>
            ${this.getStyles()}
        `; 
    }
    getStyles() {
        return `
            <style>
                :host {
                    display: block;
                }
                section {
                    width: 100%;
                    height: 150px;
                    display: flex;
                    border-radius: 5px;
                    box-shadow: 0px 15px 18px 0px #bebbbb;
                    margin: 0 auto;
                    box-sizing: border-box;
                }
                section:hover {
                    border-left: 5px solid #62baba;
                }
                .job-photo {
                    width: 170px;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .job-photo .photo {
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    background-color: black;
                }
                .job-description {
                    min-width: 300px;
                    height: 100%;
                }
                .job-description div {
                    width: 100%;
                }
                .job-description_info span {
                    margin-right: 15px;
                }
                .job-skills {
                    width: 300px;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    margin-left: auto;
                }
                .job-skills skill-tag {
                    margin-right: 10px;
                }
            </style>
        `;
    }
    connectedCallback() {
        this.render();
    }
}

customElements.define('job-card', jobCard);