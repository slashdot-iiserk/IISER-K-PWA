import { useState } from 'react';
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  Text,
} from '@mantine/core';
import './App.css';
import Scaffold from './Scaffold';

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
        <Scaffold>
          <Text align="center">Welcome To IISERK App</Text>
        </Scaffold>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
