import "./styles.css"
const Button=(props)=>{

    return(
        <button className={`${props.classes} btn` }onClick={props.actionhandler} >{props.children}</button>
    )

}

export default Button;
