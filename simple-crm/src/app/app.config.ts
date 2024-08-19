import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'simple-crm-23a6e',
        appId: '1:657982237885:web:f990e8265f489175c75bd4',
        storageBucket: 'simple-crm-23a6e.appspot.com',
        apiKey: 'AIzaSyBtdpKP8KQpyQ15K8StzNo5Gly2NxrWFys',
        authDomain: 'simple-crm-23a6e.firebaseapp.com',
        messagingSenderId: '657982237885',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
};
