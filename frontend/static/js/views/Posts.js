import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Posts");
  }

  async getHtml() {
    return `
            <h1>Posts</h1>
            <ul>
            <li>Poor things(2024)</li>
            <li>Anatomy of A Fall(2024)</li>
            <li>The Zone of Interest(2024)</li>
            </ul>
            
        `;
  }
}
