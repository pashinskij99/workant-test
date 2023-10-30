import { IAvatar, IDepartament, IManager } from './tableUsers.types'

export const getValue = (
  value: (IManager | IAvatar | IDepartament) | null,
  key: string
) => {
  if (!value) return <td>{value}</td>

  if (typeof value === 'string') return <td>{value}</td>
  else if (key === 'manager' && 'firstName' in value) {
    const data = Object.entries(value)

    return (
      <>
        <td>
          <ul>
            {data.map(([key, value]) => {
              const isString = typeof value === 'string'
              return (
                isString && (
                  <li key={value}>
                    {key}: {value}
                  </li>
                )
              )
            })}
          </ul>
        </td>
      </>
    )
  } else if (key === 'department' && 'managerId' in value) {
    const data = Object.entries(value)
    return (
      <>
        <td>
          <ul>
            {data.map(([key, value]) => {
              const isString = typeof value === 'string'
              return (
                isString && (
                  <li key={value}>
                    {key}: {value}
                  </li>
                )
              )
            })}
          </ul>
        </td>
      </>
    )
  } else if (key === 'avatar' && 'link' in value)
    return (
      <td>
        <img src={value.link} alt='avatar' width={70} />
      </td>
    )
  else return <td></td>
}
