import { useState } from "react";

function App() {
  const [arr, setArr] = useState(["A", "B", "C"]);

  const [letterToRemove, setLetterToRemove] = useState("");
  const [beginningLetterToAdd, setBeginningLetterToAdd] = useState("");
  const [endingLetterToAdd, setEndingLetterToAdd] = useState("");
  const [valueToAdd, setValueToAdd] = useState("");
  const [indexToAdd, setIndexToAdd] = useState();

  const removeFirst = () => {
    setArr((currentArr) => {
      return currentArr.slice(1);
    });
  };

  const removeSpecificLetter = () => {
    setArr((currentArr) => {
      return currentArr.filter((value) => {
        return value !== letterToRemove;
      });
    });
  };

  const addLetterToBeginning = () => {
    setArr((currentArr) => {
      return [beginningLetterToAdd, ...currentArr];
    });
  };

  const addLetterToEnd = () => {
    setArr((currentArr) => {
      return [...currentArr, endingLetterToAdd];
    });
  };

  const setAtoH = () => {
    setArr((currentArr) => {
      return currentArr.map((value) => {
        if (value === "A") {
          return "H";
        }
        return value;
      });
    });
  };

  const addValueToIndex = () => {
    setArr((currentArr) => {
      return [
        ...currentArr.slice(0, indexToAdd),
        valueToAdd,
        ...currentArr.slice(indexToAdd),
      ];
    });
  };

  return (
    <>
      <h1>Current Array: {arr.join(", ")}</h1>
      <button onClick={removeFirst}>Remove First Value</button>
      <br />
      <br />
      <input
        value={letterToRemove}
        onChange={(event) => setLetterToRemove(event.target.value)}
      />
      <button onClick={removeSpecificLetter}>Remove Specific Letter</button>
      <br />
      <br />
      <input
        value={beginningLetterToAdd}
        onChange={(event) => setBeginningLetterToAdd(event.target.value)}
      />
      <button onClick={addLetterToBeginning}>Add To Beginning</button>
      <br />
      <br />
      <input
        value={endingLetterToAdd}
        onChange={(event) => setEndingLetterToAdd(event.target.value)}
      />
      <button onClick={addLetterToEnd}>Add To End</button>
      <br />
      <br />
      <button onClick={() => setArr([])}>Clear Array</button>
      <br />
      <br />
      <button onClick={() => setArr(["A", "B", "C"])}>Reset Array</button>
      <br />
      <br />
      <button onClick={setAtoH}>Set All A to H</button>
      <br />
      <br />
      <input
        aria-label="Value"
        value={valueToAdd}
        onChange={(event) => setValueToAdd(event.target.value)}
      />
      <input
        aria-label="Index"
        value={indexToAdd}
        onChange={(event) => setIndexToAdd(event.target.value)}
      />
      <button onClick={addValueToIndex}>Add Value To Index</button>
    </>
  );
}

export default App;
