import reset from "./reset.css";
import style from "./style.css"

import { useState } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Main } from "./components/Main";

function App() {

  const [colaborators, setColaborators] = useState([]);

  const newColaborator = (colaborator) => {
    console.log(colaborator);
    setColaborators([...colaborators, colaborator]);
  };

  return (
    <div className="App">
      <Header />
      <Form signInColaborator={colaborator => newColaborator(colaborator)} />
      <Main/>
    </div>
  );
}

export default App;