import { BasicText } from '@/components/atoms/BasicText';
import { Title } from '@/components/atoms/Title';
import useResponsive from '@/hooks/useResponsive';
import { TBreakpoint } from '@/interfaces/TBreakpoint';
import { Box } from '@radix-ui/themes';
import Head from 'next/head';

const mappingPaddingMainBox = (breakpoint: TBreakpoint): number => {
  const mapping = {
    desktop: 40,
    tablet: 30,
    mobile: 15,
  };

  return mapping[breakpoint] || 30;
};

export default function About(): JSX.Element {
  const breakpoint = useResponsive();

  const paddingMainBox = mappingPaddingMainBox(breakpoint);

  return (
    <>
      <Head>
        <title>Rotating Pairs Generator</title>
        <meta name="description" content="Random Rotating Pair Generator for Pair Programming" />
        <link rel="icon" href="/iconDrawPairProgramming.svg" />
      </Head>
      <main>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: paddingMainBox,
          }}
        >
          <Title>About the website</Title>
          <BasicText>
            rotatingpairs.online is a free website to generate random pair combinations for those
            who work with pair programming and rotating pairs.
          </BasicText>

          <Title>Privacy Policy</Title>
          <BasicText>Our website does not store any user information.</BasicText>

          <Title>Terms of use</Title>
          <BasicText>Use it at your own risk. We are not responsible for its use.</BasicText>
        </Box>
      </main>
    </>
  );
}
