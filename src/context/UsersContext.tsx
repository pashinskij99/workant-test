import {createContext, ReactNode, useEffect, useMemo, useState} from 'react'
import {ITableUsersData} from "../components/tableUsers/tableUsers.types.ts"
import axios from "axios"

interface IUserContext {
  users: ITableUsersData[],
  filterByLastName: (toggle: boolean) => void
  toggle: boolean
  error?: string
}

export const UserContext = createContext<IUserContext>({
  users: [],
  filterByLastName: () => {},
  toggle: true
})

interface IUsersContextProviderProps {
  children: ReactNode
}

const UsersContextProvider = ({children}: IUsersContextProviderProps) => {
  const [users, setUsers] = useState<ITableUsersData[]>([])
  const [error, setError] = useState<string>('')
  const [toggle, setToggle] = useState<boolean>(true)

  useEffect(() => {
    axios.get('/users.json')
      .then((res) => {
        setUsers(res.data)
      })
      .catch(function (error) {
        if (error.response) {
          setError('Something was wrong!')
        }
      });
  }, [])

   const filterByLastName = (currentToggle: boolean) => {
     setToggle(prevState => !prevState)
     setUsers(prevState => prevState.sort((a, b) => {
       return currentToggle ? b.lastName.localeCompare(a.lastName) : a.lastName.localeCompare(b.lastName)
     }))
   }

  const value = useMemo(() => ({
    users,
    filterByLastName,
    toggle,
    error
  }), [users, toggle, error])

  return <UserContext.Provider value={value}>
    {children}
  </UserContext.Provider>
};

export default UsersContextProvider