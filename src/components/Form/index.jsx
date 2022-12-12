import { styled } from "../../../stitches.config";
import { Input } from "./Input";
import { List } from "../List";
import style from "./style.css";

export function Form(props) {

  const times = [
    "Programação",
    "Front-End",
    "Data-Science",
    "Devops",
    "UX e design",
    "Mobile",





    "Inovação e Gestão"
  ]

  const onSave = (event) => {
    event.preventDefault();
    console.log("click")
  }

  return (
    <>
    <Card>
      <form onSubmit={onSave}>
        <Input 
        type="text" 
        label="Nome" 
        placeholder="Digite o seu nome: " 
        required
        />
        
        <Input 
        type="text" 
        label="Cargo" 
        placeholder="Digite o seu cargo: " 
        required
        />

        <Input
          type="text"
          label="Foto"
          placeholder="Coloque a url da sua foto: "
        />

        <List
        label="Times"
        itens={times}
        required
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
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
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