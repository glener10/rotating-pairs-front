interface InputProps {
  boxInputNames: string;
  handleInputChange: (event: { target: { value: React.SetStateAction<string> } }) => void;
}

export const Input = (props: InputProps): JSX.Element => {
  return (
    <textarea
      rows={5} // Número de linhas visíveis na caixa de texto
      value={props.boxInputNames}
      onChange={props.handleInputChange}
      placeholder="Digite os valores separados por quebra de linha"
    />
  );
};

export default Input;
