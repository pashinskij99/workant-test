import {createContext, ReactNode, useEffect, useMemo, useState} from "react";
import {ITimesheet} from "../components/tableTimesheet/tableTimesheet.types.ts";
import {useParams} from "react-router-dom";
import axios from "axios";

interface ITimesheetContext {
  timesheet: ITimesheet[]
  userId?: string
  error?: string
  filterByDate?: (currentToggle: boolean) => void
  toggle?: boolean
}

export const TimesheetContext = createContext<ITimesheetContext>({
  timesheet: [],
})

interface ITimesheetProvider {
  children: ReactNode
}

const TimesheetProvider = ({children}: ITimesheetProvider) => {
  const { userId } = useParams()
  const [error, setError] = useState<string>('')
  const [timesheet, setTimesheet] = useState<ITimesheet[]>([])
  const [toggle, setToggle] = useState<boolean>(false)

  useEffect(() => {
    axios.get('/timesheets.json')
      .then((res) => {
        const filteredByIdRes = (res.data as ITimesheet[])
          .filter((item) => item.userId === userId)
          .sort(
            (a, b) =>
              new Date(b.startTime).getTime() - new Date(a.startTime).getTime()
          )

        setTimesheet(filteredByIdRes)
      })
      .catch(function (error) {
        if (error.response) {
          setError('Something was wrong!')
        }
      });
  }, [userId])


  const filterByDate = (currentToggle: boolean) => {
    setToggle(prevState => !prevState)
    setTimesheet(prevState => prevState.sort((a, b) => {
      return currentToggle
        ? new Date(b.startTime).getTime() - new Date(a.startTime).getTime()
        : new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
    }))
  }

  const value = useMemo(() => ({
    timesheet,
    userId,
    error,
    filterByDate,
    toggle
  }), [timesheet, userId, error, toggle])

  return (
    <TimesheetContext.Provider value={value}>
      {children}
    </TimesheetContext.Provider>
  );
};

export default TimesheetProvider;