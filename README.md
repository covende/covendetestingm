# FRONTEND

## Tecnologias usadas 🛠️

- [ReactJS](https://reactjs.org) - Biblioteca de JavaScript para construir interfaces de usuario
- [Redux](https://es.redux.js.org) - Es un contenedor de estados predecible de aplicaciones JavaScript
- [Chakra-UI](https://chakra-ui.com) - Biblioteca de componentes simple, modular y accesible que le brinda los bloques de construcción que necesita para construir sus aplicaciones React.
- [Emotion](https://emotion.sh/docs/introduction) - Biblioteca diseñada para escribir estilos CSS con JavaScript

## Pre-requisitos 📋

- [NPM](https://www.npmjs.com) - Gestor de paquetes
- Sólidos conocimientos en Javascript

## Estructura de carpetas

```
src
├──@common                              # Directorio de herramientas comunes en la aplicación
│   ├── components/                     # Componentes atómicos reutilizables
│   └── hooks/                          # Hooks reutilizables
│       │   index.js
│       └── [useHookName].js
│
├──app
│   ├── configs                         # Directorio de configuración de la aplicación
│   │   ├── routesConfig.js             # Configuración de rutas de la aplicación
│   │   └── themesConfig.js             # Configuración de temas de la aplicación
│   │
│   ├── layouts                         # Directorio de diseños
│   │   ├── shared-components           # Directorio de componente comunes en los diseños
│   │   └── [layoutNameFolder]/         # Directorio de algún diseño
│   │       ├── components/             # Contiene elementos de diseño como Toolbar, Footer y Navbar.
│   │       └── [layoutName].js         # Componente "layoutName"
│   │
│   ├── main                            # Directorio de componentes principales (screens)
│   ├── redux                           # Directorio principal de Redux
│   └── services                        # Directorio de servicios
│
├── App.js                              # Componente principal de la aplicación
├── App.test.js                         # Prueba del componente principal de la aplicación
└── index.js                            # Javascript entry point
```

## Instalación

```sh
npm install
```

## Ejecutando

En desarrollo

```sh
npm run start
```

En producción

```sh
npm run build
```

## Pruebas

Para ejecutar las pruebas unitarias:

```sh
npm run test
```
