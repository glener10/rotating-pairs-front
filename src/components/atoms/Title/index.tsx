interface TitleProps {
  title: string;
}

export const Title = (props: TitleProps): JSX.Element => {
  const { title } = props;
  return <h2>{title}</h2>;
};

export default Title;
