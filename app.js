var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function Counter() {
  var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      number = _React$useState2[0],
      setNumber = _React$useState2[1];

  return React.createElement(
    "div",
    { className: "counter" },
    React.createElement(
      "h1",
      null,
      number
    ),
    React.createElement(
      "button",
      {
        onClick: function onClick() {
          /* this code won't add by 3 because the snapshot of the state variable has already been taken
          hence the state is fixed.In the current render, the state variable 'number' will always be 0 no matter how many times you call it */
          setNumber(function (n) {
            return n + 1;
          });
          setNumber(function (n) {
            return n + 1;
          });
          setNumber(function (n) {
            return n + 1;
          });
        }
      },
      "+3"
    )
  );
}

export default function App() {
  return React.createElement(Counter, null);
}

var root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(React.createElement(App, null));

// a state variable uses the value given to it in the previous render.
// if code is initializing, then the value used is that declared in the useState hook statement
// you cannot change the value of a state variable's value in the same rendering process
// this is because the snapshot of the value to be used by the state variable was already taken & it cannot be changed in the same rendering process
//