import { Navbar, Container } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import styles from './header.module.scss'

const Header = () => {
  const location = useLocation()

  return (
    <Navbar  fixed='top' className={styles.header}>
      <Container  className={styles.header__container}>
        <div className={styles.header__inner}>
          {location.pathname === '/'
            ? null
            : <Link to='/' className={styles.header__buttonBack}>⬅</Link>
          }
          <Link className={styles.header__logo} to='/'>
            <p>Workant</p>
          </Link>
        </div>
      </Container>
    </Navbar>
  )
}

export default Header
