/* eslint-disable @typescript-eslint/no-misused-promises */
import { SimpleButton } from '@/components/atoms/SimpleButton';
import { Title } from '@/components/atoms/Title';
import useResponsive from '@/hooks/useResponsive';
import { TBreakpoint } from '@/interfaces/TBreakpoint';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Flex, Link, Text } from '@radix-ui/themes';
import Image from 'next/image';
import router from 'next/router';
import { Dispatch, SetStateAction } from 'react';

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

const mappingWidthHeader = (breakpoint: TBreakpoint): number => {
  const mapping = {
    desktop: 200,
    tablet: 180,
    mobile: 170,
  };

  return mapping[breakpoint] || 250;
};

export const Header = (props: HeaderProps): JSX.Element => {
  const { theme, setTheme, ...rest } = props;
  const breakpoint = useResponsive();
  const widthHeader = mappingWidthHeader(breakpoint);

  async function goToHomePage(): Promise<void> {
    await router.push('/');
  }

  const Logo = (): JSX.Element => (
    <Image src="/iconDrawPairProgramming.svg" alt="Logo do seu site" width={40} height={40} />
  );

  async function goToContactPage(): Promise<void> {
    await router.push('contact');
  }

  return (
    <header {...rest}>
      <Flex
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px',
        }}
      >
        <Flex
          style={{ display: 'flex', cursor: 'pointer' }}
          onClick={async (): Promise<void> => goToHomePage()}
        >
          <Logo />
          <Title>Rotating Pairs</Title>
        </Flex>

        <Flex
          style={{
            display: 'flex',
            width: widthHeader,
            alignItems: 'center',
            margin: '20px',
          }}
        >
          <Link
            style={{
              marginRight: '20px',
            }}
            onClick={async (): Promise<void> => goToContactPage()}
          >
            Contact
          </Link>

          <SimpleButton
            style={{ display: 'flex' }}
            variant="outline"
            onClick={(): void => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme == 'light' ? <Text>Dark Mode</Text> : <Text>Light Mode</Text>}
            {theme == 'light' ? <MoonIcon /> : <SunIcon />}
          </SimpleButton>
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
