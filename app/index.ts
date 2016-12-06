import 'rxjs';
import 'zone.js';
import 'reflect-metadata';
require('bootstrap-loader');

import './index.scss';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);
