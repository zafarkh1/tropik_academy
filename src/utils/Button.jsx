import React from "react";

function Button({ title, padding }) {
  const myStyle = {
    backgroundColor: "rgb(100, 177, 174)",
    padding: padding,
    borderRadius: "3rem",
    color: "#fff",
    textTransform: "uppercase",
    wordSpacing: "1px",
  };

  return (
    <button style={myStyle} type="submit">
      {title}
    </button>
  );
}

export default Button;
