import { Provider, connect } from 'react-redux'
import { LuPlus } from '../node_modules/react-icons/lu'
import { createStore } from 'redux'
import { CgMathMinus } from '../node_modules/react-icons/cg'
import { Seconds } from './components/Seconds/Seconds'
import { TodoList } from './components/TodoList/TodoList'
import { Calculator } from './components/Calculator/Calculator'




//Definir el estado inicial:

const initialState = {
  count: 0
}

//Definir reducer que actualice el estado
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      }
    case 'DECREMENT':
      if (state.count > 0) {
        return {
          count: state.count - 1
        }
      }
    // eslint-disable-next-line
    default:
      return state
  }
}

//Crear el store de redux y pasarle el reducer como arg
const store = createStore(reducer)
//functional component:
const Counter = ({ count, increment, decrement }) => {
  return (
    <>
      <h3>Contador: <span>{count}</span></h3>
      <button className='btn btn-success m-2' onClick={increment}><LuPlus /></button>
      <button className='btn btn-danger m-2' onClick={decrement}><CgMathMinus /></button>
    </>
  )
}

//Mapear el estado y acciones al componente
const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
  }
}

//conectar el componente al STORE de redux
const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)

function App() {
  return (
    <>

      <div className='d flex justify-content-between'>
        <Seconds />
        </div>
        <div className='d flex justify-content-between'>
        <Provider store={store}>
          <ConnectedCounter />
        </Provider>
        </div>
        <TodoList/>
        <Calculator/>

    </>
  );
}

export default App;
