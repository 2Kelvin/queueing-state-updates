function Counter() {
  const [number, setNumber] = React.useState(0);
  return (
    <div className="counter">
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 10);
          setNumber((n) => n + 1);
          setNumber(12);
        }}
      >
        Increase The Number
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
