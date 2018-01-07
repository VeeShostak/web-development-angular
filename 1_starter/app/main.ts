import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);

/*

Bootstraping:

putting all pieces together to run our angular app:

 platformBrowserDynamic allows our app to run in the browser
*/