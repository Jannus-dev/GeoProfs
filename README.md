# GeoProfs
> FrontEnd verlof registratie web aplicatie.



> [!WARNING]
> Dit project is nog in ontwikeling en daar me nog niet klaar voor gebruik.
## Over
Dit is de front end van het GeoProfs project die wij aan het maken zijn voor onze oplijding op ROC-Nijmegen.

Bij dit project maken wij een aplicatie waarme een bedrijf het verlof van de medewerkers kan bijhouden.

De API van deze website is te vinden op een andere Git Repo. Link naar deze Repo te vinden bij "Handige Links"
## Handige links
- [Trello](https://trello.com/invite/b/66dabb0a04a2ceb86c4f871c/ATTI89f9b0df65430583e75723383abbfb7f34F5E73D/geoprofs)
- [API Repo](https://github.com/NotDetective/GeoProfs_API)
## Authors

- [@Jannus](https://github.com/Jannus-dev)
- [@Micha](https://github.com/NotDetective)
- [@Bo](https://github.com/bleenie)


# Setting up work space

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Headed Component Tests with [Cypress Component Testing](https://on.cypress.io/component)

```sh
npm run test:unit:dev # or `npm run test:unit` for headless testing
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```
