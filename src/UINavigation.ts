import { LitElement, html, customElement, css } from 'lit-element';
import { classMap } from 'lit/directives/class-map.js';
import { router } from "./index";

@customElement('lit-nav')
export class LitNavigation extends LitElement {

    static properties = {
            location: { type: Object },
            menu: { type: Array }
        }

    constructor() {
        super();
    }
    static styles = css`
      :host {
        display: block;
      }
    .container {
      background-color: transparent;
      width: auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border-radius: calc((var(--base-height-multiplier) + var(--density)) * var(--design-unit) * 1px);
    }
      
      ui-anchor {
        border-radius: calc((var(--base-height-multiplier) + var(--density)) * var(--design-unit) * 1px);
        min-width: 100px;
      }
  `;

    render() {
        const classes = (r) => { return { active: this.isCurrentLocation(r) }};
        return html`
            <div class="container">
                ${this.menu.map(m => html`
                    <ui-anchor class=${classMap(classes(m.route))} href="${m.route}" appearance="${this.isCurrentLocation(m.route) ? 'neutral' : 'stealth'}">${m.name}</ui-anchor>
                `)}
            </div>
    `;
    }

    isCurrentLocation(route) {
        return router.urlForPath(route) === this.location.getUrl();
    }
}
