## React, Microfrontend and Module Federation

This is an example using 3 microfrontend and a shell wired with module federation

### Requirements
- Node >= 12
- Webpack 5
- Yarn / NPM

### Commands
- `yarn start` - Start dev server
- `yarn build` - Create prod bundle
- `yarn serve` - Create prod bundle and serves them using `http-server`

### FAQ
- Why some sections are not working?
Make sure all 4 apps are running

- Does Module Federation work on CRA?
Nope, not yet. Check out this [thread](https://github.com/facebook/create-react-app/issues/9510)

-----

## React, Microfrontend y Module Federation

Estas es una aplicación de 3 microfrontends y un shell
el cual utilizan module federation para conectarse

### Requerimientos
- Node >= 12
- Webpack 5
- Yarn / NPM

### Comandos
- `yarn start` - Inicia aplicación en modo dev
- `yarn build` - Crea assets de producción
- `yarn serve` - Crea assets de producción y los sirve atravez del paquete `http-server`

### FAQ
- ¿Porqué algunas seccionnes no me funcionan?
Asegurese de tener todos las aplicaciones corriendo

- CRA soporta Module Federation?
Nope, todavía no. Puede seguir este [thread](https://github.com/facebook/create-react-app/issues/9510)

### References
- [Module Federation Docs](https://webpack.js.org/concepts/module-federation/)
- [SurviveJS Module Federation](https://survivejs.com/webpack/output/module-federation/)
- [Examples](https://github.com/module-federation/module-federation-examples)
