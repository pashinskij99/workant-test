import {Container} from 'react-bootstrap'
import TableTimesheet from '../../components/tableTimesheet'
import styles from './userTimesheet.module.scss'
import TimesheetProvider from "../../context/TimesheetContext.tsx";
import {useSearchParams} from "react-router-dom";

const UserTimesheet = () => {
  return (
    <TimesheetProvider>
      <div className={styles.wrapper}>
        <Container>
          <Content />
        </Container>
      </div>
    </TimesheetProvider>
  )
}

const Content = () => {
  const [URLSearchParams] = useSearchParams()

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Time sheet: {URLSearchParams.get('name')}</h1>
      <TableTimesheet />
    </div>
  );
};

export default UserTimesheet
