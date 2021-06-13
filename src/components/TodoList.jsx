import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo.jsx';
import { useParams } from 'react-router';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const params = useParams();

    useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/todos?userId=${params.userid}`)
			.then((response) => response.json())
			.then((result) => {
				setTodos(result);
			});
	}, [params]);


    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
        );
    };

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    return (
        <div>
            <h1>What is the plan for today</h1>
            {/* <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} 
            removeTodo={removeTodo} updateTodo={updateTodo} />
             */}
             <TodoForm onSubmit={addTodo} />
            {todos.map(() => (
				<Todo todos = {todos} completeTodo={completeTodo}
				removeTodo={removeTodo} updateTodo={updateTodo} />
			))}
			
            
        </div>
    )
}

export default TodoList;
