## Base Webpack3 Script for React

```base
mkdir react-demo
cd react-demo && npm init
yarn add react react-dom
yarn add --dev webpack webpack-dev-server babel-core babel-loader babel-preset-react
echo '{"presets":["react"]}' > .babelrc
```
### note:
1. babel config has two way: .babelrc or package.json of "babel" value.
2. webpack 3 Has supported ES2015, but it must be ensured that Node() of the local environment should be supported, otherwise it only use CommonJS modules.