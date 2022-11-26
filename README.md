# queueing-state-updates

In this read, I learnt that:

- a state variable is always `fixed` coming into any render. Therefore, you cannot change its value inside the same render
- re-rendering happens after all the code in an event handler has completely run. This is called `batching`. It makes your code more efficient and faster since it avoids too many rerenders from being triggered
- each component with an event has its own `independent batching process`. However, if any components rely on the logic of another, `react will only use batch when it's safe to`
- to update a state variable multiple times before the next render, you can pass a function that calculates the next state based on the previous state in the queue. The function passed is called an `updater function`, it is passed to useState's setter function
- react puts the updater function as the last code to be processed in the event handler before rerendering occurs. In the next render, react goes through the updater functions queue in the previous render and uses the last updated value as for the useState variable in the current render
- updating/replacing the state variable's value followed by an updater function calculations on the state works too. That is it will update the value of state in order. since you replaced the value of the state in the first statement, the following updater function statement will use that value you have updated as the value of state in its calculations
- `replacing state` after updating it will only use the value replaced as the final state value. Replacing the state value as the last statement in the event handler, ignores all updater functions and their results
- updater functions MUST be `pure` and should only return the result
- an updater function argument is `named using the first letters of the corresponding state variable` e.g. if state variable is 'lastName' the argument will be named 'ln'
