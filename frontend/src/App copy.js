import React, { useState } from 'react';

import Header from './Header';

// Componente React, é uma função que retorna HTML
// HTML escrito dentro do JS é chamado de JSX (Java Script XML)
// Estado - permite que o componente seja remontado toda vez que é haja uma mudança em
//          variáveis JS que precisam ser renderizados em tela (useState)
// Imutabilidade - Ao se utilizar estados, não é possivel alterar seu valor diretamente atravez
// de uma atribuição. Isso é feito através do segundo parametro do useState(value, callback)
// que é uma função para manipulação do valor do estado.

function App() { // Coponentes no React, por padrão começão com letra maiuscula.
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    // <Header title="Be The Hero"/>
    // <Header>Be The Hero</Header> //Component com props.children, gerada automaticamente,
    // retorna tudo que esta dentro do componente.
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
    
  );
}

export default App;
