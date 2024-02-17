import { Button } from '@radix-ui/themes';
import { ButtonProps } from '@radix-ui/themes/dist/cjs/components/button';

export const SimpleButton = (props: ButtonProps): JSX.Element => {
  const { children, disabled, variant, ...rest } = props;
  return (
    <Button
      {...rest}
      style={{
        fontSize: 'var(--size-button)',
        padding: '15px 20px',
        margin: '10px',
        pointerEvents: 'auto',
      }}
      disabled={disabled}
      variant={variant ? variant : 'soft'}
    >
      {children}
    </Button>
  );
};

export default SimpleButton;
