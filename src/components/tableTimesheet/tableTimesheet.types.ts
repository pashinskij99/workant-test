export interface ITimesheet {
  id: string
  assessment: number
  breakMinutes: number
  minutes: number
  startTime: string
  endTime: string
  note: string | null
  status: string
  locationChecked: boolean
  approvalPersonId: string | null
  userId: string
  companyId: string
}

export type TimesheetFieldsTypes = keyof ITimesheet
