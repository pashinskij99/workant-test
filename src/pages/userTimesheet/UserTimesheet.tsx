import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'
import TableTimesheet from '../../components/tableTimesheet'
import { ITimesheet } from '../../components/tableTimesheet/tableTimesheet.types'
import styles from './userTimesheet.module.scss'
import { useParams } from 'react-router-dom'

const UserTimesheet = () => {
  const { userId } = useParams()
  const [timesheet, setTimesheet] = useState<ITimesheet[]>([])

  useEffect(() => {
    axios.get('/timesheets.json').then((res) => {
      const filteredByIdRes = (res.data as ITimesheet[])
        .filter((item) => item.userId === userId)
        .sort(
          (a, b) =>
            new Date(b.startTime).getTime() - new Date(a.startTime).getTime()
        )

      setTimesheet(filteredByIdRes)
    })
  }, [userId])

  return (
    <div className={styles.wrapper}>
      <Container>
        <h1>Time sheet: {userId}</h1>
        <TableTimesheet data={timesheet} />
      </Container>
    </div>
  )
}

export default UserTimesheet
