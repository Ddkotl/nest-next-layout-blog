import styles from './Header.module.scss'
import { Logo } from './Logo'
import { LoginForm } from './login-form/LoginForm'

export function Header() {
	return (
		<header className={styles.header}>
			<Logo />
			<LoginForm />
		</header>
	)
}
