import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {Container} from "reactstrap"
import Todo from "./components/Todo"
import TodoForm from "./components/TodoForm"

import {Provider} from "react-redux"
import store from "./Store"


function App() {
  return (
    <Provider store={store}>
      <Container fluid>
        <Todo />
        <TodoForm />
        
      </Container>
    </Provider>
  );
}

export default App;
