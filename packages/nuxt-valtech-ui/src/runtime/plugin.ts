import { defineNuxtPlugin } from '#app'
import ValtechUi from '@marcoborsoi/vue-valtech-ui'
import '@marcoborsoi/vue-valtech-ui/dist/vue-valtech-ui.css'

export default defineNuxtPlugin((nuxtApp) => {
  const { vueApp: app } = nuxtApp

  app.use(ValtechUi)
})
