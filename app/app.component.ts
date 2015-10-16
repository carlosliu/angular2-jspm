import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
// import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';


//create a simple angular component
@Component({
  selector: 'my-app',
  template: '<h4>Hello {{name}}</h4>'
})
export class AppComponent {
  name: string;
  constructor(){
    this.name = 'Angular2';
    setTimeout(() => {
      this.name = 'Angular2 in TypeScript with jspm';
    },3500);
  }
}