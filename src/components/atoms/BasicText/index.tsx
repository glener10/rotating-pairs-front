import { Text } from '@radix-ui/themes';
import { TextProps } from '@radix-ui/themes/dist/cjs/components/text';

export const BasicText = (props: TextProps): JSX.Element => {
  const { children } = props;

  return (
    <Text as="p" style={{ fontSize: 'var(--size-text)', margin: '8px' }}>
      {children}
    </Text>
  );
};

export default BasicText;
