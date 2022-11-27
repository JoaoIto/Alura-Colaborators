import { styled } from "../../../stitches.config";
import { Input } from "./Input"
import style from "./style.css";

export function Form(){
    return (
      <Card>
        <form action="">
          <Input label="Nome" placeholder="Digite o seu nome: " />
          <Input label="Cargo" placeholder="Digite o seu cargo: " />
          <Input label="Foto" placeholder="Coloque a url da sua foto: " />
        </form>
      </Card>
    );
}

const Card = styled('fieldset', {
    height: "600px",
    width: "80vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "$aquaWhite",
    boxShadow: "8px 8px 15px rgba(0, 0, 0, 0.08)",
    border: "5px solid rgba(0, 0, 0, 0.08)",
    borderRadius: "10px",
    margin: "50px auto",
})