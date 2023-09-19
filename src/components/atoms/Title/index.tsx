import { Heading } from '@radix-ui/themes';
import { HeadingProps } from '@radix-ui/themes/dist/cjs/components/heading';

export const Title = (props: HeadingProps): JSX.Element => {
  const { children } = props;
  return (
    <Heading style={{ margin: '8px', fontSize: 'var(--size-title)' }} align="center">
      {children}
    </Heading>
  );
};

export default Title;
