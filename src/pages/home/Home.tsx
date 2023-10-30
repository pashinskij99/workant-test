import TableUsers from '../../components/tableUsers'
import axios from 'axios'
import { useState, useEffect } from 'react'
import styles from './home.module.scss'
import { Container } from 'react-bootstrap'

const Home = () => {
  const [users, setUsers] = useState()

  useEffect(() => {
    axios.get('/users.json').then((res) => {
      setUsers(res.data)
    })
  }, [])

  return (
    <div className={styles.wrapper}>
      <Container>
        <h1>Users</h1>
        <TableUsers data={users} />
      </Container>
    </div>
  )
}

export default Home
