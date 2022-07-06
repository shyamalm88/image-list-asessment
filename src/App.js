import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Container from "./components/container";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container />
      </div>
    </Provider>
  );
}

export default App;
