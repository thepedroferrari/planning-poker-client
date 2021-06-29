import { TError } from "types/error"

export const getErrorsForField = (errors: TError[], field: string) => {
  const fieldErrors = errors.filter((err) => err.field === field)

  const errorMessages = fieldErrors.map((err) => err.message)

  return errorMessages.join(". ")
}
