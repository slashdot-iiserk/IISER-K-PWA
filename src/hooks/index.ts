import { useMantineTheme } from '@mantine/core';

export function useThemedValue<T>(darkValue: T, lightValue: T) {
  const theme = useMantineTheme();
  return theme.colorScheme === 'dark' ? darkValue : lightValue;
}
