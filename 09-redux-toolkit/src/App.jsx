import { useDispatch, useSelector } from 'react-redux'
import reactLogo from './assets/react.svg'
import './App.css'
import { decrement, increment, incrementByAmount } from './store/slices';

function App() {
  const counter = useSelector( state => state.counter.value );
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>count is { counter }</h2>
      <div className="card">
        <button onClick={() => dispatch(increment()) }>
          Increment
        </button>
        <button onClick={() => dispatch(decrement()) }>
          Decrement
        </button>
        <button onClick={() => dispatch(incrementByAmount(2)) }>
          Increment by 2
        </button>
      </div>
    </div>
  )
}

export default App
