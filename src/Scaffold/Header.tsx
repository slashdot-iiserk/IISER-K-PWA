import {
  ActionIcon,
  Burger,
  Group,
  Header as MantineHeader,
  MediaQuery,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';
import { useThemedValue } from '../hooks';

interface HeaderProps {
  navbarState: boolean;
  navbarController: () => void;
}
function Header({ navbarState, navbarController }: HeaderProps) {
  const theme = useMantineTheme();
  const { toggleColorScheme } = useMantineColorScheme();
  return (
    <MantineHeader height={70} p="md">
      <Group sx={{ height: '100%' }} px="xs" position="apart">
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger
              opened={navbarState}
              onClick={navbarController}
              size="sm"
              color={useThemedValue(theme.white, theme.black)}
              mr="xl"
            />
          </MediaQuery>

          <Text
            size="xl"
            style={{ display: 'inline-flex', alignItems: 'center' }}
            color={useThemedValue(theme.white, theme.black)}
          >
            IISER K App
          </Text>
        </div>
        <ActionIcon
          variant="outline"
          color={useThemedValue('yellow', 'blue')}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
        >
          {useThemedValue(
            <BsSunFill size={18} />,
            <BsMoonStarsFill size={18} />,
          )}
        </ActionIcon>
      </Group>
    </MantineHeader>
  );
}

export default Header;
