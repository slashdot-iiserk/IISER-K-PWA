import { TIME } from '@/utils/datetime';
import useSWRV from 'swrv';
import LocalStorageCache from 'swrv/dist/cache/adapters/localStorage';
import type { fetcherFn, IKey } from 'swrv/dist/types';

const localStorageCache = new LocalStorageCache();

const useCachedFetch = <T>(
  key: IKey,
  fetcher: fetcherFn<T>,
  dedupingInterval = 1 * TIME.hour,
) => {
  const { data, error, isValidating, mutate } = useSWRV<T, any>(key, fetcher, {
    cache: localStorageCache,
    dedupingInterval: dedupingInterval,
  });
  return [data, error, isValidating, mutate] as const;
};

export default useCachedFetch;
