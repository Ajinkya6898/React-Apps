import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }
  function handleSub() {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleSub}>-</button>
      <button onClick={handleAdd}>+</button>
    </>
  );
}

export default Counter;
