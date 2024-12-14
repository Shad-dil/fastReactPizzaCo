import { Button } from '@/components/ui/button'
import { useDispatch } from 'react-redux'
import { deleteItem } from './cartSlice'

const DeleteItem = ({pizzaId,children}) => {
    const dispatch=useDispatch()
  return (
    <Button size="sm" variant="destructive" className="rounded-full" onClick={()=>dispatch(deleteItem(pizzaId))}>{children}</Button>
  )
}

export default DeleteItem