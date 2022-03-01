# IISER K App

An one stop app for [IISER K](https://www.iiserkol.ac.in/web/en/) students

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

**It is highly recommended that you use linux**. Some things might not work right away on Windows. If you are on Windows, you can use try WSL.

- Make sure you have [git-flow](https://github.com/nvie/gitflow/wiki/Installation) installed.
- Run the `bin/setup` script (make sure that that you do not have any uncommited changes while running this, if you do have them, stage them). This sets up git-flow for you.
- Make sure that you have [node.js](https://nodejs.org/en/download/) and [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable) installed. You can check for the same by running `node -v` and `yarn -v`. If you have them installed you will get a version number without error.
- Run `yarn install`. This should install all necessary packages into a `node_modules` folder.
- Run `yarn start` to see if you are able to run the react app. If you did not face
  any errors you are good to go.

### VS Code

- You need to have the following extensions installed:

  Necessary

  - Prettier - Code formatter
  - ESlint
  - Better Comments
  - Visual Studio Code Commitizen Support

  Recommended

  - GitLens — Git supercharged
  - Git Graph

- Create a workspace `settings.json` file in `.vscode` directory in the root of the project.
  You can do this by opening the command palette(`Ctrl`+`Shift`+`P`) and entering `Preferences: Open Workspace Settings (JSON)`.
  This will contain all the settings specific only to this project.

- Add the following lines in the `settings.json file`

  ```json
  "editor.formatOnSave": true,

  // formatter setup for frontend
  "[html]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  // enable emmet for react
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }

  ```

## Available Scripts

In the project root, you can run:

`yarn dev`

Runs the app in the dev mode ,i.e. all changes are live-reloaded. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`yarn build`

Builds the app for production to the `dist` folder.

`yarn serve`

Serves the content of `dist` folder. all changes are live-reloaded. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`yarn commit`

Open Commitizen menu
