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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Quisque nec maximus nisl. Nulla facilisi.
             </p>
            
        `;
  }
}
