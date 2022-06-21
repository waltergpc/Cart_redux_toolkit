import React from 'react'
import { ChevronDown, ChevronUp } from '../icons'

const CartItem = ({ id, title, price, img, amount }) => {
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button type='button' className='remove-btn'>
          remove
        </button>
      </div>
      <div>
        <button type='button' className='amount-btn'>
          <ChevronUp />
        </button>
        <button type='button' className='amount-btn'>
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}

export default CartItem
