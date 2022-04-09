import { useState } from 'react';
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Text,
} from '@mantine/core';
import './App.css';
import Scaffold from './Scaffold';
import {
  DefaultGenerics,
  Outlet,
  ReactLocation,
  Route,
  Router,
} from '@tanstack/react-location';

const location = new ReactLocation();
const routes: Route<DefaultGenerics>[] = [
  {
    path: '/',
    element: <Text align="center">Welcome To IISERK App</Text>,
  },
  {
    path: 'welearn',
    element: <Text align="center">Welcome To WeLearn</Text>,
  },
  {
    path: 'student-mess',
    element: <Text align="center">Welcome To Mess</Text>,
  },
];

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={{ colorScheme }}>
        <Router location={location} routes={routes}>
          <Scaffold>
            <Outlet />
          </Scaffold>
        </Router>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
