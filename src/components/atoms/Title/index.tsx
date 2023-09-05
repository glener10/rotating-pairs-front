interface TitleProps {
  title: string;
}

export const Title = (props: TitleProps): JSX.Element => {
  return <h2>{props.title}</h2>;
};

export default Title;
