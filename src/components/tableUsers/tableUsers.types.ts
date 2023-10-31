export interface IDepartament {
  id: string
  title: string
  managerId: string
}

export interface IAvatar {
  link: string
}

export interface IManager {
  id: string
  firstName: string
  lastName: string
  archivedAt: string | null
  email: string
  phone: string
  position: string
  avatar: IAvatar | null
}

export interface ITableUsersData {
  id: string
  firstName: string
  lastName: string
  email: string
  position: string
  phone: string
  roleId: number
  managerId: string
  address: string | null
  postalCode: string | null
  city: string
  country: string | null
  subDepartment: string | null
  manager: IManager
  avatar: IAvatar | null
  department: IDepartament
  group: string | null
  division: string | null
}

export type UserFieldsTypes =
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'position'
  | 'phone'
  | 'postalCode'
  | 'city'
  | 'address'
