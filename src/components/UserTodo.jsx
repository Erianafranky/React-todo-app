import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TodoList from './TodoList';


const UserTodo = () => {
	const [usertodos, setUsertodos] = useState([]);
	const params = useParams();

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/todos?userId=${params.userid}`)
			.then((response) => response.json())
			.then((result) => {
				setUsertodos(result);
			});
	}, [params]);

	return (
		<div>
			<TodoList />
			
		</div>
	);
};

export default UserTodo;