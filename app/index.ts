import 'rxjs';
import 'zone.js';
import 'reflect-metadata';

import './index.scss';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);
