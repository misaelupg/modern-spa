import { LitElement, html, customElement } from 'lit-element';
import { store } from "./store/store";
import { addNote } from "./store/actions/actions";
import { connect } from "pwa-helpers";

@customElement('lit-login')
export class Login extends connect(store)(LitElement) {
    addMessage(e) {
        store.dispatch(addNote(e));
    }

    render() {
        return html`
      <p>Login page</p>
      <ui-button @click="${() => this.addMessage('Hello world')}" appearance="accent" style="width: 100%">Add note</ui-button>
    `;
    }
}
