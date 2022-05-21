import { LitElement, html, customElement, css, property } from 'lit-element';

import './UINavigation'
import { router } from "./index";

@customElement('lit-app')
export class App extends LitElement {

  static properties = {
    _menu: { type: Array, state: true }
  }

  @property({type: Object}) location = router.location;

  constructor() {
    super();
    this.menu = [
        { route: '/home', name: 'Home' },
        { route: '/explore', name: 'Exlore' },
        { route: '/profile', name: 'Profile' }
    ];
  }

  static styles = css`
    .header {
      padding: 20px;
      font-size: 25px;
      text-align: center;
      background: white;
    }

    .topnav {
      background-color: #4f4c4c;
      overflow: hidden;
    }

    .topnav a {
      float: left;
      color: #f2f2f2;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 17px;
    }

    .topnav a:hover {
      background-color: #ddd;
      color: black;
    }

    .topnav a.active {
      background-color: #008CBA;
      color: white;
    }
    
    lit-nav {
      margin: 4em auto;
    }
  `;

  render() {
    return html`
      <lit-nav .menu="${this.menu}" .location="${this.location}"></lit-nav>
      <slot></slot>
    `;
  }
}
