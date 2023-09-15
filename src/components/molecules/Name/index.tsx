import { BasicText } from '@/components/atoms/BasicText';
import { SimpleButton } from '@/components/atoms/SimpleButton';
import { Cross1Icon } from '@radix-ui/react-icons';
import { Box } from '@radix-ui/themes';

interface NameProps {
  value: string;
  onClick: (value: string) => void;
}

export const Name = (props: NameProps): JSX.Element => {
  const { onClick, value } = props;

  const handleClick = (): void => {
    onClick(value);
  };

  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '6px',
      }}
    >
      <BasicText>{value}</BasicText>
      <SimpleButton onClick={handleClick}>
        <Cross1Icon />
      </SimpleButton>
    </Box>
  );
};

export default Name;
