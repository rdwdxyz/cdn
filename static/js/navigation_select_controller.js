// https://dev.to/phawk/hotwire-best-practices-for-stimulus-40e
//import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"
import { Application, Controller } from "../cache/stimulus.js"
import { Turbo } from "@hotwired/turbo-rails";
window.Stimulus = Application.start()

/*
 * Usage
 * =====
 *
 * add data-controller="navigation-select" to common ancestor
 *
 * Action:
 * data-action="change->navigation-select#change"
 *
 */
Stimulus.register("navigation-select", class extends Controller {
  change(event) {
    const url = event.target.value;
    Turbo.visit(url);
  }
})
