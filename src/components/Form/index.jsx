import { styled } from "../../../stitches.config";

export function Form(){
    return (
      <Card>
        <form action="">
            
        </form>
      </Card>
    );
}

const Card = styled('fieldset', {
    height: "600px",
    width: "60vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "$aquaWhite",
    boxShadow: "7px 7px 15px rgba(0, 0, 0, 0.08)",
    margin: "0 auto",
})