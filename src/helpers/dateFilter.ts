import { Item } from "../types/Item"

export const getCurrentMonth = () => {
  let now = new Date()
  return `${now.getFullYear()}-${now.getMonth() + 1}`
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  let [year, month] = date.split('-')
  let newList: Item[] = []

  for (let i in list) {
    if (
      list[i].date.getFullYear() === parseInt(year) &&
      list[i].date.getMonth() + 1 === parseInt(month)
    ) {
      newList.push(list[i])
    }
  }

  return newList
}

export const formatDate = (date: Date) => {
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`
}

const addZeroToDate = (number: number): string => (
  number < 10 ? `0${number}` : `${number}`
)

export const formatCurrentMonth = (currentMonth: string): string => {
  let [year, month] = currentMonth.split('-')
  let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  return `${months[parseInt(month) - 1]} de ${year}`
}