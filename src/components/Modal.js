import React from 'react'
import { useDispatch } from 'react-redux'
import { closeModal } from '../features/modal/modalSlice'
import { clearCart } from '../features/cart/cartSlice'

const Modal = () => {
  const dispatch = useDispatch()

  const handleConfirm = () => {
    dispatch(clearCart())
    dispatch(closeModal())
  }
  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>Remove all items from the shopping cart?</h4>
        <div className='btn-container'>
          <button
            type='button'
            className='btn confirm-btn'
            onClick={handleConfirm}
          >
            Confirm
          </button>
          <button
            type='button'
            className='btn clear-btn'
            onClick={() => dispatch(closeModal())}
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Modal
