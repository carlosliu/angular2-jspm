# Angular 2 in TypeScript with jspm


## Quick Start

- Install jspm and other dev tools
  - `npm install -g jspm`
  - `npm install`
- Install dependencies and browse the app
  - `jspm install`
  - `npm run start`
- Build the bundle javascript in dist/
  - `npm run build`
  - `npm run start.dist`


## Create the project manually

- `npm install -g jspm`
- To lock jspm to a specific version  
  `npm install jspm@0.16.12 --save-dev`
- `jspm init` (choose typescript as transpiler)
- Install angular2 and required dependencies  
  `jspm install angular2`  
  `jspm install reflect-metadata zone.js es6-shim npm:@reactivex/rxjs`
- Customize `config.js` (see `typescriptOptions`, `packages` and `meta`)


## References

- https://gist.github.com/robwormald/429e01c6d802767441ec
- https://github.com/jackfranklin/ng2-jspm-typescript
