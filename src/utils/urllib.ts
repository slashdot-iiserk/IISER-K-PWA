export const createURL = (
  origin: string,
  pathname: string,
  params: Record<string, string> = {},
) => {
  const paramString = new URLSearchParams(params).toString();
  return `${origin}${pathname}?${paramString}`;
};
export const appendSearchParams = (
  urlString: string,
  params: Record<string, string> = {},
) => {
  const url = new URL(urlString);
  const oldParams = Array.from(url.searchParams.entries());
  const newParams = Object.entries(params) as [string, string][];

  return `${url.origin}${url.pathname}?${new URLSearchParams([
    ...oldParams,
    ...newParams,
  ]).toString()}`;
};
