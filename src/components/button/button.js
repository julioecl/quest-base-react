import React from "react"
import '../button/button.css'

const Button = (props) => {
    const showButtonLabel = () => {
        alert('Você clicou em '+props.label)
    }
    return <button className="btn" onClick={showButtonLabel}>{props.label}</button>
}

export default Button