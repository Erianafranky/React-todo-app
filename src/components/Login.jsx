import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { AppContext } from './stateprovider';

export default function Login() {
	const { setState } = useContext(AppContext);
	const { register, handleSubmit } = useForm();
	const history = useHistory();

	const login = ({ email, password }) => {
		// get the users data
		const user = localStorage.getItem(email);

		if (!user) {
			return alert('An account for this email was not found');
		} 

		const userdata = JSON.parse(user);
		console.log(userdata);

		if (password !== userdata.password) {
			return alert('email or password was incorrect');
		}

		alert('login successfull');
		setState(prevstate => {
			return {
				...prevstate,
				isLoggedIn: true,
				userId: userdata.userId,
				userEmail: userdata.email,
			};
		});
		history.push('/todo');
	};

	return (
		<>
			<div className='form-container'>
        	<span className='close-btn'>×</span>
        	<div className='form-content-left'>
          		<img className='form-img' src='img/img-2.svg' alt='spaceship' />
        	</div>
			<div className='form-content-right'>
			<form onSubmit={handleSubmit(login)} className='form'>
			<h1 className='form-success'>
				Get started with us today! Login to your account by filling out the
				information below.
      		</h1>
				<div className='form-inputs'>
					<input
						className='form-input'
						type='text'
						placeholder='email'
						required
						{...register('email')}
					/>
				</div>
				<div className='form-inputs'>
					<input
						className = 'form-input'
						type='password'
						placeholder='password'
						required
						{...register('password')}
					/>
				</div>
				<button className='form-input-btn' type='submit'>
        			Login
      			</button>
			</form>
			</div>
			</div>
		</>
	);
}