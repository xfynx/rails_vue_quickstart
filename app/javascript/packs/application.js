// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import Vue from 'vue'
import TypeChanger from '../views/type-changer.vue'
import Wizard from '../views/wizard.vue'
import 'bulma/bulma.sass'

Rails.start()
Turbolinks.start()
ActiveStorage.start()

function init(_event){
    if (document.getElementById("type-changer")) {
        new Vue({render: h => h(TypeChanger)}).$mount('#type-changer')
    }
    if (document.getElementById("wizard")) {
        new Vue({render: h => h(Wizard)}).$mount('#wizard')
    }
}

document.addEventListener("DOMContentLoaded", init);