import { TextArea } from '@radix-ui/themes';

interface InputProps {
  value?: string;
  onChange?: (event: {
    target: {
      value: React.SetStateAction<string>;
    };
  }) => void;
  placeholder?: string;
}

export const Input = (props: InputProps): JSX.Element => {
  const { ...rest } = props;
  return (
    <TextArea
      style={{
        minHeight: '120px',
        padding: '8px',
      }}
      {...rest}
    />
  );
};

export default Input;
