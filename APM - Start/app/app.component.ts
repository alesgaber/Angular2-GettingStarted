import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <h1>{{pagetTitle}}</h1>
        <pm-products></pm-products>
    `
})
export class AppComponent { 
    pagetTitle: string = 'Acme Product Managment'
}
