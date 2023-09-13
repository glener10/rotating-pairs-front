import { BasicText } from '@/components/atoms/BasicText';
import { SimpleButton } from '@/components/atoms/SimpleButton';
import { Cross1Icon } from '@radix-ui/react-icons';
import { Box } from '@radix-ui/themes';

interface NameProps {
  value: string;
  key?: number;
  onClick: (value: string) => void;
}

export const Name = (props: NameProps): JSX.Element => {
  const { onClick, key, value } = props;

  return (
    <Box
      key={`box-${key}`}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '6px',
      }}
    >
      <BasicText key={key}>{value}</BasicText>
      <SimpleButton onClick={(): void => onClick(value)}>
        <Cross1Icon />
      </SimpleButton>
    </Box>
  );
};

export default Name;
