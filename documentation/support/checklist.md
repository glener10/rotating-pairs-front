# **INICIALIZAÇÃO, CONFIGURAÇÃO E MANUTENIBILIDADE**

🏁 Tabela de Conteúdo

===================

<!--ts-->

- 👉 [CheckList Projeto Inicial](#checklist)

  - ➡️ [CheckList Front-End](#checklist-frontend)

    - ➡️ [Design System](#designSystem)

      - ➡️ [Theming](#designSystem-theming)

      - ➡️ [Wrappers](#designSystem-wrappers)

- 👉 [CheckList do que seu Projeto DEVE ser](#checklist-deve)

  - ➡️ [Front-End Deve ser](#checklist-deve-frontend)

<!--te-->

===================

<div id="checklist"></div>

## **CheckList Projeto Inicial**

[ ] Cria um projeto o mais simples possível, e mesmo assim tire/limpe o que vem de "extra" caso inicie com um framework (Não recomendado).

[ ] Adicione a documentação inicial, recomenda-se utilizar alguns arquivos padrões:

- 'todo-list.md'
- 'checklists.md' (Este arquivo para lembrar o que o projeto deve ser com o decorrer do tempo)
- 'padroes.md' (Padrões como nomenclaturas ou ações em situações específicas que devem ser adotados pela equipe que pode ser acessado em caso de esquecimento)
- 'changelog.md' (Este arquivo registra as principais alterações feitas em cada versão do projeto, listando os recursos adicionados, correções de bugs, alterações de API e outras modificações relevantes.)
- 'notas.md' Contendo os _Good-Patterns_ e _Anti-Patterns_ (em [Anexo](#anexos))
- Pasta CModel ou diagramas contendo documentação técnica do projeto, _dependencias.drawio_ e _fluxo.drawio_

```js
//changelog.md
# [v0.6.3] - 22/08/2023

- Configura auto import dos _pathMapping_ do Jest.
```

[ ] Crie um arquivo de _LICENÇA_

[ ] Crie um arquivo de documentação geral _README_

[ ] Inicialize e use um verificador de código (ex: _eslint_), necessário inicializar e deixar as regras bem restritas. Use o **.eslintignore** para tornar o verificador mais leve.

[ ] Inicialize e use TypeScript sempre que possível. Sempre bem estrito (observação: usar o _strictNullChecks_ como **true**).

[ ] Sincronize o _ESLint_ com o _Typescript_, adicionando plugins específicos no arquivo _eslintrc_ para utilizar as vantagens de detecção do _lint_ em problemas de _Typescript_.

[ ] Inicialize e use um formatador de código para equipe seguir mesmo padrão, exemplo do _Prettier_ que disponibiliza criar um arquivo local para ter a mesma configuração para qualquer desenvolvedor.

[ ] Sincronize o _ESLint_ com o _Prettier_. A integração do ESLint com o Prettier garante que a formatação seja aplicada de acordo com as regras do verificador de código, evitando conflitos entre as regras de formatação e as regras de linting.

[ ] Configure a biblioteca que será utilizada para executar os testes, os arquivos de configuração separados para cada tipo de teste.

[ ] Configurar o debug/depuração.

[ ] Usar script para não deixar commit se houver erros nos code checkers e testes, validadores e build. No _Node_ existe a biblioteca _Husky_ para essa funcionalidade.

[ ] Usar Biblioteca para padrão de _commits_, no _Node_ existe a [commitlint](https://github.com/conventional-changelog/commitlint/#what-is-commitlint)

[ ] Configure o ambiente de banco de dados para os testes integração e E2E

[ ] Defina a arquitetura e a organização de pastas que será utilizada em seu projeto de acordo com os requisitos. **Utilizar os princípios do Clean Arch é extremamente recomendado!**

[ ] Use o protocole Git e configure o .gitignore

[ ] Proteja as branchs principais do seu projeto no Git contra merges indesejáveis

[ ] Configure um Logger para desenvolvimento local, no node aconselha-se utilizar o pacote 'nestjs-pino' para registrar informações sobre as solicitações HTTP recebidas pelo aplicativo, como método, URL, status de resposta, tempo de resposta, entre outros detalhes (nos imports do arquivo _app.module.ts_).

[ ] Adicionar as extensões recomendadas do Projeto (arquivo dentro da pasta .vscode chamado **extensions**) e as configurações da IDE do VSCode padrão (arquivo dentro da pasta .vscode chamado **settings**).

```json
//Arquivo extensions.json
{
  "recommendations": [
    "orta.vscode-jest",
    "ms-azuretools.vscode-docker",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "prisma.prisma",
    "humao.rest-client"
  ]
}
```

<div id="checklist-frontend"></div>

### **CheckList Front-End**

[ ] [redefinir css](https://www.alura.com.br/artigos/o-que-e-reset-css).

[ ] adicionando normalize (node_modules).

<div id="designSystem"></div>

## **Design System**

[ ] Use '.scss' e não somente '.css'.

[ ] Arquivos css globais: arquivo '_\_breakpoints_' para responsividade e arquivo '_\_variaveis_' para guardar as cores, espaçamentos, etc.

- **Mobile**: 768
- **Desktop_xsm**: 980
- **Desktop_sm**: 1080
- **Desktop_md**: 1280

[ ] [Definir fonte global](https://fonts.google.com/)

[ ] Defina um fundo global, cores primárias e secundárias: [ColorHunt](https://colorhunt.co/) || [Color Adobe](https://color.adobe.com/en/create/color-wheel)

[ ] Utilize como arquitetura de pasta, a **arquitetura atômica** (sugestão). Dividir os compontens em átomos, moléculas (quando um componente possui mais de um átomo), organismos (quando um componente possui mais de uma molécula) e templates.

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

<div id="checklist-deve"></div>

## **CheckList do que seu Projeto DEVE ser**

[ ] Deve possuir testes e executá-los constantemente de forma automatizada.

[ ] Autenticação e controle de acesso, recomendação é utilizar _JWT Authroziation_.

[ ] Deve ser otimizado e escalável.

[ ] Tem que ser legível, sustentável e organizado.

[ ] Deve ser documentado, desde uma documentação para dar uma ideia geral como o CModel, quanto o _README.md_, _changelog.md_, _padroes.md_, dependências, _package.json_, etc (Para os componentes teremos tópicos exclusivos para back-end e front-end).

[ ] Atualizado: Manutenção de dependências e atualização de versões, mantenha as dependências do projeto atualizadas, incluindo bibliotecas, frameworks e plugins utilizados. Isso é importante para manter a segurança e a compatibilidade

[ ] Ser versionado: utilize o conceito de versionamento semântico em conjuntos com o releases/tags e mantenha um arquivo _changelog.md_ atualizado do projeto sobre as atualizações.

[ ] Em casos que seja necessário mensageria implemente o conceito de filas e eventos

<div id="checklist-deve-frontend"></div>

## **Front-End Deve ser**

[ ] Educação do usuário: É importante educar os usuários sobre boas práticas de segurança, como a importância de escolher senhas fortes, não reutilizar senhas em vários serviços e estar atento a tentativas de phishing.

[ ] **Deve ser acessível e inclusivo para todos**.

[ ] **Deve ser responsivo**.

[ ] Deve ser documentado. Para a documentação de um componente (react) é recomendado usar a biblioteca StoryBook. O modelo CModel dá uma visão geral bem agradável ao projeto.

[ ] Seu projeto deve ser internacionalizável (Exemplo react-i18next library).
