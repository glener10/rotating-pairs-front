interface ResultDescriptionProps {
  description: string;
}

export const ResultDescription = (props: ResultDescriptionProps): JSX.Element => {
  return <p>{props.description}</p>;
};

export default ResultDescription;
