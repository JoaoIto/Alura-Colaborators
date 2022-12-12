import reset from "./reset.css";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { useState } from "react";

function App() {

  const [colaborators, setColaborators] = useState([]);

  const newColaborator = (colaborator) => {
    console.log(colaborator);
    setColaborators([...colaborators, colaborator]);
  };

  return (
    <div className="App">
      <Header />
      <Form signInColaborator={(colaborator) => newColaborator(colaborator)} />
    </div>
  );
}

export default App;
