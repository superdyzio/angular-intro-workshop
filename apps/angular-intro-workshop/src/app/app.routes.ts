import { Route } from '@angular/router';
import { FirstComponent } from '../components/first/first.component';
import { SignalsApiComponent } from '../components/signals-api/signals-api.component';

export const appRoutes: Route[] = [
  { path: 'first', component: FirstComponent },
  { path: 'signals', component: SignalsApiComponent }
];
