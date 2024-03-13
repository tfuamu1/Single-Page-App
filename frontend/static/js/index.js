import Dashboard from "./views/Dashboard.js";

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "/", view: Dashboard },
    // { path: "/posts", view: () => console.log("Viewing Posts") },
    // { path: "/settings", view: () => console.log("Viewing Settings") },
  ];

  // Test each route for potential match
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  const view = new match.route.view(); // Link to the dashboard in routes

  // Get the async getHtml() from Dashboard.js and display the dashboard
  document.querySelector("#app").innerHTML = await view.getHtml();

  console.log(match.route.view());
};

window.addEventListener("popstate", router); // Show browsing history in the console

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault(); // Prevent the default behavior of the link
      navigateTo(e.target.href); // Navigate to the href of the link
    }
  });
  router();
});
