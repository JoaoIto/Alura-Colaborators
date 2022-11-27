import { fontSize } from "@mui/system";
import { styled } from "../../../stitches.config";
import { Input } from "./Input";
import style from "./style.css";

export function Form(props) {
  return (
    <>
    <Card>
      <form action="">
        <Input 
        type="text" 
        label="Nome" 
        placeholder="Digite o seu nome: " 
        />
        
        <Input 
        type="text" 
        label="Cargo" 
        placeholder="Digite o seu cargo: " 
        />

        <Input
          type="text"
          label="Foto"
          placeholder="Coloque a url da sua foto: "
        />

        <Input
        type="text" 
        label="Cargo"
        placeholder="Escolha aqui seu cargo:"
        option={props.option}
        />

        <Button type>Criar Card</Button>
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