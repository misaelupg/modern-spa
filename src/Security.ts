import { LitElement, html, customElement, css } from 'lit-element';

@customElement('lit-security')
export class Security extends LitElement {
    static styles = css`
      :host {
        display: block;
      }
      
      .container {
        margin: 0 auto;
        max-width: 900px;
      }
      
      ul {
        list-style-type: none;
        padding: 0 1em;
        border: 1px solid lightgray;
        border-radius: 8px;
        max-width: 200px;
        text-align: left;
      }
      
      li {
        line-height: 0;
      }
      
      ui-anchor::part(control) {
        justify-content: left;
      }
    `;

    render() {
        return html`
            <div class="container">
                <h2>Security</h2>
                <ui-select>
                    <ui-option value="1">Mexico City</ui-option>
                    <ui-option value="2">Option 2</ui-option>
                    <ui-option value="3">Option 3</ui-option>
                    <svg slot="indicator" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                </ui-select>
            </div>
        `;
    }
}
