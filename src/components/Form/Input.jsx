import { styled } from "../../../stitches.config";

export function Input(props){
    return(
        <div className="container">
            <label>{props.label}</label>
            <input type="text" placeholder={props.placeholder}/>
        </div>
    )
}