import { styled } from "../../../stitches.config";
import { Input } from "./Input";
import { List } from "./List";
import style from "./style.css";
import { useState } from "react";

export function Form(props) {

  const [name, setName] = useState('');
  const [office, setOffice] = useState('');
  const [image, setImage] = useState('');
  const [group, setGroup] = useState('');

  const onSave = (event) => {
    event.preventDefault();
    props.signInColaborator({
      name,
      office,
      image,
      group,
    });

    setName('');
    setOffice('');
    setImage('');
    setGroup('');
  }

  return (
    <>
      <Card>
        <form onSubmit={onSave}>
          <Input
            type="text"
            label="Nome"
            placeholder="Digite o seu nome: "
            value={name}
            onChanges={value => setName(value)}
            required
          />

          <Input
            type="text"
            label="Cargo"
            placeholder="Digite o seu cargo: "
            value={office}
            onChanges={value => setOffice(value)}
            required
          />

          <Input
            type="text"
            label="Foto"
            placeholder="Coloque a url da sua foto: "
            value={image}
            onChanges={value => setImage(value)}
          />

          <List 
          label="Times" 
          itens={props.times} 
          required 
          value={group}
          onChanges={value => setGroup(value)}
          />
          
          <Button>Criar Card</Button>
        </form>
      </Card>
    </>
  );
}

const Card = styled("fieldset", {
  height: "800px",
  width: "80vw",
  maxWidth: "1200px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
  backgroundColor: "$aquaWhite",
  boxShadow: "8px 8px 15px rgba(0, 0, 0, 0.2)",
  border: "5px solid rgba(0, 0, 0, 0.08)",
  borderRadius: "10px",
  margin: "30px auto",
});

const Button = styled("button", {
    height: "60px",
    width: "65%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "$blue400",
    color: "#fff",
    margin: "20px auto",
    fontSize: "1.6rem",
    fontWeight: "bold",
    fontFamily: "$Inter",
    textAlign: "center"
})