# Angular 2 in TypeScript with jspm


## Quick Start

- `npm install -g live-server jspm` 
- `jspm install`
- `live-server`


## Create the project manually

- `npm install -g jspm` // Install jspm command 
- `npm install jspm@0.16.12 --save-dev` // lock local jspm version
- `jspm init` // Please choose typescript as transpiler
- `jspm install angular2`
- `jspm install reflect-metadata zone.js es6-shim npm:@reactivex/rxjs` // angular2 dependencies
- Customize `config.js` (see `meta`, `packages` and `typescriptOptions`)


## References

- https://gist.github.com/robwormald/429e01c6d802767441ec
- https://github.com/jackfranklin/ng2-jspm-typescript
