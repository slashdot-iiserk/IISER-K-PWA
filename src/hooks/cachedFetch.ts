import useSWRV from 'swrv';
import LocalStorageCache from 'swrv/dist/cache/adapters/localStorage';
import type { fetcherFn, IKey } from 'swrv/dist/types';

const second = 1000;
const minute = 60 * 1000;
const hour = 60 * minute;
export const TIME = { second, minute, hour };

const localStorageCache = new LocalStorageCache();

const useCachedFetch = <T>(
  key: IKey,
  fetcher: fetcherFn<T>,
  dedupingInterval = 1 * hour,
) => {
  const { data, error, isValidating, mutate } = useSWRV<T, any>(key, fetcher, {
    cache: localStorageCache,
    dedupingInterval: dedupingInterval,
  });
  return [data, error, isValidating, mutate] as const;
};

export default useCachedFetch;
