

interface ResultDescriptionProps{
  description: string;
}

export const ResultDescription = (props: ResultDescriptionProps) => { 
  return (
    <p>{props.description}</p>
  );
};


export default ResultDescription;