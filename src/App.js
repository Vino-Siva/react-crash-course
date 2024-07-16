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

  /**
   * counter is not just a normal variable. It's part of the react state. It should only be changed using its own setter function.
   * @var counter The react state variable.
   * @var setCounter The setter function to change the state
   */
  const [counter, setCounter] = useState(0);

  //// Never mutate/modify the state manually. It's most important rule of react.

  useEffect(() => {
    console.log(`You've changed the counter to ${counter}`);
  }, [counter]);
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
