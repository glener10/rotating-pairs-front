import { Heading } from '@radix-ui/themes';

interface TitleProps {
  title: string;
}

export const Title = (props: TitleProps): JSX.Element => {
  const { title } = props;
  return (
    <Heading style={{ margin: '8px' }} align="center">
      {title}
    </Heading>
  );
};

export default Title;
