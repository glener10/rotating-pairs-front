import { TextArea } from '@radix-ui/themes';
import { TextAreaProps } from '@radix-ui/themes/dist/cjs/components/text-area';

export const Input = (props: TextAreaProps): JSX.Element => {
  const { ...rest } = props;
  return (
    <TextArea
      style={{
        minHeight: '130px',
        padding: '8px',
      }}
      {...rest}
    />
  );
};

export default Input;
