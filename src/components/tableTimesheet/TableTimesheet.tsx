import { Table } from 'react-bootstrap'
import { ITimesheet } from './tableTimesheet.types'
import styles from './tableTimesheet.module.scss'

interface ITableTimesheet {
  data: ITimesheet[]
}

const TableTimesheet = ({ data }: ITableTimesheet) => {
  return (
    <Table
      responsive
      className={styles.table}
      striped
      bordered
      hover
      variant='dark'
    >
      <thead>
        <tr className={styles.table_head}>
          {Boolean(data.length) &&
            Object.keys(data[0]).map((text) => <th>{text}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((values) => (
          <tr key={values.id}>
            {Object.entries(values).map(([key, value]) => (
              <td key={key}>
                {key === 'startTime' || key === 'endTime'
                  ? new Date(value).toLocaleDateString('en-US')
                  : value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default TableTimesheet
