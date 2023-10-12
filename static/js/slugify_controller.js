// https://dev.to/phawk/hotwire-best-practices-for-stimulus-40e
//import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"
//import { Application, Controller } from "../cache/stimulus.js"
import ApplicationController from "./application_controller"
window.Stimulus = Application.start()

/*
 * Usage
 * =====
 *
 * add data-controller="slugify" to common ancestor or form tag
 *
 * Action (add to the title input):
 * data-action="slugify#change"
 *
 * Target (add to the slug input):
 * data-slugify-target="slugField"
 *
 */
Stimulus.register("slugify", class extends ApplicationController {
  static targets = ["slugField"];

  change(event) {
    const { value } = event.target;
    this.slugFieldTarget.value = value.toLowerCase().replace(/[^a-z0-9]/, "");
  }
})
