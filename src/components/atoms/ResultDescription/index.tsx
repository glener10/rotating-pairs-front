import { Text } from '@radix-ui/themes';

interface ResultDescriptionProps {
  description: string;
}

export const ResultDescription = (props: ResultDescriptionProps): JSX.Element => {
  const { description } = props;
  return <Text as="p">{description}</Text>;
};

export default ResultDescription;
