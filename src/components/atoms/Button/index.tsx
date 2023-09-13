import { Button } from '@radix-ui/themes';
import { ReactNode } from 'react';

interface ButtonProps {
  onClick?: () => void;
  children?: ReactNode;
}

export const SimpleButton = (props: ButtonProps): JSX.Element => {
  const { children, ...rest } = props;
  return (
    <Button variant="soft" {...rest}>
      {children}
    </Button>
  );
};

export default SimpleButton;
