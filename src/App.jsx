import reset from "./reset.css";
import style from "./style.css"

import { useState } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Main } from "./components/Main";

function App() {

  const times = [
    {
      name: "Programação",
      primaryColor: "#D9F7E9",
      secondColor: "#57C278",
    },

    {
      name: "Front-End",
      primaryColor: "#E8F8FF",
      secondColor: "#82CFFA",
    },

    {
      name: "Data-Science",
      primaryColor: "#F0F8E2",
      secondColor: "#A6D157",
    },

    {
      name: "Devops",
      primaryColor: "#FDE7E8",
      secondColor: "#E06B69",
    },

    {
      name: "UX e design",
      primaryColor: "#FAE9F5",
      secondColor: "#DB6EBF",
    },

    {
      name: "Mobile",
      primaryColor: "#FFF5D9",
      secondColor: "#FFBA05",
    },

    {
      name: "Inovação e Gestão",
      primaryColor: "#FFEEDF",
      secondColor: "#FF8A29",
    },
  ];

  const [colaborators, setColaborators] = useState([]);

  const newColaborator = (colaborator) => {
    console.log(colaborator);
    setColaborators([...colaborators, colaborator]);
  };

  return (
    <div className="App">
      <Header />
      <Form
        times={times.map((time) => time.name)}
        signInColaborator={(colaborator) => newColaborator(colaborator)}
      />
      <Main />
    </div>
  );
}

export default App;