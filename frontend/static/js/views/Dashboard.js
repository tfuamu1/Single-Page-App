import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
            <h1>Welcome to my blog!</h1>
            <p>
                An ordinary moviegoer who enjoys the escapism of cinema.
            </p>
            <p>
                There is no right or wrong when it comes to how you feel. Just honest opinions.
                </p>
                <p>
                Take my opinion with a grain of salt!
                </p>
             </p>
             <p>   
                <a href="/posts" data-link>View recent posts</a>
            </p>
        `;
  }
}
