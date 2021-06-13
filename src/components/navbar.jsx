import { useContext } from 'react';
import { AppContext } from './stateprovider';
import { Link, useHistory } from 'react-router-dom';

// import styles
import styles from './navbar.module.css';

const Navbar = () => {
	const { state, setState } = useContext(AppContext);
	const history = useHistory();

	const logout = () => {
		setState(prev => {
			return {
				...prev,
				isLoggedIn: false,
				userEmail: null,
				userId: null,
			};
		});
		history.push('/register');
	};

	return (
		<nav className={styles.navbar}>
			<Link className={styles.navlink} to='/register'>
				Register
			</Link>

			<Link className={styles.navlink} to='/login'>
				Login
			</Link>

			{!state.isLoggedIn ? (
				<>
					<Link className={styles.navlink} to='/register'>
						Register
					</Link>
					<Link className={styles.navlink} to='/login'>
						Login
					</Link>
				</>
			) : (
				<>
					<Link className={styles.navlink} to='/todo'>
						Todo
					</Link>
					<span onClick={logout} className={styles.navlink}>
						Logout
					</span>
				</>
			)}
		</nav>
	);
};

export default Navbar;
