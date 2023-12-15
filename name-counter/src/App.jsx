import { useState } from "react";

function App() {
  const [name, setName] = useState("Reginald");
  const [age, setAge] = useState(35);

  return (
    <>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <br />
      <br />
      <button onClick={() => setAge((currentAge) => currentAge - 1)}>-</button>
      {age}
      <button onClick={() => setAge((currentAge) => currentAge + 1)}>+</button>
      <br />
      <h3>
        My name is {name} and I am {age} years old
      </h3>
    </>
  );
}

export default App;
