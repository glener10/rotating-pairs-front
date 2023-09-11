import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';
import { Dispatch, SetStateAction } from 'react';

type HeaderProps = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};

export const Header = (props: HeaderProps): JSX.Element => {
  const { theme, setTheme } = props;
  return (
    <header>
      <Button variant="ghost" onClick={(): void => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme == 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
    </header>
  );
};

export default Header;
