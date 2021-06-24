import React from "react";

export const Counter: React.FC = () => {
  const [value, setValue] = React.useState(0);
  return (
    <form
      style={{
        display: "flex",
        width: "250px",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <button onClick={() => setValue(value - 1)}>decrement</button>
      <p aria-label="Count value">{value}</p>
      <button onClick={() => setValue(value + 1)}>increment</button>
    </form>
  );
};
