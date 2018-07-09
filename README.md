# Angular Elements Dashboard Demo

Shows how to dynamically load and create Angular Elements (Custom Elements, Web Components).

Features:
- Load external Custom Elements

Remarks:
- The external Custom Element is built with [ngx-build-plus](https://www.npmjs.com/package/ngx-build-plus)
- The example uses the ``@webcomponents/custom-elements`` polyfill (see references in ``angular.json`` and ``polyfills.ts``)
- External Components will become much smaller when ngIvy arrives (planned for Angular 7)
- For sharing dependencies b/w components, lookup [ngx-build-plus](https://www.npmjs.com/package/ngx-build-plus)

## Start

Build the external Custom Elements project before starting the main project:

```
npm install
npm run build:client
npm run build:ce
npm run build
npm run start:server
```
