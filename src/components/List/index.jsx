import "./style.css"

export function List(props) {
  return (
    <div className="container">
      <label>{props.label}</label>
      <select onChange={event => props.onChanges(event.target.value)} required={props.required} value={props.value}>
          {props.itens.map((item) => {
            return <option key={item}>{item}</option>;
          })}
      </select>
    </div>
  );
}
