import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin } from '@nuxt/kit'
import { name, version } from '../package.json'

export interface NuxtValtechUiOptions {
  addPlugin: boolean
}

export default defineNuxtModule<NuxtValtechUiOptions>({
  meta: {
    name,
    version,
    configKey: 'NuxtValtechUi',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },

  defaults: {
    addPlugin: true
  },

  hooks: {},

  setup (options, nuxt) {
    if (options.addPlugin) {
      const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
      nuxt.options.build.transpile.push(runtimeDir)
      addPlugin(resolve(runtimeDir, 'plugin'))
    }
  }
})
