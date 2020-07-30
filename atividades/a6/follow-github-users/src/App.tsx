import React, { useState } from "react";

import { ResultBox } from "./containers";
import { Card, Input, Title, Wrapper } from "./components";

function App() {
  const [query, setQuery] = useState("");

  const onChangeQuery = ({ target: { value: newQuery } }) => setQuery(newQuery);

  return (
    <Wrapper>
      <Title>Busca de usuários</Title>

      <Card>
        <Input
          type="text"
          onChange={onChangeQuery}
          value={query}
          placeholder="Digite o username que deseja seguir..."
        />
        {query && <ResultBox query={query} />}
      </Card>
    </Wrapper>
  );
}

export default App;
