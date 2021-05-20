const Button = (props) => {
    return (
        <div>
            <button onClick={props.onClick} style={{backgroundColor: props.color}} className="btn">{props.text}</button>
        </div>
    )   
}

Button.defaultProps = {
    color: "steelBlue"
}

export default Button