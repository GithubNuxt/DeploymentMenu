import Deployment from "./module/core.js";
const menu = new Deployment(".js-trigger", {
  addName: "_active",
});
window.addEventListener("load", () => {
  menu.init();
});
