import AppNavbar from './components/AppNavbar';
import ItemList from './components/ItemList';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <ItemList />
      </div>
    </Provider>
  );
}

export default App;
