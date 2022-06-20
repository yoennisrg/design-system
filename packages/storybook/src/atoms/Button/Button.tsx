import React, { MouseEventHandler } from "react";

interface ButtonProps {
  label: string;
  children: any;
  onClick?: MouseEventHandler<any>;
}
const Button: React.FunctionComponent<ButtonProps> = ({
  label,
  children,
  ...props
}) => (
  <button className="ds-button-container" {...props}>
    {label}:{children}
  </button>
);

export default Button;
