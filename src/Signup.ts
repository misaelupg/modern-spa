import { LitElement, html, customElement, css } from 'lit-element';
import { store } from './store/store';
import { connect } from 'pwa-helpers';
import { addNote, deleteNote } from './store/actions/actions';

@customElement('lit-signup')
export class Login extends connect(store)(LitElement) {
    static styles = css`
    ui-card {
      padding: 18px;
      margin: 100px auto;
      color: var(--neutral-foreground-rest)
    }
      h3 {
        color: var(--neutral-foreground-rest)
      }
  `;

    addMessage(e) {
        store.dispatch(addNote(e));
    }
    render() {
        return html`
            <ui-card style="width: 300px;">
                <div style="padding: 0 10px 10px;">
                    <h2>Sign up</h2>
                    <p>Sign up to get the most important updates.</p>
                    <ui-text-field style="width: 100%" placeholder="Email" appearance="outline"></ui-text-field>
                    <ui-text-field style="width: 100%" placeholder="Password" appearance="outline" type="password"></ui-text-field>
                    <ui-button @click="${() => this.addMessage('Hello world')}" appearance="accent" style="width: 100%">Sign up</ui-button>
                </div>
    `;
    }
}
