import AppNavbar from './components/AppNavbar';
import ItemList from './components/ItemList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <ItemList />
    </div>
  );
}

export default App;
