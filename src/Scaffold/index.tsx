import { useState } from 'react';
import { AppShell, Text, useMantineTheme } from '@mantine/core';
import { useThemedValue } from '../hooks';
import Navbar from './Navbar';
import Header from './Header';

function Scaffold() {
  const theme = useMantineTheme();
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  const toggleNavbar = () => setNavbarIsOpen((state) => !state);
  return (
    <AppShell
      styles={{
        main: {
          background: useThemedValue(
            theme.colors.dark[8],
            theme.colors.gray[0],
          ),
          color: useThemedValue(theme.white, theme.black),
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={<Navbar isOpen={navbarIsOpen} />}
      header={
        <Header navbarState={navbarIsOpen} navbarController={toggleNavbar} />
      }
    >
      <Text align="center">Welcome To IISERK App</Text>
    </AppShell>
  );
}

export default Scaffold;
