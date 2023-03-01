import { InjectionToken } from '@angular/core';

export const API_TOKEN = new InjectionToken('API_PREFIX_PREMATCH', {
  factory: (): string => `/api`,
  providedIn: 'root',
});
