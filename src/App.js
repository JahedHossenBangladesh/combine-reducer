
import './App.css';
import {createStore} from'redux';
import {Provider} from 'react-redux';
import rootReducer from './rootReducer'
import Test from './Test';
function App() {

  const store = createStore(rootReducer)
  return (
    <div className="App">
   <Provider store={store}>
     <Test/>
   </Provider>
    </div>
  );
}

export default App;
