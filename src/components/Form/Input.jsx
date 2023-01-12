export function Input(props){

    const typing = (event) => {
        props.onChanges(event.target.value)
    }

    return(
        <div className="container">
            <label>{props.label}</label>
            <input 
            value={props.value} 
            onChange={typing} 
            required={props.required} 
            type={props.type} 
            placeholder={props.placeholder}
            />
        </div>
    )
}