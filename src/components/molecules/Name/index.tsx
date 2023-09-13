import { SimpleButton } from '@/components/atoms/Button';
import { Cross1Icon } from '@radix-ui/react-icons';
import { Box, Text } from '@radix-ui/themes';

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
      <Text as="span" key={key}>
        {value}
      </Text>
      <SimpleButton onClick={(): void => onClick(value)}>
        <Cross1Icon />
      </SimpleButton>
    </Box>
  );
};

export default Name;
