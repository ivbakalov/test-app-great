import { of, tap } from 'rxjs';

const cache = new Map<string, any>();

const hashCode = (s: string): number =>
  s.split('').reduce((a: number, b: string) => {
    a = (a << 5) - a + b.charCodeAt(0);

    return a & a;
  }, 0);

export function MethodCaching({ ttl = 4000, customKey = '' }: { ttl?: number; customKey?: string }) {
  return function (_: any, propertyKey: string, propertyDescriptor: PropertyDescriptor): void {
    const _calledMethod = propertyDescriptor.value;

    propertyDescriptor.value = function (...args: Array<unknown>): void {
      const key = customKey ? customKey : `${propertyKey}-${hashCode(JSON.stringify(args))}`;

      if (cache.has(key)) {
        const cachedData = cache.get(key);
        const age = Date.now() - cachedData.timestamp;
        if (age < ttl) {
          return cachedData.data;
        } else {
          cache.delete(key);
        }
      }

      const data = _calledMethod.call(this, ...args).pipe(
        tap((returnedData) => {
          cache.set(key, { data: of(returnedData), timestamp: Date.now() });
        })
      );

      return data;
    };
  };
}
