import { Table } from 'react-bootstrap'
import styles from './tableUsers.module.scss'
import { useContext } from 'react'
import { UserContext } from '../../context/UsersContext.tsx'
import Tooltip from '../tooltip'
import { Link } from 'react-router-dom'
import { IRows } from '../../types'
import { copyTextToClipboard } from '../../utils/copyTextToClipboard.ts'
import { UserFieldsTypes } from './tableUsers.types.ts'

const TableUsers = () => {
  return (
    <Table className={styles.table} responsive bordered>
      <TableContent />
    </Table>
  )
}

const TableContent = () => {
  const { users, error, filterByLastName, toggle } = useContext(UserContext)

  const handleSelect = (toggle: boolean) => {
    filterByLastName(toggle)
  }

  const rows: IRows = {
    head: [
      { id: 0, name: 'First name', field: 'firstName' },
      {
        id: 1,
        field: 'lastName',
        render: () => (
          <p>
            Last name
            <span onClick={() => handleSelect(toggle)}>⮃</span>
          </p>
        ),
      },
      { id: 9, name: 'Avatar', field: 'avatar' },
      { id: 2, name: 'Email', field: 'email' },
      { id: 3, name: 'Position', field: 'position' },
      { id: 4, name: 'Phone', field: 'phone' },
      { id: 5, name: 'Address', field: 'address' },
      { id: 6, name: 'Postal code', field: 'postalCode' },
      { id: 7, name: 'City', field: 'city' },
      { id: 8, name: 'Manager', field: 'manager' },
      { id: 10, name: 'Department', field: 'department' },
    ],
  }

  const handleCopyClick = (copyText: string) => copyTextToClipboard(copyText)

  if (error) return <h3 className={styles.table__error}>{error}</h3>

  return (
    <>
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
        {users?.map((item) => (
          <tr className={styles.table__bodyTr} key={item.id}>
            {rows.head.map(({ field }) => {
              switch (field) {
                case 'lastName':
                  return (
                    <td key={field}>
                      <div>
                        <p>{item.lastName}</p>{' '}
                        <Tooltip text='Time sheet'>
                          <Link to={`/${item.id}?name=${item.firstName} ${item.lastName}`}>👁️</Link>
                        </Tooltip>
                      </div>
                    </td>
                  )
                case 'manager':
                  return (
                    <td key={field}>
                      <ul className={styles.table__bodyRowList}>
                        <li>
                          <p>
                            Name: {item.firstName} {item.lastName}
                          </p>
                        </li>
                        <li className={styles.table__bodyRowListItemOther}>
                          <Tooltip text={item.email}>
                            <p onClick={() => handleCopyClick(item.email)}>📧</p>
                          </Tooltip>
                          <Tooltip text={item.phone}>
                            <p onClick={() => handleCopyClick(item.phone)}>📱</p>
                          </Tooltip>
                          <Tooltip text={item.position}>
                            <p onClick={() => handleCopyClick(item.position)}>🌍</p>
                          </Tooltip>
                        </li>
                      </ul>
                    </td>
                  )
                case 'department':
                  return (
                    <td key={field}>
                      <p>{item.department.title}</p>
                    </td>
                  )

                case 'avatar':
                  return (
                    <td key={field}>
                      <img
                        src={item.avatar?.link}
                        alt='avatar'
                        className={styles.table__bodyRowListItemImage}
                      />
                    </td>
                  )

                default:
                  return (
                    <td key={field}>
                      <p>{item[field as UserFieldsTypes]}</p>
                    </td>
                  )
              }
            })}

            {/* {Object.entries(item).map(([key, value]) => {
              if (
                !skipFields(key, [
                  'id',
                  'group',
                  'division',
                  'country',
                  'subDepartment',
                  'roleId',
                  'managerId',
                ])
              )
                return null

              switch (key) {
                case 'lastName':
                  return (
                    <td key={key}>
                      <div>
                        <p>{item.lastName}</p>{' '}
                        <Tooltip text='Time sheet'>
                          <Link to={`/${item.id}?name=${item.firstName} ${item.lastName}`}>👁️</Link>
                        </Tooltip>
                      </div>
                    </td>
                  )
                case 'manager':
                  return (
                    <td key={key}>
                      <ul className={styles.table__bodyRowList}>
                        <li>
                          <p>
                            Name: {item.firstName} {item.lastName}
                          </p>
                        </li>
                        <li className={styles.table__bodyRowListItemOther}>
                          <Tooltip text={item.email}>
                            <p onClick={() => handleCopyClick(item.email)}>📧</p>
                          </Tooltip>
                          <Tooltip text={item.phone}>
                            <p onClick={() => handleCopyClick(item.phone)}>📱</p>
                          </Tooltip>
                          <Tooltip text={item.position}>
                            <p onClick={() => handleCopyClick(item.position)}>🌍</p>
                          </Tooltip>
                        </li>
                      </ul>
                    </td>
                  )
                case 'department':
                  return (
                    <td key={key}>
                      <p>{item.department.title}</p>
                    </td>
                  )

                default:
                  return (
                    <td key={key}>
                      <p>{value}</p>
                    </td>
                  )
              }
            })} */}
          </tr>
        ))}
      </tbody>
    </>
  )
}

export default TableUsers
