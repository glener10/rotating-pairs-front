import { Text } from '@radix-ui/themes';
import { ReactNode } from 'react';

interface BasicTextProps {
  children: ReactNode;
}

export const BasicText = (props: BasicTextProps): JSX.Element => {
  const { children } = props;

  return <Text as="p">{children}</Text>;
};

export default BasicText;
