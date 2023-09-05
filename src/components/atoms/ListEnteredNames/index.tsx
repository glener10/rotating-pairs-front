interface ListEnteredNamesProps {
  valuesArray: string[];
  setInputNamesInArray: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ListEnteredNames = (props: ListEnteredNamesProps): JSX.Element => {
  const removingOneInput = (value: string): void => {
    const index = props.valuesArray.indexOf(value);
    if (index !== -1) {
      const newArray = [...props.valuesArray];
      newArray.splice(index, 1);
      props.setInputNamesInArray(newArray);
    }
  };

  return (
    <ul>
      {props.valuesArray.map((value, index) => (
        <div
          key={`div-${index}`}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <li key={index}>{value}</li>
          <button onClick={(): void => removingOneInput(value)}>X</button>
        </div>
      ))}
    </ul>
  );
};

export default ListEnteredNames;
