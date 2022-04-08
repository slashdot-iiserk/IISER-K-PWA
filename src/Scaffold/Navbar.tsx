import { Navbar as MantineNavbar, Text, useMantineTheme } from '@mantine/core';
import { useThemedValue } from '../hooks';

function Navbar({ isOpen }: { isOpen: boolean }) {
  const theme = useMantineTheme();
  return (
    <MantineNavbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!isOpen}
      width={{ sm: 120 }}
    >
      <MantineNavbar.Section p="xs">
        <Text color={useThemedValue(theme.white, theme.black)}>Home</Text>
      </MantineNavbar.Section>
      <MantineNavbar.Section p="xs">
        <Text color={useThemedValue(theme.white, theme.black)}>WeLearn</Text>
      </MantineNavbar.Section>
      <MantineNavbar.Section p="xs">
        <Text color={useThemedValue(theme.white, theme.black)}>Mess</Text>
      </MantineNavbar.Section>
    </MantineNavbar>
  );
}

export default Navbar;
