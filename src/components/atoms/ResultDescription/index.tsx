interface ResultDescriptionProps {
  description: string;
}

export const ResultDescription = (props: ResultDescriptionProps): JSX.Element => {
  const { description } = props;
  return <p>{description}</p>;
};

export default ResultDescription;
