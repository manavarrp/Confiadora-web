import dayjs from 'dayjs'

export const getDateFormat = (date, format = 'DD-MM-YYYY') => {
  return dayjs(date).format(format) // display
}
