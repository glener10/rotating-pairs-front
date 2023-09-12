# **INICIALIZAÇÃO, CONFIGURAÇÃO E MANUTENIBILIDADE**

🏁 Tabela de Conteúdo

===================

<!--ts-->

- ➡️ [Design System](#designSystem)

- ➡️ [Theming](#designSystem-theming)

- ➡️ [Wrappers](#designSystem-wrappers)

- ➡️ [Front-End Deve ser](#checklist-deve-frontend)

<!--te-->

===================

<div id="designSystem"></div>

### **Design System**

[ ] Use '.scss' e não somente '.css'.

[ ] Arquivos css globais: arquivo '_\_breakpoints_' para responsividade e arquivo '_\_variaveis_' para guardar as cores, espaçamentos, etc.

- **Mobile**: 768
- **Desktop_xsm**: 980
- **Desktop_sm**: 1080
- **Desktop_md**: 1280

[ ] [Definir fonte global](https://fonts.google.com/)

[ ] Defina um fundo global, cores primárias e secundárias: [ColorHunt](https://colorhunt.co/) || [Color Adobe](https://color.adobe.com/en/create/color-wheel)

[ ] Defina um tamanho de tela **máximo** e **mínimo** para que seu site 'funcione responsivo'

```css
html {
  min-width: 320px;
  max-width: 1400px;
}
```

<div id="designSystem-theming"></div>

### **Theming**

Uma das maneiras mais comuns de implementar theming no front-end é usando um contexto de tema. O contexto de tema é uma técnica usada no React e outras bibliotecas JavaScript para passar informações globais do aplicativo para baixo na árvore de componentes, sem a necessidade de passar explicitamente as propriedades de componente através de cada nível.

Usando um contexto de tema, é possível definir as propriedades de estilo em um objeto de tema, que pode ser passado para todos os componentes filhos da aplicação. Se uma mudança no tema for necessária, basta alterar o objeto de tema central e as alterações serão refletidas em todo o aplicativo.

Um exemplo utilizando em conjunto a biblioteca _styled components_ e o conceito de _Theming_. O objeto de tema pode incluir propriedades para a cor primária e secundária do aplicativo:

```javascript
const theme = {
  primaryColor: '#007bff',
  secondaryColor: '#6c757d',
};
```

Em seguida, o contexto de tema pode ser definido no nível superior da aplicação:

```javascript
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
```

Em seguida, os componentes podem acessar as propriedades do tema por meio da função _useTheme_:

```javascript
import { useTheme } from 'styled-components';

const Header = () => {
  const theme = useTheme();

  return (
    <header style={{ backgroundColor: theme.primaryColor }}>
      <h1>Meu aplicativo</h1>
    </header>
  );
};
```

Nesse exemplo, a cor de fundo do cabeçalho é definida usando a cor primária do tema. Se a cor primária for alterada no objeto de tema, a cor de fundo do cabeçalho será atualizada em todo o aplicativo.

Em resumo, theming é o processo de definir e gerenciar um conjunto consistente de estilos para um aplicativo, permitindo que a aparência visual do aplicativo seja alterada de maneira consistente e eficiente em todo o aplicativo. O uso de um contexto de tema é uma técnica comum no React e outras bibliotecas JavaScript para implementar theming.

<div id="designSystem-wrappers"></div>

### **Wrappers**

wrapper é um componente que envolve outro componente ou conteúdo, adicionando estilos, comportamentos e funcionalidades adicionais.

Por exemplo, em CSS, um wrapper pode ser usado para aplicar uma borda em torno de um elemento ou para adicionar margens ou preenchimento. Em JavaScript, um wrapper pode ser usado para adicionar eventos de mouse ou teclado a um elemento ou para manipular o conteúdo de um elemento de forma dinâmica.

Os wrappers também são usados para criar componentes mais complexos a partir de componentes mais simples. Por exemplo, um componente de lista pode ser envolvido por um wrapper que adiciona um botão "Carregar mais" que permite carregar mais itens na lista sem precisar recarregar a página inteira.

Em resumo, um wrapper no front-end é um componente que adiciona funcionalidades adicionais a outro componente ou conteúdo, tornando-o mais poderoso e versátil.

<div id="checklist-deve-frontend"></div>

### **Front-End Deve ser**

[ ] **Deve ser acessível e inclusivo para todos**.

[ ] **Deve ser responsivo**.

[ ] Seu projeto deve ser internacionalizável (Exemplo react-i18next library).
