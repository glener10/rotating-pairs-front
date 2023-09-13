import { Text } from '@radix-ui/themes';
import { TextProps } from '@radix-ui/themes/dist/cjs/components/text';

export const BasicText = (props: TextProps): JSX.Element => {
  const { children } = props;

  return <Text as="p">{children}</Text>;
};

export default BasicText;
