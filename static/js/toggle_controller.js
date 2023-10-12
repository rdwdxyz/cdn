// https://dev.to/phawk/hotwire-best-practices-for-stimulus-40e
//import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"
import { Application, Controller } from "../cache/stimulus.js"
//import { useTransition } from "https://unpkg.com/stimulus-use/dist/index.umd.js"
import { useTransition } from "../cache/stimulus-use/0.52.0/index.umd.min.js"
window.Stimulus = Application.start()

/*
 * Usage
 * =====
 *
 * add data-controller="toggle" to common ancestor
 *
 * Action (add this to your button):
 * data-action="toggle#toggle"
 *
 * Targets (add this to the item to be shown/hidden):
 * data-toggle-target="toggleable" data-css-class="class-to-toggle"
 *
 */
Stimulus.register("toggle", class extends Controller {
  static targets = ["toggleable"]

  connect() {
//    useTransition(this)
  }

  toggle(e) {
    e.preventDefault()

    this.toggleableTargets.forEach((target) => {
      target.classList.toggle(target.dataset.cssClass)
    })
  }
})
