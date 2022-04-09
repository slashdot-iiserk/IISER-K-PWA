import { Navbar as MantineNavbar, Text, useMantineTheme } from '@mantine/core';
import { Link } from '@tanstack/react-location';
import { useThemedValue } from '../hooks';

function getActiveProps() {
  return {
    style: {
      fontWeight: 'bold',
    },
  };
}

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
          <Link
            to={path}
            style={{
              textDecoration: 'none',
            }}
            getActiveProps={getActiveProps}
            activeOptions={{ exact: true }}
          >
            <Text color={useThemedValue(theme.white, theme.black)}>
              {title}
            </Text>
          </Link>
        </MantineNavbar.Section>
      ))}
    </MantineNavbar>
  );
}

export default Navbar;
