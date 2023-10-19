import { SimpleButton } from '@/components/atoms/SimpleButton';
import { AboutDialog } from '@/components/molecules/AboutDialog';
import useResponsive from '@/hooks/useResponsive';
import { TBreakpoint } from '@/interfaces/TBreakpoint';
import * as Dialog from '@radix-ui/react-dialog';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Flex, Link, Text } from '@radix-ui/themes';
import { Dispatch, SetStateAction } from 'react';

type HeaderProps = {
  isAboutModalOpen: boolean;
  setIsAboutModalOpen: Dispatch<SetStateAction<boolean>>;
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};

const mappingWidthHeader = (breakpoint: TBreakpoint): number => {
  const mapping = {
    desktop: 200,
    tablet: 180,
    mobile: 170,
  };

  return mapping[breakpoint] || 250;
};

export const Header = (props: HeaderProps): JSX.Element => {
  const { theme, setTheme, isAboutModalOpen, setIsAboutModalOpen } = props;
  const breakpoint = useResponsive();
  const widthHeader = mappingWidthHeader(breakpoint);

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
        <Flex
          style={{
            display: 'flex',
            width: widthHeader,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Dialog.Root
            open={isAboutModalOpen}
            onOpenChange={(open): void => setIsAboutModalOpen(open)}
          >
            <Dialog.Trigger style={{ background: 'none', border: 'none', padding: '0' }}>
              <Link>About</Link>
            </Dialog.Trigger>
            <AboutDialog />
          </Dialog.Root>

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
