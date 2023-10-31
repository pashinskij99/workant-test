import TableUsers from '../../components/tableUsers'
import styles from './home.module.scss'
import { Container } from 'react-bootstrap'
import UsersContextProvider from "../../context/UsersContext.tsx";

const Home = () => {
  return (
    <UsersContextProvider>
      <div className={styles.wrapper}>
        <Container className={styles.wrapper__container}>
          <div className={styles.wrapper__content}>
            <h1 className={styles.wrapper__title}>Users</h1>
            <TableUsers />
          </div>
        </Container>
      </div>
    </UsersContextProvider>
  )
}

export default Home
