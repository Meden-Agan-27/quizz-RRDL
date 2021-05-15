import React, { useState } from "react";

function Button(props) {
  const [variant] = useState(props.variant);

  return (
    <button className={`button ${variant}`}>{props.children}</button>
  );
}
export default Button;