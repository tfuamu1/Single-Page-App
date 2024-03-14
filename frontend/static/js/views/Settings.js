import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Settings");
  }

  async getHtml() {
    return `
            <h1>Settings</h1>
            <p>
                This is where you manage your privacy and other account settings.
             </p>
            
        `;
  }
}
