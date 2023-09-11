import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Button, Flex, Text } from '@radix-ui/themes';
import { Dispatch, SetStateAction } from 'react';

type HeaderProps = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};

export const Header = (props: HeaderProps): JSX.Element => {
  const { theme, setTheme } = props;
  return (
    <header>
      <Flex
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: '24px',
        }}
      >
        <Button
          style={{ display: 'flex' }}
          variant="outline"
          onClick={(): void => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme == 'light' ? <Text>Dark Mode</Text> : <Text>Light Mode</Text>}
          {theme == 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
    </header>
  );
};

export default Header;
