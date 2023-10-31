import { Table } from 'react-bootstrap'
import styles from './tableTimesheet.module.scss'
import { IRows } from '../../types'
import { useContext } from 'react'
import { TimesheetContext } from '../../context/TimesheetContext.tsx'
import { TimesheetFieldsTypes } from './tableTimesheet.types.ts'

const TableTimesheet = () => {
  const { timesheet, error, filterByDate, toggle } = useContext(TimesheetContext)

  const handleSelect = (toggle: boolean | undefined) => {
    if (filterByDate) filterByDate(toggle!)
  }

  const rows: IRows = {
    head: [
      {
        id: 3,
        name: 'Start Time',
        field: 'startTime',
        render: () => (
          <p>
            Start Time
            <span onClick={() => handleSelect(toggle)}>⮃</span>
          </p>
        ),
      },
      {
        id: 4,
        field: 'endTime',
        render: () => (
          <p>
            End Time
            <span onClick={() => handleSelect(toggle)}>⮃</span>
          </p>
        ),
      },
      { id: 0, name: 'Assessment', field: 'assessment' },
      { id: 1, name: 'Break Minutes', field: 'breakMinutes' },
      { id: 2, name: 'Minutes', field: 'minutes' },
      { id: 6, name: 'Status', field: 'status' },
      { id: 7, name: 'Approval Person Id', field: 'approvalPersonId' },
      { id: 8, name: 'User Id', field: 'userId' },
      { id: 9, name: 'Company Id', field: 'companyId' },
    ],
  }

  if (error) return <h3 className={styles.table__error}>{error}</h3>

  return (
    <Table responsive className={styles.table} bordered>
      <thead className={styles.table__head}>
        <tr className={styles.table__headTr}>
          {rows?.head.map(({ id, name, render }) =>
            render ? (
              <th className={styles.table__headTh} key={id}>
                {render()}
              </th>
            ) : (
              <th className={styles.table__headTh} key={id}>
                <p>{name}</p>
              </th>
            ),
          )}
        </tr>
      </thead>
      <tbody className={styles.table__body}>
        {timesheet.map((values) => (
          <tr className={styles.table__bodyTr} key={values.id}>
            {rows.head.map(({ field }) => (
              <td className={styles.table__bodyTd} key={field}>
                <p>
                  {field === 'startTime' || field === 'endTime'
                    ? new Date(values[field]).toLocaleDateString('en-US')
                    : values[field as TimesheetFieldsTypes]}
                </p>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default TableTimesheet
