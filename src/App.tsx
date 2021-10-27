import { useEffect, useState } from 'react';

import * as C from './App.styles';

import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { items } from './data/items';
import { Item } from './types/Item';
import InfoArea from './components/InfoArea';
import { categories } from './data/categories';
import { InputArea } from './components/InputArea';

const App: React.FC = () => {
  const [list, setList] = useState(items)
  const [filterList, setFilterList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(() => {
    let incomeCount = 0
    let expenseCount = 0

    for (let i in filterList) {
      if (categories[filterList[i].category].expense) {
        expenseCount += filterList[i].value
      } else {
        incomeCount += filterList[i].value
      }
    }
    setIncome(incomeCount)
    setExpense(expenseCount)

  }, [filterList])

  useEffect(() => {
    setFilterList(filterListByMonth(list, currentMonth))
  }, [currentMonth, list])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  const handleAddItem = (newItem: Item) => {
    setList([...list, newItem])
  }
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema de Finanças</C.HeaderText>
      </C.Header>
      <C.Body>

        <InfoArea
          currentMonth={currentMonth}
          handleMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        <InputArea onAdd={handleAddItem} />

        <TableArea list={filterList} />

      </C.Body>
    </C.Container>
  )
}

export default App;