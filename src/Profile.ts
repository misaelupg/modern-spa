import { LitElement, html, customElement, css } from 'lit-element';

@customElement('lit-profile')
export class Profile extends LitElement {
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
        padding: 0 1em .5em;
        border: 1px solid lightgray;
        border-radius: calc(var(--control-corner-radius) * 1px);
        min-width: 200px;
        text-align: left;
        margin-right: 4em;
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
                <h1>Settings</h1>
                <div style="display: flex">
                    <div>
                        <ul>
                            <li>
                                <ui-anchor style="width: 100%" appearance="stealth">
                                    <svg slot="start" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    Profile</ui-anchor>
                            </li>
                            <ui-divider></ui-divider>
                            <li>
                                <ui-anchor href="/profile/security" style="width: 100%" appearance="stealth">
                                    <svg slot="start" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    Security</ui-anchor>
                            </li>
                            <ui-divider></ui-divider>
                            <li>
                                <ui-anchor style="width: 100%" appearance="stealth">
                                    <svg slot="start" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    Saved jobs</ui-anchor>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <slot></slot>
                    </div>
                </div>
            </div>
        `;
    }
}
