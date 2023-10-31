import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/home'
import UserTimesheet from '../../pages/userTimesheet'
import Header from '../../layouts/header'
import styles from './app.module.scss'

export default function App() {
  return (
    <main className={styles.wrapper}>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:userId' element={<UserTimesheet />} />
      </Routes>
    </main>
  )
}
