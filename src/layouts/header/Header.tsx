import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './header.module.scss'

const Header = () => {
  return (
    <Navbar  fixed='top' className={styles.header}>
      <Container  className={styles.header__container}>
        <div className={styles.header__inner}>
          <Link className={styles.header__logo} to='/'>
            <p>Workant</p>
          </Link>
        </div>
      </Container>
    </Navbar>
  )
}

export default Header
