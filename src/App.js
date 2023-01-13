import { useState } from "react";
function App() {
  let [ones, setOnes] = useState(0);
  let [tens, setTens] = useState(0);
  let [hundreds, setHundreds] = useState(0);
  let increaseOnes = () => {
    if (ones < 9) {
      setOnes(ones + 1);
    }
    if (ones === 9) {
      setOnes(0);
      setTens(tens + 1);
      if (tens === 9) {
        setTens(0);
        setOnes(0);
        setHundreds(hundreds + 1);
        if (hundreds === 9) {
          setTens(0);
          setOnes(0);
          setHundreds(0);
        }
      }
    }
  };
  let decreaseOnes = () => {
    if (ones > 0) {
      setOnes(ones - 1);
    }
    if (ones === 0 && tens !== 0) {
      setTens(tens - 1);
      setOnes(9);
    }
    if (ones === 0 && tens === 0 && hundreds !== 0) {
      setHundreds(hundreds - 1);
      setTens(9);
      setOnes(9);
    }
  };
  return (
    <>
      <div className="container">
        <button className="btn_dec" onClick={decreaseOnes}>
          -
        </button>
        <p className="hundreds">{hundreds}</p>
        <p className="tens">{tens}</p>
        <p className="ones">{ones}</p>
        <button className="btn_inc" onClick={increaseOnes}>
          +
        </button>
      </div>
    </>
  );
}

export default App;

// if (ones > 0) {
//   setOnes(ones - 1);
// }
// if (ones === 0 && tens !== 0) {
//   setTens(tens - 1);
//   setOnes(9);
// }
// if (ones === 0 && tens === 0 && hundreds !== 0) {
//   setHundreds(hundreds - 1);
//   setTens(9);
//   setOnes(9);
// }
