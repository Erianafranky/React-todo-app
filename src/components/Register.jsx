import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AppContext } from './stateprovider';
// import styles
import './Form.css';

const Register = () => {
	const { register, handleSubmit } = useForm();
	const { setState } = useContext(AppContext);
	const history = useHistory();

	function registerUser({ email, password, confirmPassword }) {
		// let errors = {}
		if (!email) {
			return alert(`please provide an email`);
		}
		if (password !== confirmPassword) {
			return alert(`passwords don't match`);
		}
		let userFound = localStorage.getItem(email);
		console.log(userFound);
		if (userFound) {
			return alert('this user has already been registered');
		}

		// create new user object and save it to local storage
		const newUser = {
			email: email,
			password: password,
			userId: Date.now(),
		};
		// save the users data for accessing later
		localStorage.setItem(email, JSON.stringify(newUser));

		alert('user registered');
		setState(prevValue => {
			return {
				...prevValue,
				isLoggedIn: true,
				userId: newUser.userId,
				userEmail: newUser.email,
			};
		});
		history.push('/login');	
	}
	

	return (
		<>
		<div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>
			<div className='form-content-right'>
				<form onSubmit={handleSubmit(registerUser)} className='form'>
				<h1>
					Get started with us today! Create your account by filling out the
					information below.
        		</h1>
					<div className='form-inputs'>
						<label className='form-label' htmlFor='email'>Email</label>
						<input
							className='form-input'
							type='text'
							name='email'
							id='email'
							placeholder='Enter your email'
							{...register('email', { required: true })}
						/>
			
					</div>
					<div className='form-inputs'>
						<label className='form-label' htmlFor='password'>Password</label>
						<input
							className='form-input'
							type='password'
							name='password'
							id='password'
							placeholder='password'
							{...register('password', { required: true })}
						/>
					</div>
					<div className='form-inputs'>
						<label className='form-label' htmlFor='passwordRepeat'>Repeat Password</label>
						<input
							className='form-input'
							type='password'
							name='passwordRepeat'
							id='passwordRepeat'
							placeholder='password'
							{...register('confirmPassword', { required: true })}
						/>
					</div>
					<button className='form-input-btn' type='submit'>
						Register
					</button>
					<span className='form-input-logins'>
         				 Already have an account? Login <a href='/login'>here</a>
        			</span>		
				</form>
			</div>
			</div>
		</>
	);
};

export default Register;