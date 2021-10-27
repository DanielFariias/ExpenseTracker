import * as C from './styles';

import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';
import { Item } from '../../types/Item';

interface Props {
  item: Item
}

const TableItem: React.FC<Props> = ({ item }) => {
  const { date, category, title, value } = item
  return (
    <C.Container>
      <C.TableColumn>{formatDate(date)}</C.TableColumn>

      <C.TableColumn>
        <C.Category color={categories[category].color}>
          {categories[category].title}
        </C.Category>
      </C.TableColumn>

      <C.TableColumn>{title}</C.TableColumn>

      <C.TableColumn>
        <C.Value color={categories[category].expense ? 'red' : 'green'}>
          R$ {value}
        </C.Value>

      </C.TableColumn>

    </C.Container>
  )
}

export default TableItem;