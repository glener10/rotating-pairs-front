import { Heading } from '@radix-ui/themes';

interface TitleProps {
  title: string;
  numberValues?: number;
}

export const Title = (props: TitleProps): JSX.Element => {
  const { title, numberValues } = props;
  return (
    <Heading style={{ margin: '8px' }} align="center">
      {numberValues ? title + ' [' + numberValues + ']' : title}
    </Heading>
  );
};

export default Title;
