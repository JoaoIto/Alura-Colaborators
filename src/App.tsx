import { useState } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { ListTimes } from "./components/Main/ListTimes";
import './index.css'
import { IColaborator } from "./shared/interfaces/Icolaborator";
import React from "react";

function App() {
  const [colaborators, setColaborators] = useState<IColaborator[]>([]);

  const newColaborator = (colaborator: IColaborator) => {
    console.log(colaborator);
    setColaborators([...colaborators, colaborator]);
  };

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

  return (
    <div className="App">
      <Header srcImg="https://github.com/JoaoIto/Alura-Colaborators/blob/main/.github/public/logo.png?raw=true"
      altImg="logo da organo"/>
      <Form
        times={times.map((time) => time.name)}
        signInColaborator={(colaborator) => newColaborator(colaborator)}
      />
      <ListTimes 
        colaborators={colaborators}
        times={times}/>
    </div>
  );
}

export default App;
