# Electron React Template

Based off of [electron quick start](https://github.com/electron/electron-quick-start) and expanded to have my common stack.

## What's setup here?

- [Electron](https://www.electronjs.org/)
  - With an example [IPC](https://www.electronjs.org/docs/latest/api/ipc-main) call
  - With an empty renderer.js file if you want to use that instead of react
- [React](https://reactjs.org/)
- [Webpack](https://webpack.js.org/)
- [Electron Forge](https://www.electronforge.io/)
- [Bulma](https://bulma.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- A github action for automatically checking branches with eslint and prettier
- [Husky](https://typicode.github.io/husky/) for adding an automatic post commit hook to lint and format code
- [Dependabot](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates)

## Quick start

```bash
git clone git@github.com:LindseyB/electron-react-template.git
cd electron-react-template
npm install
npm run dev
```

## Scripts

### `npm start`

Run the application

### `npm run dev`

Starts the application with webpack in watchmode using concurrently to watch both

### `npm run make`

Build the application for distribution

### `npm run build`

Build the webpack (render side only)

### `npm run build:watch`

Run building webpack (render side only) in watchmode

### `npm run lint`

Run eslint

### `npm run lint:fix`

Run eslint with autofix enabled

### `npm run format`

Run prettier

### `npm run format:fix`

Run prettier with autofix enabled
