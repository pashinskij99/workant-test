export const skipFields = (nameField: string, arrayFields: string[]) => {
  return !arrayFields.includes(nameField)
}