import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
/*
NgModules:
helps us organize our app into cohesive blocks of functionality

app.module.js: contains all sitewide, components, types, services used with our app. import all modules first.
BrowserModule added so we can run our app inside of the browser.
AppComponent added as the root component (that contains all other components)

typeScript decorator:
@NgModule()
function that adds extra metadata to the class below
we pass in {…} an object of key value pairs.

imports: all angular libs used in our app
declarations: all components, directives and pipes we want to use.
bootstrap: what our root component is. 

all of that is added to our class AppModule with the decorator.
*/