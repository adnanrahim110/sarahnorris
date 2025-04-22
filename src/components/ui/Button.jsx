import React from "react";

const Button = ({
  className,
  href,
  onClick,
  children,
  type,
  btn2,
  icon,
  iconClass,
}) => {
  let activeClass = "btn_1";
  if (btn2) {
    activeClass = "btn_2";
  }

  const combinedClassName = className
    ? `btn ${className} ${activeClass}`
    : `btn ${activeClass}`;

  const BtnIcon = icon;
  const renderButton = () => (
    <button onClick={onClick} type={type} className={combinedClassName}>
      {icon && <BtnIcon className={`text-xl ${iconClass}`} />}
      {children}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={combinedClassName}>
      {icon && <BtnIcon className={`text-xl ${iconClass}`} />}
      {children}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
