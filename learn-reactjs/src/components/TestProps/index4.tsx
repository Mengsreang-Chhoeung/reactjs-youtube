import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (props) => {
    const {title = "Click me", ...rest} = props;

    return <button title={title} {...rest}>Click Me</button>
}

export default Button;
