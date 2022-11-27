import { styled } from "../../../stitches.config";

export function Input(props){
    return(
        <div className="container">
            <label>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder}/>
        </div>
    )
}