import React from "react"
import '../button/button.css'

const showButtonLabel = label => alert('This button label is '+ label)

const Button = ({label, children}) => {    
    return <button className="btn" onClick={() => showButtonLabel(label)}>{children}</button>
}

export default Button