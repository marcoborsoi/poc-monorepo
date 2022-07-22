# Valtech Components

A monorepo built with [Yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/) and [Lerna](https://lerna.js.org/).

It contains three packages:
- **vue-valtech-ui:** a library of components built with Vue 3 and Vite.
- **wc-valtech-ui:** a library of web components derived from vue-valtech-ui.
- **nuxt-valtech-ui:** a nuxt module that uses vue-valtech-ui as dependency.

For more details about each package, please read their corresponding README files.

## Setup

```bash
# install dependencies
yarn install

# build all the packages in the workspace
yarn build
```
