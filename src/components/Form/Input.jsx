export function Input(props){
    let value = '';
    const typing = (event) => {
        value = event.target.value;
        console.log(value)
    }

    return(
        <div className="container">
            <label>{props.label}</label>
            <input value={value} onChange={typing} required={props.required} type={props.type} placeholder={props.placeholder}/>
        </div>
    )
}