import React from 'react';
import './App.css';
import { asyncActions, counterActions, updtProfile  } from './app/store/counterSlice';
import { useActionCreators, useAppDispatch } from './app/hooks';



function App() {
  // const dispatch = useAppDispatch()

  const actions = useActionCreators(counterActions)
  const asyncAction = useActionCreators(asyncActions)

  return (
    <div className="App">
      {/* <button onClick={() => dispatch(plusOne)}>plus one</button> */}
      <button onClick={actions.plusOne}>plus one</button>
      {/* <button onClick={() => dispatch(updtProfile)}>fetch</button> */}
      <button onClick={asyncAction.updtProfile}>fetch</button>
    </div>
  );
}

export default App;
