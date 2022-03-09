import React from "react";

const index = (props) => {
  return (
    <header className="min-vh-100 position-relative">{props.children}</header>
  );
};

export default index;
