import { Text } from '@radix-ui/themes';

interface BasicTextProps {
  description: string;
}

export const BasicText = (props: BasicTextProps): JSX.Element => {
  const { description } = props;

  const descriptionSepareted = description.split(':');
  return (
    <Text as="p">
      {`${descriptionSepareted[0]}: `}
      <strong>{descriptionSepareted[1]}</strong>
    </Text>
  );
};

export default BasicText;
