# Valtech UI Component Library

Inspired by https://github.com/wuruoyun/vue-component-lib-starter

## Setup

You can use `npm`or `yarn`.

```bash
# install dependencies
yarn install

# build the library, available under dist
yarn build

# build the storybook app, available under storybook-static
yarn build:storybook

# start the storybook app with hot reload
yarn storybook
```

You may use [Netlify](https://www.netlify.com/) to auto build and deloy the doc app like this project does.

## Develop and test locally

In order to develop and test your component, create stories in `src/components/[component_name]/[component_name].stories.ts`, as shown by the example components.

If you want to test the library in a Vue3 app locally:

1. In the root folder of this library, run `yarn link`. This will create a symbolic link to the library.
2. In the root folder of your client app, run `yarn link @valtech/valtech-ui`. This will add the symbolic link to the `node_modules` folder in your client app.
3. You can now import `@valtech/valtech-ui` in your client app.

There is no need to add `@valtech/valtech-ui` to your client app's dependency in this case.

If you made changes to the library, you will need to rebuild the library. Your Vue3 app shall hot reload when the building of library is completed.

## How it works

### Components

The library is a [Vue plugin](https://v3.vuejs.org/guide/plugins.html). The `install` function in [index.ts](src/index.ts) registers all components under [components](src/components) to Vue globably.

The components are also exported by [index.ts](src/index.ts) so that the client app can import them individually and register them locally, instead of using the library as a plugin. This may be a better option if the client app only use a small set of components in your library.

### Utilities and constants

The library includes example utilities and constants. They are also exported in [index.ts](src/index.ts). The client app may use them as below:

```js
<script lang="ts">
import { MyConstants, MyUtil } from '@valtech/valtech-ui`'

export default {
  data () {
    return {
      magicNum: MyConstants.MAGIC_NUM
    }
  },
  methods: {
    add (a:number, b:number) {
      return MyUtil.add(a, b)
    }
  }
}
</script>
```

### Styling

Individual compopnent may have styles defined in its `.vue` file or in dedicated file in the same directory. They will be processed, combined and minified into `dist/valtech-ui.css`, which is included in the `exports` list in [package.json](package.json).

If you have library level styles shared by all components in the library, you may add them to [src/assets/main.scss](src/assets/main.scss). This file is imported in [index.ts](src/index.ts), therefore the processed styles are also included into `dist/valtech-ui.css`.

The client app shall import `valtech-ui.css`, usually in the entry file:

```js
import '@valtech/valtech-ui/dist/valtech-ui.css'
```

### Third-party dependencies

Third-party libraries used by you library may bloat up the size of your library, if you simply add them to the `dependencies` in [package.json](package.json).

The following are some strategies to reduce the size of your library:

#### Externalization

If you expect the client app of your library may also need the same dependency, you may externalize the dependency. For example, to exclude LIB_123 from your library build artifact, in [vite.config.ts](vite.config.ts), you may have

```js
module.exports = defineConfig({
    rollupOptions: {
      external: ['vue', /LIB_123\/.+/]
    }
  }
})
```

The dependency to be externalized may be declared as peer dependency in your library.

#### Cherry picking

If you don't expect the client app of your library also needing the same dependency, you may embed cherry-picked functions. For example, to embed the `fill` function of popular library [lodash](https://lodash.com), import the `fill` function like the following:

```js
import fill from 'lodash/fill'
```

Even with tree-shaking, the codes being brought into your library may still be large, as the function may have its own dependencies.

Note that `import { fill } from 'lodash'` or `import _ from 'lodash'` will not work and will embed the whole `lodash` library.

Finally, if your client app also use `lodash` and you don't want `lodash` to be in both the client app and your libraries, even after cherry-picking, you may consider cherry-picking in component library and re-export them as utils for client to consume, so that the client does not need to depend on `lodash`, therefore avoiding duplication.

### Type generation

In [tsconfig.json](tsconfig.json), the following options instructs `tsc` to emit declaration (`.d.ts` files) only, as `vite build` handles the `.js` file generation. The generated `.d.ts` files are sent to `dist/types` folder.

```json
"compilerOptions": {
  "declaration": true,
  "emitDeclarationOnly": true,
  "declarationDir": "./dist/types"
}
```

In [package.json](package.json), the line below locates the generated types for library client.

```json
"types": "./dist/types/index.d.ts",
```

> In [vite.config.ts](vite.config.ts), `build.emptyOutDir` is set to `false` and `rimraf` is used instead to remove the `dist` folder before the build. This is to avoid the `dist/types` folder generated by `tsc` being deleted when running `vite build`.

### Configuration

#### TypeScript

In [tsconfig.json](tsconfig.js), set the following as recommended by Vite (since esbuild is used). However, enableing this option leads to https://github.com/vitejs/vite/issues/5814. The workaround is to also enable `compilerOptions.skipLibCheck`.

```json
"compilerOptions": {
  "isolatedModules": true
}
```

In [tsconfig.json](tsconfig.js), set the following to address [Issue #32](https://github.com/wuruoyun/vue-component-lib-starter/issues/32). The solution is from https://github.com/johnsoncodehk/volar/discussions/592.

```json
"compilerOptions": {
  "types": [
    "vite/client"
  ]
}
```

#### Dependencies

In [package.json](package.json), Vue is declared in both `peerDependencies` and `devDependencies`. The former requires the client app to add these dependencies, and the later makes it easier to setup this library by simply running `yarn install`.
