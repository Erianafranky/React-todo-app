import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import TodoList from './components/TodoList';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/navbar';
import StateProvider from './components/stateprovider';

import './components/Form.css'
import TodoList from './components/TodoList';
//import UserTodo from './components/UserTodo';

function App() {
  return (
    <StateProvider>
      
      <Router>
        <Navbar />
        <Switch>
          {/* render Register Component when we hit /register */}
					<Route exact path='/register'>
            <Register />
					</Route>
          {/* render Login Component when we hit /login */}
					<Route exact path='/login'>
						<Login />
					</Route>
          {/* render Register Component when we hit / */}
					<Route exact path='/'>
            <Register />
					</Route>
          {/* render Todolist Component when we hit /todo */}
          <div className="todo-app">
					<Route exact path='/todo'>
						<TodoList />
					</Route>
          </div>
        </Switch>
      </Router>
      </StateProvider>
     
    
  );
}

export default App;
