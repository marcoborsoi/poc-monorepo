# Valtech UI Nuxt Module

This application was built following the official [Nuxt Module Author Guide](https://v3.nuxtjs.org/guide/going-further/modules/).

## Setup

You can use `npm`or `yarn`.

```bash
# install dependencies
yarn install

# build the library to be tested in playground
yarn dev:prepare

# to start playground in development mode
yarn dev

# build the app
yarn prepack
```

## Develop and test locally

In order to develop and test your module, use the [playground](./playground/) directory.

This application uses the components from the `valtech-ui` component library project. The `valtech-ui` npm package is already added as a dependency in the package.json.

In order to add it as a local dependency to this application, please remove the `valtech-ui` dependency and follow the 3 steps described in the section *Develop and test locally* of the `valtech-ui` component library project.

If you want to test the module in a Nuxt3 application locally:

1. In the root folder of this library, run `yarn link`. This will create a symbolic link to the library.
2. In the root folder of your client app, run `yarn link @valtech/nuxt-valtech-ui`. This will add the symbolic link to the `node_modules` folder in your client app.
3. You can now define `@valtech/nuxt-valtech-ui` in `nuxt.config.ts` of your Nuxt app.

```bash
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    ['@valtech/nuxt-valtech-ui', { addPlugin: true }]
  ],
})
```

There is no need to add `@valtech/nuxt-valtech-ui` to your Nuxt app's dependency in this case.

If you made changes to the library, you will need to rebuild the library. Your Nuxt3 app shall hot reload when the building of library is completed.
