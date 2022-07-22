import { defineNuxtConfig } from 'nuxt'
import NuxtValtechUi from '..'

export default defineNuxtConfig({
  modules: [
    [NuxtValtechUi, { addPlugin: true }]
  ]
})
