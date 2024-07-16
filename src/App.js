import { useState, useEffect } from "react";
import "./App.css";

// const Person = (props) => {
//   return (
//     <>
//       <h3>First Name: {props.firstName}</h3>
//       <h3>Last Name: {props.lastName}</h3>
//       <h3>Age: {props.age}</h3>
//     </>
//   );
// };

const App = () => {
  const name = "Modern World";
  const [counter, setCounter] = useState(0);
  return (
    <div className='App'>
      <>
        <h1>Hello, {name}!</h1>
        <h2>Welcome to the world of React!</h2>
        <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
          +
        </button>
        <h3>{counter}</h3>
        <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
          -
        </button>
      </>
      {/* <Person firstName='John' lastName='Davy' age={24} />
      <Person firstName='Jane' lastName='Davy' age={25} />
      <Person firstName='Jenny' lastName='Davy' age={12} />
      <Person firstName='Davy' lastName='Jones' age={57} />
      <Person firstName='Mandy' lastName='Jones' age={43} /> */}
    </div>
  );
};

export default App;
