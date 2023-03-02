import { InjectionToken } from '@angular/core';

export const API_TOKEN = new InjectionToken('API_TOKEN', {
  factory: (): string => `/api`,
  providedIn: 'root',
});
