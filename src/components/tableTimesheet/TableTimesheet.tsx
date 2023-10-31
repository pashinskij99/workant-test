import { Table } from 'react-bootstrap'
import styles from './tableTimesheet.module.scss'
import { IRows } from "../../types";
import { skipFields } from "../../utils/skipFields.ts";
import { useContext } from "react";
import { TimesheetContext } from "../../context/TimesheetContext.tsx";

const TableTimesheet = () => {
  const { timesheet, error, filterByDate, toggle } = useContext(TimesheetContext)

  const handleSelect = (toggle: boolean | undefined) => {
    if (filterByDate) filterByDate(toggle!)
  }

  const rows: IRows = {
    head: [
      {id: 0, name: 'Assessment'},
      {id: 1, name: 'Break Minutes'},
      {id: 2, name: 'Minutes'},
      {id: 3, name: 'Start Time', render: () => <p>
          End Time
          <span onClick={() => handleSelect(toggle)}>⮃</span>
        </p>},
      {id: 4, render: () => <p>
          End Time
          <span onClick={() => handleSelect(toggle)}>⮃</span>
        </p>},
      {id: 6, name: 'Status'},
      {id: 7, name: 'Approval Person Id'},
      {id: 8, name: 'User Id'},
      {id: 9, name: 'Company Id'},
    ],
  }

  if(error) return <h3 className={styles.table__error}>{error}</h3>

  return (
    <Table
      responsive
      className={styles.table}
      bordered
    >
      <thead className={styles.table__head}>
        <tr className={styles.table__headTr}>
          {rows?.head.map(({id, name, render}) => render
            ? <th className={styles.table__headTh} key={id}>{render()}</th>
            : <th className={styles.table__headTh} key={id}><p>{name}</p></th>)
          }
        </tr>
      </thead>
      <tbody className={styles.table__body}>
        {timesheet.map((values) => (
          <tr className={styles.table__bodyTr} key={values.id}>
            {Object.entries(values).map(([key, value]) => {
              if(!skipFields(key, [
                'id',
                'note',
                'locationChecked'
              ])) return null
              return (
                <td className={styles.table__bodyTd} key={key}>
                  <p>
                    {key === 'startTime' || key === 'endTime'
                      ? new Date(value).toLocaleDateString('en-US')
                      : value}
                  </p>
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default TableTimesheet
