import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './header.module.scss'

const Header = () => {
  return (
    <Navbar variant='dark' sticky='top' className={styles.header}>
      <Container>
        <Link to='/'>
          <Navbar.Brand>
            <img
              alt=''
              src='/img/logo.svg'
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{' '}
            Workant Test
          </Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  )
}

export default Header
