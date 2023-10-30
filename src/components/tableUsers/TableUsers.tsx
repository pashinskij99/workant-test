import Table from 'react-bootstrap/Table'
import { ITableUsersData } from './tableUsers.types'
import { Spinner, Tooltip, OverlayTrigger } from 'react-bootstrap'
import { getValue } from './helpers'
import styles from './tableUsers.module.scss'
import { Link } from 'react-router-dom'
import { OverlayInjectedProps } from 'react-bootstrap/Overlay'

interface ITableUsers {
  data?: ITableUsersData[]
}

const TableUsers = ({ data }: ITableUsers) => {
  if (!data) return <Spinner />
  return (
    <Table
      className={styles.table}
      responsive
      striped
      bordered
      hover
      variant='dark'
    >
      <TableContent data={data} />
    </Table>
  )
}

const renderTooltip = (props: OverlayInjectedProps) => (
  <Tooltip id='button-tooltip' {...props}>
    Simple tooltip
  </Tooltip>
)

const TableContent = ({ data }: ITableUsers) => {
  return (
    <>
      <thead>
        <tr className={styles.table__head}>
          <th className={styles.table_link_wrapper}>#</th>
          {data &&
            Object.keys(data[0]).map((items, index) => (
              <th key={index}>{items.toUpperCase()}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => (
          <tr key={item.id}>
            <td className={styles.table_link_wrapper}>
              <OverlayTrigger
                placement='right'
                delay={{ show: 100, hide: 100 }}
                overlay={renderTooltip}
              >
                <Link className={styles.table_link} to={`${item.id}`}>
                  📅
                </Link>
              </OverlayTrigger>
            </td>
            {Object.entries(item).map(([key, value]) => getValue(value, key))}
          </tr>
        ))}
      </tbody>
    </>
  )
}

export default TableUsers
