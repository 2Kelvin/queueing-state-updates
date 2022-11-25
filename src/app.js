function Counter() {
  const [number, setNumber] = React.useState(0);
  return (
    <div className="counter">
      <h1>{number}</h1>
      <button
        onClick={() => {
          /* this code won't add by 3 because the snapshot of the state variable has already been taken
          hence the state is fixed.In the current render, the state variable 'number' will always be 0 no matter how many times you call it */
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
        }}
      >
        +3
      </button>
    </div>
  );
}

export default function App() {
  return <Counter />;
}

const root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(<App />);

// a state variable uses the value given to it in the previous render.
// if code is initializing, then the value used is that declared in the useState hook statement
// you cannot change the value of a state variable's value in the same rendering process
// this is because the snapshot of the value to be used by the state variable was already taken & it cannot be changed in the same rendering process
//
