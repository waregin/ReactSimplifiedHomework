import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((currentCount) => currentCount + 1);
  };

  return <h1 onClick={handleClick}>Current count is {count}</h1>;
}
