import * as C from './styles';

interface Props {
  title: string
  value: number
  color?: string
}

export const ResumeItem: React.FC<Props> = ({ title, value, color }) => {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Value color={color}>R$ {value.toFixed(2)}</C.Value>
    </C.Container>
  )
}