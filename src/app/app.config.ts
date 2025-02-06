import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { routes } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { ChangelogComponent } from './changelog/changelog.component';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule),
    provideRouter(routes),
    HeaderComponent,
    ChangelogComponent
  ]
};