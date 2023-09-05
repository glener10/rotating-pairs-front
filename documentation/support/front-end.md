# **FRONT-END**

🏁 Tabela de Conteúdo

===================

<!--ts-->

- 👉 [Acessibilidade e Inclusão](#acessibilidade)

- 👉 [Otimização e Performace](#otimizacao)

- 👉 [Componentes de erros](#componentesDeErro)

- 👉 [Anti-Patterns/Code Smells](#maPraticas)

- 👉 [Good-Patterns](#boasPraticas)

- 👉 [Formulários](#formularios)

<!--te-->

===================

<div id="acessibilidade"></div>

## **Acessibilidade e Inclusão**

- Trechos de texto em outro idioma diferente do site produzido devem ter o atributo "lang" especificado na tag e/ou componente.
- Cuide dos níveis de título (h1, h2, etc), eles são importantes!
- Cuide de '_Display: none_' e '_visibility: hidden_' no CSS porque o NVDA (Reader) o ignora. USE {esquerda: -9999px; posição: absoluta; opacidade:0; (opacidade opcional)} para colocar o elemento fora do documento e resolver.
- Cuidar de listas com estilo de lista em CSS porque o NVDA lê 'bola', 'quadrado preto' e números. Sempre mantenha o estilo de lista: nenhum;
- **Criar link no topo da página para pular PARA o conteúdo principal** (conteúdo que explica do que se trata o site, h1, etc), pulando itens desnecessários como painel de navegação, ícones, etc.
- Nas cores use _CONTRASTE COM GAMAS DE ACESSIBILIDADE_: site que faz essa verificação <https://s3.amazonaws.com/caelum-online-public/805-acessibilidade-web-front-end/cdc-laranja-nao-acessivel.PNG>
- Não use **disabel**, e sim **readonly** porque o leitor de tela não encontra desabilitado
- Deixe o zoom ativado no celular, celular e desktop
- Ideia de **​​colocar um leitor de libras** (bonequinho à direita)
- Texto alinhado à esquerda para dislexia
- Use validadores automáticos (Nota: Não garantem 100% de acessibilidade mas ajudam)
- Cuidado com os formulários!
- NÃO USE Carrossel de preferência <https://shouldiuseacarousel.com/>
- Imagens que são apenas para visualização, ou seja, não para explicar ou contextualizar algo, coloque ALT EMPTY. Dessa forma, ele será ignorado pelo leitor de tela.
- Não repita informações por exemplo em um link que tenha uma descrição e também uma imagem, leia apenas uma vez e para relacionar pode usar 'aria-labelledby'
- Sempre coloque legendas e ative os controles nos vídeos

<div id="otimizacao"></div>

## **Otimização e Performace**

Use a **ferramenta do desenvolvedor** (extensão do navegador) para ver quais componentes renderizam mais de uma vez (aparecem com uma caixa verde na tela)

Use carregamento lento/divisão de código (**lazy loading**). Carregue apenas o que for necessário para o usuário, conforme necessário, carregue o restante.

**Sempre importe de forma específica e não um pacote todo de uma biblioteca!**

Utilize o conceito **GetSideServerProps** quando for necessário realizar busca de dados por REST ou no servidor antes de renderizar a página, melhorando a otimização. A principal vantagem do "getServerSideProps" é que ele permite que a página seja renderizada com os dados atualizados a cada requisição. Isso é útil em casos em que os dados mudam com frequência ou quando você precisa de dados personalizados para cada requisição. No entanto, essa abordagem também pode resultar em um tempo de carregamento mais lento, pois os dados são buscados no servidor a cada requisição. Uma alternativa ao "getServerSideProps" é o método "getStaticProps", que busca os dados no momento da build da aplicação e gera uma versão estática da página. Isso pode melhorar significativamente o desempenho da aplicação, pois não é necessário buscar os dados a cada requisição. No entanto, os dados podem ficar desatualizados até a próxima build da aplicação.

<div id="componentesDeErro"></div>

## **Componentes de Erro**

- Tratamento adequado de erros
- Registre erros com console.log para saber onde eles estão no prod
- Capturar erro dividindo durante a fase de renderização ou outro ciclo de vida. Existem APIs para lidar com erros como _react-error-boundary_.

❌ Usar tom inadequado

❌ Use jargões técnicos

❌ Passe a culpa

❌ Seja genérico

✅ Diga o que aconteceu e por quê

✅ Fornecer segurança

✅ Seja empático

✅ Ajude-os a consertar

✅ Dê a eles uma saída, como um link de contato para suporte ou um botão "tente novamente"

<div id="maPraticas"></div>

## **Anti-Patterns/Code Smells**

- Não passe estilos como propriedades, um componente deve ser totalmente independente e se for mutável através de contexto (_styled components_)

- Propriedades booleanas e não fechar a _tag_ quando o componente não tem filhos

```js
<Component hasPadding={true}></Component> ❌
<Component hasPadding/> ✅
```

- Se estiver usando bootstrap, UIMaterial ou outra biblioteca, use sempre as tags fornecidas por ela (evite misturar com HTML nativo)

<div id="boasPraticas"></div>

## **Good-Patterns**

Evitar fazer tratamentos de responsividade no css pq é mais difícil de testar (impossível atualmente)

Desenvolva seu projeto utilizando em conjuntos _Mobile First_(criar primeiro a versão mobile, depois o tablet e por último o desktop) e _TDD_(desenvolvimento orientado a testes, primeiro crie o teste e depois implemente).

Use um padrão para a arquitetura e nomenclatura do CSS (BEM é recomendado)

Use transições em CSSs que mudam (cor, borda, animação, etc) ao usar ativo, foco ou outra funcionalidade

Seja criativo na página 204 notfound

Tenha um bom plano de SEO (Search Engine Optimization). Criar o arquivo de documentação do briefing (objetivos de cada parte do aplicativo)

Sempre use "strictMode" como **verdadeiro**. É uma garantia de segurança para a aplicação em produção. Você pode até comentar para desenvolver e executar testes de otimização porque faz com que todos os componentes sejam renderizados duas vezes, o que pode confundir esses testes.

<div id="formularios"></div>

## **Formulários**

- Não adiciona o campo de confirmação de senha (repita a senha duas vezes)
- Adicionar funcionalidade para mostrar a senha (ícone de olho dentro da entrada)
- Ative o navegador para sugerir uma senha forte
- Use **autocomplete="new-password"** e **id="new-password"** para inserir a senha no formulário de inscrição ou a nova senha no formulário de alteração de senha e use **autocomplete="current-password"** e **id="current-password"** para inserir a senha em um formulário de login ou inserir a senha antiga do usuário em um formulário de alteração de senha, isso informa ao navegador que você deseja usar a senha atual armazenada no site.

```html
<input type="password" autocomplete="new-password" id="new-password" />
```

- Evite usar javascript para relatar erros nos campos do formulário

```css
.input[type='email']:not(:placeholder-show):invalid {
  color: red;
}

.input[type='email']:invalid {
  color: red;
}
```
