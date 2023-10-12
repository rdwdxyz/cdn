// https://dev.to/phawk/hotwire-best-practices-for-stimulus-40e
//import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"
import { Application, Controller } from "../cache/stimulus.js"
import Rails from "@rails/ujs";
window.Stimulus = Application.start()

/*
 * Usage
 * =====
 *
 * add data-controller="auto-submit" to your <form> element
 *
 * Action (add this to a <select> field):
 * data-action="change->auto-submit#submit"
 *
 */
Stimulus.register("auto-submit", class extends Controller {
  submit() {
    Rails.fire(this.element, "submit");
  }
})
