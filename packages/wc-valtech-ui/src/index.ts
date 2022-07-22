import { defineCustomElement } from 'vue'
import { VButton, VCard } from '@marcoborsoi/vue-valtech-ui'
import '@marcoborsoi/vue-valtech-ui/dist/vue-valtech-ui.css'

const VButtonElement = defineCustomElement(VButton)
const VCardElement = defineCustomElement(VCard)

const register = () => {
  customElements.define('valtech-button', VButtonElement)
  customElements.define('valtech-card', VCardElement)
}

export {
  VButtonElement,
  VCardElement,
  register,
}
