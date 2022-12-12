import "./style.css"

export function List(props) {
  return (
    <div className="container">
      <label>{props.label}</label>
      <select>
          {props.itens.map((item) => {
            return <option key={item}>{item}</option>;
          })}
      </select>
    </div>
  );
}
