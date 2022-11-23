function Counter() {
  const [number, setNumber] = React.useState(0);
  return (
    <div className="counter">
      <h1>{number}</h1>
      <button
        onClick={() => {
          /* this code won't add by 3 because the snapshot of the state variable has already been taken
          hence the state is fixed.In the current render, the state variable 'number' will always be 0 no matter how many times you call it */
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
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
