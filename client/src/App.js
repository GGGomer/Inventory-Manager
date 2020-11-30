import AppNavbar from "./components/AppNavbar";
import ItemList from "./components/ItemList";
import ItemModal from "./components/ItemModal";
import { Container } from "reactstrap";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <ItemModal />
          <ItemList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
