// require following imports for js bundles
import 'zone.js';
import 'reflect-metadata';
import 'es6-shim';

import {bootstrap} from 'angular2/angular2';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {AppComponent} from './app.component';

bootstrap(AppComponent, [ROUTER_PROVIDERS]);
