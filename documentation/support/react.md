# **REACT**

🏁 Tabela de Conteúdo

===================

<!--ts-->

* 👉 [Otimização e Performace](#otimizacao)

  * ➡️ [Importações](#otimizacao-importacoes)

  * ➡️ [GetSideServerProps](#otimizacao-getsideserverprops)

  * ➡️ [Memorização de Componente](#otimizacao-memorizacaoDeComponente)

  * ➡️ [Memorização de Função/Método](#otimizacao-memorizacaoDeFuncao)

  * ➡️ [Memorização de Valores](#otimizacao-memorizacaoDeValores)

  * ➡️ [Não use States para constantes que não serão Alteradas!](#otimizacao-naoUseStatesParaConstantesNaoAlteradas)

* 👉 [Dicas Implementação em React](#dicasImplementacaoEmReact)

  * ➡️ [Passar valores padrões para uma interface](#dicasImplementacaoEmReact-interface)

  * ➡️ [Renderização de Componente Condicional](#dicasImplementacaoEmReact-componenteCondicional)

* 👉 [Entenda o Fluxo do React](#fluxoReact)

  * ➡️ [Compilação React](#fluxoReact-compilacao)

  * ➡️ [Fluxo do 'state' e 'setState'](#fluxoReact-setstate)

<!--te-->

===================


<div id="otimizacao"></div>

## **Otimização e Performace**

Use a **ferramenta do desenvolvedor** (extensão do navegador) para ver quais componentes renderizam mais de uma vez (aparecem com uma caixa verde na tela)

Use carregamento lento/divisão de código (**lazy loading**). Carregue apenas o que for necessário para o usuário, conforme necessário, carregue o restante.


<div id="otimizacao-importacoes"></div>

### **Importações**

Importar bibliotecas e componentes dinamicamente (divisão de código e carregamento lento para carregar apenas o que é necessário para o usuário):

```js
const Componente = lazy(() => import("../Componente"));

//Será necessário ter um componente react chamado 'Suspense', para mostrar algo ao usuário enquanto este carregamento lento está sendo executado.

<Suspense fallback={<LoaderComponent />}>
  <Component />
</Suspense>;

//OR

import dynamic from "next/dynamic";

const Componente = dynamic(() => import("../Componente"), {
  loading: <LoaderComponent />,
});
```

Importar apenas o componente específico

```js
import { input, Box, Typography } from '@mui/material'   ❌

//esta importação carrega toda a pasta @mui/material na página e não apenas os componentes especificados, então é recomendado usar:

import Input from '@mui/material/Input';                 ✅
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
```

<div id="otimizacao-getsideserverprops"></div>

### **GetSideServerProps**

Carregar página antes de finalizar getServerSideProps

```js
import { GetServerSideProps } from 'next';
...
const isServerReq = (req: any) => !req.url.startsWith('/_next');
...
export const getServerSideProps: GetServerSideProps = async ({ req  }) => {
    const fetchResponse = isServerReq(req) ? await useFetch(some_url) : [null, true];
    const [data, loading] = fetchResponse;

    return {
        props: {
            data,
            loading
        }
    }
}
```

<div id="otimizacao-memorizacaoDeComponente"></div>

### **Memorização de Componente**

**Observação sobre listas mutáveis**: Não usar o índice do mapa como chave, mas sim o id daquele item para evitar renderização (porque o map faz ordenações dependendo da mutação que altera a ordem/índice dos elementos)

Use memorizações de componente no _export_ quando os componentes não precisam ser re-renderizados (Cuidado com useMemo porque existe um custo para memorizar):

```js
export default function ListaDeItensComInput() {
  const [itens, setItens] = useState([]);
  const [novoItem, setNovoItem] = useState('');

  useEffect(()=>{
    const umMilhaoDeItens;
    setItens(umMilhaoDeItens);
  },[]);

  return(
    <>
      <input onChange={e => setNovoItem(e.target.value)} value={novoItem}/>
      <ul>
        {itens.map(item => <Item key={item.id} item={item} />)}
      </ul>
    <>
  )
}
```

Imagine que nesse caso a cada alteração no _input_ que altera o valor do estado _novoItem_ haverá uma nova renderização desse componente ListaDeItensComInput e tudo que existe dentro dele será refeito, carregando um map de UM MILHÃO DE ITENS a cada caractere adicionado no input!

Para burlar essa situação memoriza-se o retorno do componte **Item**, dessa forma:

```js
function Item({item}){
  return(
    <li>
      <strong>{item.id}</strong>
    </li>
  )
}

export default memo(Item);
```

Dessa forma só será re-renderizado esse componente caso alguma de suas propriedades (dependências passadas no componente pai ListaDeItensComInput) e/ou estados dentro de si forem alterados.


<div id="otimizacao-memorizacaoDeFuncao"></div>

### **Memorização de Função/Método**

useCallback armazena em cache uma função entre re-renderizações até que suas dependências mudem.

```js
import { useCallback } from 'react';

function Pagina({ id, referencia, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + id + '/buy', {
      referencia,
      orderDetails,
    });
  }, [id, referencia]);
```

Na renderização inicial, a função retornada da qual você obterá _useCallback_ será a função que você passou.

**Nas renderizações seguintes, o React irá comparar as dependências** com as dependências que você passou durante a renderização anterior. Se nenhuma das dependências tiver mudado (em comparação com Object.is), _useCallback_ retornará a mesma função de antes. Caso contrário, _useCallback_ retornará a função que você passou neste render.


<div id="otimizacao-memorizacaoDeValores"></div>

### **Memorização de Valores**

useMemo para memorizar valores, exemplo utilização:

```js
export default function Input() {
  const [input, setInput] = useState('');
  const [soma, setSoma] = useState(1);
  let somaComUm = useMemo(() => {
    return soma + 1;
  },[soma]);

  return(
    <>
      <input onChange={e => setInput(e.target.value)} value={input}/>
      <input onChange={e => setSoma(Number(e.target.value))} value={soma}/>
      <div>
        {soma}
      </div>
    <>
  )
}
```

Cada vez que é alterado o **setInput** o componente inteiro estará sendo renderizado novamente, e em um caso normal o cálculo da variável _somaComUm_ estaria sendo refeito a cada re-renderização desse componente. Porém com o useMemo, o cálculo só será feito caso uma das dependências do cálculo for alterada, no nosso caso o state **soma**.


<div id="otimizacao-naoUseStatesParaConstantesNaoAlteradas"></div>

### **Não use States para constantes que não serão Alteradas!**

Por exemplo em uma lista "Pratos" que é realizado uma busca, a cada caractere adicionado na busca NÃO se deve estar monitorando a lista e fazer um 'setState' a cada alteração, pois qualquer alteração irá re-renderizar TODO componente e seus componentes filhos. Faça dessa forma:

```js
export function Restaurante(){                              ❌❌❌
  const [pratos, setPratos] = useState([]);
  const [busca, setBusca] = useState('');
  const [pratosFiltrados, setPratosFiltrados] = useState([]);

  useEffect(()=>{
    //Realizar a busca de pratos na API uma vez
    const pratosAPI;
    setPratos(pratosAPI);
  },[])
  
  useEffect(()=>{
    if(busca.length){
      setPratosFiltrados(pratos.filter(pratos=> pratos.nome.includes(busca)));
    }
  },[busca])
}


export function Restaurante(){                              ✅✅✅
  const [pratos, setPratos] = useState('');
  const [busca, setBusca] = useState('');

  useEffect(()=>{
    //Realizar a busca de pratos na API uma vez
    const pratosAPI;
    setPratos(pratosAPI);
  },[])

  const pratosFiltrados = busca.length > 0 ? pratos.filter(pratos => pratos.nome.includes(busca)) : [];
}
```

<div id="dicasImplementacaoEmReact"></div>

## **Dicas Implementação em React**

Usar {...restProps} para propriedades não-htmls não gera erro (casos que possuem extends nas interfaces)


<div id="dicasImplementacaoEmReact-interface"></div>

### **Passar valores padrões para uma interface**


```js
interface IMeuComponenteProps{
  nome:string;
}
export const MeuComponente((props: IMeuComponenteProps)=>{
//implementação MeuComponente...
});

MeuComponente.defaultProps = {
//Defina as propriedades padrões aqui em baixo
nome='Boby',
}

//OU

interface IMeuComponenteProps{
  nome:string;
}
export const MeuComponente((props: IMeuComponenteProps)=>{
 const {nome = 'Boby', ...rest} = props;
});
```

<div id="dicasImplementacaoEmReact-componenteCondicional"></div>

### **Renderização de Componente Condicional**


- Renderização condicional, não use if, switch case ou qualquer outra coisa que verifique as condições.

```js
function renderizacaoCondicional(){          ❌
 let paginaAtual = 'profile';
 return
  <>
{paginaAtual === 'profile' ? <Profile />
: paginaAtual === 'setting' ? <Setting />
&& paginaAtual === 'security' ? <Security />
 </>
}
}

function renderizacaoCondicional(){           ✅
 let renderizarComponente ={
  profile: <Profile />,
  setting: <Setting />,
  security: <Security />,
 };

 let paginaAtual = 'profile';
 return renderizarComponente[paginaAtual];
}

```


<div id="fluxoReact"></div>

## **Entenda o Fluxo do React**


<div id="fluxoReact-compilacao"></div>

### **Compilação React**

- React por baixo dos panos passa os Hooks como parâmetros para as funções (componentes) na ordem em que foram chamados, entenda:

```js
export function App(){
  const estado1 = useState(1);
  const estado2 = useState(2);
  const estado3 = useState(3);
}
```

Por baixo dos panos o React está passando para o APP as **props** (mesmo sendo vazia essa propriedade é passada, caso realmente é passada N propriedades para um componente eles vão tudo dentro desse props separado dos demais) e os demais estados como propriedades, segue exemplo de uma chamada desse componente:

```js
export function App(props, estado1, estado2, estado3)
```

Por isso que não é possível declarar hooks dentro de ifs ou funções pois eles se tornam condicionais (podem ou não existir) e isso alteraria o número de propriedades que seriam passadas e o compilador se perde!

<div id="fluxoReact-setstate"></div>

### **Fluxo do 'state' e 'setState'**

- Aproveitando a explicação de cima, se aplica para esse mesmo caso usando 'setStates' de forma abusiva.

```js
export function App(){
  const [contador, setContador] = useState(1);

  function incrementa(){
    setContador(contador + 1);
    setContador(contador + 1);
    setContador(contador + 1);
    setContador(contador + 1);
    setContador(contador + 1);
  }
}
```

Este código ao executar a função _incrementa_ não irá incrementar cinco vezes e sim **apenas uma !** Pois por baixo dos panos o react está chamando o componente App com as props e seu único estado declarado como propriedade, e a função setContador está sendo executada com o mesmo valor para todos os 5 casos.

```js
export function App(props, contador = 1);

  //A função incrementa nos olhos do compilador está assim
  function incrementa(){
    setContador(1 + 1);
    setContador(1 + 1);
    setContador(1 + 1);
    setContador(1 + 1);
    setContador(1 + 1);
  }
```

Para contornar esse caso, caso seja necessário... Utiliza Callback function, dessa forma:

```js
export function App(){
  const [contador, setContador] = useState(1);

  function incrementa(){
    setContador((state) => state + 1);
    setContador((state) => state + 1);
    setContador((state) => state + 1);
    setContador((state) => state + 1);
    setContador((state) => state + 1);
  }
}
```
Dessa forma o compilador entende que não foi passado um valor fixo para o _setContador_ e sim uma função de retorno, dessa forma ele entende que o parâmetro que foi passado ao chamar o app (nosso **contador = 1** no exemplo de cima) não é algo fixo.