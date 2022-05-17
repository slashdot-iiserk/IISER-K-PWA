/**
 * LocalStorage.getItem wrapper which returns empty string (instead of null)
 * for `key` which are not present in local storage
 * @param key string
 * @returns string
 */
export const defaultedStorage = (key: string, defaultVal: any) => {
  const val = localStorage.getItem(key);
  return val == null ? defaultVal : val;
};
