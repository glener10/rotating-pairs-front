interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Input = (props: InputProps): JSX.Element => {
  const { ...rest } = props;
  return (
    <textarea
      rows={5} // Número de linhas visíveis na caixa de texto
      {...rest}
      placeholder="Digite os valores separados por quebra de linha"
    />
  );
};

export default Input;
