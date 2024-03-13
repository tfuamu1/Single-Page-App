import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
            <h1>Welcome back, Dom</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Quisque nec maximus nisl. Nulla facilisi.
             </p>
             <p>   
                <a href="/posts" data-link>View recent posts</a>.
            </p>
        `;
  }
}
