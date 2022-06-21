import React from 'react'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart)
  const dispatch = useDispatch()

  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>Your Bag</h2>
          <h4 className='empty-cart'>Your cart is currently empty</h4>
        </header>
      </section>
    )
  }

  return (
    <section className='cart'>
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          type='button'
          className='btn clear-btn'
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
