import { Navbar as MantineNavbar, Text, useMantineTheme } from '@mantine/core';
import { useThemedValue } from '../hooks';

type NavElement = {
  path: string;
  title: string;
};
const navData: NavElement[] = [
  { path: '/', title: 'Home' },
  { path: 'welearn', title: 'WeLearn' },
  { path: 'student-mess', title: 'Mess' },
];

function Navbar({ isOpen }: { isOpen: boolean }) {
  const theme = useMantineTheme();
  return (
    <MantineNavbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!isOpen}
      width={{ sm: 120 }}
    >
      {navData.map(({ path, title }) => (
        <MantineNavbar.Section p="xs" key={title}>
          <Text color={useThemedValue(theme.white, theme.black)}>{title}</Text>
        </MantineNavbar.Section>
      ))}
    </MantineNavbar>
  );
}

export default Navbar;
