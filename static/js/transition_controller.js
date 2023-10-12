//import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"
import { Application, Controller } from "../cache/stimulus.js"
//import { TransitionController } from "https://unpkg.com/stimulus-use/dist/index.umd.js"
import { TransitionController } from "../cache/stimulus-use/0.52.0/index.umd.min.js"
window.Stimulus = Application.start()

/*
 * Usage
 * =====
 *
 * <div data-controller="transition"
 *   data-transition-enter-active="enter-class"
 *   data-transition-enter-from="enter-from-class"
 *   data-transition-enter-to="enter-to-class"
 *   data-transition-leave-active="or-use multiple classes"
 *   data-transition-leave-from="or-use multiple classes"
 *   data-transition-leave-to="or-use multiple classes">
 *   <!-- content -->
 * </div>
 *
 */
Stimulus.register("transition", TransitionController)
