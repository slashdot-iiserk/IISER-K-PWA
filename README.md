# IISER K App

An one stop app for [IISER K](https://www.iiserkol.ac.in/web/en/) students

You can find the **development version** of the app [here](https://iiser-k-pwa.vercel.app/).

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![version](https://img.shields.io/badge/version-0.2.0-blue.svg)](https://semver.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

## Getting Started

To get started, clone the repository locally on your pc.

```bash
# Using HTTPS
git clone https://github.com/slashdot-iiserk/IISER-K-PWA.git <project name>
```

or

```bash
# Using SSH
git clone git@github.com:slashdot-iiserk/IISER-K-PWA.git <project name>
```

Then follow the [Setup](##setup) section.

## Setup

**It is highly recommended that you use linux**. Some things might not work right away on Windows. If you are on Windows, you can use WSL.

- Make sure that you have [node.js](https://nodejs.org/en/download/) and [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable) installed. You can check for the same by running `node -v` and `yarn -v`. If you have them installed you will get a version number without error.
- Run `yarn install`. This should install all necessary packages into a `node_modules` folder.
- Run `yarn dev` to see if you are able to run the react app. If you did not face
  any errors you are good to go.

### Recommended IDE Setup

It is recommended that you use [VSCode](https://code.visualstudio.com/) for this project.
[TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

- You need to have the following extensions installed:

  Necessary

  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=vue.volar)
  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
  - [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
  - [Visual Studio Code Commitizen Support](https://marketplace.visualstudio.com/items?itemName=knisterpeter.vscode-commitizen)

  Recommended

  - [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
  - [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)

- Create a workspace `settings.json` file in `.vscode` directory in the root of the project.
  You can do this by opening the command palette(`Ctrl`+`Shift`+`P`) and entering `Preferences: Open Workspace Settings (JSON)`.
  This will contain all the settings specific only to this project.

- Add the following lines in the `settings.json file`

  ```json
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  ```

## Available Scripts

In the project root, you can run:

- Install (all) missing packages

  ```sh
  yarn install
  ```

- Compile and Hot-Reload for Development

  ```sh
  yarn dev
  ```

- Type-Check, Compile and Minify for Production

  ```sh
  yarn build
  ```

- Open a preview of the build locally

  ```sh
  yarn preview
  ```

- Run Unit Tests with [Vitest](https://vitest.dev/)

  ```sh
  yarn test:unit
  ```

- Run End-to-End Tests with [Cypress](https://www.cypress.io/)

  ```sh
  yarn build
  yarn test:e2e # or `yarn test:e2e:ci` for headless testing
  ```

- Lint with [ESLint](https://eslint.org/)

  ```sh
  yarn lint
  ```

- Open Commitizen menu

  ```sh
  yarn commit
  ```
