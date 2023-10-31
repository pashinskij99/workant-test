import {Container} from 'react-bootstrap'
import TableTimesheet from '../../components/tableTimesheet'
import styles from './userTimesheet.module.scss'
import TimesheetProvider, {TimesheetContext} from "../../context/TimesheetContext.tsx";
import {Link, useSearchParams} from "react-router-dom";
import ReactDatePicker from "react-datepicker"
import {useContext, useState} from "react";

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
  const { filterByMonthAndYear } = useContext(TimesheetContext)
  const [startDate, setStartDate] = useState<number | null>(null);

  return (
    <div className={styles.content}>
      <div className={styles.nav}>
        <Link to='/' className={styles.nav__buttonBack}>⬅</Link>
        <h1 className={styles.nav__title}>Time sheet: {URLSearchParams.get('name')}</h1>
        <div className={styles.nav__datePickerWrapper}>
          {/*@ts-ignore*/}
          <ReactDatePicker
            showIcon
            icon={
              <p>📅</p>
            }
            placeholderText='Filter by start time'
            className={styles.nav__datePicker}
            selected={startDate}
            onChange={(date: number) => {
              setStartDate(date)
              filterByMonthAndYear!(date)
            }}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            isClearable
          />
        </div>
      </div>
      <TableTimesheet />
    </div>
  );
};

export default UserTimesheet
