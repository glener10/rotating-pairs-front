import { Text } from '@radix-ui/themes';

interface ResultDescriptionProps {
  description: string;
}

export const ResultDescription = (props: ResultDescriptionProps): JSX.Element => {
  const { description } = props;

  const descriptionSepareted = description.split(':');
  return (
    <Text as="p">
      {`${descriptionSepareted[0]}: `}
      <strong>{descriptionSepareted[1]}</strong>
    </Text>
  );
};

export default ResultDescription;
