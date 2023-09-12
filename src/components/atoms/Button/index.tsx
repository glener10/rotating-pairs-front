import { Button } from '@radix-ui/themes';

interface ButtonProps {
  title: string;
  onClick?: () => void;
}

export const SimpleButton = (props: ButtonProps): JSX.Element => {
  const { title, ...rest } = props;
  return (
    <Button variant="soft" {...rest}>
      {title}
    </Button>
  );
};

export default SimpleButton;
