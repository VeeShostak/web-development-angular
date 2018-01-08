import { Component } from '@angular/core';

/*
separate features so we can: Isolate Test Reuse

Building Components:
Component:
Template: View layout (HTML code, binding, directives)
Class: code that supports the view, contains properties and methods
Metadata: used inside @Decorator. Exta instruction for Angular. tells angular how to instantiate component, construct a view, how to interact with other components using directives.

In angular, class becomes a component when it is given this metadata.
*/

@Component({
  moduleId: module.id, // needed if using systemJS as module loader
  selector: 'bs-app', // bookstore app
  templateUrl: 'app.component.html'
})
// <Feature><Type> = AppComponent
export class AppComponent {
  pageTitle: string = "Dev Book Store"
}