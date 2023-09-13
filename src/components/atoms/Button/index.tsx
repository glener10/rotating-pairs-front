import { Button } from '@radix-ui/themes';
import { ReactNode } from 'react';

interface ButtonProps {
  onClick?: () => void;
  children?: ReactNode;
  disabled?: boolean;
  variant?: 'soft' | 'classic' | 'solid' | 'surface' | 'outline' | 'ghost';
}

export const SimpleButton = (props: ButtonProps): JSX.Element => {
  const { children, disabled, variant, ...rest } = props;
  return (
    <Button disabled={disabled} variant={variant ? variant : 'soft'} {...rest}>
      {children}
    </Button>
  );
};

export default SimpleButton;
