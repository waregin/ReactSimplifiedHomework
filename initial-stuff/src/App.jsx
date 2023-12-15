import { useState } from "react";
import { TodoListItem } from "./TodoListItem";

function App() {
  const [count, setCount] = useState(0);

  return <div>
    <TodoListItem isComplete>
      <p>Butts</p>
    </TodoListItem>
  </div>;
}

export default App;
