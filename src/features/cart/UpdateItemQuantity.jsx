import { Button } from '@/components/ui/button'
import { Minus, Plus } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseItemQuantity, getCurrentQuantityById, increseItemQuantity } from './cartSlice'

const UpdateItemQuantity = ({ pizzaId }) => {
    const currentQuantity = useSelector(getCurrentQuantityById(pizzaId))
    const dispatch=useDispatch()
  return (
      <div className='space-x-2'>
          <Button variant="outline" className="rounded-full" size="sm"
              onClick={() => dispatch(decreaseItemQuantity(pizzaId))}><Minus className='h-4 w-4' /></Button>
          <span className='text-sm font-medium '>{currentQuantity}</span>
          <Button variant="outline" className="rounded-full" size="sm"
              onClick={() => dispatch(increseItemQuantity(pizzaId))}><Plus className='h-4 w-4' /></Button>
      </div>
  )
}

export default UpdateItemQuantity